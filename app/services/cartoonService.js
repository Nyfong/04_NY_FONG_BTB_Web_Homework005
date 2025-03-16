export const getAllCartoon = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cartoon`);
  const data = await res.json();
  return data.payload;
};
export const getCartoonById = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cartoon/${id}`);
  const data = await res.json();
  return data.payload;
};

export const searchByTitle = async (paramSearch) => {
  // https://nextjs-homework005.vercel.app/api/book?search=how do you live?
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/cartoon?search=${paramSearch}`
  );
  const data = await res.json();
  return data.payload;
};
