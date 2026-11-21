import React from 'react'
export default function Recover(){
 return <section className="recover-panel"><button className="recover-close" aria-label="Đóng" data-action="close">×</button><div className="recover-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg></div><h2>Quên mật khẩu?</h2><p>Nhập địa chỉ email bạn đã dùng để đăng ký tài khoản WeEdu.</p><label>Email của bạn<input type="email" name="email" autoComplete="email" placeholder="ban@example.com"/></label><button className="recover-submit" data-action="submit-auth">Gửi yêu cầu</button><button className="forgot-link" data-action="login">← Quay lại đăng nhập</button></section>
}
