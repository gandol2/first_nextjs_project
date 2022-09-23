import Link from "next/link";
import { useRouter } from "next/router";
import { cls } from "../libs/utils";

export default function NavBar() {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <nav>
      <ul className="flex bg-slate-400 justify-around">
        <li>
          <Link href="/">
            <a
              className={cls(
                router.pathname === "/"
                  ? "bg-slate-800 text-white rounded-lg px-3"
                  : ""
              )}
            >
              홈
            </a>
          </Link>
        </li>
        <li>
          <Link href="/counter">
            <a
              className={cls(
                router.pathname === "/counter"
                  ? "bg-slate-800 text-white rounded-lg px-3"
                  : ""
              )}
            >
              카운터
            </a>
          </Link>
        </li>
        <li>
          <Link href="/todo">
            <a
              className={cls(
                router.pathname === "/todo"
                  ? "bg-slate-800 text-white rounded-lg px-3"
                  : ""
              )}
            >
              ToDo List
            </a>
          </Link>
        </li>
        <li>
          <Link href="/users">
            <a
              className={cls(
                router.pathname === "/users"
                  ? "bg-slate-800 text-white rounded-lg px-3"
                  : ""
              )}
            >
              사용자목록
            </a>
          </Link>
        </li>
        <li>
          <Link href="/users/ssr">
            <a
              className={cls(
                router.pathname === "/users/ssr"
                  ? "bg-slate-800 text-white rounded-lg px-3"
                  : ""
              )}
            >
              사용자목록(SSR)
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a
              className={cls(
                router.pathname === "/about"
                  ? "bg-slate-800 text-white rounded-lg px-3"
                  : ""
              )}
            >
              개발자소개
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
