function formatMultipleStrings(array) {
  let s = '';
  array.forEach((v, index) => {
    if (index) {
      s += `, ${v.name}`;
    } else {
      s += `${v.name}`;
    }

    return s;
  }, '');
  return s;
}

export default formatMultipleStrings;
