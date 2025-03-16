export const getAllBook = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book`);
  const data = await res.json();
  return data.payload;
};
