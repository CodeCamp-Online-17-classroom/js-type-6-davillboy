// write code here

typeof 'x';
typeof x;
typeof ``;
typeof Infinity;
typeof(100 / 0);
typeof(1 + '3');
typeof(1 * 'a');
typeof null;

'x' เป็น "string"
x เป็น "undefined" (ถ้าไม่มีการกำหนดค่าให้ตัวแปร x มาก่อน)
`` เป็น "string"
Infinity เป็น "number"
100 / 0 เป็น "number" (JavaScript จะคำนวณผลลัพธ์ของ Infinity ในรูปของ number)
1 + '3' เป็น "string" (การบวกกับ string จะเปลี่ยนตัวแปรอื่นๆ ให้กลายเป็น string)
1 * 'a' เป็น "number" (ผลลัพธ์คือ NaN ซึ่ง JavaScript จัดเก็บในรูปแบบ "number")
null เป็น "object" (นับเป็นข้อจำกัดหรือ "quirk" ของ JavaScript ที่ null ถูกตรวจจับว่าเป็น "object")
