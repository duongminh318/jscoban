// Hàm nhập mảng các số từ bàn phím
function nhapMang(array, n) {
    for (var i = 1; i <= n; i++) {
        var el = prompt('Nhập phần tử thứ ' + i);
        array.push(el);
    }
}

// Hàm nhân 3 giá trị mỗi phần tử trong mảng (dùng map)
function triple(array) {
    return array.map(function (el) {
        return el *= 3;
    });
    // var newArr = [];
    // for (const el of array) {
    //     newArr.push(el * 3);
    // }
    // return newArr;
}

// tính tổng các phần tử trong mảng (dùng reduce)
function sumArray(array) {
    return array.reduce(function (total, el) {
        return total + el;
    }, 0);
}

// Hàm xuất mảng ra màn hình console
function xuatMang(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

var arNum = [];
// goi hàm nhập 1 mảng
nhapMang(arNum, 2);

// gọi hàm nhân 3 giá trị mỗi phần tử trong mảng
arNum = triple(arNum);

// gọi hàm xuất mảng
xuatMang(arNum);

// gọi hàm tính tổng các phần tử trong mảng
console.log(sumArray(arNum));