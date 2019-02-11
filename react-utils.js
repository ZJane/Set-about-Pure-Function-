
//补零 from ant-design-pro
//测试用例 '0',9，'9',09,'09',10,100,'0110'
export function fixedZero(val) {
  return val * 1 < 10 ? `0${val}` : val;
}
//补零 owner
export function fixedZero(val) {
  return val * 1 < 10 && val.toString().length<2? `0${val}` : `${val}`;
}

