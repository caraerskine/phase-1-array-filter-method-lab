// Code your solution here


function findMatching(names, name){

const result = names.filter(driver => driver.toUpperCase() === name.toUpperCase())
return result 
console.log(result);
}


function fuzzyMatch(nameNames, letters){
 
const result = nameNames.filter(driver => driver.slice(0, letters.length) === letters)
 return result
 console.log(result);
}

function matchName(nameNames, letters){
    const result = nameNames.filter(driver => driver.name === letters);
  return result
}