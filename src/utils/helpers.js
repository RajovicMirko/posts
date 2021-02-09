export const generateClassFromObject = (object) => {
  return Object.keys(object)
    .filter((key) => !!object[key])
    .join(" ");
};
