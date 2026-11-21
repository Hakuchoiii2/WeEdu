import {HeaderAccount} from '../Account'
import {CartIcon} from '../Shop'
import ThemeSwitch from '../ThemeSwitch'
import { FieldControl } from '../controls.jsx'

function Footer({ className }) {
  return (
    <div className={className || "border-[#355e3b] border-solid border-t content-stretch flex flex-col items-start pt-px relative w-[1920px]"} style={{ backgroundImage: "linear-gradient(90deg, rgb(1, 50, 32) 0%, rgb(1, 50, 32) 100%), linear-gradient(90deg, rgb(11, 21, 16) 0%, rgb(11, 21, 16) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="FOOTER">
      <div className="max-w-[1920px] relative shrink-0 w-full" data-name="Outer Container constrained to 1920px with explicit 120px horizontal padding on large screens">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] px-[120px] py-[40px] relative size-full">
          <div className="gap-x-[40px] gap-y-[40px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_272.25px] pb-[32px] relative shrink-0 w-full" data-name="Top Section: 4-Column Main Grid">
            <div className="col-[1/span_4] content-stretch flex flex-col items-start justify-between justify-self-stretch relative row-1 self-start shrink-0" data-name="Column 1: Brand Info & Support (Span 4 cols)">
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
                <div data-action="home" role="button" tabIndex={0} aria-label={"Link - WeEdu Trang chủ → WeEdu Logo"} className="h-[68px] max-h-[72px] max-w-[533.3300170898438px] relative shrink-0 w-[120.88px]" data-name="Link - WeEdu Trang chủ → WeEdu Logo">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[99.99%] left-0 max-w-none top-0 w-full" src="/assets/30160.png" />
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
  );
}

function Component1920PxDesktopContainerCanvasFrame({ className }) {
  return (
    <div className={className || "h-[137px] relative w-[1920px]"} data-name="1920px Desktop Container / Canvas Frame">
      <div className="absolute bg-[#08542c] border-[#1b6338] border-b border-solid content-stretch flex h-[40px] items-center justify-between left-0 pb-px pl-[120px] pr-[119.99px] right-0 top-0" data-name="Header Component">
        <div className="relative shrink-0" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
            <div className="relative shrink-0 size-[14px]" data-name="SVG">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/3918d.svg" />
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(245,245,240,0.8)] whitespace-nowrap">
                <p className="leading-[16px]">Đồ án môn học IE106 - Trường Đại học Công nghệ Thông tin (UIT) | Website học trực tuyến</p>
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
                  <span className="leading-[16px] text-[#bcb88a]">Liên hệ:</span>
                  <span className="leading-[16px]">{` `}</span>
                  <span className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[16px] not-italic text-white">1900 1234</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#014421] border-[#355e3b] border-b border-solid content-stretch flex gap-[84.1px] items-center left-0 min-h-[80px] pb-px px-[120px] right-0 top-[40px]" data-name="Header">
        <div className="relative shrink-0" data-name="Left Section: Logo & Main Navigation">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[40px] items-center relative size-full">
            <div data-action="home" role="button" tabIndex={0} aria-label={"Link - Logo"} className="content-stretch flex items-center py-[4px] relative shrink-0" data-name="Link - Logo">
              <div className="h-[88px] max-h-[92px] max-w-[156.44000244140625px] relative shrink-0 w-[156.44px]" data-name="WeEdu Logo">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src="/assets/ed919.png" />
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
    </div>
  );
}

export default function DetailDark() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 250, 248) 0%, rgb(248, 250, 248) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Chi tiết khóa học - Lập trình Python cơ bản (Darkmode)">
      <div className="absolute bg-[#0c1511] content-stretch flex flex-col h-[1604px] items-start left-0 pb-[80px] pt-[144px] right-0 top-0" data-name="Main - MAIN CONTENT (CHI TIẾT KHÓA HỌC)">
        <div className="content-stretch flex flex-col gap-[24px] items-start px-[64px] relative shrink-0 w-full" data-name="Container">
          <div className="gap-x-[40px] gap-y-[40px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_1266.50px] relative shrink-0 w-full" data-name="Main Course Grid: 8 cols details + 4 cols sticky sidebar">
            <div className="col-[1/span_8] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="CỘT TRÁI (8 Cột): THÔNG TIN KHÓA HỌC & NỘI DUNG">
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Thông tin tiêu đề & mô t">
                <div className="bg-[#163a2b] border border-[#31664b] border-solid content-stretch flex gap-[8px] items-center px-[13px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
                  <div className="bg-[#165d3d] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#78dfab] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                        <p className="leading-[16px]">LỘ TRÌNH NHẬP MÔN IT CHUẨN UIT</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold'] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#f0f6f2] text-[36px] tracking-[-0.9px] uppercase w-full">
                    <p className="leading-[45px]">LẬP TRÌNH PYTHON CƠ BẢN</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b6c8bd] text-[18px] w-full">
                    <p className="leading-[29.25px] mb-0">Trang bị tư duy thuật toán cốt lõi, thành thạo cú pháp Python hiện đại và tự tay xây dựng các ứng dụng tự động hóa, phân tích dữ liệu ứng</p>
                    <p className="leading-[29.25px]">dụng thực tiễn ngay từ con số 0.</p>
                  </div>
                </div>
                <div className="border-[rgba(48,70,58,0.8)] border-b border-solid content-center flex flex-wrap gap-[8px_24px] items-center pb-[21px] pt-[8px] relative shrink-0 w-full" data-name="nh giá & Giảng viên">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
                      <div className="h-[15.833px] relative shrink-0 w-[16.667px]" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/0795f.svg" />
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f0f6f2] text-[16px] whitespace-nowrap">
                          <p className="leading-[24px]">4.8</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#91a89a] text-[14px] whitespace-nowrap">
                          <p className="leading-[20px]">/ 5.0</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#63d6a1] text-[14px] whitespace-nowrap">
                          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-[1px] decoration-solid leading-[20px] underline">(120 đánh giá)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#cbd5e1] relative rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
                      <div className="h-[12px] relative shrink-0 w-[16.5px]" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/1328c.svg" />
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e4eee7] text-[14px] whitespace-nowrap">
                          <p className="leading-[20px]">1.200</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b6c8bd] text-[14px] whitespace-nowrap">
                          <p className="leading-[20px]">học viên đã đăng ký</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#cbd5e1] relative rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                      <div className="bg-[#165d3d] content-stretch flex items-center justify-center pb-[6.5px] pt-[5.5px] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
                          <p className="leading-[16px]">NA</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b6c8bd] text-[14px] whitespace-nowrap">
                          <p className="leading-[20px]">Giảng viên:</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#78dfab] text-[14px] whitespace-nowrap">
                          <p className="leading-[20px]">Nguyễn Văn A</p>
                        </div>
                      </div>
                      <div className="bg-[#1b4231] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#78dfab] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">Python Lead</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-center flex flex-wrap gap-[12px] items-center pt-[4px] relative shrink-0 w-full" data-name="Thông số nhanh theo yêu cầu: 8 chương • 45 bài học • 12 gi">
                  <div className="bg-[#16231d] border border-[#30463a] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[6px] items-center px-[15px] py-[9px] relative rounded-[8px] shrink-0" data-name="Background+Border+Shadow">
                    <div className="h-[13.5px] relative shrink-0 w-[16.5px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/32db0.svg" />
                    </div>
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
                          <p>
                            <span className="leading-[16px] text-[#d9e8de]">{`Trình độ: `}</span>
                            <span className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[16px] not-italic text-[#f7fcfa]">Cơ bản</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#16231d] border border-[#30463a] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[6px] items-center px-[15px] py-[9px] relative rounded-[8px] shrink-0" data-name="Background+Border+Shadow">
                    <div className="h-[12px] relative shrink-0 w-[16.125px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/a79c1.svg" />
                    </div>
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
                          <p>
                            <span className="leading-[16px] text-[#d9e8de]">{`Số chương: `}</span>
                            <span className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[16px] not-italic text-[#f7fcfa]">8 chương</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#16231d] border border-[#30463a] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[6px] items-center px-[15px] py-[9px] relative rounded-[8px] shrink-0" data-name="Background+Border+Shadow">
                    <div className="h-[15.75px] relative shrink-0 w-[15px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/a330b.svg" />
                    </div>
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
                          <p>
                            <span className="leading-[16px] text-[#d9e8de]">{`Số bài học: `}</span>
                            <span className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[16px] not-italic text-[#f7fcfa]">45 bài học</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#16231d] border border-[#30463a] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[6px] items-center px-[15px] py-[9px] relative rounded-[8px] shrink-0" data-name="Background+Border+Shadow">
                    <div className="relative shrink-0 size-[15px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/fa6f1.svg" />
                    </div>
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
                          <p>
                            <span className="leading-[16px] text-[#d9e8de]">{`Thời lượng: `}</span>
                            <span className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[16px] not-italic text-[#f7fcfa]">12 giờ</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#16231d] border border-[rgba(49,102,75,0.8)] border-solid content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[25px] relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Khối 'Bạn sẽ học được gì' với bullet point xanh">
                <div className="relative shrink-0 w-full" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
                    <div className="h-[21px] relative shrink-0 w-[22px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/d3547.svg" />
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f0f6f2] text-[18px] whitespace-nowrap">
                        <p className="leading-[28px]">Bạn sẽ học được gì sau khóa học?</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[24px] gap-y-[14px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[___40px_40px_40px] relative size-full">
                    <div className="col-1 content-stretch flex gap-[10px] h-[40px] items-start justify-self-stretch relative row-1 shrink-0" data-name="Container">
                      <div className="h-[18.667px] relative shrink-0 w-[16.667px]" data-name="Margin">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/95575.svg" />
                      </div>
                      <div className="content-stretch flex flex-col items-start pr-[25.14px] relative shrink-0" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c5d4cb] text-[14px] whitespace-nowrap">
                          <p className="leading-[20px] mb-0">Nắm vững tư duy lập trình và cấu trúc giải thuật nền tảng cho người mới bắt</p>
                          <p className="leading-[20px]">đầu.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 content-stretch flex gap-[10px] h-[40px] items-start justify-self-stretch relative row-1 shrink-0" data-name="Container">
                      <div className="h-[18.667px] relative shrink-0 w-[16.667px]" data-name="Margin">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/95575.svg" />
                      </div>
                      <div className="content-stretch flex flex-col items-start pr-[36.52px] relative shrink-0" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c5d4cb] text-[14px] whitespace-nowrap">
                          <p className="leading-[20px] mb-0">Thành thạo cú pháp Python 3.x, biến, cấu trúc rẽ nhánh, vòng lặp và xử lý</p>
                          <p className="leading-[20px]">ngoại lệ.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 content-stretch flex gap-[10px] h-[40px] items-start justify-self-stretch relative row-2 shrink-0" data-name="Container">
                      <div className="h-[18.667px] relative shrink-0 w-[16.667px]" data-name="Margin">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/95575.svg" />
                      </div>
                      <div className="content-stretch flex flex-col items-start pr-[94.52px] relative shrink-0" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c5d4cb] text-[14px] whitespace-nowrap">
                          <p className="leading-[20px] mb-0">Làm chủ các kiểu dữ liệu nâng cao: List, Tuple, Dictionary, Set và</p>
                          <p className="leading-[20px]">Comprehensions.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 content-stretch flex gap-[10px] h-[40px] items-start justify-self-stretch relative row-2 shrink-0" data-name="Container">
                      <div className="h-[18.667px] relative shrink-0 w-[16.667px]" data-name="Margin">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/95575.svg" />
                      </div>
                      <div className="content-stretch flex flex-col items-start pr-[5.45px] relative shrink-0" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c5d4cb] text-[14px] whitespace-nowrap">
                          <p className="leading-[20px] mb-0">Tổ chức mã nguồn khoa học với Hàm (Functions), Modules và Packages tái sử</p>
                          <p className="leading-[20px]">dụng.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 content-stretch flex gap-[10px] h-[40px] items-start justify-self-stretch relative row-3 shrink-0" data-name="Container">
                      <div className="h-[18.667px] relative shrink-0 w-[16.667px]" data-name="Margin">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/95575.svg" />
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c5d4cb] text-[14px] whitespace-nowrap">
                        <p className="leading-[20px]">Đọc, ghi và xử lý tệp tin (File I/O, CSV, JSON) phục vụ tiền xử lý dữ liệu.</p>
                      </div>
                    </div>
                    <div className="col-2 content-stretch flex gap-[10px] h-[40px] items-start justify-self-stretch relative row-3 shrink-0" data-name="Container">
                      <div className="h-[18.667px] relative shrink-0 w-[16.667px]" data-name="Margin">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/95575.svg" />
                      </div>
                      <div className="content-stretch flex flex-col items-start pr-[24.36px] relative shrink-0" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c5d4cb] text-[14px] whitespace-nowrap">
                          <p className="leading-[20px] mb-0">Xây dựng trọn vẹn 3 dự án thực tế: Quản lý chi tiêu, Tool crawler tự động và</p>
                          <p className="leading-[20px]">Mini Game.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Tabs: Nội dung bài học & Đánh gi">
                <div className="border-[#30463a] border-b border-solid content-stretch flex gap-[8px] items-center pb-[9px] relative shrink-0 w-full" data-name="HorizontalBorder">
                  <div data-action="curriculum" role="button" tabIndex={0} aria-label={"Nội dung bài học"} className="bg-[#165d3d] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[8px] shrink-0" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[20px] py-[10px] relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
                        <p className="leading-[20px]">Nội dung bài học</p>
                      </div>
                    </div>
                  </div>
                  <div data-action="reviews" role="button" tabIndex={0} aria-label={"Đánh giá (120)"} className="relative rounded-[8px] shrink-0" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[20px] py-[10px] relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#b6c8bd] text-[14px] text-center whitespace-nowrap">
                        <p className="leading-[20px]">Đánh giá (120)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Tab 1: Accordion Danh sách chương">
                  <div className="content-stretch flex items-center justify-between pl-[4px] pr-[4.01px] relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9eb3a6] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">Khám phá 8 chương với 45 bài thực hành chuyên sâu</p>
                      </div>
                    </div>
                    <div data-action="chapters" role="button" tabIndex={0} aria-label={"Mở rộng tất cả"} className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button">
                      <div className="h-[11.933px] relative shrink-0 w-[6px]" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/1b9a9.svg" />
                      </div>
                      <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#78dfab] text-[12px] text-center whitespace-nowrap">
                          <p className="leading-[16px]">Mở rộng tất cả</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Accordion Chapter List">
                    <div data-action="chapter" role="button" tabIndex={0} aria-label={"Chương 1 (Mở sẵn)"} className="bg-[#16231d] border border-[#30463a] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Chương 1 (Mở sẵn)">
                      <div className="relative shrink-0 w-full" data-name="Button">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[20px] py-[16px] relative size-full">
                          <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
                            <div className="flex items-center justify-center relative shrink-0">
                              <div className="flex-none rotate-180">
                                <div className="h-[6.167px] relative w-[10px]" data-name="Container">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/f9fb8.svg" />
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
                              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
                                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                                  <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#78dfab] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                                    <p className="leading-[16px]">CHƯƠNG 1</p>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#9eb3a6] text-[12px] whitespace-nowrap">
                                    <p className="leading-[16px]">• 4 bài học</p>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#9eb3a6] text-[12px] whitespace-nowrap">
                                    <p className="leading-[16px]">• 45 phút</p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
                                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#f0f6f2] text-[16px] whitespace-nowrap">
                                  <p className="leading-[24px]">{`Giới thiệu & Cài đặt môi trường phát triển`}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-[#163a2b] border border-[#31664b] border-solid content-stretch flex flex-col items-start px-[11px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#63d6a1] text-[12px] whitespace-nowrap">
                              <p className="leading-[16px]">2 bài xem thử</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[rgba(27,43,36,0.5)] border-[#293e32] border-solid border-t relative shrink-0 w-full" data-name="Overlay+HorizontalBorder">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-[16px] pt-[5px] px-[20px] relative size-full">
                          <div data-action="preview" role="button" tabIndex={0} aria-label={"1.1 Tổng quan về ngôn ngữ Python & xu hướng phát triển 09:00 Xem thử"} className="bg-[#16231d] border border-[rgba(48,70,58,0.8)] border-solid relative rounded-[8px] shrink-0 w-full" data-name="Bài 1.1 (Xem thử)">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[13px] relative size-full">
                              <div className="relative shrink-0" data-name="Container">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
                                  <div className="relative shrink-0 size-[16.667px]" data-name="Container">
                                    <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/ab38e.svg" />
                                  </div>
                                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                                    <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e4eee7] text-[14px] whitespace-nowrap">
                                      <p className="leading-[20px]">{`1.1 Tổng quan về ngôn ngữ Python & xu hướng phát triển`}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="relative shrink-0" data-name="Container">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center relative size-full">
                                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                                    <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#9eb3a6] text-[12px] whitespace-nowrap">
                                      <p className="leading-[16px]">09:00</p>
                                    </div>
                                  </div>
                                  <div data-action="preview" role="button" tabIndex={0} aria-label={"Xem thử"} className="bg-[#1b4231] content-stretch flex gap-[4px] items-center px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Button">
                                    <div className="h-[8.125px] relative shrink-0 w-[11.917px]" data-name="Container">
                                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/e8cd2.svg" />
                                    </div>
                                    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
                                      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#78dfab] text-[12px] text-center whitespace-nowrap">
                                        <p className="leading-[16px]">Xem thử</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div data-action="preview" role="button" tabIndex={0} aria-label={"Bài 1.2 (Xem thử)"} className="bg-[#16231d] border border-[rgba(48,70,58,0.8)] border-solid relative rounded-[8px] shrink-0 w-full" data-name="Bài 1.2 (Xem thử)">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[13px] relative size-full">
                              <div className="relative shrink-0" data-name="Container">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
                                  <div className="relative shrink-0 size-[16.667px]" data-name="Container">
                                    <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/ab38e.svg" />
                                  </div>
                                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                                    <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e4eee7] text-[14px] whitespace-nowrap">
                                      <p className="leading-[20px]">1.2 Cài đặt Python 3, Visual Studio Code và thiết lập môi trường</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="relative shrink-0" data-name="Container">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center relative size-full">
                                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                                    <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#9eb3a6] text-[12px] whitespace-nowrap">
                                      <p className="leading-[16px]">15:00</p>
                                    </div>
                                  </div>
                                  <div data-action="preview" role="button" tabIndex={0} aria-label={"Xem thử"} className="bg-[#1b4231] content-stretch flex gap-[4px] items-center px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Button">
                                    <div className="h-[8.125px] relative shrink-0 w-[11.917px]" data-name="Container">
                                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/e8cd2.svg" />
                                    </div>
                                    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
                                      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#78dfab] text-[12px] text-center whitespace-nowrap">
                                        <p className="leading-[16px]">Xem thử</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-[rgba(22,35,29,0.6)] relative rounded-[8px] shrink-0 w-full" data-name="Bài 1.3">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[12px] relative size-full">
                              <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Container">
                                <div className="h-[15.75px] relative shrink-0 w-[12px]" data-name="Container">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/717e6.svg" />
                                </div>
                                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                                  <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9eb3a6] text-[14px] whitespace-nowrap">
                                    <p className="leading-[20px]">{`1.3 Viết chương trình đầu tiên: Hello World & quy chuẩn PEP 8`}</p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                                <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9eb3a6] text-[12px] whitespace-nowrap">
                                  <p className="leading-[16px]">11:30</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-[rgba(22,35,29,0.6)] relative rounded-[8px] shrink-0 w-full" data-name="Bài 1.4">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[12px] relative size-full">
                              <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Container">
                                <div className="relative shrink-0 size-[15px]" data-name="Container">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/52cb2.svg" />
                                </div>
                                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                                  <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9eb3a6] text-[14px] whitespace-nowrap">
                                    <p className="leading-[20px]">{`1.4 Bài tập trắc nghiệm cấu hình môi trường & cú pháp mở đầu`}</p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                                <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9eb3a6] text-[12px] whitespace-nowrap">
                                  <p className="leading-[16px]">09:30</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-action="chapter" role="button" tabIndex={0} aria-label={"Chương 2"} className="bg-[#16231d] border border-[#30463a] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Chương 2">
                      <div className="relative shrink-0 w-full" data-name="Button">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[20px] py-[16px] relative size-full">
                          <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
                            <div className="h-[6.167px] relative shrink-0 w-[10px]" data-name="Container">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/04b39.svg" />
                            </div>
                            <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
                              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
                                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                                  <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#78dfab] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                                    <p className="leading-[16px]">CHƯƠNG 2</p>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#9eb3a6] text-[12px] whitespace-nowrap">
                                    <p className="leading-[16px]">• 5 bài học</p>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#9eb3a6] text-[12px] whitespace-nowrap">
                                    <p className="leading-[16px]">• 1 giờ 15 phút</p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
                                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#f0f6f2] text-[16px] whitespace-nowrap">
                                  <p className="leading-[24px]">{`Cú pháp, Biến & Các kiểu dữ liệu cơ bản`}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="h-[15.75px] relative shrink-0 w-[12px]" data-name="Container">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/717e6.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-action="chapter" role="button" tabIndex={0} aria-label={"CHƯƠNG 3 • 6 bài học • 1 giờ 45 phút Cấu trúc điều kiện và Vòng lặp"} className="bg-[#16231d] border border-[#30463a] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Chương 3">
                      <div className="relative shrink-0 w-full" data-name="Button">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[20px] py-[16px] relative size-full">
                          <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
                            <div className="h-[6.167px] relative shrink-0 w-[10px]" data-name="Container">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/04b39.svg" />
                            </div>
                            <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
                              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
                                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                                  <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#78dfab] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                                    <p className="leading-[16px]">CHƯƠNG 3</p>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#9eb3a6] text-[12px] whitespace-nowrap">
                                    <p className="leading-[16px]">• 6 bài học</p>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#9eb3a6] text-[12px] whitespace-nowrap">
                                    <p className="leading-[16px]">• 1 giờ 45 phút</p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
                                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#f0f6f2] text-[16px] whitespace-nowrap">
                                  <p className="leading-[24px]">Cấu trúc điều kiện và Vòng lặp</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="h-[15.75px] relative shrink-0 w-[12px]" data-name="Container">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/717e6.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-action="chapter" role="button" tabIndex={0} aria-label={"CHƯƠNG 4 • 5 bài học • 2 giờ 10 phút Hàm & Module trong Python"} className="bg-[#16231d] border border-[#30463a] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Chương 4">
                      <div className="relative shrink-0 w-full" data-name="Button">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[20px] py-[16px] relative size-full">
                          <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
                            <div className="h-[6.167px] relative shrink-0 w-[10px]" data-name="Container">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/04b39.svg" />
                            </div>
                            <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
                              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
                                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                                  <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#78dfab] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                                    <p className="leading-[16px]">CHƯƠNG 4</p>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#9eb3a6] text-[12px] whitespace-nowrap">
                                    <p className="leading-[16px]">• 5 bài học</p>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#9eb3a6] text-[12px] whitespace-nowrap">
                                    <p className="leading-[16px]">• 2 giờ 10 phút</p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
                                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#f0f6f2] text-[16px] whitespace-nowrap">
                                  <p className="leading-[24px]">{`Hàm & Module trong Python`}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="h-[15.75px] relative shrink-0 w-[12px]" data-name="Container">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/717e6.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-[9/span_4] content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="CỘT PHẢI (4 Cột): STICKY CARD ĐĂNG KÝ KHÓA HỌC">
              <div className="bg-[#16231d] border border-[#30463a] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Background+Border+Shadow">
                <div data-action="preview" role="button" tabIndex={0} aria-label={"Xem thử khóa học FULL HD 1080P"} className="bg-[#101c16] relative shrink-0 w-full" data-name="Thumbnail ảnh khóa học lớn + Nút xem th">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                    <div className="h-[319.86px] relative shrink-0 w-full" data-name="Khóa học Python">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-full left-[-1.61%] max-w-none top-0 w-[103.22%]" src="/assets/35f5a.png" />
                      </div>
                    </div>
                    <div className="absolute backdrop-blur-[1px] bg-[rgba(0,0,0,0.4)] content-stretch flex flex-col gap-[8px] inset-[0_0.01px_0_0] items-center justify-center" data-name="Overlay+OverlayBlur">
                      <div className="bg-[#22c55e] content-stretch flex items-center justify-center pl-[13px] pr-[11px] relative rounded-[9999px] shrink-0 size-[56px]" data-name="Background">
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[56px] top-1/2" data-name="Overlay+Shadow" />
                        <div className="h-[18.667px] relative shrink-0 w-[14.667px]" data-name="Container">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/6ac25.svg" />
                        </div>
                      </div>
                      <div className="content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.06),0px_4px_3px_rgba(0,0,0,0.07)] flex flex-col items-start relative shrink-0" data-name="Shadow">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                          <p data-action="preview" role="button" tabIndex={0} aria-label={"Xem thử khóa học"} className="leading-[20px]">Xem thử khóa học</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.6)] content-stretch flex flex-col items-start left-[12px] px-[8px] py-[2px] rounded-[4px] top-[12px]" data-name="Overlay+OverlayBlur">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
                        <p className="leading-[16.5px]">FULL HD 1080P</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Nội dung Đăng ký & Gi">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start p-[24px] relative size-full">
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Giá hiện tại 299.000đ & Giá gốc 490.000đ (-40%)">
                      <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
                        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Extra_Bold'] font-extrabold justify-center leading-[0] left-0 not-italic text-[#78dfab] text-[30px] top-[18px] whitespace-nowrap">
                          <p className="leading-[36px]">299.000đ</p>
                        </div>
                        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] left-[160.98px] not-italic text-[#91a89a] text-[16px] top-[23px] whitespace-nowrap">
                          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[24px] line-through">490.000đ</p>
                        </div>
                        <div className="absolute bg-[#42232e] border border-[#744051] border-solid content-stretch flex flex-col items-start left-[247.22px] px-[9px] py-[3px] rounded-[4px] top-[14px]" data-name="Background+Border">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#fb91ad] text-[12px] whitespace-nowrap">
                            <p className="leading-[16px]">-40%</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
                        <div className="h-[13.1px] relative shrink-0 w-[14.2px]" data-name="Container">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/ef81d.svg" />
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fbbf65] text-[12px] whitespace-nowrap">
                            <p>
                              <span className="leading-[16px]">{`Ưu đãi áp dụng chỉ còn `}</span>
                              <span className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[16px] not-italic">2 ngày</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Main CTA Buttons: Nổi bật xanh #014421">
                      <div data-action="buy" role="button" tabIndex={0} aria-label={"Đăng ký khóa học ngay"} className="bg-[#165d3d] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[14px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
                        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.01px_0_0] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(6,78,59,0.2),0px_2px_4px_-2px_rgba(6,78,59,0.2)]" data-name="Button:shadow" />
                        <div className="h-[16.667px] relative shrink-0 w-[13.333px]" data-name="Container">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/50cd4.svg" />
                        </div>
                        <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
                            <p className="leading-[24px]">Đăng ký khóa học ngay</p>
                          </div>
                        </div>
                      </div>
                      <div data-action="add-course" role="button" tabIndex={0} aria-label={"Thêm vào giỏ hàng"} className="bg-[#1b2b24] border border-[#3c5646] border-solid content-stretch flex gap-[8px] items-center justify-center px-[17px] py-[13px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
                        <div className="h-[15.75px] relative shrink-0 w-[15.525px]" data-name="Container">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/57c93.svg" />
                        </div>
                        <div className="relative shrink-0" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e4eee7] text-[14px] text-center whitespace-nowrap">
                              <p className="leading-[20px]">Thêm vào giỏ hàng</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9eb3a6] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">Cam kết hoàn tiền trong 7 ngày nếu không hài lòng</p>
                      </div>
                    </div>
                    <div className="border-[#293e32] border-solid border-t content-stretch flex flex-col gap-[12px] items-start pt-[17px] relative shrink-0 w-full" data-name="Khối cam kết 'Khóa học bao gồm">
                      <div className="relative shrink-0 w-full" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f0f6f2] text-[12px] tracking-[0.6px] uppercase w-full">
                            <p className="leading-[16px]">KHÓA HỌC BAO GỒM:</p>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 w-full" data-name="List">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative size-full">
                          <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Item">
                            <div className="h-[15.75px] relative shrink-0 w-[12px]" data-name="Container">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/efb5d.svg" />
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b6c8bd] text-[12px] whitespace-nowrap">
                                <p className="leading-[16px]">Chứng chỉ hoàn thành được cấp bởi WeEdu</p>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Item">
                            <div className="h-[15px] relative shrink-0 w-[13.5px]" data-name="Container">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/245b6.svg" />
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b6c8bd] text-[12px] whitespace-nowrap">
                                <p className="leading-[16px]">Bài tập thực hành sát thực tế kèm lời giải chi tiết</p>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Item">
                            <div className="h-[13.5px] relative shrink-0 w-[15px]" data-name="Container">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/44925.svg" />
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b6c8bd] text-[12px] whitespace-nowrap">
                                <p className="leading-[16px]">{`Hỗ trợ 1:1 trực tiếp từ giảng viên & trợ giảng UIT`}</p>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Item">
                            <div className="h-[8.25px] relative shrink-0 w-[18px]" data-name="Container">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/1df1c.svg" />
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b6c8bd] text-[12px] whitespace-nowrap">
                                <p className="leading-[16px]">{`Quyền truy cập trọn đời trên website & thiết bị di động`}</p>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Item">
                            <div className="h-[9px] relative shrink-0 w-[15px]" data-name="Container">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/5cbaf.svg" />
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b6c8bd] text-[12px] whitespace-nowrap">
                                <p className="leading-[16px]">Tài liệu và mã nguồn dự án GitHub hoàn chỉnh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-[#293e32] border-solid border-t content-stretch flex items-center justify-between pt-[13px] relative shrink-0 w-full" data-name="Share & Bookmark">
                      <div data-action="share" role="button" tabIndex={0} aria-label={"Chia sẻ khóa học"} className="relative shrink-0" data-name="Button">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
                          <div className="h-[13.333px] relative shrink-0 w-[12px]" data-name="Container">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/4fed1.svg" />
                          </div>
                          <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9eb3a6] text-[12px] text-center whitespace-nowrap">
                              <p className="leading-[16px]">Chia sẻ khóa học</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-action="favorite" role="button" tabIndex={0} aria-label={"Lưu vào yêu thích"} className="relative shrink-0" data-name="Button">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
                          <div className="h-[12px] relative shrink-0 w-[9.333px]" data-name="Container">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/7eff6.svg" />
                          </div>
                          <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9eb3a6] text-[12px] text-center whitespace-nowrap">
                              <p className="leading-[16px]">Lưu vào yêu thích</p>
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
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-center left-0 top-0 w-[1920px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(11, 21, 16) 0%, rgb(11, 21, 16) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="HEADER">
        <Component1920PxDesktopContainerCanvasFrame className="h-[137px] relative shrink-0 w-[1920px]" />
      </div>
      <Footer className="absolute border-[#355e3b] border-solid border-t content-stretch flex flex-col items-start left-0 pt-px top-[1543px] w-[1920px]" />
    </div>
  );
}
