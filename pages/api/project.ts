import { NextApiRequest, NextApiResponse } from "next";
import { validateJWT } from "../../lib/auth";
import { db } from "../../lib/db";
// import { serialize } from "cookie";
// import { comparePassword, createJWT } from "../../lib/auth";
// import { db } from "../../lib/db";

export default async function project(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  if (method === "POST") {
    const user = await validateJWT(process.env.JWT_COOKIE);

    await db.project.create({
      data: {
        name: req?.body?.name,
        ownerId: user?.id,
      },
    });

    res.status(201);
    res.end();
  } else {
    res.status(402);
    res.end();
  }
}
