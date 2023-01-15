import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default async function logout(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  if (method === "POST") {
    res.setHeader(
      "Set-Cookie",
      serialize(process.env.JWT_COOKIE, "", {
        maxAge: -1,
        path: "/",
      })
    );
    res.status(200);
    res.end();
  } else {
    res.status(402);
    res.end();
  }
}
