export const checkName = input => {
  const pattern = new RegExp(
    `^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$`
  );
  return pattern.test(input);
};

export const checkPhone = input => {
  const pattern =
    /^\+?\d{1,9}?[ .\s]?(?:\d{5,})?[ .\s]?\d{1,4}[ .\s]?\d{1,4}[ .\s]?\d{1,9}/;
  return pattern.test(input);
};
