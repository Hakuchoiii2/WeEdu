import {CardForCourse} from './Academy'
import React from 'react'
import {courses,cover} from './Shop'
export const pages={
 Web:['Lập trình Web','Xây dựng giao diện, kết nối dữ liệu và phát triển ứng dụng web.',[1,6]],
 Design:['Thiết kế UI/UX','Từ nhu cầu người học đến giao diện dễ sử dụng.',['Bố cục cho giao diện web','Typography tiếng Việt','Dựng prototype với Figma']],
 Data:['Khoa học dữ liệu','Khởi đầu với Python rồi tiến đến phân tích dữ liệu và mô hình học máy.',[0,2]],
 Skills:['Kỹ năng mềm','Rèn kỹ năng làm việc thông qua những bài tập ngắn.',['Giao tiếp trong nhóm dự án','Thuyết trình một ý tưởng','Lập kế hoạch học tập']],
 About:['Giới thiệu','WeEdu là đồ án môn IE106 về trải nghiệm học trực tuyến.',['Khám phá theo chủ đề|Chọn lĩnh vực quan tâm, so sánh trình độ và học phí trước khi chọn khóa.','Học qua thực hành|Mỗi lộ trình kết hợp nội dung bài giảng, ghi chú và bài tập.']],
 Team:['Đội ngũ giảng viên','Gặp những giảng viên xuất hiện trong các khóa học mẫu của WeEdu.',['Nguyễn Văn A|Lập trình Python và tư duy thuật toán.','Hoàng Nam Phong|Thiết kế UI/UX và hệ thống thiết kế trong Figma.','TS. Nguyễn Thanh Tuấn|Ứng dụng trí tuệ nhân tạo và kỹ thuật prompt.']],
 Terms:['Điều khoản sử dụng','Hướng dẫn sử dụng phiên bản đồ án WeEdu.',['Tài khoản trải nghiệm|Dùng thông tin mẫu khi thử các biểu mẫu.','Đặt khóa học|Quy trình đăng ký và thanh toán được mô phỏng trên trình duyệt.']],
 Privacy:['Chính sách bảo mật','Các lựa chọn và dữ liệu trải nghiệm được lưu trên thiết bị của bạn.',['Dữ liệu được lưu|WeEdu dùng bộ nhớ trình duyệt cho hồ sơ, giỏ hàng và chế độ sáng tối.','Xóa dữ liệu|Trong phần cài đặt trình duyệt, mở dữ liệu trang web và xóa dữ liệu của địa chỉ WeEdu đang dùng.']],
 Help:['Trung tâm trợ giúp','Chọn nội dung bạn cần hỗ trợ.',['Câu hỏi thường gặp|Tìm cách đổi giao diện, chọn khóa và tiếp tục học.|FAQ','Hướng dẫn thanh toán|Xem từng bước từ giỏ hàng đến xác nhận đơn.|Payment','Liên hệ|Thông tin hỗ trợ học viên.|Contact']],
 Payment:['Hướng dẫn thanh toán','Thực hiện đơn hàng mẫu theo ba bước.',['1. Kiểm tra giỏ hàng|Xem lại tên khóa, học phí và mã giảm giá trước khi tiếp tục.|Cart','2. Chọn phương thức|Điền thông tin mẫu và chọn phương thức trên trang thanh toán.','3. Xem xác nhận|Sau khi xác nhận đơn, chọn Bắt đầu học ngay để đến màn hình học.']],
 FAQ:['Câu hỏi thường gặp','Chọn một câu hỏi để xem câu trả lời.',['Làm sao tìm khóa phù hợp?|Trong Khóa học, kết hợp chủ đề, trình độ và khoảng giá.','Tôi đổi giao diện ở đâu?|Bấm nút mặt trời hoặc mặt trăng trên thanh đầu trang.','Tôi tiếp tục học ở đâu?|Mở Khóa học của tôi trong trang hồ sơ.']],
 Contact:['Liên hệ','Thông tin hỗ trợ được giới thiệu trong giao diện WeEdu.',['Hotline hỗ trợ|1900 1234 · 8:00 – 17:00','Hỗ trợ sử dụng|Tra cứu trước các câu hỏi về khóa học và thanh toán tại trung tâm trợ giúp.|Help']]
}
export function InfoPage({page}){
 const [title,description,entries]=pages[page],topic=['Web','Design','Data','Skills'].includes(page)
 return <article className="info-page"><a href="#Home">Trang chủ</a> › {title}<h1>{title}</h1><p>{description}</p><div className="info-list">{entries.map(entry=>{
 if(typeof entry==='number')return <CardForCourse key={entry} id={entry}/>;
 const [name,body,target]=entry.split('|')
 return page==='FAQ'?<details key={name}><summary>{name}</summary><p>{body}</p></details>:<section key={name}><h2>{name}</h2><p>{body}</p>{target&&<a href={'#'+target}>Mở {pages[target]?.[0]||'giỏ hàng'} →</a>}</section>
 })}</div>{topic&&<a href="#Catalog">Khám phá danh mục khóa học →</a>}</article>
}
