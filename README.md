## ขั้นตอนการติดตั้งเพื่อทดสอบ

**ตรวจสอบให้แน่ใจว่าคอมพิวเตอร์ของคุณมี Node.js ติดตั้งอยู่**

### 1. ติดตั้ง MongoDB (เวอร์ชัน default)
### 2. Clone repository นี้:
   ```bash
   git clone git@github.com:GaiKT/transaction-broadcasting.git
   # หรือ
   git clone https://github.com/GaiKT/transaction-broadcasting.git
   ```
### 3. เข้าไปที่โฟลเดอร์ client และ server และติดตั้ง dependencies ด้วยคำสั่ง:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```
### 4. เริ่มต้น server ด้วยคำสั่ง:
   ```bash
   npm run start
   ```
### 5. เริ่มต้น client ด้วยคำสั่ง:
   ```bash
   npm run dev
   ```
   Have Fun!
   
   ## Ports
   - MongoDB: localhost:27017
   - Server: localhost:5000
   - Client: localhost:3000
   
   ## Application Architecture
   
   ### Frontend
   - Next.js: ใช้ JavaScript เพราะว่าโค้ดจะมีความยืดหยุ่นมากกว่า TypeScript และสามารถเปลี่ยน type ได้ง่าย เหมาะสำหรับการทำ UI components
   ### Backend
   - NestJS: ใช้ TypeScript เพื่อควบคุม type ของข้อมูลที่จะเข้า database ได้ง่าย
   - MongoDB: NoSQL database ใช้สำหรับเก็บข้อความหรือบทความได้ง่าย
   
   ### ในฐานข้อมูลจะมี 3 documents หลัก ๆ คือ:
   1. users: สำหรับเก็บข้อมูลของผู้ใช้แต่ละคน
   2. posts: สำหรับเก็บข้อมูลของโพสต์ ซึ่งมีการเชื่อมโยงกับ userId
   3.  comments: สำหรับเก็บความคิดเห็นทั้งหมด มี fields ที่เชื่อมโยงกันดังนี้:
       - post_id: ระบุว่าเป็นความคิดเห็นของโพสต์ไหน
       - user_id: ระบุว่าเป็นความคิดเห็นของผู้ใช้คนไหน
   ### Libraries Used
   1. TailwindCSS: สำหรับการสไตล์ สามารถทำงานได้เร็วยิ่งขึ้น
   2. DaisyUI: เป็น library ของ TailwindCSS เพื่อลดเวลาการทำงานกับ components ที่ใช้เวลานานในการสร้าง
   3. FontAwesome: ใช้สำหรับ icons components
   4. Axios: ใช้ fetch data จาก REST API
   5. date-fns: ใช้สำหรับคำนวณเวลาจาก datetime
   6. react-toastify: ใช้จัดการ error messages ต่าง ๆ
