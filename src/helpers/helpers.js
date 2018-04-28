export function getTotalSum(array) {
  const total = array
    .map(i => i.value)
    .reduce((sum, current) => sum + current, 0);
  return total;
}


export function getSumByType(array, category) {
  const filteredArr = array.filter(i => i.category === category);
  return getTotalSum(filteredArr);
}

// TODO rewrite this stupid functions
export function getDataSetByTypes(array) {
  const typesSum = [];
  typesSum.push(getSumByType(array, 'entertainment'));
  typesSum.push(getSumByType(array, 'food'));
  typesSum.push(getSumByType(array, 'shopping'));
  typesSum.push(getSumByType(array, 'others'));
  return typesSum;
}

export function getDataSetByCategory(array) {
  const categorySum = [];
  const incomeSum = getTotalSum(array.filter(i => i.category === 'income'));
  const costsSum = getTotalSum(array.filter(i => i.category !== 'income'));
  categorySum.push(incomeSum);
  categorySum.push(Math.abs(costsSum));
  return categorySum;
}
