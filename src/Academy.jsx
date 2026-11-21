import {CourseDetail} from './CourseDetail'
import {CategoryBar} from './Categories'
import {Discount,TitleCover} from './CoursePresentation'
import React,{useContext,useState} from 'react'
import {courses} from './Shop'
import {State,money} from './controls'
import {subjects} from './subjects'
import {FilterMenu} from './CatalogFilters'
const groups=['Công nghệ',...Object.keys(subjects)]
const teachers=['Nguyễn Văn A','Trần Minh Châu','Phạm Thanh Hà','Đặng Thu An','Trần Thu Hà','Lê Ngọc Anh']
const covers=['lagoon','orbit','solar','berry','cobalt','peach','iris','mint']
const levels=['Cơ bản','Trung cấp','Nâng cao']
const entries=courses.map(([name,price,tag,desc,image,list],i)=>{
 const group=subjects[tag]?tag:groups[0], g=groups.indexOf(group)
 return {id:i,name,price,list,tag,desc,image,group,teacher:teachers[g],rating:i===0?4.8:[4.9,4.8,4.7,4.9][i%4],reviews:i===0?120:142+i*17,cover:covers[(i+g)%covers.length],hours:i===0?12:16+i%10*2,lessons:i===0?45:24+i%9*3,level:levels[[0,1,1,0,2,1,2,0][i%8]]}
})
export function CardForCourse({id}){return <CourseCard c={entries[id]}/> }
// Catalog route IDs for Fullstack, Figma, Data & AI and IELTS.
const popularCourseIds=[1,25,2,8]
export function PopularCourses(){
 return <div className="academy-grid popular-courses">{popularCourseIds.map(id=><CardForCourse key={id} id={id}/>)}</div>
}
export const courseFromRoute=route=>route==='Detail'?entries[0]:entries.find(c=>route==='course/'+c.id)
function Banner({c}){return <TitleCover variant={c.cover} tag={c.group} meta={c.lessons+' bài · '+c.hours+' giờ'} title={c.name} subtitle={c.level+' · Học qua thực hành'}/>}
export function CourseCard({c}){return <a className="academy-card course-lift" href={c.id===0?'#Detail':'#course/'+c.id}><Banner c={c}/><section><small>{c.teacher} · Giảng viên {c.group}</small><h3>{c.name}</h3><p>{c.desc}</p><div className="review-meta"><b>★ {c.rating.toFixed(1)}</b><span>({c.reviews.toLocaleString("vi-VN")} đánh giá)</span><i aria-hidden="true">•</i><small>{c.lessons} Bài giảng</small></div></section><footer><div><del>{money(c.list)}</del><Discount {...c}/><b>{money(c.price)}</b></div><strong>Xem khóa học ↗</strong></footer></a>}
function searchable(text){
 return text.toLocaleLowerCase('vi').normalize('NFD').replace(/\p{M}/gu,'').replaceAll('đ','d')
}
export function Academy({page,course,query=''}){
 const {category,setCategory}=useContext(State),[group,setGroup]=useState('Tất cả danh mục'),[level,L]=useState(0),[price,P]=useState(0),[sort,S]=useState(0)
 if(course)return <CourseDetail c={course}/>
 const browse=page==='Explore',active=browse?category:group,all='Tất cả danh mục'
 let visible=entries.filter(c=>(active===all||active===c.group)&&(!level||c.level===levels[level-1])&&(!price||(price===1?c.price<500000:c.price>=500000)))
 if(page==='Search'&&query){
  const terms=searchable(query).split(/\s+/)
  visible=visible.filter(c=>{
   const text=searchable([c.name,c.desc,c.group,c.teacher,c.tag].join(' '))
   return terms.every(term=>text.includes(term))
  })
 }
 if(sort)visible.sort((a,b)=>(sort===1?1:-1)*(a.price-b.price))
 if(page==='Search'){
  if(!sort)visible.reverse()
  const categories=[all,...groups]
  return <article className="academy">
   <header className="search-toolbar">
    <div className="search-summary"><strong>{query?'Kết quả cho “'+query+'”':'Tất cả kết quả'}</strong><small aria-live="polite">{visible.length} kết quả</small></div>
     <div className="search-filter-fields">
      <FilterMenu title="Danh mục" options={categories} value={categories.indexOf(group)} onChange={i=>setGroup(categories[i])}/>
      <FilterMenu title="Trình độ" options={['Mọi cấp độ',...levels]} value={level} onChange={L}/>
      <FilterMenu title="Giá" options={['Tất cả','Dưới 500.000đ','Từ 500.000đ']} value={price} onChange={P}/>
     </div>
    <div className="search-sort"><FilterMenu title="Sắp xếp theo" options={['Mới nhất (Ưu tiên)','Giá tăng dần','Giá giảm dần']} value={sort} onChange={S}/></div>
   </header>
   <div className="academy-grid">{visible.map(c=><CourseCard c={c} key={c.id}/>)}</div>
  </article>
 }
 return <article className="academy"><h1>{browse?'Trung tâm Danh mục & Khám phá':'Tất cả khóa học'}</h1>{browse?<CategoryBar/>:<nav className="catalog-filters"><div>{[all,...groups].map(g=><button key={g} aria-pressed={active===g} onClick={()=>browse?setCategory(g):setGroup(g)}>{g}</button>)}</div>{!browse&&<div><FilterMenu title="Trình độ" options={['Mọi cấp độ',...levels]} value={level} onChange={L}/><FilterMenu title="Giá" options={['Tất cả','Dưới 500.000đ','Từ 500.000đ']} value={price} onChange={P}/><FilterMenu title="Sắp xếp" options={['Phổ biến nhất','Giá tăng dần','Giá giảm dần']} value={sort} onChange={S}/></div>}</nav>}{browse&&active===all?null:<><p>{visible.length} khóa học phù hợp</p><div className="academy-grid">{visible.map(c=><CourseCard c={c} key={c.id}/>)}</div></>}</article>
}
