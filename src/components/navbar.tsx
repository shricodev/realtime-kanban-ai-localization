import { ListTodo } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { LogoutBtn } from "@/components/logout-btn";
import { buttonVariants } from "@/components/ui/button";

export async function Navbar() {
  const session = await getServerSession();

  return (
    <nav className="flex items-center justify-between p-4 bg-white border-b border-gray-200 sticky top-0 z-50">
      <Link
        href={"/"}
        className="text-xl font-semibold hidden  text-gray-800 sm:flex items-center select-none"
      >
        <ListTodo size={30} className="mr-2 inline" />
        Kanban
      </Link>
      <div className="flex gap-4 ml-auto">
        {session ? (
          <LogoutBtn />
        ) : (
          <>
            <Link
              href="/login"
              className={buttonVariants({
                className:
                  "text-gray-600 text-lg px-3 py-2 rounded hover:bg-blue-50 hover:text-blue-700 transition",
                variant: "outline",
              })}
            >
              Login
            </Link>
            <Link
              href="/register"
              className={buttonVariants({
                className:
                  "text-gray-600 text-lg px-3 py-2 rounded hover:bg-blue-50 hover:text-blue-700 transition",
                variant: "outline",
              })}
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}