export const toPersianNum = (num: string | number): string => {
  const numbers: string[] = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return `${num}`.replace(/[0-9]/g, word => numbers[+word]);
}

export const toEnglishNum = (num: string): string | null => {

  const id: { [key: string]: string } = {
    '۰': '0',
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9',
  }
  return num ? num.toString().replace(/[^0-9.]/g, function (w: string): string {
    return id[w] || w
  }) : null
}

export const addCommaSeperator = (num: string | number): string => {
  const str: string[] = num.toString().split(".");
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return str.join(".");
}
