import { Button } from "@heroui/react";
import Test from "./components/Alert";
import { HomeSideBar } from "./components/common/SideBar";
import SeachBar from "./components/common/SearchBar";
import { ButtonHomepage } from "./components/common/Button";
import HomepageCard from "./components/common/Cards";
export default function Home() {
  const poster = [
    "https://i.pinimg.com/736x/4d/21/14/4d211462c27efe90a1662b8dbee77149.jpg",
    "https://i.pinimg.com/736x/bb/95/1d/bb951d0eb11fe6c5fbbe647f771de6bb.jpg",
    "",
  ];
  return (
    <>
      <section className="grid-cols-1 px-10  ">
        <div className="py-5">
          <SeachBar />
        </div>
        {/* under */}
        <div className="rounded-2xl  h-auto py-5 flex flex-col bg-white">
          <div className="p-5  flex justify-between">
            <ButtonHomepage data={"Homepage"} />
          </div>
          <div className="flex justify-center gap-4   p-5 rounded">
            <HomepageCard tagName={"Book"} poster={poster[0]} />
            <HomepageCard tagName={"Cartoon"} poster={poster[1]} />
          </div>
        </div>
      </section>
    </>
  );
}
