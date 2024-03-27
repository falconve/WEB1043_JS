// DOM
// Cho file HTML sau xác định các node
// Xác định các node cha, node anh, em
// Xác định text node, attribute node

// Query trong DOM
// Truy xuất vào element có id là kt_aside
let eleId = document.getElementById("kt_aside"); // Trả về thẻ HTML có id là kt_aside

// Truy xuất vào element có class kt_aside
let eleClass = document.getElementsByClassName("kt_aside");

// Sử dụng querySelector để lấy ra 1 element
let ElemQueryId = document.querySelector("#kt_aside"); // Với id thì thêm #
let ElemQueryClass = document.querySelector(".kt_aside"); // Với class thì thêm .

// Select từ class/id/tag cha xuống con
let elemt = document.querySelector("#reg_pages_msg > a");

// Để lấy ra tất cả thẻ
// Sử dụng querySelectorAll để lấy ra tất cả thẻ
let divElement = document.querySelectorAll("div");
