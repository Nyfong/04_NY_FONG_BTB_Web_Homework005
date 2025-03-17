import { ReadArticalButton } from "../common/Button";
import { getAllBook } from "@/app/services/bookService";

export const HomeCardBook = ({ allBook, searchCategory, catgId }) => {
  const data = [...allBook];
  console.log(searchCategory);
  // Filter categories based on searchCategory
  const catData = [...catgId];

  // return (
  //   <div>
  //     {catData.filter((el) => el.book_cate_id == searchCategory)
  //       ? ""
  //       : ("f")}
  //   </div>
  // );
  return (
    <>
      <div className="grid gap-4   pb-[150px] grid-cols-2 mt-20">
        {searchCategory != null
          ? catData
              .filter((el) => el.book_cate_id == searchCategory)
              .map((el) => (
                <div key={el.id} className="h-[350px] px-5 flex items-center">
                  <div className="relative flex w-full   bg-[#F5F7F8]  -mt-6 h-auto md:h-[200px] flex-col rounded-xl   bg-clip-border text-gray-700 shadow-md">
                    <div className="absolute mx-4 px-3 w-[140px] xl:w-[160px] bottom-10  -mt-6 h-[300px] overflow-hidden rounded-xl   text-white   ">
                      <img
                        src={el.image}
                        className="h-[80%] w-full object-cover rounded-xl"
                        alt=""
                      />
                      <div className="   absolute bottom-0 left-1/2 transform -translate-x-1/2 ">
                        <ReadArticalButton
                          id={el.id}
                          name={"book-categories"}
                          title={el.book_title}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-6 h-full">
                      {/* read artical */}

                      <div className="md:col-span-2 "></div>
                      <div className="col-span-2 md:col-span-4 px-6 md:px-8 flex flex-col gap-3 justify-center">
                        <p className="font-bold text-md">{el.book_title}</p>
                        <p className="text-gray-300 text-sm text-[#0B3954]">
                          The novel's enduring themes of self-discovery and
                          ethical living continue to resonate, prompting
                          reflections on how one should live a meaningful life.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
          : data.map((el) => (
              <div key={el.id} className="h-[350px] px-5 flex items-center">
                <div className="relative flex w-full   bg-[#F5F7F8]  -mt-6 h-auto md:h-[200px] flex-col rounded-xl   bg-clip-border text-gray-700 shadow-md">
                  <div className="absolute mx-4 px-3 w-[140px] xl:w-[160px] bottom-10  -mt-6 h-[300px] overflow-hidden rounded-xl   text-white   ">
                    <img
                      src={el.image}
                      className="h-[80%] w-full object-cover rounded-xl"
                      alt=""
                    />
                    <div className="   absolute bottom-0 left-1/2 transform -translate-x-1/2 ">
                      <ReadArticalButton
                        id={el.id}
                        name={"book-categories"}
                        title={el.book_title}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 md:grid-cols-6 h-full">
                    {/* read artical */}

                    <div className="md:col-span-2 "></div>
                    <div className="col-span-2 md:col-span-4 px-6 md:px-8 flex flex-col gap-3 justify-center">
                      <p className="font-bold text-md">{el.book_title}</p>
                      <p className="text-gray-300 text-sm text-[#0B3954]">
                        The novel's enduring themes of self-discovery and
                        ethical living continue to resonate, prompting
                        reflections on how one should live a meaningful life.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};
