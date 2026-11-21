import {Discount} from "./CoursePresentation"
import {additionalCourses} from './subjects'
import React,{useContext,useEffect,useRef} from 'react'
import {State,money} from './controls'
export const courses=[
 ['Lập trình Python cơ bản',299000,'LẬP TRÌNH PYTHON','Cú pháp, vòng lặp và hàm trong Python.','d9003',490000],
 ['Web Fullstack JavaScript',599000,'FRONTEND & BACKEND','Xây dựng ứng dụng web từ giao diện đến máy chủ.','e3e43',999000],
 ['Khoa học dữ liệu & Trí tuệ nhân tạo',649000,'DATA & AI','Khám phá dữ liệu và thực hành xây dựng mô hình.','4dfbe',1080000],
 ['Cấu trúc dữ liệu & Giải thuật',399000,'KHOA HỌC MÁY TÍNH','Phân tích thuật toán và lựa chọn cấu trúc dữ liệu.','305c2',699000],
 ['C++ nâng cao & tối ưu hệ thống',449000,'LẬP TRÌNH HỆ THỐNG','Quản lý bộ nhớ và tối ưu hiệu năng ứng dụng.','bab95',750000],
 ['Di động React Native & Flutter',520000,'MOBILE','Thiết kế và xây dựng ứng dụng đa nền tảng.','ffa47',850000],
 ['Java Spring Boot & Microservices',560000,'BACKEND','Phát triển dịch vụ web với Java.','58bb8',950000],
 ['Lập trình hướng đối tượng',350000,'CƠ SỞ NGÀNH','Mô hình hóa bài toán với lớp và đối tượng.','463f0',600000],
 ...additionalCourses
]
export const cover=name=>'/assets/'+(courses.find(c=>c[0]===name)?.[4]||(/python/i.test(name)?'d9003':/SQL/i.test(name)?'4dfbe':'e3e43'))+'.png'
export function Suggestions(){return <section className="suggestions">{courses.slice(3,7).map(([name,price,category,description,,list])=><article key={name}><img src={cover(name)} alt=""/><small>{category}</small><h3>{name}</h3><p>{description}</p><footer><span><del className="list-price">{money(list)}</del><Discount price={price} list={list}/> <b>{money(price)}</b></span><button data-action="add-suggested" data-course={name} aria-label={'Thêm '+name+' vào giỏ'}>+</button></footer></article>)}</section>}
export function CartIcon(){const {items,member}=useContext(State);return <button data-action="cart" className="cart-icon" aria-label={member?'Giỏ hàng, '+items.length+' khóa học':'Giỏ hàng'}><svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h3l2.4 12h11.8L22 7H6"/><circle cx="9" cy="20" r="1.3"/><circle cx="18" cy="20" r="1.3"/></svg>{member&&items.length>0&&<small>{items.length}</small>}</button>}
export function AuthDialog({close,width,children,showCartNotice}){
 const ref=useRef(null)
 useEffect(()=>{const el=ref.current,previous=document.body.style.overflow;el.showModal();document.body.style.overflow='hidden';return()=>{el.close();document.body.style.overflow=previous}},[])
 const noticeRef=useRef(null)
 useEffect(()=>{
  if(!showCartNotice)return
  const note=noticeRef.current
  note.showPopover()
  const timer=setTimeout(()=>note.hidePopover(),3000)
  return ()=>{clearTimeout(timer);note.hidePopover()}
 },[showCartNotice])
 return <dialog ref={ref} className="auth-dialog" role="dialog" aria-label="Tài khoản WeEdu" style={{width}} onCancel={e=>{e.preventDefault();close()}} onClick={e=>{if(e.target===ref.current)close()}}><section>{children}</section>{showCartNotice&&<p ref={noticeRef} popover="manual" role="status" className="cart-login-note">Đăng nhập để truy cập giỏ hàng của bạn.</p>}</dialog>
}
