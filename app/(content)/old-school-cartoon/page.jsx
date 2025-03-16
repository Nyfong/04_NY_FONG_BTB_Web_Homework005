import React from "react";
import { ButtonHomepage } from "@/app/components/common/Button";
import SearchBar from "@/app/components/common/SearchBar";
import Filter from "@/app/components/common/Filter";
import { HomeCardBook } from "@/app/components/bookcompo/CardBook";
import CardCartoon from "@/app/components/cartooncompo/CardCartoon";
export default function BookCategories() {
  return (
    <section className="grid-cols-1 px-10">
      <div className="py-5">
        <SearchBar />
      </div>
      <div className="rounded-2xl bg-white h-auto py-5 flex flex-col ">
        <div className="p-5 flex justify-between">
          <ButtonHomepage data={"Old School Cartoon"} />
          <Filter />
        </div>

        {/* Add book list or other content here */}
        <div className="h-screen scrollbar-hidden  overflow-y-scroll">
          <CardCartoon />
        </div>
      </div>
    </section>
  );
}
