function removeDups(array){
    const myMap = new Map();
for (const num of array) {
myMap.set(num, true);
} 
const uniques = [];
for (const key of myMap.keys()) {
uniques.push(key);
}
return uniques;
}