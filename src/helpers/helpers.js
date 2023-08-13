export const formatNumber = (value, includeDecimal = true, decimal = 2) => {
  if (includeDecimal) {
    value = parseFloat(value).toFixed(decimal);
  }
  value += "";
  const list = value.split(".");
  const prefix = list[0].charAt(0) === "-" ? "-" : "";
  let num = prefix ? list[0].slice(1) : list[0];
  let result = "";
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  if (includeDecimal && parseInt(list[1]) > 0) {
    return `${prefix}${result}${list[1] ? `.${list[1]}` : ""}`;
  }

  return `${prefix}${result}`;
};
