import { Button } from "@heroui/react";

export function ButtonHomepage({ data }) {
  return (
    <div className="flex gap-4 items-center">
      {/* <Button size="sm">Small</Button> */}
      <Button size="md" className="bg-gray-200 text-sm text-teal-500">
        {data}
      </Button>
      {/* <Button size="lg">Large</Button> */}
    </div>
  );
}

export function ReadArticalButton() {
  return (
    <div className="flex flex-wrap gap-4 items-center ">
      <Button className="bg-[#BFD7EA] rounded-full">READ FULL ARTICLE</Button>
    </div>
  );
}
