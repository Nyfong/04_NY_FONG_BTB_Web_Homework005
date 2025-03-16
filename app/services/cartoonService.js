export const getAllCartoon = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cartoon`);
  const data = await res.json();
  return data.payload;
};
