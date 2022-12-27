import currency from "currency.js";
export const formatValue = (value: any): string => {
  return currency(value, {
    // Adds space to the end of the symbol (Maybe not the best solution)
    symbol: "R$",
    decimal: ".",
    separator: ",",
  }).format();
};
