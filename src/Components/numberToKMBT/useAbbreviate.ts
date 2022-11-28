const useAbbreviate = (number: any) => {
  const roundDecimal = (number: any, limit: number, status: string) => {
    if (number % limit === 0) {
      return number / limit + status;
    } else {
      let reminder = number % limit;
      const generateOutput = (abbrevatedRemainder: number | string) => {
        return (number - reminder) / limit + abbrevatedRemainder.toString().slice(1) + status;
      };
      let decimalValueStr = ("." + reminder).replace(/0/g, "");
      if (decimalValueStr.length !== 2) {
        let decimalValue = parseFloat(decimalValueStr);
        decimalValueStr = decimalValue.toString();
        if (decimalValueStr.slice(0, -1) === decimalValue.toFixed(decimalValueStr.length - 3)) {
          return generateOutput(decimalValue.toFixed(2));
        } else {
          return generateOutput(decimalValue.toFixed(decimalValueStr.length - 3));
        }
      } else {
        return generateOutput(decimalValueStr);
      }
    }
  };

  if (number >= 1000000000000) {
    return roundDecimal(number, 1000000000000, "T");
  } else if (number >= 1000000000) {
    return roundDecimal(number, 1000000000, "B");
  } else if (number >= 1000000) {
    return roundDecimal(number, 1000000, "M");
  } else if (number >= 1000) {
    return roundDecimal(number, 1000, "K");
  } else {
    return number;
  }
};

export default useAbbreviate;
