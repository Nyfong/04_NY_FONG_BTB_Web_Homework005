import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import eye from "../../assets/book.png";
import { getAllCartoon } from "@/app/services/cartoonService";
export default async function CardCartoon() {
  const list = await getAllCartoon();
  return (
    <div className="gap-5 sm:gap-10 grid grid-cols-2 sm:grid-cols-3  pb-[300px]">
      {list.map((item, index) => (
        /* eslint-disable no-console */
        <Card key={index} isPressable shadow="sm">
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
          <CardFooter className=" flex flex-col">
            <div className=" p-2 w-full flex items-start justify-between">
              <p className="text-lg font-bold">{item.ct_title}</p>
            </div>

            <div className=" w-full flex justify-between items-center">
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
      ))}
    </div>
  );
}
