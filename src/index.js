module.exports = function check(str, bracketsConfig) {
  str = str.split("");
  let result = "";
  
  // if(str.length % 2 != 0) return false;
  bracketsConfig.forEach((item, index, arr) => {
    // console.log(str);
    if(str.includes(item[0]) && str.includes(item[1])) {
      
      str.splice(str.indexOf(item[0]), 1);
      str.splice(str.indexOf(item[1]), 1);
      // console.log(str);
      // return;
    }
  }
  );
  if(!str.length){
    return true
  }
  return false;
}


// function check(str, bracketsConfig) {
//   str = str.split("");
//   let result = "";
  
//   if(str.length % 2 != 0) return false;
//   bracketsConfig.forEach((item, index, arr) => {
//     // console.log(str);
//     if(str.includes(item[0]) && str.includes(item[1])) {
      
//       str.splice(str.indexOf(item[0]), 1);
//       str.splice(str.indexOf(item[1]), 1);
//       // console.log(str);
//       // return;
//     }
//   }
//   );
//   if(!str.length){
//     return true
//   }
//   return false;
// }

// console.log(check('[(])', [ ['(', ')'], ['[', ']'] ]));
