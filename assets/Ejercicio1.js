

let array = [1, 2, 6, 7, 9, 12];


let even = array.filter(function (x) {

    return (x % 2) !== 0;

}).reduce(function (suma, x) {

    return suma + x


});


console.log(even)
