export const maskNumber = (status, number, cvv) => {
  let newNumberChunk;
  let newNumber = number;
  if (cvv) {
    if (status) {
      newNumber = '***';
    }
  } else {
    newNumberChunk = number.match(/.{1,4}/g);
    newNumber = newNumberChunk.join('  ');
    if (status) {
      newNumber = '****  ****  ****  ' + newNumberChunk[3];
    }
  }

  return newNumber;
};

export const maskAmountWithComma = number => {
  return new Intl.NumberFormat('en-IN', {maximumSignificantDigits: 3}).format(
    number,
  );
};
