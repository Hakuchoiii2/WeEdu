import React,{useContext,useId,useState} from 'react'
import {State} from './controls'

export function HeaderAccount(){
 const {member,profile}=useContext(State)
 if(!member)return <div className="header-account"><button data-action="login">Đăng nhập</button><button className="signup" data-action="register">Đăng ký</button></div>
 const name=profile.name||profile.email?.split('@')[0]||'Học viên'
 return <button className="account-profile" data-action="profile" aria-label={'Hồ sơ của '+name}><span aria-hidden="true">{name.charAt(0).toUpperCase()}</span><b>{name}</b><small>⌄</small></button>
}
export function PasswordField({field,label,hint}){
 const [shown,setShown]=useState(false), id=useId()
 return <div className="password-entry"><input id={id} name={field} aria-label={label} placeholder={hint} autoComplete={field==='confirm'||hint.includes('8')?'new-password':'current-password'} type={shown?'text':'password'}/><button type="button" aria-controls={id} aria-label={(shown?'Ẩn ':'Hiện ')+(field==='confirm'?'mật khẩu xác nhận':'mật khẩu')} onMouseDown={e=>e.preventDefault()} onClick={()=>setShown(!shown)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="2.8"/>{shown&&<path d="m3 3 18 18"/>}</svg></button></div>
}
