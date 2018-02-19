/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let obj = {};
  preferences.forEach((elem,i) => {
      obj[i + 1] = elem; 
  })
  let result = 0;
  for(key in obj){
    if (obj[key] == key){
      delete obj[key];
    }  
  }

  for(key in obj){
    if (obj[obj[obj[key]]] == key){
      delete obj[obj[obj[key]]];
	    delete obj[obj[key]];
      delete obj[key];
      result++;
    }  
  }
  return result;
};
