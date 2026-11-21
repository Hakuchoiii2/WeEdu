import React,{useCallback,useEffect,useLayoutEffect,useRef,useState} from 'react'

export function useHomeReveal(){
 const root=useRef(null)
 useLayoutEffect(()=>{
  if(!window.IntersectionObserver||matchMedia('(prefers-reduced-motion: reduce)').matches)return
  const blocks=[...root.current.children]
  const observer=new IntersectionObserver(entries=>{
   for(const {target,isIntersecting} of entries)if(isIntersecting){
    target.classList.remove('awaiting-reveal')
    observer.unobserve(target)
   }
  },{threshold:0.06})
  for(const block of blocks){
   block.classList.add('home-section','awaiting-reveal')
   observer.observe(block)
  }
  return ()=>{observer.disconnect();blocks.forEach(b=>b.classList.remove('awaiting-reveal','home-section'))}
 },[])
 return root
}

const reviews=[
 ['Lê Ngọc Mai','Học viên Python','Bài tập xử lý bảng điểm giúp mình hiểu vòng lặp dùng ở đâu. Mình đã sửa lại đoạn mã cũ để tổng hợp điểm cho cả lớp.'],
 ['Trần Quang Huy','Học viên thiết kế','Mình thích bài dựng lại màn hình đăng ký. Sau vài lần chỉnh khoảng cách, mình đã nhìn ra vì sao bản đầu tiên khó đọc.'],
 ['Phạm Khánh Linh','Học viên kinh tế','Trước đây mình chỉ nhìn dòng lợi nhuận. Bài thực hành so sánh hai báo cáo giúp mình biết cần kiểm tra thêm những con số nào.'],
 ['Võ Gia Bảo','Học viên lập trình web','Mình tự làm được bộ lọc sản phẩm cho đồ án. Phần khó nhất là giữ lựa chọn khi đổi trang, nên mình xem lại đoạn này mấy lần.'],
 ['Đỗ Minh Thư','Học viên marketing','Bài viết tiêu đề theo ba nhóm người đọc khá thú vị. Cùng một sản phẩm mà mình tìm được ba cách mở bài khác nhau.'],
 ['Ngô Nhật Nam','Học viên khoa học dữ liệu','Từ một bảng dữ liệu lộn xộn, mình đã biết lọc dòng trùng và chọn biểu đồ để giải thích kết quả cho nhóm.'],
 ['Hoàng Bảo Ngọc','Học viên UI/UX','Phần đặt tên các biến màu rất sát với lúc làm việc nhóm. Khi đổi giao diện tối, tụi mình không còn phải sửa từng nút nữa.'],
 ['Bùi Đức Anh','Học viên Java','Mình thường bị rối ở bước tách lớp. Ví dụ quản lý thư viện giúp mình tự vẽ sơ đồ trước khi bắt tay viết code.'],
 ['Tạ Thanh Vy','Học viên ngoại ngữ','Mình chia bài nghe thành từng đoạn ngắn và ghi lại những cụm dùng khi họp. Cách học này hợp với lịch buổi tối của mình.']
]

export function ReviewRail({children}){
 const rail=useRef(null)
 const [paused,pause]=useState(()=>matchMedia('(prefers-reduced-motion: reduce)').matches)
 const [interacting,setInteracting]=useState(false)
 const pointerActive=useRef(false)
 const interactionTimer=useRef(null)
 const cards=React.Children.toArray(children).concat(reviews.map(([name,role,quote])=><article key={name} className="review-card"><div aria-label="5 sao">★★★★★ <b aria-hidden="true">❝</b></div><blockquote>“{quote}”</blockquote><footer><i>{name.split(' ').slice(-2).map(w=>w[0]).join('')}</i><span><strong>{name}</strong><small>{role}</small></span></footer></article>))
 const step=useCallback(direction=>{
  const el=rail.current
  if(!el||!el.firstElementChild)return
  const loopStart=el.querySelector('[data-loop-start]')
  if(!loopStart)return
  const loopWidth=loopStart.offsetLeft-el.firstElementChild.offsetLeft
  if(loopWidth<=0)return
  const distance=el.firstElementChild.offsetWidth+24
  let next=el.scrollLeft+direction*distance
  let behavior='smooth'
  if(direction>0&&next>=loopWidth){next-=loopWidth;behavior='instant'}
  else if(direction<0&&next<0){next+=loopWidth;behavior='instant'}
  el.scrollTo({left:next,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':behavior})
 },[])
 useEffect(()=>{
  if(paused||interacting)return
  const el=rail.current
  if(!el||!el.firstElementChild)return
  const loopStart=el.querySelector('[data-loop-start]')
  if(!loopStart)return
  const loopWidth=loopStart.offsetLeft-el.firstElementChild.offsetLeft
  if(loopWidth<=0)return
  let animationFrame=0,lastTime=0,position=el.scrollLeft
  function animate(time){
   if(lastTime&&!document.hidden){
    const elapsed=Math.min(time-lastTime,50)
    position+=elapsed*0.03
    if(position>=loopWidth)position%=loopWidth
    el.scrollLeft=position
   }
   lastTime=time
   animationFrame=requestAnimationFrame(animate)
  }
  animationFrame=requestAnimationFrame(animate)
  return ()=>cancelAnimationFrame(animationFrame)
 },[paused,interacting])
 function pauseForInteraction(){
  clearTimeout(interactionTimer.current)
  interactionTimer.current=null
  setInteracting(true)
 }
 function resumeAfterInteraction(){
  clearTimeout(interactionTimer.current)
  interactionTimer.current=setTimeout(()=>setInteracting(false),1000)
 }
 function finishPointer(){
  if(!pointerActive.current)return
  pointerActive.current=false
  resumeAfterInteraction()
 }
 function handlePointerDown(){
  pointerActive.current=true
  pauseForInteraction()
 }
 function handleWheel(){
  if(pointerActive.current)return
  pauseForInteraction()
  resumeAfterInteraction()
 }
 function handleKeyDown(event){
  if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End','PageUp','PageDown',' '].includes(event.key)){
   pauseForInteraction()
  }
 }
 function handleKeyUp(event){
  if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End','PageUp','PageDown',' '].includes(event.key)){
   resumeAfterInteraction()
  }
 }
 function handleManualStep(direction){
  step(direction)
  if(!pointerActive.current){
   pauseForInteraction()
   resumeAfterInteraction()
  }
 }
 useEffect(()=>{
  window.addEventListener('pointerup',finishPointer)
  window.addEventListener('pointercancel',finishPointer)
  return ()=>{
   window.removeEventListener('pointerup',finishPointer)
   window.removeEventListener('pointercancel',finishPointer)
   clearTimeout(interactionTimer.current)
  }
 },[])
 const loopCards=cards.map((card,index)=>React.isValidElement(card)?React.cloneElement(card,{key:`review-loop-${index}`,'aria-hidden':true,...(index===0?{'data-loop-start':'true'}:{})}):card)
 return <section className="review-carousel" aria-label="Cảm nhận từ học viên" onPointerDown={handlePointerDown} onWheel={handleWheel} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}><div className="review-rail" ref={rail} tabIndex={0} aria-label="Danh sách cảm nhận, cuộn ngang" style={{scrollSnapType:'none'}}>{cards}{loopCards}</div><div className="review-controls"><button aria-label="Cảm nhận trước" onClick={()=>handleManualStep(-1)}>←</button><button onClick={()=>pause(!paused)}>{paused?'Tự động chuyển':'Tạm dừng'}</button><button aria-label="Cảm nhận tiếp theo" onClick={()=>handleManualStep(1)}>→</button></div></section>
}
