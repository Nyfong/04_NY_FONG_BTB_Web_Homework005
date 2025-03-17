"use server";
export const getAllBook = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book`);
  const data = await res.json();
  return data.payload;
};
export const getBookById = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book/${id}`);
  const data = await res.json();
  return data.payload;
};
export const getAllBookCategory = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book_category`);
  const data = await res.json();
  return data.payload;
};
//https://nextjs-homework005.vercel.app/api/book?query=10
export const getAllBookCategoryById = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/book?query=${id}`
  );
  const data = await res.json();
  return data.payload;
};
export const searchByTitle = async (paramSearch) => {
  // https://nextjs-homework005.vercel.app/api/book?search=how do you live?
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/book?search=${paramSearch}`
  );
  const data = await res.json();
  return data;
};
