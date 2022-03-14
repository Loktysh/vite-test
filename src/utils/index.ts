export const fetchProduct = async (key: string) => {
  const URL = `http://pricecheckerapp.herokuapp.com/products?page=1&query=${key}`;
  const response: Response = await fetch(URL);
  const result = await response.json();
  return result;
};
