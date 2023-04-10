const family = ['Peter', 'Ann', 'Alex', 'Linda'];
function showFamily(arr) {
    let res = "Семья состоит из:";
    if (arr.length < 1) {
        return 'Семья пуста';
    }
    if (arr.length > 0) {
        for (let key in arr) {
            res += ` ${arr[key]}`;
            }
        return res;    
}
}
console.log(showFamily(family));



const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
function standardizeStrings(arr) {
    let res = "";    
    for (let key in arr) {
            console.log(`${arr[key].toLowerCase()}`);
            }
    /* console.log(res.trim().toLowerCase()); */
   /*  for (let key in arr) {
            res += ` ${arr[key]}`;
            } */
    /* res = res.toLowerCase().trim(); */
    /* console.log(res.trim().toLowerCase()); */
    /* return res;     */
}
console.log(standardizeStrings(favoriteCities));


