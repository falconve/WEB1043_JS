// Khai object (đối tượng)
// trong object  có cặp key value

let objList = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

// BT: khai báo 1 object gốm tên, cân nặng, tuổi của 1 con mèo
let dog = {
  dogName: "JavaScript",
  weight: 2.4,
  color: "brown",
  breed: "chihuahua",
  age: 3,
};

// Truy xuất thuộc tính của object
// Cách 1
console.log(dog["dogName"]);
// Cách 2
console.log(dog.dogName);

// Cập nhật giá trị trong obj
dog.dogName = "meo";
console.log(dog);

// taọ class như là 1 khuôn mẫu chung
function Cat(ten, tuoi, cannang) {
  this.ten = ten;
  this.tuoi = tuoi;
  this.cannang = cannang;
  this.keu = function () {
    return "la la";
  };
}

// Sử dụng từ khoá new để gọi class
let cat1 = new Cat("meo", 2, 3);
console.log(cat1);

// Dùng for in để lấy ra phần tử trong object
// Khai báo object
let objListNew = {
  ten: "xe mÁy AB",
  hang: "honda",
  mau: "trẮng",
};
// Lấy ra key trong obj
for (let obj in objListNew) {
  // Lấy ra key trong obj
  console.log(obj); // ten, hang, mau
}

for (let obj in objListNew) {
  // Lấy ra value trong obj
  console.log(objListNew[obj]); // xe máy AB, honda, trẮng
}

// Lấy ra cả key và value
for (let obj in objListNew) {
  console.log(`${obj} : ${objListNew[obj]}`);
}

// Cách truy xuất dữ liệu trong object và từ object truy xuất
// dữ liệu vào mảng
company = {
  companyName: "Healthy Candy",
  activities: [
    "food manufacturing",
    "improving kids' health",
    "manufacturing toys",
  ],
  yearOfEstablishment: 2021,
};

console.log(company.activities[1]); // improving kids' health
