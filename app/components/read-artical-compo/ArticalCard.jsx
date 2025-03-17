import { Card, CardHeader, CardBody } from "@heroui/react";
import tag from "../../assets/tag.png";
import Image from "next/image";
import eye from "../../assets/eye.png";
import Link from "next/link";
import { getBookById } from "@/app/services/bookService";
import { getCartoonById } from "@/app/services/cartoonService";
import NotFound from "@/app/not-found";
import BreadCrumbComponent from "../common/BreadCrumb";
export default async function ArticalCard({ id, name }) {
  const data =
    name == "book-categories"
      ? await getBookById(id)
      : await getCartoonById(id);

  console.log(data?.book_author ?? "null");
  return (
    <>
      {/* component */}
      {/* This is an example component */}
      {(name === "book-categories" || name === "old-school-cartoon") &&
      data != null ? (
        <main className="bg-[#F5F7F8] min-h-screen h-fit  ">
          <section className="relative max-w-5xl flex flex-col  h-auto   mx-auto   ">
            <div className="pb-[140px] pt-[50px]">
              <BreadCrumbComponent
                backurl={name}
                title={data?.book_title ?? data.ct_title}
              />
            </div>
            <div className="absolute right-10 top-10">
              <Link href={""}>
                <div className="flex items-center justify-center  ">
                  <div className="overflow-hidden  h-[400px]  bg-red-400 cursor-pointer rounded-xl relative group shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] ">
                    <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                      <div>
                        <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                          <div className="font-bold">
                            {data?.book_author ?? data.ct_creator}
                          </div>

                          <div className="opacity-60 text-sm ">
                            <p>{data?.book_title ?? data.ct_title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      alt=""
                      className="object-cover w-full h-full  group-hover:scale-110 transition duration-300 ease-in-out"
                      src={data.image}
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-col gap-2 rounded-3xl  bg-white px-10 pt-[190px] pb-[50px]">
              {/* 1 */}
              <div className="flex flex-col gap-2">
                {/* title */}
                <p className="font-bold text-2xl">
                  {data?.book_title ?? data.ct_title}{" "}
                </p>
                {/* author */}
                <p className="text-[#087E8B]">
                  by <b>{data?.book_author ?? data.ct_creator}</b>
                </p>
              </div>
              <div className=" flex gap-2 items-center text-[#087E8B]">
                <span>
                  {data?.view_count != null ? (
                    <Image
                      src={eye}
                      alt={data?.book_title ?? data.ct_title}
                      height={15}
                      width={15}
                    />
                  ) : (
                    ""
                  )}
                  {/* eye */}
                </span>
                <span className="font-bold">
                  {data?.view_count != null ? `${data?.view_count} times` : ""}
                </span>
                <span>{data?.view_count != null ? "|" : ""}</span>
                <span className="font-bold">
                  {data?.view_count != null
                    ? data?.published_year.split("-")[0]
                    : ""}
                </span>
              </div>
              {/* 2 */}
              <div className="flex flex-col-2">
                {/* title */}
                <p>{data?.description ?? data.ct_description}</p>
              </div>
            </div>
          </section>
        </main>
      ) : (
        <NotFound />
      )}
    </>
  );
}
