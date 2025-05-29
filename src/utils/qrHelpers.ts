export function updateGradientOffset(
  newArr: { offset: number; color: string }[]
) {
  const step = newArr.length > 1 ? 1 / (newArr.length - 1) : 0;
  return newArr.map((el, i) => ({
    ...el,
    offset: 0 + step * i,
  }));
}
