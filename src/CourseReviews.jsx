import React from 'react'

const learners=['Minh Anh','Hoàng Nam','Thu Hà','Phương Linh','Đức Huy','Mai Chi']
const comments={
 'Công nghệ':['Mình làm lại được bài thực hành mà không cần nhìn lời giải. Phần giảng viên phân tích lỗi rất đáng xem.','Mình phải dừng video vài lần để theo kịp phần thực hành. Có thêm một bài tự kiểm tra ở cuối chương thì tốt quá.'],
 'Ngôn ngữ':['Mình thích nhất phần tự thu âm rồi nghe lại. Đến lần thứ ba mình đã nói liền mạch hơn.','Ví dụ hội thoại dễ nhớ. Mình muốn có thêm bản đọc chậm để luyện trước khi nghe ở tốc độ thường.'],
 'Kinh tế':['Bảng tính mẫu giúp mình thử thay đổi từng giả định và hiểu vì sao kết quả thay đổi.','Ví dụ doanh nghiệp dễ theo dõi. Phần cuối đi hơi nhanh, mình phải mở lại bảng số liệu để xem.'],
 'Sức khoẻ':['Mình dùng nhật ký thực hành cả tuần và nhận ra vài thói quen trước đây hay bỏ qua.','Các bài ngắn nên dễ sắp vào giờ nghỉ. Mình mong có thêm mẫu kế hoạch cho người làm việc theo ca.'],
 'Thiết kế':['Mình sửa lại màn hình cũ theo phần phân tích của giảng viên. Hai bản đặt cạnh nhau nhìn ra khác biệt rất rõ.','File thực hành dễ dùng. Mình muốn xem thêm cách giảng viên nhận xét một phương án chưa tốt.'],
 'Marketing':['Mình đem khung phân tích áp vào chiến dịch của nhóm và chọn được chỉ số để theo dõi.','Ví dụ sát với công việc. Nếu có thêm một tình huống ngân sách nhỏ để tự giải thì càng tốt.']
}

export function CourseReviews({course,topic}){
 const {reviews:total,rating,id}=course
 // Allocate lower ratings first, then split the remainder to preserve the displayed average.
 const one=1,two=1,three=Math.max(1,Math.round(total*.01))
 const four=Math.round((5-rating)*total)-4*one-3*two-2*three
 const counts=[total-four-three-two-one,four,three,two,one]
 const [first,second]=comments[course.group]
 const notes=[first,second,'Mình đã lưu lại bài “'+topic+'” để ôn trước khi làm dự án cuối khóa. Có bài tập ngay sau phần giải thích nên mình biết mình còn vướng ở đâu.']
 return <section className="course-reviews" aria-label="Đánh giá của học viên">
  <div className="score-summary"><h2>Đánh giá khóa học</h2><strong>★ {rating.toFixed(1)} <small>/ 5</small></strong><p>{total} lượt đánh giá</p>
   {counts.map((n,i)=><div className="score-row" key={i}><span>{5-i} sao</span><progress value={n} max={total} aria-label={(5-i)+' sao'}/><span>{n} lượt</span></div>)}
  </div>
  <div className="student-notes"><h2>Nhận xét của học viên</h2>{notes.map((note,i)=>{
   const name=learners[(id+i)%learners.length],stars=i===1?4:5
   return <article key={name}><header><b className="student-avatar">{name.split(' ').map(w=>w[0]).join('')}</b><div><b>{name}</b><div><span className="review-stars" aria-label={stars+' trên 5 sao'}>{'★'.repeat(stars)+'☆'.repeat(5-stars)}</span> · {12-i*3}/10/2026</div></div></header><p>{note}</p></article>
  })}</div>
 </section>
}
