// [HÀM - Function]

// Hàm cơ bản là hàm không có tham số truyền vào
function sayHello() {
  let name = prompt("Nhap vao ten cua ban: ");
  console.log(`Xin chao ${name}`);
}

// Hàm có tham số truyền vào
// Hàm tính tổng 2 số

// Khi khai báo hàm có giá trị truyền vào thì gọi là tham số
function tinhTong(x, y) {
  console.log(x + y);
}
// khi gọi hàm và truyền giá trị vào thì giá trị truyền vào gọi là đối số
tinhTong(1, 2);

// Viết 1 hàm có tham số truyền vào
// và in ra bảng cửu chương tương ứng
function inBangCuuChuong(x) {
  console.log(`Bang cuu chuong ${x} la`);
  for (let i = 1; i <= 10; i++) {
    // 5 x 1 = 5 , 5 x 2 = 10
    return `${x} * ${i} = ${x * i}`;
  }
}
inBangCuuChuong(2);

// Hàm trả về kết quả
function tester(para1, para2) {
  return para1 + " " + para2;
}
let arg1 = "argument 1";
let arg2 = "argument 2";
let t = tester(arg1, arg2);
console.log(t); // muốn xem kết quả của hàm có return thì sử dụng console.log

// biến cục bộ: là biến khai báo trong hàm và chỉ sử dụng ở trong hàm.
// Nếu sử dụng ngoài hàm thì sẽ báo undefined
function test() {
  let name = "tuan anh";
  console.log(name);
}

console.log(name); // undefined
test();

// biến toàn cục
let globalVar = "Tuan Anh";
console.log("Outside function:", globalVar); // Tuan Anh

function creatingNewScope(x) {
  console.log("Access to global vars inside function.", globalVar);
}

creatingNewScope("Tri Duc");
console.log("Still available:", globalVar); // kết quả Tuan Anh
