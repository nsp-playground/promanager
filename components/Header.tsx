import { cookies } from "next/headers";
import { getUserFromCookie } from "../lib/auth";
import LogoutButton from "./LogoutButton";

const getUser = async () => {
  // await delay(2000);
  const user = await getUserFromCookie(cookies());
  return user;
};

export default async function Header() {
  const user = await getUser();
  return (
    <header className="bg-white px-4 py-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <h1 className="text-2xl font-bold text-gray-900">Pagemanager</h1>
        <nav className="flex overflow-auto items-center font-bold text-gray-700">
          {!user && (
            <a className="px-3 py-2 rounded-lg hover:bg-gray-200" href="/">
              Home
            </a>
          )}

          {user && (
            <a className="px-3 py-2 rounded-lg hover:bg-gray-200" href="/home">
              Dashboard
            </a>
          )}
          {!user && (
            <a
              className="px-3 py-2 rounded-lg hover:bg-gray-200"
              href="/signin"
            >
              Login
            </a>
          )}

          {!user && (
            <a
              className="px-3 py-2 rounded-lg hover:bg-gray-200"
              href="/signup"
            >
              Register
            </a>
          )}

          {user ? <LogoutButton /> : null}
        </nav>
      </div>
    </header>
  );
}
