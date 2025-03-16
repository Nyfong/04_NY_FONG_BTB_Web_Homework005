"use client";
import React from "react";
import { ButtonHomepage } from "../common/Button";
import SeachBar from "../common/SearchBar";
import { useState } from "react";
import Filter from "../common/Filter";
import { HomeCardBook } from "@/app/components/bookcompo/CardBook";
//client
export default function BookCategories() {
  const [searchValue, setSearchValue] = useState("");
  const getSearch = (value) => {
    setSearchValue(value);
  };
  console.log(searchValue);
  return (
    <>
      <section className="grid-cols-1 px-10">
        <div className="py-5">
          <SeachBar onSearch={getSearch} />
        </div>
        <div className="rounded-2xl bg-white h-auto py-5 flex flex-col ">
          <div className="p-5 flex justify-between">
            <ButtonHomepage data={"Old School Cartoon"} />
            <Filter />
          </div>
        </div>
      </section>
    </>
  );
}
