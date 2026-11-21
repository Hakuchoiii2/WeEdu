import {Academy,courseFromRoute} from './Academy'
import {pages,InfoPage} from './InfoPage'
import {defaults} from './CatalogFilters'
import {courses,AuthDialog} from './Shop'
import React,{startTransition,Suspense,lazy,useState,useEffect} from 'react'
import {createRoot} from 'react-dom/client'
import {State,defaultCart} from './controls'
import '@fontsource-variable/inter'
import '@fontsource-variable/plus-jakarta-sans'
import './design.css'
import './app.css'
const modules=import.meta.glob('./screens/*.jsx')
const screens=Object.fromEntries(Object.entries(modules).map(([path,loader])=>[path.split('/').pop().split('.')[0],lazy(loader)]))
const routes={home:'Home',catalog:'Catalog',explore:'Explore',dashboard:'Dashboard',detail:'Detail',preview:'Preview',lesson:'Lesson',account:'Profile',profile:'Profile',cart:'Cart',checkout:'Checkout',login:'Login',register:'Register',recover:'Recover',close:'Home',buy:'Checkout',orders:'Confirmation'}
const warmed=new Set()
function warm(name){
 const path='./screens/'+name+'.jsx'
 if(!modules[path]||warmed.has(path))return
 warmed.add(path)
 modules[path]().catch(()=>warmed.delete(path))
}
function read(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}}
function App(){
 const [route,setRoute]=useState(location.hash.slice(1)||'Home'),[dark,theme]=useState(read('dark',false)),[member,login]=useState(read('member',false)),[items,cart]=useState(()=>read('cart',defaultCart())),[profile,save]=useState(read('profile',{})),[coupon,discount]=useState(false),[msg,notice]=useState(''),[width,resize]=useState(innerWidth)
 useEffect(()=>{const hash=event=>{if((location.hash==='#Detail'||location.hash.startsWith('#course/'))&&!history.state?.weeduPrevious)history.replaceState({...history.state,weeduPrevious:event.oldURL},'');startTransition(()=>setRoute(location.hash.slice(1)||'Home'));scrollTo(0,0)},size=()=>resize(innerWidth);addEventListener('hashchange',hash);addEventListener('resize',size);return()=>{removeEventListener('hashchange',hash);removeEventListener('resize',size)}},[])
 useEffect(()=>{for(const [k,v] of Object.entries({dark,member,cart:items,profile}))localStorage.setItem(k,JSON.stringify(v))},[dark,member,items,profile])
 useEffect(()=>{if(msg){const t=setTimeout(()=>notice(''),3200);return()=>clearTimeout(t)}},[msg])
 const [cartLogin,setCartLogin]=useState(false)
 const closeModal=()=>{setModal(null);setCartLogin(false)}
 const [modal,setModal]=useState(['Login','Register','Recover'].includes(route)?route:null)
 const course=courseFromRoute(route)
 const academy=!!course||['Explore','Catalog','Search'].includes(route)
 const page=course?route:route==='Home'&&member?'Member':(screens[route]||Object.hasOwn(pages,route))&&!['Login','Register','Recover'].includes(route)?route:'Home',auth=!!modal,go=p=>{if(['Login','Register','Recover'].includes(p)){startTransition(()=>setModal(p));return}setModal(null);location.hash=p},view=p=>React.createElement(screens[p+(dark?'Dark':'')]||screens[p]),home=['Home','Member'].includes(page)
 const field=n=>document.querySelector((auth?'[role=dialog] ':'')+'input[name="'+n+'"]')
 const value=n=>field(n)?.value.trim()||''

 function prefetch(event){
  const action=event.target.closest('[data-action]')?.dataset.action
  if(action==='theme')warm(page+(dark?'':'Dark'))
  else if(routes[action])warm((action==='home'&&member?'Member':routes[action])+(dark?'Dark':''))
 }
 function action(e){
 const el=e.target.closest('[data-action]');if(!el||e.target.matches('input'))return
 const a=el.dataset.action
 if(a==='close'){closeModal();return}
 if(a==='cart'&&!member){setCartLogin(true);go('Login');return}
 if(a==='explore'){setCategory('Tất cả danh mục');window.scrollTo(0,0)}
 if(routes[a])return go(routes[a])
 switch(a){
 case 'theme':startTransition(()=>{theme(!dark);setSwitched(true)});break
 case 'show-password':{const input=el.parentElement.querySelector('input');if(input)input.type=input.type==='password'?'text':'password';break}
 case 'submit-auth':if(!value('email')||!field('email').checkValidity())return notice('Vui lòng nhập email hợp lệ.');if(modal==='Recover'){notice('Đã ghi nhận yêu cầu trong bản mô phỏng.');return go('Login')}if(!value('password')||(modal==='Register'&&(!value('name')||value('password').length<8||value('password')!==value('confirm')||!field('terms')?.checked)))return notice('Vui lòng kiểm tra thông tin và mật khẩu.');save({...profile,email:value('email'),name:value('name')||profile.name});login(true);go(cartLogin?'Cart':modal==='Register'?'Tour1':'Member');setCartLogin(false);break
 case 'logout':login(false);go('Home');break
 case 'next-tour':go(page==='Tour1'?'Tour2':'Tour3');break
 case 'remove':cart(items.filter(i=>i[0]!==el.closest('[data-item]')?.dataset.item));break
 case 'buy-course':case 'add-suggested':case 'add-course':{const course=courses.find(c=>c[0]===el.dataset.course)||courses[0];cart(rows=>rows.some(i=>i[0]===course[0])?rows:[...rows,course]);go(a==='buy-course'?'Checkout':'Added');break}
 case 'coupon':discount(value('coupon').toUpperCase()==='HOCVUI');notice(value('coupon').toUpperCase()==='HOCVUI'?'Đã áp dụng mã HOCVUI':'Mã giảm giá chưa hợp lệ');break
 case 'pay':if(!items.length)return notice('Giỏ hàng trống');if(!value('name')||!value('phone')||!value('email'))return notice('Vui lòng điền thông tin thanh toán.');go('Confirmation');break
 case 'method':document.querySelectorAll('[data-action=method]').forEach(x=>x.style.outline='');el.style.outline='2px solid #059669';document.querySelector('[data-name="Card fields"]').hidden=!el.dataset.name.includes('Thẻ');break
 case 'save-profile':save(Object.fromEntries(['name','email','phone','birthday'].map(n=>[n,value(n)])));notice('Đã lưu thay đổi');break
 case 'reset-profile':for(const n of ['name','email','phone','birthday'])field(n).value=profile[n]||field(n).placeholder;break
 case 'filter-category':{const groups={'Frontend':[2],'Backend & Cơ sở dữ liệu':[1,7],'Data & AI':[3],'Di động (Mobile)':[6],'Cơ sở ngành UIT':[4,5,8]};document.querySelectorAll('[data-name^="CARD "]').forEach(x=>x.hidden=!!groups[el.textContent.trim()]&&!groups[el.textContent.trim()].includes(Number(x.dataset.name.match(/\d+/)[0])));break}
 case 'quiz':notice(el.textContent.includes('useOptimistic')?'Chính xác!':'Hãy thử lại');break
 case 'subscribe':notice(value('newsletter')?'Đã ghi nhận đăng ký':'Vui lòng nhập email');break
 case 'favorite':localStorage.setItem('favorite','true');notice('Đã lưu khóa học yêu thích');break
 case 'social':notice('Đăng nhập mạng xã hội cần kết nối dịch vụ xác thực.');break
 }
 }
 const [switched,setSwitched]=useState(false)
 useEffect(()=>{if(switched){const timer=setTimeout(()=>setSwitched(false),320);return ()=>clearTimeout(timer)}},[dark,switched])
 const [filters,setFilters]=useState(defaults)
 const [searchTerm,setSearchTerm]=useState('')
 const [category,setCategory]=useState('Tất cả danh mục')
 const h=HEIGHTS[page+(dark?'Dark':'')]||1800
 function keys(e){if(e.key==='Enter'&&e.target.name==='search'){setSearchTerm(e.target.value.trim());go('Search')}else if(e.key==='Enter'&&e.target.closest('[role=button]'))e.target.closest('[role=button]').click();else if(e.key==='Enter'&&auth&&e.target.matches('input'))document.querySelector('[role=dialog] [data-action=submit-auth]')?.click()}
 return <State.Provider value={{page,dark,items,profile,coupon,discount,member,category,setCategory,filters,setFilters}}><main data-switched={switched} onPointerOver={prefetch} onFocus={prefetch} data-theme={dark?"dark":"light"} onClick={action} onKeyDown={keys}><Suspense fallback={<p>Đang tải WeEdu…</p>}><div style={{width:1920,zoom:width/1920,background:dark?'#0b1310':'#f8faf8'}}>{page==='Member'&&view('MemberHeader')}{page==='Home'&&dark&&view('HomeHeader')}<div className="scene" key={page} style={{height:(academy||Object.hasOwn(pages,page)||['Home','Member','Cart','Added','Checkout','Explore'].includes(page))?'auto':h}}>{(academy||Object.hasOwn(pages,page))?<>{view(member?"MemberHeader":dark?"HomeHeader":"CatalogPart2")}{academy?<Academy key={page} page={page} course={course} query={searchTerm}/>:<InfoPage page={page}/>}{view("Footer")}</>:view(page)}</div>{home&&view('Footer')}</div>{auth&&<AuthDialog showCartNotice={cartLogin} close={closeModal} width={{Login:460,Register:480,Recover:440}[modal]}>{view(modal)}</AuthDialog>}</Suspense>{msg&&<output>{msg}</output>}</main></State.Provider>
}
const HEIGHTS={"Home":2402.75,"HomeDark":2265.75,"Member":1715,"MemberDark":1739,"Login":500.5,"LoginDark":498.5,"Register":717.5,"RegisterDark":715.5,"Recover":390,"RecoverDark":387.25,"CatalogPart1":1670.25,"CatalogPart2":137,"CatalogPart3":137,"CatalogPart4":432.25,"Catalog":2203.5,"CatalogDarkPart1":1670.25,"CatalogDarkPart2":137,"CatalogDarkPart3":432.25,"CatalogDark":2203.5,"CatalogHoverPart1":1503.125,"CatalogHoverPart2":137,"CatalogHoverPart3":136,"CatalogHoverPart4":432.25,"CatalogHover":2204,"CatalogHoverDarkPart1":1772.4138053562638,"CatalogHoverDarkPart2":136,"CatalogHoverDarkPart3":432.25,"CatalogHoverDarkPart4":137,"CatalogHoverDark":2204,"Detail":1974.5,"DetailDark":1974.5,"PreviewPart1":1534.5,"PreviewPart2":137,"PreviewPart3":137,"PreviewPart4":432.25,"Preview":1974.75,"PreviewDarkPart1Part1":1310.5,"PreviewDarkPart1Part2":1461,"PreviewDarkPart1Part3":432.25,"PreviewDarkPart1":1621,"PreviewDarkPart2":137,"PreviewDark":1974.75,"DashboardPart1":1802,"DashboardPart2":137,"DashboardPart3":432.25,"Dashboard":2380.25,"DashboardDarkPart1":1804,"DashboardDarkPart2":137,"DashboardDarkPart3":432.25,"DashboardDark":2324,"Lesson":1641,"LessonDark":1642,"ExplorePart1":3077.5,"ExplorePart2":137,"ExplorePart3":2508.39990234375,"ExplorePart4":432.25,"Explore":3077.64990234375,"ExploreDark":2556,"SearchPart1":33,"SearchPart2":86,"SearchPart3":1657,"SearchPart4":432.25,"SearchPart5":137,"SearchPart6":408,"Search":2328,"SearchDarkPart1":1884.5,"SearchDarkPart2":522.25,"SearchDarkPart3":137,"SearchDarkPart4":408,"SearchDark":2483,"Cart":1689.25,"CartDark":1689.25,"Added":1689.25,"AddedDark":1689.25,"Checkout":1748.25,"CheckoutDark":1748.25,"Confirmation":1538.25,"ConfirmationDark":1538.25,"Profile":1757.25,"ProfileDark":1757.25,"Tour1":1757.25,"Tour2":1757.25,"Tour3":1757.25,"Tour1Dark":1757.25,"Tour2Dark":1757.25,"Tour3Dark":1757.25,"Footer":432.25,"FooterDark":432.25,"MemberHeader":137,"MemberHeaderDark":137,"HomeHeaderDark":137}
createRoot(document.getElementById('root')).render(<App/>)
