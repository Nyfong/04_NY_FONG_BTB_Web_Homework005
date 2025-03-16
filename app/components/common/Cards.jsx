import { Card, CardHeader, CardBody } from "@heroui/react";
import tag from "../../assets/tag.png";
import Image from "next/image";
import Link from "next/link";
export default function HomepageCard({ tagName, poster, url }) {
  return (
    <>
      {/* component */}
      {/* This is an example component */}
      <Link href={url}>
        <div className="flex items-center justify-center  ">
          <div className="overflow-hidden  h-[400px]  bg-red-400 cursor-pointer rounded-xl relative group shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] ">
            <div className="absolute top-5  left-5 bg-white py-2 px-5 rounded-full z-50 flex gap-2 items-center">
              <Image src={tag} width={10} height={10} alt={tagName} />
              <span className="text-sm text-teal-500 font-bold">{tagName}</span>
            </div>
            <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
              <div>
                <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                  <div className="font-bold">Jessie Watsica</div>
                  <div className="opacity-60 text-sm ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Distinctio dolores error iure, perferendis sequi totam. Ad
                    aliquam aperiam atque deleniti dolor dolorem enim esse et
                    in, inventore itaque, pariatur reprehenderit.
                  </div>
                </div>
              </div>
            </div>
            <img
              alt=""
              className="object-cover w-full h-full  group-hover:scale-110 transition duration-300 ease-in-out"
              src={poster}
            />
          </div>
        </div>
      </Link>
    </>
  );
}
