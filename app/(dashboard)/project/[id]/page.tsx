import { cookies } from "next/headers";
import React from "react";
import Header from "../../../../components/Header";
import ProjectDetails from "../../../../components/ProjectDetails";
import { getUserFromCookie } from "../../../../lib/auth";
import { db } from "../../../../lib/db";

const getData = async ({ projectId }: any) => {
  const user = await getUserFromCookie(cookies());
  const project = await db.project.findFirst({
    where: { id: projectId, ownerId: user?.id },
    include: {
      tasks: true,
    },
  });
  return { project };
};

const Project = async ({ params }: any) => {
  const { project } = await getData({ projectId: params?.id });

  console.log({ currentProject: project });

  return (
    <>
      <Header />
      <main className="main">
        <ProjectDetails {...project} />
      </main>
    </>
  );
};

export default Project;
