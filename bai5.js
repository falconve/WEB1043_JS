// //[ IF / ELSE IF / ELSE ]

// // Nhập vào 3 điêm của môn Toán, Văn và Anh tính điểm trung bình của 3 môn
// // Nếu điểm >= 9 xếp loại xuất sắc
// // Nếu điểm từ 7 tới 9 xếp loại giỏi
// // Nếu điểm từ 6 tới  6.9 xếp loại khá
// // Nếu điểm từ 5 tới 5.9 xếp loại trung bình
// // Còn lại là yếu

// // Nếu dùng prompt để lấy dữ liệu nhập vào từ người dùng thì phải dùng
// // ParseFloat hoặc ParseInt để convert kiểu string sang number
// // rồi mới thực hiện tính toán
// let diemToan = prompt(`toan:`); // string 5
// let diemVan = prompt(`van:`); // string 6
// let diemAnh = prompt(`anh:`); // string 7
// // '5' + '6' + '7' => '567' / 3
// let diemTB =
//   (parseFloat(diemToan) + parseFloat(diemVan) + parseFloat(diemAnh)) / 3;

// if (diemTB >= 9) {
//   console.log(`Xuat Sac`);
// } else if (diemTB >= 7 && diemTB < 9) {
//   console.log(`Gioi`);
// } else if (diemTB >= 6 && diemTB < 7) {
//   console.log(`Kha`);
// } else if (diemTB >= 5 && diemTB < 6) {
//   console.log(`TB`);
// } else {
//   console.log(`yeu`);
// }

// // [TOÁN TỬ 3 NGÔI]: sử dụng thay if else nếu trong if else xử lý logic ngắn
// let age = 18;
// age > 18 ? "da du tuoi" : "chua du tuoi";

// [SWITCH/CASE]
// Cho người dùng nhập vào qua hộp thoại prompt
// Nếu người dùng nhập vào số 2, 3, 4 ... thì hiển thị các thứ trong tuần tương ứng
// Nếu người dùng không nhập gì hoặc nhập sai thì hiển thị không hợp lệ
// let menu = prompt("Nhập số vào đi: ...");
// switch (menu) {
//   case "1":
//     alert("Bạn đã nhập vào số 1");
//     break;
//   case "2":
//     alert("Bạn đã nhập vào số 2");
//     break;
//   case "3":
//     alert("Bạn đã nhập vào số 3");
//     break;
//   default:
//     alert("Bạn không nhập gì cả..");
//     break;
// }

// [VÒNG LẶP]

// [WHILE]
// let i = 0;
// let total = 0;
// while (i <= 10) {
//   total += i;
//   i++;
// }
// console.log(total);

// // [DO .. WHILE]
// // Sử dụng vòng lặp do .. while và prompt để yêu cầu người dùng
// // nhập vào số lớn hơn 10. Nếu người dùng nhập vào số nhỏ hơn 10
// // thì hộp thoại prompt sẽ hiển thị lại cho người dùng nhập vào
// let userInput;
// do {
//   userInput = parseInt(prompt("Nhap gia tri:"));
// } while (userInput <= 10);

// alert(`ok`);

// [VÒNG LẶP FOR]
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
