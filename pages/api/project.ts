import { jwtVerify } from "jose";
import { NextApiRequest, NextApiResponse } from "next";
// import { validateJWT } from "../../lib/auth";
import { db } from "../../lib/db";
// import { serialize } from "cookie";
// import { comparePassword, createJWT } from "../../lib/auth";
// import { db } from "../../lib/db";

const validateJWT = async (jwt: string) => {
  const { payload } = await jwtVerify(
    jwt,
    new TextEncoder().encode(process.env.JWT_SECRET)
  );

  return payload.payload as any;
};

export default async function project(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  console.log({ body });

  if (method === "POST") {
    const user = await validateJWT(req.cookies[process.env.JWT_COOKIE]);
    console.log({ user });

    try {
      await db.project.create({
        data: {
          name: body?.name,
          ownerId: user?.id,
        },
      });
    } catch (e) {
      throw e;
    }

    res.status(201);
    res.end();
  } else {
    res.status(402);
    res.end();
  }
}
