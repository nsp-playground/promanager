import { jwtVerify } from "jose";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

// same copy over fn as inside `lib/auth.ts`, but since that file
// utilizes`bcrypt`(which is not supported by edge layer, we can't
// just import it from that file)
export const validateJWT = async (jwt: string) => {
  console.log({ jwt });
  const { payload } = await jwtVerify(
    jwt,
    new TextEncoder().encode(process.env.JWT_SECRET)
  );
  console.log(">>>>>", { payload });

  return payload.payload as any;
};

export default async function middleware(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { nextUrl, cookies } = req as any;
  const { pathname } = nextUrl;

  if (
    // list of file paths with unrestricted access or public files
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/signin") ||
    pathname.startsWith("/signup") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const jwt = cookies.get(process.env.JWT_COOKIE);

  if (!jwt) {
    nextUrl.pathname = "/signin";
    return NextResponse.redirect(nextUrl);
  }

  try {
    await validateJWT(jwt.value);
  } catch (e) {
    nextUrl.pathname = "/signin";
    return NextResponse.redirect(nextUrl);
  }
}
