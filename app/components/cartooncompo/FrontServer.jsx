"use client";
import React, { useState } from "react";
import CardCartoon from "./CardCartoon";
import BookCategories from "./FrontpageClient";

export default function FrontServerDisplay() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <section className="grid-cols-1 px-10">
      <BookCategories onSearch={handleSearch} />
      <div className="h-screen scrollbar-hidden overflow-y-scroll">
        <CardCartoon searchValue={searchValue} />
      </div>
    </section>
  );
}
