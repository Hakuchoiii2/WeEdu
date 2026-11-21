import {HeaderAccount} from '../Account'
import {CartIcon, cover} from '../Shop'
import ThemeSwitch from '../ThemeSwitch'
import { FieldControl, LiveText, OrderRows } from '../controls.jsx'

export default function Confirmation() {
  return (
    <div className="bg-[#f8faf8] content-stretch flex flex-col items-start relative size-full" data-name="Xác nhận đơn hàng">
      <div className="bg-[#08542c] border-[#1b6338] border-b border-solid content-stretch flex h-[40px] items-center justify-between pb-px pl-[120px] pr-[119.99px] relative shrink-0 w-full" data-name="Header Component">
        <div className="relative shrink-0" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
            <div className="relative shrink-0 size-[14px]" data-name="SVG">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/3918d.svg" />
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(245,245,240,0.8)] whitespace-nowrap">
                <p className="leading-[16px]">Đồ án môn học IE106 - Trường Đại học Công nghệ Thông tin</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative shrink-0" data-name="Link">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
            <div className="relative shrink-0 size-[14px]" data-name="SVG">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/edba5.svg" />
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(245,245,240,0.9)] whitespace-nowrap">
                <p>
                  <span className="leading-[16px]">{`Liên hệ: `}</span>
                  <span className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[16px] not-italic text-[#8a9a5b]">1900 1234</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#014421] border-[#355e3b] border-b border-solid content-stretch flex items-center justify-between min-h-[80px] pb-px px-[120px] relative shrink-0 w-full" data-name="Header">
        <div className="relative shrink-0" data-name="Left Section: Logo & Main Navigation">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[40px] items-center relative size-full">
            <div data-action="home" role="button" tabIndex={0} aria-label={"Link - Logo"} className="content-stretch flex items-center py-[4px] relative shrink-0" data-name="Link - Logo">
              <div className="h-[88px] max-h-[92px] max-w-[156.44000244140625px] relative shrink-0 w-[156.44px]" data-name="WeEdu Logo">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src="/assets/7ea8e.png" />
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Navigation Links">
              <div data-action="home" role="button" tabIndex={0} aria-label={"Trang chủ"} className="content-stretch flex items-center py-[8px] relative shrink-0" data-name="Link">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f5f5f0] text-[15px] whitespace-nowrap">
                  <p className="leading-[22.5px]">Trang chủ</p>
                </div>
              </div>
              <div data-action="explore" role="button" tabIndex={0} aria-label={"Danh mục"} className="content-stretch flex flex-col items-start relative shrink-0" data-name="Dropdown: Danh mục">
                <div data-action="explore" role="button" tabIndex={0} aria-label={"Danh mục"} className="content-stretch flex gap-[5.99px] items-center py-[8px] relative shrink-0" data-name="Button">
                  <div className="h-[22.5px] relative shrink-0 w-[72.41px]" data-name="Container">
                    <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] left-1/2 not-italic text-[#bcb88a] text-[15px] text-center top-[10.5px] whitespace-nowrap">
                      <p className="leading-[22.5px]">Danh mục</p>
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[16px]" data-name="SVG">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/5d852.svg" />
                  </div>
                </div>
              </div>
              <div data-action="catalog" role="button" tabIndex={0} aria-label={"Khóa học"} className="content-stretch flex items-center py-[8px] relative shrink-0" data-name="Link">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bcb88a] text-[15px] whitespace-nowrap">
                  <p className="leading-[22.5px]">Khóa học</p>
                </div>
              </div>
              <div data-action="dashboard" role="button" tabIndex={0} aria-label={"Lộ trình"} className="content-stretch flex items-center py-[8px] relative shrink-0" data-name="Link">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bcb88a] text-[15px] whitespace-nowrap">
                  <p className="leading-[22.5px]">Lộ trình</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] max-w-[544px] min-w-px relative" data-name="Center Section: Prominent Search Bar:margin">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] px-[32px] relative size-full">
            <div className="content-stretch flex flex-col items-start max-w-[480px] relative shrink-0 w-full" data-name="Center Section: Prominent Search Bar">
              <div className="border border-[#355e3b] border-solid content-stretch flex h-[44px] items-start justify-center overflow-clip pl-[45px] pr-[17px] py-[13.5px] relative rounded-[9999px] shrink-0 w-full" data-name="Input">
                <div aria-hidden className="absolute bg-[#013220] inset-0 pointer-events-none rounded-[9999px]" />
                <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(188,184,138,0.6)] w-full">
                      <p className="leading-[normal]">Tìm kiếm khóa học, kỹ năng...</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_1px_rgba(0,0,0,0.05)]" />
              <FieldControl field={"search"} label={"Tìm kiếm khóa học, kỹ năng..."} hint={"Tìm kiếm khóa học, kỹ năng..."} /></div>
              <div className="absolute bottom-0 content-stretch flex items-center left-0 pl-[16px] top-0" data-name="Container">
                <div className="relative shrink-0 size-[20px]" data-name="SVG">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/4cf4c.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative shrink-0" data-name="Right Section: Actions & Utilities">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
            <ThemeSwitch />
            <CartIcon />
            <div className="bg-[#355e3b] h-[24px] relative shrink-0 w-px" data-name="Divider" />
            <HeaderAccount />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-center overflow-clip px-[120px] py-[48px] relative shrink-0 w-full" data-name="Content">
        <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Breadcrumb row">
          <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[normal] not-italic overflow-clip relative shrink-0 text-[14px] whitespace-nowrap" data-name="Breadcrumb">
            <p data-action="home" role="button" tabIndex={0} aria-label={"Trang chủ"} className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#64748b]">
              Trang chủ
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#94a3b8]">
              /
            </p>
            <p data-action="cart" role="button" tabIndex={0} aria-label={"Giỏ hàng"} className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#64748b]">
              Giỏ hàng
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#94a3b8]">
              /
            </p>
            <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#0f172a]">
              Xác nhận
            </p>
          </div>
        </div>
        <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Stepper">
          <div data-action="cart" role="button" tabIndex={0} aria-label={"Giỏ hàng"} className="content-stretch flex flex-col gap-[8px] items-center overflow-clip relative shrink-0" data-name="Step 1 - Giỏ hàng (done)">
            <div className="bg-[#047857] content-stretch flex items-center justify-center overflow-clip relative rounded-[22px] shrink-0 size-[44px]" data-name="Step circle">
              <div className="relative shrink-0 size-[22px]" data-name="icon/check">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/b1c27.svg" />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
              Giỏ hàng
            </p>
          </div>
          <div className="content-stretch flex flex-col h-[44px] items-start justify-center overflow-clip relative shrink-0 w-[90px]" data-name="Connector">
            <div className="bg-[#047857] h-[2px] relative shrink-0 w-full" data-name="Rectangle" />
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-center overflow-clip relative shrink-0" data-name="Step 2 - Thanh toán (done)">
            <div className="bg-[#047857] content-stretch flex items-center justify-center overflow-clip relative rounded-[22px] shrink-0 size-[44px]" data-name="Step circle">
              <div className="relative shrink-0 size-[22px]" data-name="icon/check">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/b1c27.svg" />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
              Thanh toán
            </p>
          </div>
          <div className="content-stretch flex flex-col h-[44px] items-start justify-center overflow-clip relative shrink-0 w-[90px]" data-name="Connector">
            <div className="bg-[#047857] h-[2px] relative shrink-0 w-full" data-name="Rectangle" />
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-center overflow-clip relative shrink-0" data-name="Step 3 - Xác nhận (done)">
            <div className="bg-[#047857] content-stretch flex items-center justify-center overflow-clip relative rounded-[22px] shrink-0 size-[44px]" data-name="Step circle">
              <div className="relative shrink-0 size-[22px]" data-name="icon/check">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/b1c27.svg" />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
              Xác nhận
            </p>
          </div>
        </div>
        <div className="bg-[#047857] content-stretch flex items-center justify-center overflow-clip relative rounded-[52px] shrink-0 size-[104px]" data-name="Success check">
          <div className="relative shrink-0 size-[60px]" data-name="icon/check">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/df134.svg" />
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-center leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Message">
          <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#0f172a] text-[40px]">
            Thanh toán thành công!
          </p>
          <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#64748b] text-[18px]">
            Hóa đơn đã gửi tới email của bạn
          </p>
        </div>
        <div className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col gap-[20px] items-start overflow-clip px-[32px] py-[28px] relative rounded-[20px] shrink-0 w-[760px]" data-name="Chi tiết đơn hàng">
          <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] not-italic overflow-clip relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
            <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#0f172a] text-[20px]">
              Chi tiết đơn hàng
            </p>
            <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#64748b] text-[15px]">
              #EN-0317
            </p>
          </div>
          <OrderRows>{item => (<div className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0 w-full" data-name="Item - Python từ cơ bản">
            <img alt="" className="relative rounded-[12px] shrink-0 size-[56px]" style={{objectFit:"cover"}} src={cover(item.name)} />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[16px]">{item.name}</p>
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#014421] text-[16px] whitespace-nowrap">{item.formattedPrice}</p>
          </div>)}</OrderRows>
          
          
          <div className="bg-[#e2e8f0] h-px relative shrink-0 w-full" data-name="Divider" />
          <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#0f172a] w-full whitespace-nowrap" data-name="Frame">
            <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[18px]">
              Đã thanh toán
            </p>
            <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[30px]"><LiveText slot="total" /></p>
          </div>
        </div>
        <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-[760px]" data-name="Actions">
          <div data-action="orders" role="button" tabIndex={0} aria-label={"Xem lịch sử đơn hàng"} className="border border-[#e2e8f0] border-solid content-stretch flex flex-[1_0_0] h-[56px] items-center justify-center min-w-px overflow-clip relative rounded-[12px]" data-name="Button - Xem lịch sử đơn hàng">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#014421] text-[17px] whitespace-nowrap">
              Xem lịch sử đơn hàng
            </p>
          </div>
          <div data-action="lesson" role="button" tabIndex={0} aria-label={"Bắt đầu học ngay"} className="bg-[#014421] content-stretch flex flex-[1_0_0] h-[56px] items-center justify-center min-w-px overflow-clip relative rounded-[12px]" data-name="Button - Bắt đầu học ngay">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[17px] text-white whitespace-nowrap">
              Bắt đầu học ngay
            </p>
          </div>
        </div>
      </div>
      <div className="border-[#355e3b] border-solid border-t content-stretch flex flex-col items-start pt-px relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(1, 50, 32) 0%, rgb(1, 50, 32) 100%), linear-gradient(90deg, rgb(11, 21, 16) 0%, rgb(11, 21, 16) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="WeEdu Desktop Footer Component">
        <div className="max-w-[1920px] relative shrink-0 w-full" data-name="Outer Container constrained to 1920px with explicit 120px horizontal padding on large screens">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] px-[120px] py-[40px] relative size-full">
            <div className="gap-x-[40px] gap-y-[40px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_272.25px] pb-[32px] relative shrink-0 w-full" data-name="Top Section: 4-Column Main Grid">
              <div className="col-[1/span_4] content-stretch flex flex-col items-start justify-between justify-self-stretch relative row-1 self-start shrink-0" data-name="Column 1: Brand Info & Support (Span 4 cols)">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
                  <div data-action="home" role="button" tabIndex={0} aria-label={"Link - WeEdu Trang chủ → WeEdu Logo"} className="h-[68px] max-h-[72px] max-w-[533.3300170898438px] relative shrink-0 w-[120.88px]" data-name="Link - WeEdu Trang chủ → WeEdu Logo">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-[99.99%] left-0 max-w-none top-0 w-full" src="/assets/024b3.png" />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start max-w-[384px] pt-[0.75px] relative shrink-0 w-[384px]" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d8dcd0] text-[14px] whitespace-nowrap">
                      <p className="leading-[22.75px] mb-0">Nền tảng học trực tuyến thực chiến — Học đi đôi với làm.</p>
                      <p className="leading-[22.75px] mb-0">Khởi đầu hành trình nâng tầm tri thức và sự nghiệp cùng</p>
                      <p className="leading-[22.75px]">cộng đồng học tập chủ động.</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="relative shrink-0 size-[12px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/9b7ab.svg" />
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#bcb88a] text-[12px] whitespace-nowrap">
                        <p>
                          <span className="leading-[16px]">{`Hotline hỗ trợ: `}</span>
                          <span className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[16px] not-italic text-white tracking-[0.3px]">1900 1234</span>
                          <span className="leading-[16px]">{` (8:00 - 17:00)`}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Social Media Icons:margin">
                  <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Social Media Icons">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#bcb88a] text-[12px] tracking-[0.6px] uppercase w-full">
                        <p className="leading-[16px]">KẾT NỐI VỚI CHÚNG TÔI</p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
                      <div className="bg-[rgba(1,40,26,0.5)] border border-[#355e3b] border-solid content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[36px]" data-name="Link - Facebook">
                        <div className="relative shrink-0 size-[16px]" data-name="SVG">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/6a4d1.svg" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col h-[36px] items-start pl-[12px] relative shrink-0 w-[48px]" data-name="Link - YouTube:margin">
                        <div className="bg-[rgba(1,40,26,0.5)] border border-[#355e3b] border-solid content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[36px]" data-name="Link - YouTube">
                          <div className="relative shrink-0 size-[16px]" data-name="SVG">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/411cb.svg" />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col h-[36px] items-start pl-[12px] relative shrink-0 w-[48px]" data-name="LinkedIn:margin">
                        <div className="bg-[rgba(1,40,26,0.5)] border border-[#355e3b] border-solid content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[36px]" data-name="LinkedIn">
                          <div className="relative shrink-0 size-[16px]" data-name="SVG">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/87040.svg" />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col h-[36px] items-start pl-[12px] relative shrink-0 w-[48px]" data-name="Link - GitHub:margin">
                        <div className="bg-[rgba(1,40,26,0.5)] border border-[#355e3b] border-solid content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[36px]" data-name="Link - GitHub">
                          <div className="relative shrink-0 size-[16px]" data-name="SVG">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/ca45d.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-[5/span_2] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch pb-[110.25px] relative row-1 self-start shrink-0" data-name="Column 2: Navigation Links - KHÁM PHÁ (Span 2 or 3 cols)">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#bcb88a] text-[14px] tracking-[0.7px] uppercase w-full">
                    <p className="leading-[20px]">KHÁM PHÁ</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="List">
                  <div className="content-stretch flex flex-col items-start pb-px pt-[3px] relative shrink-0 w-full" data-name="Item">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d8dcd0] text-[14px] w-full">
                      <a className="footer-link leading-[20px]" href="#Web">Lập trình Web</a>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pb-px pt-[3px] relative shrink-0 w-full" data-name="Item">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d8dcd0] text-[14px] w-full">
                      <a className="footer-link leading-[20px]" href="#Design">Thiết kế UI/UX</a>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pb-px pt-[3px] relative shrink-0 w-full" data-name="Item">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d8dcd0] text-[14px] w-full">
                      <a className="footer-link leading-[20px]" href="#Data">Khoa học dữ liệu</a>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pb-px pt-[3px] relative shrink-0 w-full" data-name="Item">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d8dcd0] text-[14px] w-full">
                      <a className="footer-link leading-[20px]" href="#Skills">Kỹ năng mềm</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-[7/span_2] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch pb-[110.25px] relative row-1 self-start shrink-0" data-name="Column 3: Navigation Links - VỀ WEEDU (Span 2 cols)">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#bcb88a] text-[14px] tracking-[0.7px] uppercase w-full">
                    <p className="leading-[20px]">VỀ WEEDU</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="List">
                  <div className="content-stretch flex flex-col items-start pb-px pt-[3px] relative shrink-0 w-full" data-name="Item">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d8dcd0] text-[14px] w-full">
                      <a className="footer-link leading-[20px]" href="#About">Giới thiệu</a>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pb-px pt-[3px] relative shrink-0 w-full" data-name="Item">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d8dcd0] text-[14px] w-full">
                      <a className="footer-link leading-[20px]" href="#Team">Đội ngũ giảng viên</a>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pb-px pt-[3px] relative shrink-0 w-full" data-name="Item">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d8dcd0] text-[14px] w-full">
                      <a className="footer-link leading-[20px]" href="#Terms">Điều khoản sử dụng</a>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pb-px pt-[3px] relative shrink-0 w-full" data-name="Item">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d8dcd0] text-[14px] w-full">
                      <a className="footer-link leading-[20px]" href="#Privacy">Chính sách bảo mật</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-[9/span_4] content-stretch flex flex-col gap-[32.25px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Column 4: Navigation Links - HỖ TRỢ HỌC VIÊN + ĐĂNG KÝ (Span 4 cols)">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#bcb88a] text-[14px] tracking-[0.7px] uppercase w-full">
                      <p className="leading-[20px]">HỖ TRỢ HỌC VIÊN</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="List">
                    <div className="content-stretch flex flex-col items-start pb-px pt-[3px] relative shrink-0 w-full" data-name="Item">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d8dcd0] text-[14px] w-full">
                        <a className="footer-link leading-[20px]" href="#Help">Trung tâm trợ giúp</a>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pb-px pt-[3px] relative shrink-0 w-full" data-name="Item">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d8dcd0] text-[14px] w-full">
                        <a className="footer-link leading-[20px]" href="#Payment">Hướng dẫn thanh toán</a>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pb-px pt-[3px] relative shrink-0 w-full" data-name="Item">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d8dcd0] text-[14px] w-full">
                        <a className="footer-link leading-[20px]" href="#FAQ">Câu hỏi thường gặp</a>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pb-px pt-[3px] relative shrink-0 w-full" data-name="Item">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d8dcd0] text-[14px] w-full">
                        <a className="footer-link leading-[20px]" href="#Contact">Liên hệ</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Email Subscription Form:margin">
                  <div className="content-stretch flex flex-col gap-[8px] items-start pt-[4px] relative shrink-0 w-full" data-name="Email Subscription Form">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bcb88a] text-[12px] w-full">
                        <p className="leading-[16px]">Nhận tin khóa học mới nhất</p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center max-w-[384px] relative shrink-0 w-[384px]" data-name="Form">
                      <div className="bg-[rgba(1,40,26,0.8)] border border-[#355e3b] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip pb-[10px] pl-[15px] pr-[81px] pt-[9px] relative rounded-[9999px]" data-name="Input">
                        <div className="relative shrink-0 w-full" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(163,168,153,0.7)] w-full">
                              <p className="leading-[normal]">Nhập email của bạn...</p>
                            </div>
                          </div>
                        </div>
                      <FieldControl field={"newsletter"} label={"Nhập email của bạn..."} hint={"Nhập email của bạn..."} /></div>
                      <div data-action="subscribe" role="button" tabIndex={0} aria-label={"Đăng ký"} className="absolute bg-[#8a9a5b] bottom-[4px] content-stretch flex items-center justify-center pb-[5.5px] pt-[4.5px] px-[14px] right-[4.01px] rounded-[9999px] top-[4px]" data-name="Button">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#013220] text-[12px] text-center whitespace-nowrap">
                          <p className="leading-[16px]">Đăng ký</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[#355e3b] border-solid border-t content-stretch flex items-center justify-between pt-[21px] relative shrink-0 w-full" data-name="Bottom Bar: Divider & Legal / Language Pill">
              <div className="relative shrink-0" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a3a899] text-[12px] tracking-[0.3px] whitespace-nowrap">
                    <p className="leading-[16px]">© 2026 WeEdu. Nền tảng học trực tuyến hàng đầu - Đồng hành cùng tri thức Việt.</p>
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(1,40,26,0.6)] border border-[#355e3b] border-solid relative rounded-[9999px] shrink-0" data-name="Button">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6.01px] items-center px-[13px] py-[5px] relative size-full">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['FreeSans:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#d8dcd0] text-[14px] text-center whitespace-nowrap">
                        <p className="leading-[14px]">🌐</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d8dcd0] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">Tiếng Việt</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
