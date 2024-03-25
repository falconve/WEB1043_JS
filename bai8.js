// DOM
// Cho file HTML sau xác định các node
// Xác định các node cha, node anh, em
// Xác định text node, attribute node

// Query trong DOM
// Lấy ra thuộc tính id của thẻ html
let eleId = document.getElementById("kt_aside"); // Trả về thẻ HTML có id là kt_aside

// Lấy ra thuộc tính class của thẻ html
let eleClass = document.getElementsByClassName("kt_aside");

// Sử dụng querySelector để lấy ra 1 element
let ElemQueryId = document.querySelector("#kt_aside"); // Với id thì thêm #
let ElemQueryClass = document.querySelector(".kt_aside"); // Với class thì thêm .

// Select từ class/id/tag cha xuống con
let elemt = document.querySelector("#reg_pages_msg > a");

// Để lấy ra tất cả thẻ
// Sử dụng querySelectorAll để lấy ra tất cả element
let divElement = document.querySelectorAll("div");
