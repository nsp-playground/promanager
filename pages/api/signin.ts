import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
import { comparePassword, createJWT } from "../../lib/auth";
import { db } from "../../lib/db";

export default async function signin(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  if (method === "POST") {
    const user = await db.user.findUnique({
      where: { email: body.email },
    });

    if (!user) {
      return res.status(401).json({
        error: "Invalid email",
      });
    }

    const isPasswordValid = comparePassword(body.password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        error: "Invalid password",
      });
    }

    const jwt = await createJWT(user);
    res.setHeader(
      "Set-Cookie",
      serialize(process.env.JWT_COOKIE as any, jwt, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      })
    );
    res.status(200);
    res.end();
  } else {
    res.status(402);
    res.end();
  }
}
