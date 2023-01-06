import currency from "currency.js";

export const formatValue = (value: string | any): string => {
  return currency(value, {
    symbol: "R$",
    decimal: ".",
    separator: ",",
  }).format();
};
export const getNumberValue = (value: string | any): number =>
  currency(value, {
    symbol: "",
    decimal: ",",
    separator: ".",
  }).value;
