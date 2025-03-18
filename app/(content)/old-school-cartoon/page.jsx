import PageDisplay from "@/app/components/cartooncompo/PageDisplay";
import {
  getAllBookCategory,
  getAllBookCategoryById,
} from "@/app/services/bookService";
import { getAllBook } from "@/app/services/bookService";
import { getAllCartoonCategoryById } from "@/app/services/cartoonService";
import {
  getAllCartoon,
  getAllCartoonCategory,
} from "@/app/services/cartoonService";
import { searchByTitleCartoon } from "@/app/services/bookService";
export default async function BookCategories({}) {
  const categoryBook = await getAllBookCategory();
  const categoryCartoon = await getAllCartoonCategory();
  const allCartoon = await getAllCartoon();
  const category = [categoryBook, categoryCartoon];
  const catgById = await getAllCartoonCategoryById(null);
  const searchapi = await searchByTitleCartoon(null);
  console.log("this is in the page cartoon : ", category);
  const data = "valid";
  return (
    <PageDisplay
      searchUrl={data}
      data={category}
      allCartoon={allCartoon}
      catgId={allCartoon}
      allCartoonCat={categoryCartoon}
      searchapi={searchapi}
    />
  );
}
