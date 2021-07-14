const range = (len:number)=>{
  const arr = [];
  for(let i = 0;i<len;i++){
    arr.push(i)
  }
  return arr
}
export default function makeData(...lens:number[]){
  const makeDataLevel = (depth:number = 0):any=>{
    const len = lens[depth];
    return range(len);
  }
};
