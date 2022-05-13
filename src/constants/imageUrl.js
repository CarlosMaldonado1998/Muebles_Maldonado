export default (path) => {
  const newPath = `${process.env.NEXT_PUBLIC_CLOUDDINARY_URL}/${path}`;
  return newPath;
};
