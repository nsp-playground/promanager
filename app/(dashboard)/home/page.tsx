import { cookies } from "next/headers";
import Link from "next/link";
import { Suspense } from "react";
import Greeting from "../../../components/Greeting";
import GreetingsSkeleton from "../../../components/GreetingSkeleton";
import Header from "../../../components/Header";
import ProjectCard from "../../../components/ProjectCard";
import Sidebar from "../../../components/Sidebar";
import TaskList from "../../../components/TaskList";
import { getUserFromCookie } from "../../../lib/auth";
import { db } from "../../../lib/db";
import AddProject from "../../../components/AddProject/AddProject";

const getData = async () => {
  const user = await getUserFromCookie(cookies());
  const projects = await db.project.findMany({
    where: {
      ownerId: user?.id,
    },
    include: {
      tasks: true,
    },
  });

  return { projects };
};

export default async function Home() {
  const { projects = [] } = await getData();
  console.log(JSON.stringify({ projects }, null, 2));
  const allTasks = projects
    .map((project) => project?.tasks || [])
    .reduce((fullList, tasks) => [...fullList, ...tasks], []);

  return (
    <>
      <Header />
      <main className="main flex space-x-2">
        <section className="my-2">
          <Sidebar />
        </section>
        <section className="flex-grow my-2 space-y-2">
          <Suspense fallback={<GreetingsSkeleton />}>
            <Greeting />
          </Suspense>

          <AddProject />

          <div
            style={{
              display: "grid",
              gridGap: "0.5rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            }}
          >
            {projects.map((project: any) => (
              <div key={project.id} className="">
                <Link className="w-full" href={`/project/${project.id}`}>
                  <ProjectCard project={project} />
                </Link>
              </div>
            ))}
          </div>

          <div>
            <TaskList tasks={allTasks} />
          </div>
        </section>
      </main>
    </>
  );
}
