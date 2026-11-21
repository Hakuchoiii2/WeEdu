import React,{useEffect,useRef,useState} from 'react'

import {money} from './controls'
import './course-preview.css'
const examples={
 'Công nghệ':'Tách yêu cầu thành đầu vào, bước xử lý và kết quả mong đợi. Thử với một dữ liệu thông thường và một dữ liệu rỗng, rồi so sánh hai kết quả.',
 'Ngôn ngữ':'Chọn một tình huống giao tiếp quen thuộc. Viết hai cách diễn đạt cùng một ý cho bạn bè và cho đối tác. Gạch dưới những từ làm thay đổi sắc thái.',
 'Kinh tế':'Một cửa hàng thu 30 triệu đồng nhưng chỉ nhận được 20 triệu trong tháng. Phân biệt doanh thu và tiền thực nhận trước khi quyết định ngân sách tháng sau.',
 'Sức khoẻ':'Trong ba ngày, ghi lại thời điểm, hoàn cảnh và cảm nhận khi thực hiện một thói quen. Tìm một điểm lặp lại trước khi chọn thay đổi nhỏ để thử.',
 'Thiết kế':'Đặt hai phiên bản của cùng một màn hình cạnh nhau. Nhờ một người tìm nút tiếp tục rồi ghi lại nơi họ nhìn đầu tiên và số lần họ phải thử.',
 'Marketing':'Hai mẫu quảng cáo có cùng ngân sách. Mẫu A có nhiều lượt xem hơn, mẫu B mang về nhiều đơn hơn. Chọn chỉ số phù hợp với mục tiêu trước khi chọn mẫu.'
}
const pythonSteps=[
 ['Python có thể đọc dữ liệu, xử lý văn bản và tự động hóa những công việc lặp lại. Trong bài này, hãy bắt đầu bằng một phép tính nhỏ.','Gán gia = 15000 và so_luong = 3, sau đó chạy print(gia * so_luong). Kết quả 45000 là tổng tiền của ba món hàng.','Đổi số lượng thành 5. Hãy dự đoán kết quả trước khi chạy lại chương trình.'],
 ['Cài đặt Python 3 và mở một thư mục mới trong Visual Studio Code. Tạo tệp đầu tiên với tên hello.py.','Nhập print("Xin chào WeEdu") vào tệp, lưu lại và chọn Run Python File. Dòng chào sẽ xuất hiện trong cửa sổ Terminal.','Thay lời chào bằng tên của bạn và chạy lại. Nếu kết quả chưa đổi, kiểm tra xem tệp đã được lưu chưa.']
]
export function CoursePreview({course,poster,lessons,lesson,selectLesson,topic,project,close}){
 const dialog=useRef(null),player=useRef(null)
 useEffect(()=>{
  const el=dialog.current,previous=document.body.style.overflow
  el.showModal()
  document.body.style.overflow='hidden'
  return ()=>{el.close();document.body.style.overflow=previous}
 },[])

 const [time,seek]=useState(0),[playing,play]=useState(false),[started,start]=useState(false),[speed,rate]=useState(1)
 const python=course.id===0
 const titles=[...lessons,python?'Biến, kiểu dữ liệu và toán tử':'Bài thực hành: '+topic,'Bài tập cuối chương']
 const image='/assets/'+(python?'595aa.png':poster)
 const headings=['Giới thiệu bài học',python&&lesson===0?'Python được dùng ở đâu?':topic,'Ví dụ có hướng dẫn','Tự thực hành','Tổng kết bài học']
 const sample=python&&lesson<2?pythonSteps[lesson]:[course.desc,examples[course.group],project]
 const notes=[titles[lesson],sample[0],sample[1],sample[2],'Hãy ghi lại một điều vừa học được và cách bạn sẽ áp dụng vào bài tập tiếp theo.']
 const marks=[0,8,20,35,50,64]
 const duration=marks[marks.length-1]
 const current=marks.slice(1).findIndex(t=>time<t)
 const step=current<0?headings.length-1:current
 useEffect(()=>{
  if(!playing)return
  const timer=setInterval(()=>seek(t=>Math.min(duration,t+1)),1000/speed)
  return ()=>clearInterval(timer)
 },[playing,speed,duration])
 useEffect(()=>{if(time===duration)play(false)},[time,duration])
 function toggle(){if(time===duration)seek(0);start(true);play(!playing)}
 function changeLesson(i){selectLesson(i);seek(0);play(false);start(false)}
 function jump(t){seek(t);start(true)}
 const stamp=t=>Math.floor(t/60)+':'+String(t%60).padStart(2,'0')
 return <dialog ref={dialog} className="sample-dialog" aria-labelledby="sample-title" onCancel={close} onClick={e=>{if(e.target===dialog.current)close()}}>
  <div className="sample-shell"><header><i aria-hidden="true">▶</i><div><small><b>HỌC THỬ MIỄN PHÍ</b>　●　CHƯƠNG 1: {course.name}</small><h2 id="sample-title">Xem thử khóa học: {course.name} – {titles[lesson]}</h2></div><button autoFocus aria-label="Đóng xem thử" onClick={close}>×</button></header>
  <div className="sample-layout"><section className="sample-stage">
   <div className="sample-player" ref={player} style={{backgroundImage:'linear-gradient(#060b1255,#060b1260),url("'+image+'")'}}>
    <span className="sample-badge">●　BẢN XEM TRƯỚC MIỄN PHÍ</span>
    {started?<div className="sample-caption"><b>{headings[step]}</b><p>{notes[step]}</p></div>:<button className="sample-play" aria-label="Phát bài xem thử" onClick={toggle}>▶</button>}
    <div className="preview-player-controls"><input aria-label="Tiến độ bài xem thử" type="range" min="0" max={duration} value={time} onChange={e=>jump(Number(e.target.value))}/><div><button aria-label={playing?'Tạm dừng':'Phát'} onClick={toggle}>{playing?'Ⅱ':'▶'}</button><button aria-label="Lùi 10 giây" onClick={()=>jump(Math.max(0,time-10))}>↶</button><button aria-label="Tiến 10 giây" onClick={()=>jump(Math.min(duration,time+10))}>↷</button><time>{stamp(time)} / {stamp(duration)}</time><button aria-label="Tốc độ phát" onClick={()=>rate(speed===2?1:speed+.5)}>{speed}×</button><button aria-label="Toàn màn hình" onClick={()=>document.fullscreenElement?document.exitFullscreen():player.current.requestFullscreen?.()}>⛶</button></div></div>
   </div>
   <div className="sample-playlist"><h3>☷　BÀI XEM THỬ TIẾP THEO <small>3 bài mở khóa</small></h3><div>{titles.map((name,i)=><button key={i} disabled={i===3} aria-pressed={i===lesson} onClick={()=>changeLesson(i)}><span className="sample-thumb" style={{backgroundImage:'url("'+image+'")'}}><i>{i===3?'▣':'▶'}</i></span><strong>0{i+1}. {name}</strong><small>{i===3?'Đã khóa':i===lesson?'Đang chọn':'Xem thử'}</small></button>)}</div></div>
  </section><aside><div className="sample-marks"><h3>◷　CÁC MỐC THỜI GIAN</h3>{headings.map((h,i)=><button key={i} aria-pressed={step===i} onClick={()=>jump(marks[i])}><i>{i<step?'✓':'▶'}</i><span><b>{h}</b><small>{stamp(marks[i])} – {stamp(marks[i+1])}</small></span></button>)}</div>
   <footer><div><span>GIÁ ƯU ĐÃI</span><strong>{money(course.price)}</strong></div><del>{money(course.list)}</del><button data-action="buy-course" data-course={course.name}>Đăng ký khóa học ngay để xem trọn bộ</button><small>Truy cập trọn đời　·　Hoàn tiền trong 7 ngày</small></footer>
  </aside></div></div>
 </dialog>
}
