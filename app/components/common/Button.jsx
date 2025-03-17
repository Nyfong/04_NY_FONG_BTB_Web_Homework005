import { Button } from "@heroui/react";
import Link from "next/link";
export function ButtonHomepage({
  data,
  searchCategory,
  allBookCat,
  allCartoonCat,
}) {
  console.log("ppp", allCartoonCat);
  console.log("adasdas", allBookCat);
  return (
    <div className="flex gap-4 items-center">
      <Button size="md" className="bg-gray-200 text-sm text-teal-500">
        {allBookCat?.[searchCategory - 1]?.book_cate_name ??
          allCartoonCat?.[searchCategory - 1]?.cartoon_genre ??
          data}
      </Button>
    </div>
  );
}

export function ReadArticalButton({ id, name, title }) {
  // Construct the URL with query parameters
  const href = `/read-full-artical/${id}?type=book&name=${name.replace(
    / /g,
    "+"
  )}&title=${title.replace(/ /g, "+")}`;
  return (
    <div className="flex flex-wrap gap-4 items-center ">
      <Link href={href}>
        <Button className="bg-[#BFD7EA] rounded-full">READ FULL ARTICLE</Button>
      </Link>
    </div>
  );
}
