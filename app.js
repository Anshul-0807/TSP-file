////////////////-----------------LEARN TYPESCRIPT-------------------/////////////////////
//  narrowing
function printId(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printId("hello");
// slice function via unions
function getFirstThree(x) {
    return x.slice(0, 3);
}
// console.log(getFirstThree("hello"));
console.log(getFirstThree([1, 2, 3, 4, 5]));
