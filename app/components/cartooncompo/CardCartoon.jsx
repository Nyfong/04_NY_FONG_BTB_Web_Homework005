import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import eye from "../../assets/book.png";
import { getAllCartoon, searchByTitle } from "@/app/services/cartoonService";
import Link from "next/link";
export default async function CardCartoon({ searchQuery = "" }) {
  // Fetch all cartoons or filter by search query
  const list = searchQuery
    ? await searchByTitle(searchQuery)
    : await getAllCartoon();

  return (
    <div className="gap-5 sm:gap-10 grid grid-cols-2 sm:grid-cols-3 pb-[300px]">
      {list.length > 0 ? (
        list.map((item, index) => (
          <Link
            key={index}
            href={`/read-full-artical/${
              item.id
            }?type=cartoon&name=${"old-school-cartoon".replace(
              / /g,
              "+"
            )}&title=${item.ct_title.replace(/ /g, "+")}`}
          >
            <Card isPressable shadow="sm" className="w-full">
              <CardBody className="overflow-visible p-0">
                <Image
                  alt={item.ct_title}
                  className="w-full object-cover h-[140px]"
                  radius="lg"
                  shadow="sm"
                  src={item.image}
                  width="100%"
                  height="330px"
                />
              </CardBody>
              <CardFooter className="flex flex-col">
                <div className="p-2 w-full flex items-start justify-between">
                  <p className="text-lg font-bold">{item.ct_title}</p>
                </div>

                <div className="w-full flex justify-between items-center">
                  <Image
                    src={eye}
                    height="20"
                    width="20"
                    alt="views"
                    className="mr-1"
                  />
                  <p>{item.published_year.split("-")[0]}</p>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))
      ) : (
        <div className="col-span-full text-center">No cartoons found.</div>
      )}
    </div>
  );
}
