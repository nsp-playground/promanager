import React from "react";
import { cookies } from "next/headers";
import { getUserFromCookie } from "../lib/auth";
import delay from "../lib/delay";
import Image from "next/image";
import Link from "next/link";

const getUser = async () => {
  // await delay(2000);
  const user = await getUserFromCookie(cookies());
  return user;
};

const Greeting = async ({ handleClick = () => {} }) => {
  const user = await getUser();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl text-gray-400 font-bold mb-2">
        Hello, {user?.firstName || "Stranger"}!
      </h1>
      <Link
        className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        href="/home"
      >
        Today&rsquo;s Schedule
      </Link>
      {/* <Image
        className="float-right h-24 w-24 rounded-full mr-6"
        src="/assets/img/lazy-people-relax-procrastination-concept.jpg"
        alt="Lazy People Relax"
        width={200}
        height={200}
      /> */}
    </div>
  );
};

export default Greeting;
