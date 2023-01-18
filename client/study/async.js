
import { isNumber, isObject } from "../lib/index.js";

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data:'성공',
  errorMessage: '알 수 없는 오류가 발생했습니다.'
}

export function delayP(options = {}){

  // defaultOptions

  let config = {...defaultOptions}
     
  
  if(isNumber(options)){
    config.timeout = options;
  }

  // 객체 합성  mixin
  if(isObject(options)){
    config = {...config,...options};
  }
  
  
  
  const {shouldReject,data,errorMessage,timeout} = config;
  
  
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage);
    }, timeout);
  })
}


export async function 라면끓이기(){
  try{
    await delayP()
    console.log('물 넣기');
    await delayP()
    console.log('스프 넣기');
    await delayP()
    console.log('면 넣기');
    throw new Error('에러 발생');
    await delayP()
    console.log('그릇에 담기');
  }catch(err){
    console.log(err);
  }
}

라면끓이기();