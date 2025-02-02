import Link from "next/link";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex gap-5 h-screen">
        <header className="bg-gray-500 py-4 px-6">
          <h1 className="text-2xl text-white">PostLayout</h1>

          <nav >
            <ul className="list-none">
              <li className="my-2">
                <Link href="/" className="text-white hover:text-gray-800">
                  Home
                </Link>
              </li>
              <li className="my-2">
                <Link href="/about" className="text-white hover:text-gray-800">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow">{children}</main>
      </div>
    </>
  );
}