const paramInput = {};

const useCase = [
  { response_name: "x", data: 10 },
  { response_name: "y", data: 1 },
  {
    response_name: "z",
    data: 100,
    result: ({ x, y }) => {
      console.log(x, y);
      return x.data / y.data;
    },
  },
];

function getPositions(stringVal, charVal1, charVal2) {
  let index1 = -1
  let index2 = -1
  for(let i=0 ; i< stringVal.length ;i++ ) {
    if (stringVal[i] == charVal1 && index1 == -1){
      index1 =i
    }
    else if (stringVal[i] == charVal2 && index1 != -1 && index2 == -1){
      index2 =i
      break
    }
  }
  return [index1,index2]
}

function getParamName (functionName){
  const funcToString = functionName.toString();
  const [index1,index2] = getPositions(funcToString, '{', '}')
  
  console.log(index1,index2,newString);
}

for (v of useCase) {
  if (v.response_name) {
    const key = v.response_name;
    paramInput[key] = {};
    paramInput[key].data = v.data * 10;
  }
  if (v.result) {
    
    getParamName(v.result)
    const result = v.result(paramInput);
    const key = v.response_name;
    paramInput[key].result = result;
  }
}

console.log(paramInput);
