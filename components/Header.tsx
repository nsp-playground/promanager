export default function Header() {
  return (
    <header className="bg-white px-4 py-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Pagemanager</h1>
        <nav className="flex items-center font-bold text-gray-700">
          <a className="px-3 py-2 rounded-lg hover:bg-gray-200" href="/">
            Home
          </a>
          <a className="px-3 py-2 rounded-lg hover:bg-gray-200" href="/home">
            Dashboard
          </a>
          <a className="px-3 py-2 rounded-lg hover:bg-gray-200" href="/signin">
            Login
          </a>
          <a className="px-3 py-2 rounded-lg hover:bg-gray-200" href="/signup">
            Register
          </a>
          <a className="px-3 py-2 rounded-lg hover:bg-gray-200" href="/signup">
            Logout
          </a>
        </nav>
      </div>
    </header>
  );
}
