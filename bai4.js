// [KIỂU DỮ LIỆU ARRAY]

// cách khai báo 1 mảng
let arrList = ["Tuan Anh", 18, "FPT POLY", "Hai Phong"];

// lấy ra độ dài của mảng
arrList.length;

// lấy ra phần tử đầu tiên
arrList[0];

// Lấy ra phần tử cuối cùng
arrList[arrList.length - 1];

// Thay đổi phần tử trong mảng
arrList[0] = "Anh";

//  Method trong array

// Thêm phần tử vào cuối mảng
studentList.push("Hung", "An");

// Thêm phần tử vào đầu mảng
studentList.unshift("Quang", "Kien");

// Xoá phần tử cuối mảng
studentList.pop("Kien");

// Xoá phần tử đầu mảng
studentList.shift("Hung");

// Xoá và thêm vào giữa mảng
studentList.splice(1, 0, "Yen"); // Từ vị trí số 1, không xoá phần tử nào, thêm phần tử Yen vào bên trái

studentList.splice(1, 1, "Yen"); // Từ vị trí số 1, xoá phần tử, thêm phần tử Yen vào bên trái

// nối 2 mảng
let arrList1 = [1, 2, 3, 1];
let arrList2 = [4, 5, 6];

console.log(arrList1.concat(arrList2)); // [1, 2, 3, 4, 5, 6]

// [tìm kiếm phần tử đầu tiên trong mảng]
arrList1.indexOf(2); // kết quả: 1 (1 là vị trí của phần tử). Nếu kết quả là -1 tức là không tìm thấy

// [tìm kiếm phần tử cuối cùng trong mảng]
arrList1.lastIndexOf(2); // kết quả: 3 (3 là vị trí của phần tử). Nếu kết quả là -1 tức là không tìm thấy

// MATH

// Math.max nó sẽ lấy ra giá trị lớn nhất trong dãy truyền vào
console.log(Math.max(12, 99, 1, 0, 100, 5000));

// Math.min nó sẽ lấy ra giá trị lớn nhất trong dãy truyền vào
console.log(Math.min(12, 99, 1, 0, 100, 5000));

// Math.sqrt dùng để tìm căn bậc hai của 1 số
console.log(Math.sqrt(25));

// Math.pow dùng để tìm luỹ thừa của 1 số
console.log(Math.pow(4, 2));

// Math.round: Nếu sau dấu phẩy là .5 .6 .7 .8 thì sẽ làm tròn lên
// Nếu sau dấu phẩy là .4 .3 .2 .1 làm tròn xuống
console.log(Math.round(5.4));

// Math.floor làm tròn xuống
console.log(Math.floor(5.9)); // Kết quả: 5

// Math.ceil làm tròn lên
console.log(Math.ceil(5.1)); // Kết quả: 6

// Toán tử NOT ký hiệu !
console.log(!true); // false
console.log(!false); // true

// Toán tử &&
let a = 5;
let b = 10;
console.log(a == 5 && b == 10); // true

// Toán tử ||
let c = 9;
let d = 20;
console.log(c == 9 || d < 0); // true
