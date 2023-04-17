// var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
// var ARGUMENT_NAMES = /([^\s,]+)/g;
// function getParamNames(func) {
//   var fnStr = func.toString().replace(STRIP_COMMENTS, '');
//   var result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
//   if(result === null)
//      result = [];
//   return result;
// }

function getParamNames(myFunc) {
  const funcToString = myFunc.toString();
  let start = false;
  let end = false;
  let variablesString = "";
  for (let i = 0; i < funcToString.length; i++) {
    if (funcToString[i] == "}" && end == false) {
      index2 = i;
      break;
    }
    if (start == true && end == false) {
      variablesString += funcToString[i];
    }
    
    if (funcToString[i] == "{" && end == false) {
      start = true;
    }
    
  }
  if (variablesString) {
    const variableArr = variablesString.split(",");
    return variableArr.map((v) => v.trim());
  }
  return null;
}

module.exports = getParamNames;
