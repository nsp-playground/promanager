import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Organize Your Projects and Tasks
        </h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-white shadow-md rounded-lg p-8 h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Easily Create Tasks
              </h3>
              <p className="text-gray-700 mb-4">
                With Pagemanager, you can easily create tasks and assign them to
                team members or yourself.
              </p>
              <a
                className="inline-block py-2 px-4 bg-indigo-500 text-white font-bold rounded-full"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-white shadow-md rounded-lg p-8 h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Track Your Progress
              </h3>
              <p className="text-gray-700 mb-4">
                With Pagemanager, you can easily track your progress and see
                what tasks have been completed and what still needs to be done.
              </p>
              <a
                className="inline-block py-2 px-4 bg-indigo-500 text-white font-bold rounded-full"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
