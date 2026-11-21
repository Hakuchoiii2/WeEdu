import React,{useRef,useState} from 'react'
import {CoursePreview} from './CoursePreview'
import {CourseReviews} from './CourseReviews'
import './course-detail.css'
import {Discount} from './CoursePresentation'
import {money} from './controls'

const workshops={
 'Công nghệ':['Thiết kế lời giải','Triển khai và kiểm thử','Xây dựng một sản phẩm có thể chạy thử và giải thích cách kiểm tra kết quả.'],
 'Ngôn ngữ':['Phân tích ngữ liệu','Luyện tập theo tình huống','Chuẩn bị một bài trình bày và tự đánh giá theo tiêu chí ngôn ngữ đã học.'],
 'Kinh tế':['Đọc dữ liệu doanh nghiệp','So sánh phương án','Lập bản đề xuất cho doanh nghiệp mẫu và giải thích lựa chọn bằng số liệu.'],
 'Sức khoẻ':['Quan sát thói quen','Lên kế hoạch thực hành','Thiết kế nhật ký cá nhân và tổng kết những thay đổi sau một tuần.'],
 'Thiết kế':['Phân tích sản phẩm','Thực hành trong Figma','Hoàn thiện một mẫu thiết kế và trình bày các quyết định cho nhóm.'],
 'Marketing':['Nghiên cứu đối tượng','Thử nghiệm thông điệp','Xây dựng bản kế hoạch chiến dịch kèm chỉ số đánh giá.']
}
const focus=[
 [],['Thành phần giao diện và trạng thái','API và lưu trữ dữ liệu'],['Khám phá tập dữ liệu','Huấn luyện và đánh giá mô hình'],['Danh sách, cây và đồ thị','So sánh độ phức tạp'],['Quản lý bộ nhớ','Đo hiệu năng ứng dụng'],['Bố cục và điều hướng','Kết nối dữ liệu trên di động'],['Thiết kế REST API','Phân tách dịch vụ'],['Đối tượng và đóng gói','Kế thừa và đa hình'],
 ['Lập dàn ý Writing Task 2','Luyện phản xạ Speaking'],['Viết email cho đối tác','Điều phối cuộc họp'],['Mẫu câu N3','Chiến lược đọc đoạn văn'],['Nghe ý chính','Viết đoạn văn TOPIK'],['Từ vựng theo chủ điểm','Đọc hiểu hội thoại HSK'],['Nguyên âm và phụ âm','Trọng âm và nối âm'],
 ['Đọc bảng cân đối kế toán','Phân tích dòng tiền hoạt động'],['Cung cầu và giá cân bằng','Chi phí cơ hội'],['Dự báo dòng tiền','Xây dựng kịch bản thu chi'],['Chân dung khách hàng','Dự toán chi phí và doanh thu'],
 ['Đọc nhãn dinh dưỡng','Xây dựng thực đơn tuần'],['Nhịp thức ngủ','Phân tích nhật ký giấc ngủ'],['Bố trí bàn làm việc','Xây dựng lịch vận động'],['Nhận diện tác nhân gây áp lực','Thực hành nghỉ ngắn'],
 ['Hệ thống lưới','Phân cấp thông tin'],['Chọn font tiếng Việt','Khoảng cách và nhịp dòng'],['Phối màu theo ngữ cảnh','Kiểm tra độ tương phản'],['Thiết kế luồng tương tác','Kiểm thử prototype'],
 ['Giọng điệu thương hiệu','Biên tập bài viết'],['Ý định tìm kiếm','Xây dựng dàn bài SEO'],['Lựa chọn chỉ số','So sánh hiệu quả kênh'],['Chọn kênh và thông điệp','Phân bổ ngân sách']
]

const pythonChapters=['Giới thiệu & Cài đặt môi trường phát triển','Cú pháp, Biến & Các kiểu dữ liệu cơ bản','Cấu trúc điều kiện và Vòng lặp','Hàm & Module trong Python','Danh sách và từ điển','Làm việc với tệp và ngoại lệ','Tự động hóa với Python','Dự án tổng kết']
const pythonIntro=['Tổng quan về ngôn ngữ Python & xu hướng phát triển','Cài đặt Python 3, Visual Studio Code và thiết lập môi trường','Viết chương trình đầu tiên: Hello World & quy chuẩn PEP 8','Bài tập trắc nghiệm cấu hình môi trường & cú pháp mở đầu']
const pythonGoals=['Nắm vững tư duy lập trình và cấu trúc giải thuật nền tảng cho người mới bắt đầu.','Thành thạo cú pháp Python 3.x, biến, cấu trúc rẽ nhánh, vòng lặp và xử lý ngoại lệ.','Làm chủ các kiểu dữ liệu List, Tuple, Dictionary, Set và Comprehensions.','Tổ chức mã nguồn với hàm, module và package tái sử dụng.','Đọc, ghi và xử lý tệp CSV, JSON phục vụ tiền xử lý dữ liệu.','Xây dựng ba dự án thực tế: quản lý chi tiêu, thu thập dữ liệu và mini game.']
const artGroups={'Ngôn ngữ':'design','Kinh tế':'economics','Sức khoẻ':'health','Thiết kế':'design','Marketing':'marketing'}
function Icon({file}){return <img className="detail-icon" src={'/assets/'+file+'.svg'} alt=""/>}

export function CourseDetail({c}){
 const [reviews,setReviews]=useState(false),[expanded,expand]=useState([0])
 const tabs=useRef(null),[lesson,selectLesson]=useState(null),[shareMessage,setShareMessage]=useState('')
 const python=c.id===0
 const [analysis,practice,project]=workshops[c.group]
 const [topic,advanced]=focus[c.id]?.length?focus[c.id]:[analysis,practice]
 const chapters=python?pythonChapters:['Nhập môn '+c.name,topic,advanced,'Dự án cuối khóa']
 const counts=python?[4,5,6,5,6,6,6,7]:chapters.map((_,i)=>Math.floor(c.lessons/4)+(i<c.lessons%4?1:0))
 const chapterMinutes=python?[45,75,105,130,90,90,90,95]:counts.map((count,i)=>{
  const previous=counts.slice(0,i).reduce((sum,n)=>sum+n,0)
  return Math.round((previous+count)*c.hours*60/c.lessons)-Math.round(previous*c.hours*60/c.lessons)
 })
 const goals=python?pythonGoals:[c.desc,'Vận dụng kiến thức về '+topic.toLocaleLowerCase('vi')+' vào bài thực hành.', 'Tự kiểm tra kết quả sau bài '+advanced.toLocaleLowerCase('vi')+'.',project,'Giải thích lựa chọn của mình qua một tình huống thực tế.','Hoàn thiện bài cuối khóa dựa trên phản hồi của giảng viên.']
 const poster=python?'35f5a.png':c.image?c.image+'.png':artGroups[c.group]+'-'+c.id%4+'.webp'
 const stats=[['b773a','Trình độ',c.level],['4217a','Số chương',chapters.length+' chương'],['91cbf','Số bài học',c.lessons+' bài học'],['c00e5','Thời lượng',c.hours+' giờ']]
 const freeLessons=python?pythonIntro.slice(0,2):[chapters[0], 'Ví dụ minh họa: '+topic]
 const allOpen=expanded.length===chapters.length
 return <article className="detail-page"><div className="detail-layout"><div>
  <div className="track-label">●　{python?'Lộ trình nhập môn IT chuẩn UIT':'Lộ trình '+c.group}</div>
  <h1>{c.name}</h1><p className="detail-intro">{python?'Trang bị tư duy thuật toán cốt lõi, thành thạo cú pháp Python hiện đại và tự tay xây dựng các ứng dụng tự động hóa, phân tích dữ liệu ứng dụng thực tiễn ngay từ con số 0.':c.desc+' '+project}</p>
  <div className="detail-byline"><span><strong className="review-stars">★</strong> <b>{c.rating.toFixed(1)}</b> / 5.0　<button onClick={()=>{setReviews(true);tabs.current.scrollIntoView({block:'start'})}}>({c.reviews} đánh giá)</button></span><span>♧　<b>{(c.reviews*10).toLocaleString('vi-VN')}</b> học viên đã đăng ký</span><span><i className="student-avatar">{c.teacher.split(' ').map(w=>w[0]).filter((_,i,a)=>i===0||i===a.length-1).join('')}</i> Giảng viên:　<b>{c.teacher}</b>　<em>{python?'Python Lead':c.group}</em></span></div>
  <div className="detail-facts">{stats.map(([file,label,val])=><span key={label}><Icon file={file}/>{label}: <b>{val}</b></span>)}</div>
  <section className="detail-goals"><h2><Icon file="3b7fb"/>Bạn sẽ học được gì sau khóa học?</h2><ul>{goals.map(text=><li key={text}><Icon file="4384b"/>{text}</li>)}</ul></section>
  <div className="lesson-switch" ref={tabs}><button aria-pressed={!reviews} onClick={()=>setReviews(false)}>Nội dung bài học</button><button aria-pressed={reviews} onClick={()=>setReviews(true)}>Đánh giá ({c.reviews})</button></div>
  {reviews?<CourseReviews course={c} topic={chapters[1]}/>:<section className="lesson-program"><header>Khám phá {chapters.length} chương với {c.lessons} bài thực hành chuyên sâu<button onClick={()=>expand(allOpen?[]:chapters.map((_,i)=>i))}>{allOpen?'Thu gọn tất cả':'Mở rộng tất cả'}</button></header>
   {chapters.map((title,i)=>{
    const open=expanded.includes(i)
    return <section className="unit-box" key={title}><button className="unit-toggle" aria-expanded={open} onClick={()=>expand(open?expanded.filter(n=>n!==i):[...expanded,i])}><span>{open?'⌃':'⌄'}</span><span><small><b>CHƯƠNG {i+1}</b>　•　{counts[i]} bài học　•　{chapterMinutes[i]} phút</small><strong>{title}</strong></span>{i===0&&<em>2 bài xem thử</em>}</button>
    {open&&<ol>{Array.from({length:counts[i]},(_,j)=>{
     const text=i===0&&j<2?freeLessons[j]:python&&i===0?pythonIntro[j]:[title,'Ví dụ minh họa','Phân tích tình huống','Thực hành có hướng dẫn','Bài tập ứng dụng','Tự kiểm tra','Tổng kết','Bài đọc mở rộng','Bài luyện tập','Đối chiếu kết quả','Thảo luận','Tự đánh giá cuối chương'][j]
     const seconds=python&&i===0?[540,900,690,570][j]:Math.round((j+1)*chapterMinutes[i]*60/counts[i])-Math.round(j*chapterMinutes[i]*60/counts[i])
     const duration=Math.floor(seconds/60)+':'+String(seconds%60).padStart(2,'0')
     const free=i===0&&j<2
     return <li key={j}><span aria-hidden="true">{free?'▷':'▫'}</span> {i+1}.{j+1}　{text}<time className="unit-duration">{duration}</time>{free&&<button onClick={()=>selectLesson(j)}>Xem thử</button>}</li>
    })}</ol>}</section>
   })}</section>}
 </div><aside className="detail-enrol">
  <button className="detail-poster" onClick={()=>selectLesson(0)}><img src={'/assets/'+poster} alt=""/><small>{python?'FULL HD 1080P':'BÀI HỌC MẪU'}</small><i>▶</i><b>Xem thử khóa học</b></button>
  <div className="detail-order"><p><strong>{money(c.price)}</strong>　<del>{money(c.list)}</del>　<Discount {...c}/></p><small className="offer-note">◷　Ưu đãi áp dụng chỉ còn <b>2 ngày</b></small>
   <button className="enrol-primary" data-action="buy-course" data-course={c.name}>ϟ　Đăng ký khóa học ngay</button><button className="enrol-secondary" data-action="add-course" data-course={c.name}>＋　Thêm vào giỏ hàng</button>
   <p className="refund">Cam kết hoàn tiền trong 7 ngày nếu không hài lòng</p><h3>Khóa học bao gồm:</h3><ul>{['Chứng chỉ hoàn thành được cấp bởi WeEdu','Bài tập thực hành sát thực tế kèm lời giải chi tiết','Hỗ trợ trực tiếp từ giảng viên và trợ giảng','Quyền truy cập trọn đời trên website và thiết bị di động','Tài liệu và bài mẫu theo từng chương'].map(item=><li key={item}>✓　{item}</li>)}</ul>
   <footer><button onClick={()=>{navigator.clipboard?.writeText(location.href).then(()=>setShareMessage('Đã sao chép liên kết'),()=>setShareMessage(location.href));if(!navigator.clipboard)setShareMessage(location.href)}}>Chia sẻ khóa học</button><button data-action="favorite">Lưu vào yêu thích</button></footer>
   {shareMessage&&<small role="status">{shareMessage}</small>}
  </div></aside></div>
  {lesson!==null&&<CoursePreview course={c} poster={poster} lessons={freeLessons} lesson={lesson} selectLesson={selectLesson} topic={topic} project={project} close={()=>selectLesson(null)}/>}
 </article>
}

