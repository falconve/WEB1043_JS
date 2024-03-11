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
