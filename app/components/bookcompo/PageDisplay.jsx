"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import { ButtonHomepage } from "@/app/components/common/Button";
import SearchBar from "@/app/components/common/SearchBar";
import FilterClient from "../filterclient/FilterClient";
import { HomeCardBook } from "@/app/components/bookcompo/CardBook";

export default function PageDisplay({
  allBook,
  searchUrl,
  data,
  catgId,
  allBookCat,
}) {
  const searchParams = useSearchParams();
  const search = searchParams.get("query");
  console.log("categ", catgId);
  return (
    <section className="grid-cols-1 px-10">
      <div className="py-5">
        <SearchBar />
      </div>
      <div className="rounded-2xl bg-white h-auto py-5 flex flex-col ">
        <div className="p-5 flex justify-between">
          <ButtonHomepage
            data={"All Books"}
            searchCategory={search}
            allBookCat={allBookCat}
          />
          <FilterClient category={data} searchUrl={searchUrl} />
        </div>

        {/* Add book list or other content here */}
        <div className="h-screen scrollbar-hidden  overflow-y-scroll">
          <HomeCardBook
            allBook={allBook}
            searchCategory={search}
            catgId={catgId}
          />
        </div>
      </div>
    </section>
  );
}
