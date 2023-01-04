import currency from "currency.js";

function useCurrency() {
  const formatValue = (value: string | any): string => {
    return currency(value, {
      symbol: "R$",
      decimal: ".",
      separator: ",",
    }).format();
  };
  const getNumberValue = (value: string | any): number =>
    currency(value, {
      symbol: "",
      decimal: ",",
      separator: ".",
    }).value;

  return {
    formatValue,
    getNumberValue,
  };
}

export default useCurrency;
