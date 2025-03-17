"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { ButtonHomepage } from "@/app/components/common/Button";
import SearchBar from "@/app/components/common/SearchBar";
// import Filter from "@/app/components/common/Filter";
import FilterClient from "../filterclient/FilterClient";
import CardCartoon from "./CardCartoon";

export default function PageDisplay({
  searchUrl,
  data,
  allCartoonCat,
  catgId,
  allCartoon,
}) {
  const searchParams = useSearchParams();
  const search = searchParams.get("query");
  console.log("object", allCartoonCat);
  //console.log("aaa",catgId);
  return (
    <section className="grid-cols-1 px-10">
      <div className="py-5">
        <SearchBar />
      </div>
      <div className="rounded-2xl bg-white h-auto py-5 flex flex-col ">
        <div className="p-5 flex justify-between">
          <ButtonHomepage
            data={"Old School Cartoon"}
            searchCategory={search}
            allCartoonCat={allCartoonCat}
          />
          <div className="">
            <FilterClient category={data} searchUrl={searchUrl} />
          </div>
        </div>

        {/* Add book list or other content here */}
        <div className="h-screen scrollbar-hidden  overflow-y-scroll">
          <CardCartoon
            allCartoon={allCartoon}
            searchCategory={search}
            catgId={catgId}
          />
        </div>
      </div>
    </section>
  );
}
