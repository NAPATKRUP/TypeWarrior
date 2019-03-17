const thailist = ['บัญชี', 'ถูกต้อง', 'เอเคอร์', 'ข้าม', 'การกระทำ', 'การกระทำ', 'การใช้งาน', 'กิจกรรม',
'จริง', 'จริง', 'เพิ่ม', 'นอกจาก', 'เพิ่มเติม', 'คำคุณศัพท์', 'ผู้ใหญ่', 'ผจญภัย',
'คำแนะนำ', 'ส่งผลกระทบต่อ', 'กลัว', 'หลัง', 'ช่วงบ่าย', 'อีกครั้ง', 'กับ', 'อายุ',
'ที่ผ่านมา', 'ยอมรับ', 'ก่อน', 'ช่วยเหลือ', 'อากาศ', 'เครื่องบิน', 'เหมือนกัน', 'ชีวิต',
'ทั้งหมด', 'อนุญาต', 'เกือบ', 'คนเดียว', 'พร้อม', 'ดัง', 'อักษร', 'แล้ว',
'ยัง', 'แม้ว่า', 'น', 'หมู่', 'ปริมาณ', 'โบราณ', 'มุม', 'โกรธ',
'สัตว์', 'ประกาศ', 'อีก', 'คำตอบ', 'มด', 'ใด ๆ', 'ใคร', 'ทุกคน',
'อะไร', 'อยู่แล้ว', 'ทุกที่', 'ออกจากกัน', 'อพาร์ทเม้น', 'ลักษณะ', 'แอปเปิ้ล', 'ใช้',
'เหมาะสม', 'เป็น', 'พื้นที่', 'แขน', 'กองทัพ', 'รอบ', 'จัด', 'จัด',
'ถึง', 'ลูกศร', 'ศิลปะ', 'บทความ', 'เป็น', 'กัน', 'ถาม', 'หลับ',
'ที่', 'กิน', 'บรรยากาศ', 'อะตอม', 'อะตอม', 'แนบ', 'โจมตี', 'ความพยายาม',
'สนใจ', 'ผู้ชม', 'เขียน', 'รถยนต์', 'ใช้ได้', 'เฉลี่ย', 'หลีกเลี่ยง', 'ตระหนัก',
'ห่าง', 'ทารก', 'กลับมา', 'ไม่ดี', 'ไม่ดี', 'กระเป๋า', 'สมดุล', 'ลูก',
'บอลลูน', 'วง', 'ธนาคาร', 'บาร์', 'เปลือย', 'เปลือก', 'ยุ้งฉาง', 'ฐาน',
'เบสบอล', 'พื้นฐาน', 'พื้นฐาน', 'ตะกร้า', 'ค้างคาว', 'ต่อสู้', 'เป็น', 'ถั่ว',
'หมี', 'ชนะ', 'สวย', 'ความงาม', 'กลายเป็น', 'เพราะ', 'กลายเป็น', 'กลายเป็น',
'ผึ้ง', 'รับ', 'ก่อน', 'เริ่ม', 'จุดเริ่มต้น', 'เริ่ม', 'พฤติกรรม', 'เบื้องหลัง',
'เป็น', 'เชื่อ', 'ระฆัง', 'เป็น', 'ด้านล่าง', 'เข็มขัด', 'โค้ง', 'ใต้',
'ก้ม', 'ข้าง', 'ดีที่สุด', 'เดิมพัน', 'ดีกว่า', 'ระหว่าง', 'เกิน', 'จักรยาน',
'ใหญ่กว่า', 'ใหญ่ที่สุด', 'บิล', 'นก', 'เกิด', 'วันเกิด', 'บิต', 'กัด',
'สีดำ', 'ว่างเปล่า', 'ผ้าห่ม', 'พัด', 'คนตาบอด', 'บล็อก', 'เลือด', 'ระเบิด',
'สีฟ้า', 'รีด', 'เรือ', 'ร่างกาย', 'กระดูก', 'หนังสือ', 'ชายแดน', 'เกิด',
'ทั้ง', 'ขวด', 'ด้านล่าง', 'ผูกพัน', 'โบว์', 'ชาม', 'กล่อง', 'เด็ก',
'สมอง', 'สาขา', 'ทองเหลือง', 'กล้าหาญ', 'ขนมปัง', 'แบ่ง', 'อาหารเช้า', 'ลมหายใจ',
'หายใจ', 'ลมหายใจ', 'สายลม', 'อิฐ', 'สะพาน', 'สั้น', 'สดใส', 'นำ',
'กว้าง', 'หัก', 'เสีย', 'พี่ชาย', 'นำ', 'น้ำตาล', 'แปรง', 'ควาย',
'สร้าง', 'อาคาร', 'สร้าง', 'ฝัง', 'เผา', 'ระเบิด', 'รถเมล์', 'บุช',
'ธุรกิจ', 'ยุ่ง', 'แต่', 'เนย', 'ซื้อ', 'โดย', 'ห้องโดยสาร', 'กรง',
'เค้ก', 'เรียก', 'ความสงบ', 'มา', 'กล้อง', 'ค่าย', 'สามารถ', 'คลอง',
'ไม่สามารถ', 'หมวก', 'ทุน', 'กัปตัน', 'จับ', 'รถ', 'คาร์บอน', 'การ์ด',
'ดูแล', 'ระวัง', 'รอบคอบ', 'ดำเนินการ', 'ดำเนินการ', 'กรณี', 'โยน', 'ปราสาท',
'แมว', 'จับ', 'วัว', 'จับ', 'สาเหตุ', 'ถ้ำ', 'มือถือ', 'ร้อย',
'ศูนย์', 'กลาง', 'ศตวรรษ', 'บางอย่าง', 'อย่างแน่นอน', 'โซ่', 'เก้าอี้', 'ห้อง',
'โอกาส', 'เปลี่ยน', 'เปลี่ยน', 'บท', 'ตัวละคร', 'ลักษณะ', 'ค่าใช้จ่าย', 'กราฟ',
'ตรวจสอบ', 'ชีส', 'เคมี', 'หน้าอก', 'ไก่', 'หัวหน้า', 'เด็ก', 'เด็ก',
'ทางเลือก', 'เลือก', 'เลือก', 'ได้รับการแต่งตั้ง', 'คริสตจักร', 'วงกลม', 'คณะละครสัตว์', 'พลเมือง',
'เมือง', 'ระดับ', 'ห้องเรียน', 'กรงเล็บ', 'ดิน', 'สะอาด', 'ชัดเจน', 'อย่างชัดเจน',
'ภูมิอากาศ', 'ปีน', 'นาฬิกา', 'ปิด', 'ตู้เสื้อผ้า', 'ใกล้ชิด', 'ใกล้ชิด', 'ผ้า', 'เสื้อผ้า',
'เสื้อผ้า', 'เมฆ', 'คลับ', 'โค้ช', 'ถ่านหิน', 'ชายฝั่ง', 'เสื้อ', 'codepen', 'กาแฟ',
'เย็น', 'เก็บ', 'วิทยาลัย', 'อาณานิคม', 'สี', 'คอลัมน์', 'รวมกัน', 'รวม',
'มา', 'สบาย', 'มา', 'คำสั่ง', 'ทั่วไป', 'ชุมชน', 'บริษัท', 'เปรียบเทียบ',
'เข็มทิศ', 'สมบูรณ์', 'สมบูรณ์', 'ซับซ้อน', 'แต่ง', 'องค์ประกอบ', 'สาร', 'ห่วง',
'เงื่อนไข', 'รัฐสภา', 'เชื่อมต่อ', 'พิจารณา', 'ประกอบด้วย', 'พยัญชนะ', 'อย่างต่อเนื่อง', 'ก่อสร้าง',
'มี', 'ทวีป', 'ยังคง', 'ความคมชัด', 'ควบคุม', 'สนทนา', 'ปรุงอาหาร', 'คุกกี้',
'เย็น', 'ทองแดง', 'คัดลอก', 'ข้าวโพด', 'มุม', 'ถูกต้อง', 'ถูกต้อง', 'ค่าใช้จ่าย',
'ฝ้าย', 'สามารถ', 'นับ', 'ประเทศ', 'คู่', 'ความกล้าหาญ', 'แน่นอน', 'ศาล',
'ปก', 'วัว', 'คาวบอย', 'แตก', 'ครีม', 'สร้าง', 'สัตว์ประหลาด', 'ลูกเรือ',
'พืช', 'ข้าม', 'ฝูงชน', 'ร้องไห้', 'ถ้วย', 'อยากรู้อยากเห็น', 'ปัจจุบัน', 'โค้ง',
'ศุลกากร', 'ตัด', 'ตัด', 'ทุกวัน', 'ความเสียหาย', 'เต้น', 'อันตราย', 'อันตราย',
'เข้ม', 'ความมืด', 'วัน', 'ลูกสาว', 'รุ่งอรุณ', 'วัน', 'ตาย', 'จัดการ',
'รัก', 'ความตาย', 'ตัดสินใจ', 'ประกาศ', 'ลึก', 'ลึก', 'กวาง', 'ความหมาย',
'ปริญญา', 'ขึ้น', 'ลึก', 'อธิบาย', 'ทะเลทราย', 'การออกแบบ', 'โต๊ะ', 'รายละเอียด',
'ตรวจสอบ', 'พัฒนา', 'พัฒนา', 'แผนภาพ', 'เส้นผ่าศูนย์กลาง', 'ไม่', 'ตาย', 'แตกต่าง',
'แตกต่าง', 'แตกต่าง', 'ยาก', 'ความยากลำบาก', 'ขุด', 'อาหารเย็น', 'โดยตรง', 'ทิศทาง',
'โดยตรง', 'สกปรก', 'สกปรก', 'หายไป', 'ค้นพบ', 'ค้นพบ', 'หารือ', 'สนทนา',
'โรค', 'จาน', 'ระยะทาง', 'ไกล', 'แบ่ง', 'ส่วน', 'ทำ', 'หมอ',
'ไม่', 'สุนัข', 'ทำ', 'ตุ๊กตา', 'ดอลล่า', 'ทำ', 'ลา', 'ประตู',
'จุด', 'คู่', 'ข้อสงสัย', 'ลง', 'โหล', 'วาด', 'ดึง', 'ความฝัน',
'ชุด', 'ดึง', 'แห้ง', 'เครื่องดื่ม', 'ไดรฟ์', 'ขับเคลื่อน', 'คนขับ', 'ขับรถ',
'หล่น', 'ลดลง', 'ขับรถ', 'แห้ง', 'เป็ด', 'เนื่องจาก', 'ขุด', 'น่าเบื่อ',
'ระหว่าง', 'ฝุ่น', 'หน้าที่', 'แต่ละ', 'อยาก', 'หู', 'ก่อนหน้านี้', 'ต้น',
'ได้รับ', 'โลก', 'ง่าย', 'ง่าย', 'ตะวันออก', 'ง่าย', 'กิน', 'กิน',
'ขอบ', 'การศึกษา', 'ผล', 'ความพยายาม', 'ไข่', 'แปด', 'ทั้ง', 'ไฟฟ้า',
'ไฟฟ้า', 'องค์ประกอบ', 'ช้าง', 'สิบเอ็ด', 'อื่น ๆ', 'ว่างเปล่า', 'ปลาย', 'ศัตรู',
'พลังงาน', 'เครื่องมือ', 'วิศวกร', 'เพลิดเพลินกับ', 'พอ', 'ป้อน', 'ทั้ง', 'ทั้งหมด',
'สิ่งแวดล้อม', 'เท่ากับ', 'เท่าเทียมกัน', 'เส้นศูนย์สูตร', 'อุปกรณ์', 'หลบหนี', 'โดยเฉพาะ', 'สิ่งสำคัญ',
'สร้าง', 'แม้', 'ตอนเย็น', 'จัดกิจกรรม', 'ในที่สุด', 'เคย', 'ทุก', 'ทุกคน',
'ทุกคน', 'ทุกอย่าง', 'ทุกที่', 'หลักฐาน', 'แน่นอน', 'ว่า', 'ตรวจสอบ', 'ตัวอย่าง',
'ยอดเยี่ยม', 'ยกเว้น', 'แลกเปลี่ยน', 'ตื่นเต้น', 'ตื่นเต้น', 'ที่น่าตื่นเต้น', 'อุทาน', 'ออกกำลังกาย',
'อยู่', 'คาดหวัง', 'ประสบการณ์', 'ทดลอง', 'อธิบาย', 'คำอธิบาย', 'สำรวจ', 'แสดง',
'การแสดงออก', 'พิเศษ', 'ตา', 'ใบหน้า', 'หันหน้าไปทาง', 'ความจริง', 'ปัจจัย', 'โรงงาน',
'ล้มเหลว', 'ยุติธรรม', 'ธรรม', 'ฤดูใบไม้ร่วง', 'ลดลง', 'คุ้นเคย', 'ครอบครัว', 'ชื่อเสียง',
'ไกล', 'ฟาร์ม', 'เกษตรกร', 'ไกล', 'รวดเร็ว', 'ยึด', 'เร็วกว่า', 'ไขมัน',
'พ่อ', 'ชื่นชอบ', 'ความกลัว', 'ขน', 'คุณสมบัติ', 'เลี้ยง', 'ฟีด', 'ความรู้สึก',
'เท้า', 'ลดลง', 'เพื่อน', 'รู้สึก', 'รั้ว', 'ไม่กี่', 'น้อย', 'ข้อมูล',
'รุนแรง', 'สิบห้า', 'ห้า', 'ห้าสิบ', 'ต่อสู้', 'ต่อสู้', 'ตัวเลข', 'เติม',
'ฟิล์ม', 'สุดท้าย', 'ที่สุด', 'พบ', 'ดี', 'ดีที่สุด', 'นิ้ว', 'จบ',
'ไฟ', 'เตาผิง', 'บริษัท', 'ครั้งแรก', 'ปลา', 'ห้า', 'แก้ไข', 'ธง',
'ไฟ', 'แบน', 'บิน', 'บิน', 'เที่ยวบิน', 'ลอย', 'ชั้น', 'ไหล',
'ดอกไม้', 'บิน', 'หมอก', 'คน', 'ทำตาม', 'อาหาร', 'เท้า', 'ฟุตบอล',
'สำหรับ', 'แรง', 'ต่างชาติ', 'ป่า', 'ลืม', 'ลืม', 'ลืม', 'รูปแบบ',
'อดีต', 'ป้อม', 'มา', 'สี่สิบ', 'ไปข้างหน้า', 'ต่อสู้', 'พบ', 'สี่',
'สี่', 'สุนัขจิ้งจอก', 'เฟรม', 'ฟรี', 'เสรีภาพ', 'บ่อย', 'สด', 'เพื่อน',
'มิตร', 'ขู่', 'กบ', 'จาก', 'หน้า', 'แช่แข็ง', 'ผลไม้', 'เชื้อเพลิง',
'เต็ม', 'อย่างเต็มที่', 'สนุก', 'ฟังก์ชั่น', 'ตลก', 'ขน', 'เฟอร์นิเจอร์', 'ต่อ',
'อนาคต', 'กำไร', 'เกม', 'โรงรถ', 'สวน', 'ก๊าซ', 'เบนซิน', 'ประตู',
'รวบรวม', 'ให้', 'ทั่วไป', 'ทั่วไป', 'อ่อนโยน', 'เบา ๆ', 'ได้รับ', 'ได้รับ',
'ยักษ์', 'ของขวัญ', 'สาว', 'ให้', 'รับ', 'ให้', 'ดีใจ', 'แก้ว',
'โลก', 'ไป', 'ไป', 'ทอง', 'ทอง', 'หายไป', 'ดี', 'ห่าน',
'ได้', 'รัฐบาล', 'คว้า', 'เกรด', 'ค่อยๆ', 'ข้าว', 'ปู่', 'ยาย',
'กราฟ', 'หญ้า', 'แรงโน้มถ่วง', 'สีเทา', 'ดี', 'มากขึ้น', 'ยิ่งใหญ่', 'อย่างมาก',
'สีเขียว', 'เติบโต', 'พื้น', 'กลุ่ม', 'เติบโต', 'เติบโต', 'การเติบโต', 'ยาม',
'เดา', 'คู่มือ', 'อ่าว', 'ปืน', 'นิสัย', 'มี', 'ผม', 'ครึ่ง',
'ครึ่งหนึ่ง', 'ฮอลล์', 'มือ', 'จับ', 'หล่อ', 'แขวน', 'เกิดขึ้น', 'เกิดขึ้น',
'ความสุข', 'ความสุข', 'ท่าเรือ', 'ยาก', 'ยาก', 'แทบจะไม่', 'มี', 'หมวก',
'ได้', 'มี', 'ฟาง', 'เขา', 'หัว', 'มุ่งหน้า', 'สุขภาพ', 'ได้ยิน',
'ได้ยิน', 'หัวใจ', 'ความร้อน', 'หนัก', 'สูง', 'จัด', 'สวัสดี', 'ช่วย',
'ประโยชน์', 'เธอ', 'ฝูง', 'ที่นี่', 'ตัวเอง', 'ซ่อน', 'ซ่อน', 'สูง',
'สูง', 'สูงสุด', 'ทางหลวง', 'ฮิลล์', 'เขา', 'ตัวเอง', 'ประวัติศาสตร์', 'เขา',
'ตี', 'ถือ', 'หลุม', 'กลวง', 'บ้าน', 'เกียรติ', 'ความหวัง', 'ฮอร์น',
'ม้า', 'โรงพยาบาล', 'ร้อน', 'ชั่วโมง', 'บ้าน', 'วิธีการ', 'แต่', 'ใหญ่',
'มนุษย์', 'ร้อย', 'แขวน', 'หิว', 'ล่า', 'ล่า', 'รีบ', 'รีบ',
'เจ็บ', 'สามี', 'น้ำแข็ง', 'ความคิด', 'ตัวตน', 'ถ้า', 'ป่วย', 'ภาพ',
'จินตนาการ', 'ทันที', 'สำคัญ', 'สำคัญ', 'เป็นไปไม่ได้', 'ปรับปรุง', 'ใน', 'นิ้ว',
'รวมถึง', 'รวมทั้ง', 'รายได้', 'เพิ่มขึ้น', 'แน่นอน', 'อิสระ', 'บ่งชี้', 'บุคคล',
'อุตสาหกรรม', 'อุตสาหกรรม', 'อิทธิพล', 'ข้อมูล', 'ภายใน', 'เช่น', 'ทันที', 'แทน',
'เครื่องมือ', 'ดอกเบี้ย', 'ภายใน', 'เป็น', 'แนะนำ', 'คิดค้น', 'ที่เกี่ยวข้อง', 'เหล็ก',
'เป็น', 'เกาะ', 'มัน', 'ของ', 'ตัวเอง', 'แจ็ค', 'โถ', 'เจ็ท',
'งาน', 'ร่วม', 'เข้าร่วม', 'การเดินทาง', 'ความสุข', 'ผู้พิพากษา', 'กระโดด', 'ป่า',
'เพียง', 'ให้', 'เก็บไว้', 'คีย์', 'เด็ก', 'ฆ่า', 'ชนิด', 'ครัว',
'รู้', 'ด', 'รู้', 'ความรู้', 'เรียก', 'ป้าย', 'แรงงาน', 'ขาด',
'ผู้หญิง', 'วาง', 'ทะเลสาบ', 'ไฟ', 'ที่ดิน', 'ภาษา', 'ใหญ่', 'ขนาดใหญ่',
'ใหญ่ที่สุด', 'สุดท้าย', 'ปลาย', 'ในภายหลัง', 'หัวเราะ', 'กฎหมาย', 'วาง', 'ชั้น',
'นำ', 'ผู้นำ', 'ใบ', 'เรียนรู้', 'น้อย', 'หนัง', 'ลา', 'ออก',
'นำ', 'ซ้าย', 'ขา', 'ความยาว', 'บทเรียน', 'ให้', 'จดหมาย', 'ระดับ',
'ห้องสมุด', 'โกหก', 'ชีวิต', 'ยก', 'แสง', 'ชอบ', 'แนวโน้ม', 'จำกัด',
'เส้น', 'สิงโต', 'ริมฝีปาก', 'เหลว', 'รายการ', 'ฟัง', 'น้อย', 'สด',
'ที่อาศัยอยู่', 'โหลด', 'ท้องถิ่น', 'ค้นหา', 'ตั้ง', 'เข้าสู่ระบบ', 'เหงา', 'ยาว',
'อีกต่อไป', 'ดู', 'หลวม', 'สูญเสีย', 'การสูญเสีย', 'หายไป', 'มาก', 'ดัง',
'ความรัก', 'น่ารัก', 'ต่ำ', 'ต่ำ', 'โชค', 'โชคดี', 'กลางวัน', 'ปอด',
'โกหก', 'เครื่อง', 'เครื่องจักร', 'บ้า', 'ทำ', 'วิเศษ', 'แม่เหล็ก', 'อีเมล',
'หลัก', 'ส่วนใหญ่', 'ใหญ่', 'ทำให้', 'ทำให้', 'ชาย', 'การจัดการ', 'ลักษณะ',
'ผลิต', 'หลาย', 'แผนที่', 'เครื่องหมาย', 'ตลาด', 'แต่งงาน', 'มวล', 'นวด',
'ต้นแบบ', 'วัสดุ', 'คณิตศาสตร์', 'เรื่อง', 'อาจ', 'อาจจะ', 'ฉัน', 'อาหาร',
'หมายถึง', 'หมายถึง', 'หมายถึง', 'วัด', 'เนื้อ', 'ยา', 'พบ', 'ละลาย',
'สมาชิก', 'หน่วยความจำ', 'ผู้ชาย', 'จิต', 'แค่', 'พบ', 'โลหะ', 'วิธีการ',
'หนู', 'กลาง', 'อาจจะ', 'ยิ่งใหญ่', 'ไมล์', 'ทหาร', 'นม', 'โรงสี',
'ใจ', 'เหมือง', 'แร่ธาตุ', 'นาที', 'กระจก', 'หายไป', 'ภารกิจ', 'ความผิดพลาด',
'ผสม', 'ผสม', 'รุ่น', 'ทันสมัย', 'โมเลกุล', 'ขณะที่', 'เงิน', 'ลิง',
'เดือน', 'อารมณ์', 'ดวงจันทร์', 'อื่น ๆ', 'เช้า', 'ที่สุด', 'ส่วนใหญ่', 'แม่',
'เคลื่อนไหว', 'มอเตอร์', 'ภูเขา', 'เมาส์', 'ปาก', 'ย้าย', 'เคลื่อนไหว', 'ภาพยนตร์',
'ย้าย', 'โคลน', 'กล้ามเนื้อ', 'เพลง', 'ดนตรี', 'ต้อง', 'ฉัน', 'ตัวเอง',
'ลึกลับ', 'เล็บ', 'ชื่อ', 'ประเทศ', 'ชาติ', 'พื้นเมือง', 'ธรรมชาติ', 'ธรรมชาติ',
'ธรรมชาติ', 'ใกล้', 'อยู่ใกล้', 'ใกล้', 'ที่ใกล้ที่สุด', 'เกือบ', 'จำเป็น', 'คอ',
'จำเป็น', 'เข็ม', 'ต้องการ', 'เชิงลบ', 'เพื่อนบ้าน', 'เขต', 'ประสาท', 'รัง',
'ไม่เคย', 'ใหม่', 'ข่าว', 'หนังสือพิมพ์', 'ถัดไป', 'ดี', 'คืน', 'เก้า',
'ไม่', 'ไม่มีใคร', 'พยักหน้า', 'เสียง', 'ไม่มี', 'เที่ยง', 'หรือ', 'ทางทิศเหนือ',
'จมูก', 'ไม่ได้', 'โน้ต', 'ตั้งข้อสังเกต', 'อะไร', 'แจ้งให้ทราบล่วงหน้า', 'นาม', 'ตอนนี้',
'จำนวน', 'ตัวเลข', 'ถั่ว', 'วัตถุ', 'สังเกต', 'ได้รับ', 'บางครั้ง', 'เกิดขึ้น',
'ทะเล', 'ของ', 'ปิด', 'เสนอ', 'สำนักงาน', 'เจ้าหน้าที่', 'อย่างเป็นทางการ', 'น้ำมัน',
'เก่า', 'เก่า', 'ที่เก่าแก่ที่สุด', 'ใน', 'ครั้งเดียว', 'หนึ่ง', 'เท่านั้น', 'บน',
'เปิด', 'การดำเนินการ', 'ความเห็น', 'โอกาส', 'ตรงข้าม', 'หรือ', 'ส้ม', 'วงโคจร',
'เพื่อ', 'สามัญ', 'องค์กร', 'จัด', 'แหล่งกำเนิด', 'ต้นฉบับ', 'อื่น ๆ', 'ควร',
'เรา', 'ตัวเอง', 'ออก', 'นอก', 'ร่าง', 'นอก', 'มากกว่า', 'ตัวเอง',
'เจ้าของ', 'ออกซิเจน', 'แพ็ค', 'แพคเกจ', 'หน้า', 'จ่าย', 'ปวด', 'สี',
'คู่', 'วัง', 'อ่อน', 'แพน', 'กระดาษ', 'วรรค', 'ขนาน', 'ผู้ปกครอง',
'สวน', 'ส่วน', 'อนุภาค', 'โดยเฉพาะ', 'โดยเฉพาะ', 'ส่วนหนึ่ง', 'ส่วน', 'บุคคล',
'ผ่าน', 'ทาง', 'ที่ผ่านมา', 'เส้นทาง', 'รูปแบบ', 'จ่าย', 'สันติภาพ', 'ปากกา',
'ดินสอ', 'คน', 'ต่อ', 'เปอร์เซ็นต์', 'สมบูรณ์แบบ', 'สมบูรณ์แบบ', 'อาจจะ', 'ระยะเวลา',
'คน', 'ส่วนตัว', 'สัตว์เลี้ยง', 'วลี', 'กายภาพ', 'เปียโน', 'รับ', 'ภาพ',
'ภาพ', 'พาย', 'ชิ้น', 'หมู', 'กอง', 'นักบิน', 'สน', 'สีชมพู',
'ท่อ', 'สนาม', 'สถานที่', 'ธรรมดา', 'แผน', 'เครื่องบิน', 'ดาวเคราะห์', 'วางแผน',
'วางแผน', 'โรงงาน', 'พลาสติก', 'จาน', 'แผ่น', 'เล่น', 'รื่นรมย์', 'กรุณา',
'ความสุข', 'มากมาย', 'พหูพจน์', 'บวก', 'กระเป๋า', 'บทกวี', 'กวี', 'บทกวี',
'จุด', 'เสา', 'ตำรวจ', 'ตำรวจ', 'การเมือง', 'บ่อ', 'ม้า', 'ว่ายน้ำ',
'ไม่ดี', 'นิยม', 'ประชากร', 'มุข', 'ท่าเรือ', 'ตำแหน่ง', 'บวก', 'เป็นไปได้',
'อาจจะ', 'โพสต์', 'หม้อ', 'มันฝรั่ง', 'ปอนด์', 'เท', 'ผง', 'อำนาจ',
'มีประสิทธิภาพ', 'ปฏิบัติ', 'ปฏิบัติ', 'เตรียม', 'ปัจจุบัน', 'ประธาน', 'กด', 'ดัน',
'สวย', 'ป้องกัน', 'ก่อนหน้านี้', 'ราคา', 'ความภาคภูมิใจ', 'ดั้งเดิม', 'หลัก', 'หลักการ',
'พิมพ์', 'ส่วนตัว', 'รางวัล', 'อาจจะ', 'ปัญหา', 'กระบวนการ', 'ผลิต', 'สินค้า',
'สัญญา', 'เหมาะสม', 'ถูกต้อง', 'คุณสมบัติ', 'ผลิต', 'โปรแกรม', 'ความคืบหน้า', 'ป้องกัน',
'ความภาคภูมิใจ', 'พิสูจน์', 'ให้', 'สาธารณะ', 'ดึง', 'นักเรียน', 'บริสุทธิ์', 'สีม่วง',
'วัตถุประสงค์', 'ดัน', 'ใส่', 'วาง', 'ไตรมาส', 'พระราชินี', 'คำถาม', 'รวดเร็ว',
'รวดเร็ว', 'เงียบ', 'เงียบ', 'ค่อนข้าง', 'กระต่าย', 'การแข่งขัน', 'วิทยุ', 'รถไฟ',
'ฝน', 'ยก', 'วิ่ง', 'ไร่', 'ช่วง', 'อย่างรวดเร็ว', 'อัตรา', 'มากกว่า',
'ดิบ', 'รังสี', 'เข้าถึง', 'อ่าน', 'อ่าน', 'พร้อม', 'จริง', 'ตระหนัก',
'หลัง', 'เหตุผล', 'เรียกคืน', 'ได้รับ', 'ล่าสุด', 'เมื่อเร็ว ๆ นี้', 'รู้จัก', 'บันทึก',
'สีแดง', 'อ้าง', 'ปฏิเสธ', 'ภูมิภาค', 'ปกติ', 'ที่เกี่ยวข้อง', 'ความสัมพันธ์', 'ศาสนา',
'ยังคง', 'โดดเด่น', 'จำ', 'ลบ', 'ซ้ำ', 'แทนที่', 'ตอบ', 'รายงาน',
'แทน', 'ต้อง', 'การวิจัย', 'เคารพ', 'ส่วนที่เหลือ', 'ผล', 'กลับมา', 'ตรวจสอบ',
'สัมผัส', 'จังหวะ', 'ข้าว', 'ที่อุดมไปด้วย', 'นั่ง', 'ขี่', 'ขวา', 'แหวน',
'เพิ่มขึ้น', 'เพิ่มขึ้น', 'แม่น้ำ', 'ถนน', 'เสียงคำราม', 'หิน', 'จรวด', 'หิน',
'ร็อด', 'ม้วน', 'หลังคา', 'ห้อง', 'ราก', 'เชือก', 'กุหลาบ', 'หยาบ',
'รอบ', 'เส้นทาง', 'แถว', 'ลูบ', 'ยาง', 'กฎ', 'ผู้ปกครอง', 'ทำงาน',
'ทำงาน', 'วิ่ง', 'เศร้า', 'อาน', 'ปลอดภัย', 'ความปลอดภัย', 'กล่าวว่า', 'เรือใบ',
'ขาย', 'แซลมอน', 'เกลือ', 'เดียว', 'ทราย', 'ร้องเพลง', 'นั่ง', 'ดาวเทียม',
'ความพึงพอใจ', 'ประหยัด', 'บันทึก', 'เห็น', 'บอกว่า', 'ขนาด', 'กลัว', 'ฉาก',
'โรงเรียน', 'วิทยาศาสตร์', 'วิทยาศาสตร์', 'นักวิทยาศาสตร์', 'คะแนน', 'หน้าจอ', 'ทะเล', 'ค้นหา',
'ฤดู', 'นั่ง', 'สอง', 'ความลับ', 'ส่วน', 'ดู', 'เมล็ดพันธุ์', 'เห็น',
'ดูเหมือน', 'เห็น', 'ไม่ค่อย', 'เลือก', 'เลือก', 'ขาย', 'ส่ง', 'ความรู้สึก',
'ส่ง', 'ประโยค', 'แยกต่างหาก', 'ชุด', 'ร้ายแรง', 'บริการ', 'บริการ', 'คุณภาพ',
'การตั้งค่า', 'ชำระ', 'ตั้งถิ่นฐาน', 'เจ็ด', 'หลาย', 'ร่ม', 'เงา', 'สั่น',
'สั่น', 'ต้อง', 'ตื้น', 'รูปร่าง', 'หุ้น', 'คม', 'เธอ', 'แกะ',
'แผ่น', 'ชั้น', 'หอย', 'พักพิง', 'เงางาม', 'แผ้ว', 'เรือ', 'เสื้อ',
'รองเท้า', 'ยิง', 'ร้าน', 'ฝั่ง', 'สั้น', 'สั้น', 'ยิง', 'ควร',
'ไหล่', 'ตะโกน', 'แสดง', 'แสดง', 'ปิด', 'ป่วย', 'ด้าน', 'สายตา',
'สัญญาณ', 'สัญญาณ', 'ความเงียบ', 'เงียบ', 'ไหม', 'โง่', 'เงิน', 'คล้าย',
'ง่าย', 'ง่าย', 'เพียง', 'เนื่องจาก', 'ร้องเพลง', 'เดียว', 'จม', 'น้องสาว',
'นั่ง', 'นั่ง', 'สถานการณ์', 'ขนาด', 'หก', 'ทักษะ', 'ผิว', 'ฟ้า',
'แผ่น', 'ทาส', 'นอนหลับ', 'นอนหลับ', 'ภาพนิ่ง', 'เล็กน้อย', 'เล็กน้อย', 'ใบ',
'หลุด', 'ลาด', 'ช้า', 'ช้า', 'เล็ก', 'ขนาดเล็ก', 'เล็กที่สุด', 'กลิ่น',
'รอยยิ้ม', 'ควัน', 'ราบรื่น', 'งู', 'หิมะ', 'เพื่อ', 'สบู่', 'สังคม',
'สังคม', 'อ่อน', 'เบา ๆ', 'ดิน', 'แสงอาทิตย์', 'ขาย', 'ทหาร', 'แข็ง',
'แก้ปัญหา', 'แก้', 'บาง', 'ใครบางคน', 'อย่างใด', 'คน', 'บางสิ่งบางอย่าง', 'บางครั้ง',
'ที่ไหนสักแห่ง', 'ลูกชาย', 'เพลง', 'เร็ว ๆ นี้', 'เรียง', 'เสียง', 'แหล่ง', 'ภาคใต้',
'ภาคใต้', 'พื้นที่', 'พูด', 'พิเศษ', 'สปีชีส์', 'เฉพาะ', 'คำพูด', 'ความเร็ว',
'สะกด', 'การใช้จ่าย', 'ใช้เวลา', 'แมงมุม', 'สปิน', 'จิตวิญญาณ', 'แม้', 'แยก',
'พูด', 'กีฬา', 'กระจาย', 'ฤดูใบไม้ผลิ', 'ตาราง', 'เวที', 'บันได', 'ยืน',
'มาตรฐาน', 'ดาว', 'จ้อง', 'เริ่มต้น', 'รัฐ', 'คำสั่ง', 'สถานี', 'เข้าพัก',
'มั่นคง', 'ไอน้ำ', 'เหล็ก', 'สูงชัน', 'ลำต้น', 'ขั้นตอน', 'ก้าว', 'ติด',
'แข็ง', 'ยังคง', 'หุ้น', 'ท้อง', 'หิน', 'ยืน', 'หยุด', 'หยุด',
'เก็บ', 'พายุ', 'เรื่อง', 'เตา', 'ตรง', 'แปลก', 'คนแปลกหน้า', 'ฟาง',
'กระแส', 'สถานที่', 'แข็งแรง', 'ยืด', 'ตี', 'สตริง', 'แถบ', 'แข็งแรง',
'แข็งแรง', 'หลง', 'โครงสร้าง', 'ต่อสู้', 'ติด', 'นักเรียน', 'การศึกษา', 'การศึกษา',
'เรื่อง', 'สาร', 'ความสำเร็จ', 'ประสบความสำเร็จ', 'เช่น', 'ฉับพลัน', 'จู่', 'น้ำตาล',
'แนะนำ', 'ชุด', 'รวม', 'ฤดูร้อน', 'ดวงอาทิตย์', 'แสงแดด', 'อาหารมื้อเย็น', 'อุปทาน',
'สนับสนุน', 'คิด', 'แน่ใจว่า', 'ผิว', 'แปลกใจ', 'ล้อมรอบ', 'ว่ายน้ำ', 'หวาน',
'กวาด', 'ว่ายน้ำ', 'ว่ายน้ำ', 'แกว่ง', 'ยิง', 'พยางค์', 'สัญลักษณ์', 'ระบบ',
'โต๊ะ', 'หาง', 'ใช้', 'นำ', 'นิทาน', 'พูดคุย', 'สูง', 'รถถัง',
'เทป', 'งาน', 'รสชาติ', 'สอน', 'ภาษี', 'ชา', 'สอน', 'ครู',
'ทีม', 'น้ำตา', 'ฟัน', 'โทรศัพท์', 'โทรทัศน์', 'บอก', 'อุณหภูมิ', 'สิบ',
'เต็นท์', 'คำว่า', 'น่ากลัว', 'ทดสอบ', 'มากกว่า', 'ขอบคุณ', 'ว่า', 'เจ้า',
'พวกเขา', 'ตัวเอง', 'แล้ว', 'ทฤษฎี', 'มี', 'ดังนั้น', 'เหล่านี้', 'พวกเขา',
'หนา', 'บาง', 'สิ่ง', 'คิด', 'สาม', 'สามสิบ', 'นี้', 'ผู้',
'เจ้า', 'แต่', 'คิด', 'พัน', 'หัวข้อ', 'สาม', 'โยน', 'คอ',
'ผ่าน', 'ตลอด', 'โยน', 'โยน', 'นิ้วหัวแม่มือ', 'ทำให้', 'เจ้า', 'น้ำ',
'ผูก', 'แน่น', 'แน่น', 'จนถึง', 'เวลา', 'กระป๋อง', 'เล็ก', 'เคล็ดลับ',
'เหนื่อย', 'ชื่อ', 'ไป', 'ยาสูบ', 'วันนี้', 'กัน', 'บอก', 'พรุ่งนี้',
'เสียง', 'ลิ้น', 'คืนนี้', 'เกินไป', 'เอา', 'เครื่องมือ', 'บน', 'หัวข้อ',
'ฉีก', 'ทั้งหมด', 'สัมผัส', 'ไปสู่', 'หอ', 'เมือง', 'ของเล่น', 'ร่องรอย',
'ติดตาม', 'การค้า', 'จราจร', 'เส้นทาง', 'รถไฟ', 'ขนส่ง', 'กับดัก', 'การเดินทาง',
'ได้รับการปฏิบัติ', 'ต้นไม้', 'สามเหลี่ยม', 'นินจา', 'เคล็ดลับ', 'พยายาม', 'การเดินทาง', 'ทหาร',
'เขตร้อน', 'ปัญหา', 'รถบรรทุก', 'ลำต้น', 'ความจริง', 'ลอง', 'ท่อ', 'ปรับ',
'เปิด', 'สิบสอง', 'ยี่สิบ', 'ครั้งที่สอง', 'สอง', 'ประเภท', 'ปกติ', 'ลุง',
'ใต้', 'ขีดเส้นใต้', 'ความเข้าใจ', 'ความสุข', 'สหภาพแรงงาน', 'หน่วย', 'จักรวาล', 'ไม่รู้จัก',
'เว้นแต่', 'จน', 'ผิดปกติ', 'ขึ้น', 'เมื่อ', 'บน', 'ขึ้น', 'เรา',
'ใช้', 'ประโยชน์', 'ใช้', 'ปกติ', 'มักจะ', 'หุบเขา', 'ที่มีคุณค่า', 'คุ้มค่า',
'ไอ', 'หลากหลาย', 'ต่างๆ', 'ใหญ่', 'ผัก', 'คำกริยา', 'แนว', 'มาก',
'เรือ', 'ชัยชนะ', 'มุมมอง', 'หมู่บ้าน', 'เยี่ยมชม', 'ผู้เข้าชม', 'เสียง', 'ปริมาณ',
'โหวต', 'สระ', 'การเดินทาง', 'รถบรรทุก', 'รอ', 'เดิน', 'ผนัง', 'ต้องการ',
'สงคราม', 'อบอุ่น', 'เตือน', 'เป็น', 'ล้าง', 'ขยะ', 'นาฬิกา', 'น้ำ',
'คลื่น', 'วิธีการ', 'เรา', 'อ่อนแอ', 'มากมาย', 'สวมใส่', 'อากาศ', 'สัปดาห์',
'น้ำหนัก', 'น้ำหนัก', 'ต้อนรับ', 'ดี', 'ไป', 'เป็น', 'ตะวันตก', 'ตะวันตก',
'เปียก', 'วาฬ', 'สิ่ง', 'สิ่ง', 'ข้าวสาลี', 'ล้อ', 'เมื่อ', 'เมื่อใดก็ตาม',
'ที่', 'ทุกที่', 'ว่า', 'ซึ่ง', 'ขณะที่', 'กระซิบ', 'นกหวีด', 'สีขาว',
'ที่', 'ทั้ง', 'คน', 'มี', 'ทำไม', 'กว้าง', 'กันอย่างแพร่หลาย', 'ภรรยา',
'ป่า', 'จะ', 'ยินดี', 'ชนะ', 'ลม', 'หน้าต่าง', 'ปีก', 'ฤดูหนาว',
'สาย', 'ฉลาด', 'ปรารถนา', 'กับ', 'ภายใน', 'โดยไม่ต้อง', 'หมาป่า', 'ผู้หญิง',
'ชนะ', 'แปลกใจ', 'ยอดเยี่ยม', 'ไม้', 'ไม้', 'ขน', 'คำว่า', 'สวม',
'งาน', 'คนงาน', 'โลก', 'ห่วง', 'กังวล', 'เลวร้าย', 'คุ้มค่า', 'จะ',
'ห่อ', 'เขียน', 'นักเขียน', 'เขียน', 'เขียน', 'ผิด', 'เขียน', 'ลาน',
'ปี', 'สีเหลือง', 'ใช่', 'เมื่อวาน', 'ยัง', 'คุณ', 'หนุ่ม', 'น้อง',
'คุณ', 'ตัวเอง', 'เยาวชน', 'ศูนย์', 'สวน'];