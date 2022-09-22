import { ProgressItem } from './ProgressBar';

export const createBarLine = (
  data: ProgressItem[],
  width: number,
  sum: number
) => {
  const barLine = [];
  const numOfBarLineItems = Math.ceil(width / 14);
  let dataItem = 0;
  const prevData = [];
  for (let i = 1; i <= numOfBarLineItems; i++) {
    const prevDataValue = prevData.reduce((acc, curr) => {
      return acc + curr.value;
    }, 0);
    if ((data[dataItem].value + prevDataValue) / sum < i / numOfBarLineItems) {
      if (data[dataItem + 1]) {
        prevData.push(data[dataItem]);
        dataItem++;
      }
    }
    if (data[dataItem].value > 0) barLine.push(data[dataItem]);
  }
  return barLine;
};
