import React,{useContext,useRef,useState} from 'react'
import {State} from './controls'

const groups=['Tất cả danh mục','Công nghệ','Ngôn ngữ','Kinh tế','Sức khoẻ','Thiết kế','Marketing']
const counts=[0,8,6,4,4,4,4]
const symbols=['','</>','文','↗','♡','✎','⚑']
const examples={
 'Kinh tế':['Đọc hiểu báo cáo tài chính','Kinh tế học qua tình huống','Quản trị dòng tiền','Lập kế hoạch kinh doanh'],
 'Sức khoẻ':['Dinh dưỡng trong đời sống','Giấc ngủ và nhịp sinh học','Vận động tại bàn làm việc','Quản lý căng thẳng'],
 'Thiết kế':['Bố cục cho giao diện web','Typography tiếng Việt','Màu sắc trong thiết kế','Dựng prototype với Figma'],
 'Marketing':['Viết nội dung cho thương hiệu','SEO cho người mới','Đo lường chiến dịch số','Lập kế hoạch truyền thông']
}
export function CategoryBar(){
 const {category,setCategory}=useContext(State)
 return <><nav className="category-bar" aria-label="Danh mục khóa học">{groups.map((g,i)=><button key={g} type="button" aria-pressed={category===g} onClick={()=>setCategory(g)}><b aria-hidden="true">{symbols[i]}</b>{g}{i>0&&<small>{counts[i]}</small>}</button>)}</nav>{category===groups[0]&&<section className="category-overview"><h2>Khám phá theo lĩnh vực</h2><div>{groups.slice(1).map((g,i)=><button key={g} onClick={()=>setCategory(g)}><img src={"/assets/"+["d9003.png","design-1.webp","economics-0.webp","health-0.webp","design-0.webp","marketing-0.webp"][i]} alt=""/><b>{g}</b></button>)}</div></section>}</>
}
export function CourseGroup({name,children}){
 const {category}=useContext(State)
 return category===name?children:null
}
export function ExampleCourses(){
 const dialog=useRef(null),[selected,select]=useState('')
 return <>{Object.entries(examples).map(([name,titles])=><CourseGroup key={name} name={name}><section className="sample-section"><h2>Phổ biến trong {name}</h2><div className="sample-grid">{titles.map((title,i)=><button key={title} className="sample-card" onClick={()=>{select(title);dialog.current.showModal()}}><img className="sample-cover" alt="" src={"/assets/"+({"Kinh tế":"economics","Sức khoẻ":"health","Thiết kế":"design","Marketing":"marketing"}[name])+"-"+i+".webp"}/><small>{name}</small><h3>{title}</h3><span>{12+i*2} bài học · Cơ bản</span><b>Xem chi tiết →</b></button>)}</div></section></CourseGroup>)}<dialog ref={dialog} className="course-dialog"><h2>{selected}</h2><p>Khóa học nhập môn gồm bài giảng ngắn, bài tập thực hành và bài tổng kết.</p><button onClick={()=>dialog.current.close()}>Đóng</button></dialog></>
}
