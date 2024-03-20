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

// Tạo 1 nút khi người dùng ấn vào sẽ hiên thị lên hộp thoại nhập chiều dài & chiều rộng
// Lưu chiều dài & chiều rộng vào object có tên hcn. Trong object sẽ có phương thức tính diện tích & chu vi
// b1: tạo 1 file html có thẻ button
// b2: tạo 1 function
// trong function có 1 biến lưu object
// trong object thì có: thuộc tính chiều dài & chiêu rộng. và 2 phương thúc tính diện tích & chu vi
//
