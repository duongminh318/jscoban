// In các phần tử trong mảng, sử dụng 3 cách với 3 loại vòng lặp

var arNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// vòng lặp do..while
var i = 0;
do {
    console.log(arNumber[i]);
    i++;
} while (i < arNumber.length);

// vòng lặp for
for (var i = 0; i < arNumber.length; i++) {
    console.log(arNumber[i]);
}

// vòng lặp while
var j = 0;
while (j < arNumber.length) {
    console.log(arNumber[j]);
    j++;
}