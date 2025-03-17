import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import eye from "../../assets/book.png";

import Link from "next/link";
import { Playwrite_BE_VLG } from "next/font/google";
export default function CardCartoon({ allCartoon, searchCategory, catgId }) {
  // Fetch all cartoons or filter by search query
  const list = [...allCartoon];
  const catData = [...catgId];
  console.log("list", catData);
  console.log(searchCategory);

  // return (
  //   <div>
  //     {searchCategory != null
  //       ? catData
  //           .filter((el) => el.ct_genre_id == searchCategory)
  //           .map((el) => <p>aa</p>)
  //       : "a"}
  //   </div>
  // );

  return (
    <div className="gap-5 sm:gap-10 grid grid-cols-2 sm:grid-cols-4 pb-[300px]">
      {searchCategory != null
        ? catData
            .filter((el) => el.ct_genre_id == searchCategory)
            .map((item, index) => (
              <Link
                key={index}
                href={`/read-full-artical/${
                  item.id
                }?type=cartoon&name=${"old-school-cartoon".replace(
                  / /g,
                  "+"
                )}&title=${(item.ct_title || "").replace(/ /g, "+")}`}
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
                      {/* <p>{item.published_year.split("-")[0]}</p> */}
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))
        : list.map((item, index) => (
            <Link
              key={index}
              href={`/read-full-artical/${
                item.id
              }?type=cartoon&name=${"old-school-cartoon".replace(
                / /g,
                "+"
              )}&title=${(item.ct_title || "").replace(/ /g, "+")}`}
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
                    {/* <p>{item.published_year.split("-")[0]}</p> */}
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
    </div>
  );
}
