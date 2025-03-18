import React from "react";
import PageDisplay from "@/app/components/bookcompo/PageDisplay";
import { getAllBook } from "@/app/services/bookService";
import { getAllBookCategory } from "@/app/services/bookService";
import { getAllCartoonCategory } from "@/app/services/cartoonService";
import { getAllBookCategoryById } from "@/app/services/bookService";
export default async function BookCategories() {
  const categoryBook = await getAllBookCategory();
  const categoryCartoon = await getAllCartoonCategory();
  const catgById = await getAllBookCategoryById(null);
  const allBook = await getAllBook();
  let data;
  const category = [categoryBook, categoryCartoon];
  return (
    <PageDisplay
      searchUrl={data}
      data={category}
      allBook={allBook}
      catgId={allBook}
      allBookCat={categoryBook}
    />
  );
}
