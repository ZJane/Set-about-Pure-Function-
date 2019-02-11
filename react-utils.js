import moment from 'moment';
import React from 'react';
import nzh from 'nzh/cn';
import { parse, stringify } from 'qs';


//补零 from ant-design-pro
//测试用例 '0',9，'9',09,'09',10,100,'0110'
export function fixedZero(val) {
  return val * 1 < 10 ? `0${val}` : val;
}
//补零 owner
export function fixedZero(val) {
  return val * 1 < 10 && val.toString().length<2? `0${val}` : `${val}`;
}


//今日、本周、本月、全年的时间范围 不指定类型返回每年的时间范围 
function getTimeDistance(type) {
  if (type === "today") {
    return [moment().startOf('day'), moment().endOf('day')];
  }
  if (type === "week") {
    return [moment().startOf('week').add(1, 'day'), moment().endOf('week').add(1, 'day')];
  }
  if (type === "month") {
    return [moment().startOf('month'),moment().endOf('month')];
  }
  return [moment().startOf('year'), moment().endOf('year')];
}

