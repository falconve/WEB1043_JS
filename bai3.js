// Vị trí trong string(chuỗi) luôn luôn bắt đầu từ vị trí số 0

// Phương thức substring(start, end): lấy từ vị trí start tới vị trí end nhưng không bao gồm vị trí END

let myName = `Tuan Anh`;
console.log(myName.substring(0, 4)); // kết quả Tuan trong đó ví trị start là 0 vị trí end là 4

// VD: Dùng phương thức "substring" lấy ra từ cuối cùng của chuỗi dùng thuộc tính length trừ đi độ dài của từ cần lấy
let myString = `Tuan Anh dang o viet nam va dang rat vui luon`;

console.log(myString.substring(myString.length - 4)); // kết quả là từ luon

// Dùng phương thức concat để nối chuỗi
let text1 = "Hello";
let text2 = "World";
let result = text1.concat(" ", text2); // kết quả là Hello World

// Dùng phương thức toUpperCase để viết hoa
let textUppercase = "Hello Wolrd";
console.log(textUppercase.toUpperCase()); // kết quả là HELLO WORLD

// Dùng phương thức toUpperCase để viết thường
let textLowerCase = "HELLO WORLD";
console.log(textLowerCase.toLowerCase()); // kết quả là Hello Wolrd

// [KIỂU DỮ LIỆU NUMBER]

// Dùng phương thức isNaN để kiểm tra xem biến truyền vào là kiểu số hay chuỗi. (hàm isNaN sẽ tìm cách chuyển biến truyền vào thành số xem được không)
// Nếu là Chuỗi thì trả về TRUE
// Nếu là SỐ thì trả về FALSE

let num1 = `1.5`; // kiểu chuỗi
let text = "abc";

console.log(isNaN(num1)); // false
console.log(isNaN(text)); // true

// Dùng phương thức isInterger để kiểm tra số nguyên
let x = 3;
let str = "integer";
console.log(Number.isInteger(x)); // true
console.log(Number.isInteger(str)); //false

// Dùng phương thức toFixed để chỉ định giữ lại bao nhiêu số đằng sau dấu phẩy và làm tròn số đó
// Phương thức toFixed sẽ ép kiểu sang string
let num = 5.62;
let fixedNum = num.toFixed(1);
console.log(fixedNum);

// [KIỂU DỮ LIỆU BOOLEAN]
let bool = true;
let bool1 = false;

// Truthy & Falsy
// Truthy: là những giá trị khi chuyển đổi về boolean là true
// Falsy: là những giá trị khi chuyển đổi về boolean là false
// Các giá trị Falsy: 0, -0, 0n, '', null, undefined, false, NaN, document.all
// Các giá trị Truthy: ngoài các giá trị falsy còn lại là truthy

let age = 18;

if (age) {
  console.log(age);
} else {
  console.log("false");
}
