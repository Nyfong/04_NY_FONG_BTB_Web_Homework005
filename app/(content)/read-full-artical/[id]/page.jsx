import Test from "@/app/components/common/BreadCrumb";
import ArticalCard from "@/app/components/read-artical-compo/ArticalCard";
import React from "react";

export default async function bookDetails({ params, searchParams }) {
  const id = await params.id;
  const { name, title } = await searchParams;
  console.log("the id", name);

  return (
    <>
      <ArticalCard id={id} name={name} />
    </>
  );
}
