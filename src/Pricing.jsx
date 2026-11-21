import React,{useContext,useState} from 'react'
import {State,money} from './controls'
import {courses} from './Shop'

export function priceLines(items){
 return items.map(([name,price])=>{
  const list=Math.max(price,courses.find(c=>c[0]===name)?.[5]??price)
  return {name,price,list,saving:list-price}
 })
}
export function totals(items,coupon){
 const lines=priceLines(items)
 const subtotal=lines.reduce((n,row)=>n+row.price,0)
 const saving=lines.reduce((n,row)=>n+row.saving,0)
 const voucher=coupon?Math.min(subtotal,100000):0
 return {lines,saving,list:subtotal+saving,voucher,due:subtotal-voucher}
}
export function Breakdown(){
 const {items,coupon,discount,page}=useContext(State)
 const [code,setCode]=useState(coupon?'HOCVUI':''),[status,setStatus]=useState('')
 const bill=totals(items,coupon)
 return <div className="bill">{page!=='Checkout'&&<form onSubmit={e=>{e.preventDefault();const valid=code.trim().toUpperCase()==='HOCVUI'&&items.length>0;discount(valid);setStatus(valid?'Đã áp dụng HOCVUI.':'Mã chưa hợp lệ hoặc giỏ hàng đang trống.')}}><div><input aria-label="Mã giảm giá" placeholder="Mã giảm giá" value={code} onChange={e=>{setCode(e.target.value);discount(false);setStatus('')}}/><button type="submit">Áp dụng</button></div><small role="status">{status}</small></form>}{page!=='Checkout'&&bill.lines.map(row=><section key={row.name}><b>{row.name}</b><span>Giá gốc <strong>{money(row.list)}</strong></span><span>Giảm giá <strong>−{money(row.saving)}</strong></span><span>Sau giảm <strong>{money(row.price)}</strong></span></section>)}<div className="bill-sum"><span>Tổng giá gốc <b>{money(bill.list)}</b></span><span>Giảm từ các khóa học <b>−{money(bill.saving)}</b></span>{coupon&&<span>Mã HOCVUI <b>−{money(bill.voucher)}</b></span>}</div></div>
}
