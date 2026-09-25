# Data Structure - Final (พอร์ทัลรวบรวมบทเรียนโครงสร้างข้อมูล)

ศูนย์รวมบทเรียน สรุปเนื้อหา และระบบจำลองการทำงานของอัลกอริทึม (Interactive Algorithm Simulations) สำหรับเตรียมความพร้อมการสอบปลายภาควิชา **Data Structures (โครงสร้างข้อมูล)** — มหาวิทยาลัยขอนแก่น (KKU)

---

## 🌟 จุดเด่นของโปรเจกต์ (Features)

- 🧭 **รวมศูนย์ทุกบทเรียนไว้ในที่เดียว (Central Portal):** เข้าถึงเว็บไซต์จำลองและสรุปเนื้อหาของแต่ละบทได้ทันทีเพียงคลิกเดียว
- 🎨 **ดีไซน์สวยงามและทันสมัย (Modern Academic UI):** โทนสีเขียวพาสเทลและขาว (Pastel Green & White) สะอาดตา อ่านง่าย สบายตา
- 🌓 **รองรับโหมดมืด / โหมดสว่าง (Light & Dark Theme):** สลับธีมได้ทันใจ พร้อมบันทึกค่าที่เลือกลง `localStorage` และป้องกันหน้าจอกระพริบ (Anti-flicker)
- 🔍 **ระบบค้นหาบทเรียนทันใจ (Instant Search & Filter):** ค้นหาด้วยชื่อบทเรียน หัวข้อ หรือหมายเลขบทได้แบบ Real-time
- 📱 **รองรับทุกขนาดหน้าจอ (Fully Responsive):** ใช้งานได้ลื่นไหลทั้งบนคอมพิวเตอร์ แท็บเล็ต และสมาร์ตโฟน
- ⚡ **น้ำหนักเบาและโหลดเร็ว (Lightweight):** พัฒนาด้วย Vanilla HTML, CSS และ JavaScript ไม่พึ่งพา Framework หรือไลบรารีภายนอกที่หนักเครื่อง
- ♿ **ใส่ใจการเข้าถึง (Accessibility):** รองรับการใช้งานผ่านคีย์บอร์ด, มี Skip Link, Focus Indicator ที่ชัดเจน และรองรับ `prefers-reduced-motion`

---

## 📚 รายชื่อบทเรียนและลิงก์เว็บไซต์ (Chapters & Study Websites)

| บทที่ | ชื่อบทเรียน (Chapter Title) | รายละเอียดเนื้อหาโดยย่อ | ลิงก์เข้าสู่บทเรียน |
| :--- | :--- | :--- | :--- |
| **Chapter 8** | **Searching Algorithm** | เรียนรู้การค้นหาข้อมูลด้วย Linear Search, Binary Search และอัลกอริทึมการค้นหาอื่น ๆ พร้อมการจำลองขั้นตอนแบบ Interactive | [เข้าสู่บทเรียน Ch 8](https://searching-algorithm.vercel.app/) |
| **Chapter 9** | **Priority Queues** | ทบทวนโครงสร้างข้อมูล Priority Queue, Heap และการทำงานของคิวตามลำดับความสำคัญ | [เข้าสู่บทเรียน Ch 9](https://priority-queue-tau.vercel.app/) |
| **Chapter 10** | **Hashing** | เรียนรู้ Hash Function, การแก้ปัญหาการชนกัน (Collision Resolution) และการจัดการ Hash Table | [เข้าสู่บทเรียน Ch 10](https://hashing-eta-two.vercel.app/) |
| **Chapter 11** | **Graph** | ทำความเข้าใจ Graph Representation, DFS, BFS, Minimum Spanning Tree (Prim, Kruskal) และ Shortest Path (Dijkstra) | [เข้าสู่บทเรียน Ch 11](https://graph-brown-psi.vercel.app/) |

---

## 📁 โครงสร้างไฟล์โปรเจกต์ (Project Structure)

```text
Data Structure- Final/
├── index.html       # หน้าหลักของพอร์ทัล โครงสร้าง Semantic HTML และ Meta tags
├── styles.css       # ชุดตกแต่ง CSS, ตัวแปรสี (CSS Variables), Responsive Grid และ Animations
├── script.js        # สคริปต์สลับธีม (Light/Dark Mode) และระบบค้นหาบทเรียน
└── README.md        # เอกสารอธิบายรายละเอียดโปรเจกต์ (ภาษาไทย)
```

---

## 🚀 วิธีการเปิดใช้งาน (How to Run Locally)

เนื่องจากโปรเจกต์นี้เป็น Pure HTML/CSS/JS คุณสามารถเปิดใช้งานได้ง่าย ๆ ดังนี้:

### วิธีที่ 1: เปิดไฟล์โดยตรง
ดับเบิลคลิกที่ไฟล์ [index.html](file:///d:/Kim_Yr.2/Data%20Structure-%20Final/index.html) เพื่อเปิดผ่านเว็บเบราว์เซอร์ใดก็ได้ (Chrome, Edge, Safari, Firefox)

### วิธีที่ 2: รันผ่าน Local Server (เช่น VS Code Live Server หรือ Node.js)
```bash
# ตัวอย่าง: ใช้ npx serve
npx serve .

# หรือใช้ Python Simple HTTP Server
python -m http.server 8080
```
จากนั้นเปิดเบราว์เซอร์ไปที่ `http://localhost:8080`

---

## 🛠️ เทคโนโลยีที่ใช้ (Tech Stack)

- **HTML5:** Semantic Elements สำหรับโครงสร้างเว็บที่ถูกต้องตามมาตรฐาน
- **CSS3:** Custom Properties (CSS Variables), Flexbox, Grid Layout, Responsive Media Queries
- **JavaScript (ES6+):** Vanilla JS สำหรับจัดการ Event, DOM Manipulation และ `localStorage`
- **Google Fonts:**
  - *Plus Jakarta Sans* (หัวข้อภาษาอังกฤษและ UI)
  - *Sarabun* (ข้อความและเนื้อหาภาษาไทย)
  - *JetBrains Mono* (Badge และตัวเลขบท)

---

## 📄 ลิขสิทธิ์และจัดทำโดย (Credits)
จัดทำขึ้นเพื่อการศึกษาและการเตรียมสอบปลายภาควิชา Data Structures & Algorithms · มหาวิทยาลัยขอนแก่น (KKU)
