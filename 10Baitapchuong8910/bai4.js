const danhSachQuanBai = [
    {
        id: 1,
        name: 'Ba bích', // Tên quân bài, ví dụ: Năm cơ, Sáu bích...
        exp: 3, //Hệ số quân bài (từ 1 đến 13)
        point: 1 // Điểm của quân bài (từ 1 đến 4)
    },
    {
        id: 2,
        name: 'Năm rô',
        exp: 5,
        point: 3
    },
    {
        id: 3,
        name: 'Bốn cơ',
        exp: 4,
        point: 4
    }
]

const menu = `1. Nhập 1 quân bài
2. Nhập mảng các quân bài
3. Sắp xếp tăng dần
4. Sắp xếp giảm dần
5. Xuất dữ liệu
6. Thoát

Nhập thao tác lựa chọn:`;

do {
    var input = prompt(menu);

    if (input == 1) {
        them1QuanBai();
        alert('Đã thêm thành công!');
    } else if (input == 2) {
        nhapMangQuanBai();
        alert('Đã thêm thành công!');
    } else if (input == 3) {
        sortASC();
        alert('Đã sắp xếp thành công!');
    } else if (input == 4) {
        sortDESC();
        alert('Đã sắp xếp thành công!');
    } else if (input == 5) {
        hienThi();
    } else {
        console.log('Goodbye!');
        break;
    }
} while (true);

// 1. Thêm 1 quân bài
function them1QuanBai() {
    var id = prompt('Nhập mã quân bài:');
    var name = prompt('Nhập tên quân bài:');
    var exp = prompt('Nhập hệ số:');
    var point = prompt('Nhập điểm: ');
    var quanBaiMoi = {
        id: id,
        name: name,
        exp: Number(exp),
        point: Number(point)
    }
    danhSachQuanBai.push(quanBaiMoi);
}

// 2. Nhập mảng quân bài
function nhapMangQuanBai() {
    var number = prompt('Nhập số lượng quân bài: ');
    for (let i = 1; i <= number; i++) {
        alert('Nhập thông tin cho quân bài thứ ' + i);
        var id = prompt('Nhập mã quân bài:');
        var name = prompt('Nhập tên quân bài:');
        var exp = prompt('Nhập hệ số:');
        var point = prompt('Nhập điểm: ');
        var quanBaiMoi = {
            id: id,
            name: name,
            exp: Number(exp),
            point: Number(point)
        }
        danhSachQuanBai.push(quanBaiMoi);
    }
}

// 3. Sắp xếp tăng dần
function sortASC() {
    var size = danhSachQuanBai.length;

    for (var i = 0; i < size - 1; i++) {
        for (var j = 0; j < size - i - 1; j++) {
            if (danhSachQuanBai[j].exp > danhSachQuanBai[j + 1].exp) {
                var temp = danhSachQuanBai[j];
                danhSachQuanBai[j] = danhSachQuanBai[j + 1];
                danhSachQuanBai[j + 1] = temp;
            }
        }
    }
}

// 4. Sắp xếp giảm dần
function sortDESC() {
    var size = danhSachQuanBai.length;

    for (var i = 0; i < size - 1; i++) {
        for (var j = 0; j < size - i - 1; j++) {
            if (danhSachQuanBai[j].exp < danhSachQuanBai[j + 1].exp) {
                var temp = danhSachQuanBai[j];
                danhSachQuanBai[j] = danhSachQuanBai[j + 1];
                danhSachQuanBai[j + 1] = temp;
            }
        }
    }
}

// 5. Hiển thị
function hienThi() {
    console.log('===DANH SÁCH QUÂN BÀI===');
    for (const el of danhSachQuanBai) {
        for (const key in el) {
            console.log(key + ": " + el[key]);
        }
        console.log("================");
    }
    // console.table(danhSachQuanBai);
}