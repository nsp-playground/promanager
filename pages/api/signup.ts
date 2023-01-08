import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
import { createJWT, hashPassword } from "../../lib/auth";
import { db } from "../../lib/db";

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  if (method === "POST") {
    const user = await db.user.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: await hashPassword(body.password),
      },
    });

    const jwt = await createJWT(user);

    res.setHeader(
      "Set-Cookie",
      serialize(process.env.JWT_COOKIE, jwt, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      })
    );

    res.status(201);
    res.end();
  } else {
    res.status(402);
    res.end();
  }
}
