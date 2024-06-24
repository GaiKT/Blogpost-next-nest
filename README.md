ขั้นตอนการติดตั้งเพื่อทดสอบ
makesure ว่า computer ของคุณมี node อยู่

1. ติดตั้ง default mongodb 
2. clone this repositrories
3. cd เข้าไปใน folder client และ server npm install ให้เรียบร้อย
4. start server ด้วยคำสั่ง npm run start
5. start client ด้วยคสั่ง npm run dev
6. enjoy

--- Port ----
mododb = localhost:27017
server = localhost:5000
client = localhost:3000

application architecture
frontend  
next.js ที่ใช้ javascript เพราะว่า code จะมีความ flexible มากกว่า typescript เปลี่ยน tpye ได้ง่ายเหมาะสำหรับการทำ ui component มากกว่า

backend 
nest.ts ใช้ typescript เพื่อควบคุม type ของข้อมูลต่างๆที่จะเข้า database ได้ง่าย
mongobd เป็น nosql database ใช้สำหรับเก็บ ข้อความหรือบทความได้ง่าย

ใน database จะมี  3 document หลักๆ คือ
1. users สำหรับเก็บข้อมูล user แต่ละคน
2. posts สำหรับเก็บข้อมูล post มี ref กับ userId
3. comments สำหรับเก็บ comments ทั้งหมด field ที่ ref กันมีดังนี้
   post_id ไว้ระบุว่าเป็น comment ของ post ไหน
   user_id ไว้ระบุว่า user คนไหนเป็นคน comment
   
libraries used
tailwindcss สำหรับ style สามารถทำงานได้เร็วยิ่งขึ้น
daisiui เป็น libraies ของ tailwindcss เพื่อลดเวลาการทำงานกับ component ที่ต้องใช้เวลาเยอะในการสร้าง
fortawesome ใช้เพื่อใช้ icon component
axios fetch data จาก restAPI
date-fns เพื่อคำนวนเวลาจาก datetime
react-toastif ใช้จัดการ error ต่างๆ
