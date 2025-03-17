// import { getAllBookCategory } from "@/app/services/bookService";
// import { getAllCartoonCategory } from "@/app/services/cartoonService";

//server
// import { getAllBookCategory } from "@/app/services/bookService";
// import { getAllCartoonCategory } from "@/app/services/cartoonService";
// import FilterClient from "../filterclient/FilterClient";
export default function Filter({ searchUrl, data }) {
  //const category = await getAllBookCategory();
  // const category =
  //   searchUrl != null
  //     ? await getAllCartoonCategory()
  //     : await getAllBookCategory();
  // console.log("this is the category", category);
  // console.log("this is the search url:", searchUrl);
  // const category = await getAllCartoonCategory();

  return <FilterClient category={data} />;
}
