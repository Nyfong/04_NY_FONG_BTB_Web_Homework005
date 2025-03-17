import { getAllBookCategory } from "@/app/services/bookService";
import { getAllCartoonCategory } from "@/app/services/cartoonService";
import Link from "next/link";
export default function FilterClient({ category, searchUrl }) {
  //console.log(category);
  const dataCategory = searchUrl != null ? category[1] : category[0];
  return (
    <div className="flex  w-[300px]">
      <div className="relative">
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
            <span className="text-sm font-medium"> Select a Category </span>
            <span className="transition group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </summary>
          <div className="z-50 group-open:absolute  group-open:start-0 group-open:top-auto group-open:mt-2  w-[250px]">
            <div className="w-auto  rounded-sm border border-gray-200 bg-white">
              <ul className="space-y-1 border-t border-gray-200  py-4 px-1 overflow-y-scroll h-[250px] scrollbar-hidden  ">
                {dataCategory.map((el, index) => (
                  <Link key={index} href={"?query=" + el.id}>
                    <li key={el.id} className="p-3 hover:bg-[#eee] text-xs">
                      {el?.book_cate_name ?? el.cartoon_genre}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
}
