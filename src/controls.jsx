import {PasswordField} from './Account'
import {totals,priceLines} from './Pricing'
import {courses} from './Shop'
import React,{createContext,useContext} from 'react'
export const State=createContext({})
export const money=n=>n.toLocaleString('vi-VN')+'đ'
export function defaultCart(){return courses.slice(0,3)}
export function FieldControl({field,label,hint}){
 const {profile,page}=useContext(State)
 if(field==="password"||field==="confirm")return <PasswordField {...{field,label,hint}}/>
 const type=({terms:'checkbox',password:'password',confirm:'password',email:'email',newsletter:'email',phone:'tel'})[field]||'text'
 return <input className="live-input" name={field} aria-label={label} type={type} defaultChecked={field==='terms'} placeholder={hint} defaultValue={page==='Profile'?(profile[field]||hint):undefined}/>
}
export function OrderRows({children}){
 const {items}=useContext(State)
 return items.length?items.map(([name,price,category,description])=><div style={{display:'contents'}} key={name} data-item={name}>{children({name,...priceLines([[name,price]])[0],formattedPrice:money(price),category,description})}</div>):<p>Giỏ hàng trống</p>
}
export function LiveText({slot}){
 const {items,coupon,profile,page}=useContext(State), n=items.length, bill=totals(items,coupon), total=money(bill.due)
 return ({count:n,'cart-caption':n+' khóa học trong giỏ','order-title':'Đơn hàng ('+n+' khóa học)',added:'Đã thêm vào giỏ hàng thành công! ('+n+')',original:money(bill.list),saving:'−'+money(bill.saving),total,'pay-label':'Thanh toán '+total,'account-email':profile.email||'user123@gmail.com','account-name':profile.name||'User'})[slot]
}
