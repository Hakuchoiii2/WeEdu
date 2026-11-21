import React,{Children,useContext,useEffect,useRef,useState} from 'react'
import {courses} from './Shop'
import {State} from './controls'
const categories=['Tất cả','Frontend','Backend & Cơ sở dữ liệu','Data & AI','Di động (Mobile)','Cơ sở ngành UIT']
const group=[2,1,3,5,5,4,2,5],level=[1,2,2,1,3,2,3,1]
export const defaults={category:0,level:0,price:0,sort:0}
export function useCatalog(){
 const {filters,setFilters}=useContext(State)
 const ids=courses.map((_,i)=>i).filter(i=>(!filters.category||group[i]===filters.category)&&(!filters.level||level[i]===filters.level)&&(!filters.price||(filters.price===1?courses[i][1]<500000:courses[i][1]>=500000)))
 if(filters.sort)ids.sort((a,b)=>(courses[a][1]-courses[b][1])*(filters.sort===1?1:-1))
 return {filters,setFilters,ids}
}
export function FilterMenu({title,options,value,onChange}){
 const [open,setOpen]=useState(false), root=useRef(null), trigger=useRef(null)
 useEffect(()=>{
  if(!open)return
  const outside=e=>{if(!root.current?.contains(e.target))setOpen(false)}
  document.addEventListener('pointerdown',outside)
  return ()=>document.removeEventListener('pointerdown',outside)
 },[open])
 return <div className="filter-menu" ref={root} onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget))setOpen(false)}} onKeyDown={e=>{if(e.key==='Escape'){setOpen(false);trigger.current.focus()}}}>
  <button ref={trigger} aria-expanded={open} onClick={()=>setOpen(!open)}>{title}: {options[value]} <span aria-hidden="true">⌄</span></button>
  {open&&<div className="filter-options" role="group" aria-label={title}>{options.map((text,i)=><button key={text} aria-pressed={value===i} onClick={()=>{onChange(i);setOpen(false);trigger.current.focus()}}>{text}</button>)}</div>}
 </div>
}
export function FilterBar(){
 const {filters,setFilters}=useCatalog()
 const update=(key,value)=>setFilters(old=>({...old,[key]:Number(value)}))
 return <div className="catalog-filters"><div>{categories.map((label,i)=><button key={label} aria-pressed={filters.category===i} onClick={()=>update('category',i)}>{label}</button>)}</div><div>{[['level','Trình độ',['Mọi cấp độ','Cơ bản','Trung cấp','Nâng cao']],['price','Giá',['Tất cả','Dưới 500.000đ','Từ 500.000đ']],['sort','Sắp xếp',['Phổ biến nhất','Giá tăng dần','Giá giảm dần']]].map(([key,title,opts])=><FilterMenu key={key} title={title} options={opts} value={filters[key]} onChange={v=>update(key,v)} />)}</div></div>
}
export function FilteredCards({children}){
 const {ids,setFilters}=useCatalog(), cards=Children.toArray(children)
 return ids.length?<div className="catalog-results">{ids.map(i=>cards[i])}</div>:<section className="catalog-empty">Chưa có khóa học phù hợp. <button onClick={()=>setFilters(defaults)}>Xóa bộ lọc</button></section>
}
