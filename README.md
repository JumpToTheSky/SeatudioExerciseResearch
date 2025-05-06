### SeatudioExerciseResearch(6/5/2025) 
## BigInt trong Js
-BigInt là kiểu dữ liệu số nguyên với dung lượng `không có giới hạn cụ thể` (tuỳ theo bộ nhớ).
-BigInt `không tương thích` với hàm Math cũng như các toán tử trực tiếp.
-Khai báo biến BigInt: thêm `n` vào ở cuối chuỗi số hoặc sử dụng `BigInt()`.
-BigInt thường được sử dụng chỉ khi cần làm việc với các số nguyên `rất lớn` (lớn hơn 2^(53-1)).
-BigInt thường có tốc độ xử lý `chậm hơn nhiều` so với các số Number thông thường, đồng thời BigInt cũng `không có giá trị thập phân`. 
## IEEE 754 standard
-JavaScript sử dụng chuẩn IEEE 754 để biểu diễn số dấu phẩy động (`floating-point numbers`) dưới dạng các `bit nhị phân` trong bộ nhớ máy tính. Đây là một chuẩn quốc tế được sử dụng rộng rãi trong các hệ thống máy tính để đảm bảo tính nhất quán trong các phép tính số học dấu phẩy động.
-Định dạng này cung cấp:
`1 bit` dấu: Xác định số dương hay âm.
`11 bit` mũ: Biểu diễn lũy thừa của 2 (`có độ lệch`).
`52 bit` phần định trị (mantissa/significand): Biểu diễn các chữ số có nghĩa của số.
-Sai số làm tròn: 
Do số lượng bit hữu hạn để biểu diễn một số thực, nhiều số thập phân `không thể được biểu diễn chính xác dưới dạng nhị phân`. Điều này dẫn đến `sai số làm tròn` trong các phép tính. Đây là lý do tại sao `0.1 + 0.2` trong JavaScript thường không bằng `0.3` một cách tuyệt đối.
## Destructuring
# Khái niệm
Trong JavaScript, destructuring (hay destructure) là một cú pháp cho phép bạn `trích xuất giá trị` từ mảng hoặc object và gán chúng vào các biến một cách ngắn gọn, dễ đọc hơn.
# Lợi ích và nhược điểm
-Lợi ích:
Cú pháp ngắn gọn, dễ đọc.
Dễ dàng lấy dự liệu từ object hoặc array.
lấy biến trực tiếp trong đối số hàm.
Có thể tránh bị lỗi nếu giá trị không tồn tại bằng các đặt giá trị mặc định.
-Nhược điểm :
Khó đọc với người mới hoặc destructuring lồng nhau.
Cần đảm bảo biến có giá trị trước khi destructuring.
Dễ lỗi vị trí/thứ tự trong Array
Gán lại tham chiếu và thay đổi dữ liệu gốc ngoài ý muốn (JS không có tính đóng gói rõ ràng, ngoại trừ hàm freeze() object):
`const obj = { nested: { value: 10 } };`
`const { nested } = obj;`
`nested.value = 999;`
`console.log(obj.nested.value); // 999`
# Trường hợp đặc biệt : Destructuring một object B bên trong một object A
Kết quả sau khi destructuring sẽ tạo ra một object B mới nhưng vẫn sẽ reference về object A.
khi thay đổi một giá trị trong obj B sau khi được destructuring, giá trị của obj A sẽ thay đổi theo và ngược lại.
`const Animal = {`
`    Name: "Dog",`
`    details: {`
`      color: "blue",`
`      size: "large"`
`    }`
`  };`
  
`const { details} = Animal;`
  
`console.log(details.color); // Output: blue`
`console.log(details.size);  // Output: large`
  
`Animal.details.color = "red";`
`console.log(details.color); // Output: red ->ref` 
`details.color = "green";`
`console.log(Animal.details.color); // Output: green ->ref`