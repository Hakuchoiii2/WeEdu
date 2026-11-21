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

export default function Lesson() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 250, 252) 0%, rgb(248, 250, 252) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="WeEdu - Màn hình học Video tương tác (Light Mode)">
      <div className="-translate-x-1/2 absolute grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_1025.94px] left-[calc(50%+1px)] overflow-clip top-[137px] w-[1908px]" data-name="MainContentLayout (3 Cột)">
        <div className="bg-white border-[#e2e8f0] border-r border-solid col-[1/span_3] content-stretch flex flex-col items-start justify-self-stretch overflow-auto pr-px relative row-1 self-start shrink-0" data-name="Aside">
          <div className="bg-[#f8fafc] border-[#e2e8f0] border-b border-solid relative shrink-0 w-full" data-name="Background+HorizontalBorder">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[17px] pt-[16px] px-[16px] relative size-full">
              <div className="relative shrink-0 w-full" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
                      <p className="leading-[16px]">KHÓA HỌC CHUYÊN SÂU</p>
                    </div>
                  </div>
                  <div className="bg-[#ecfdf5] border border-[#a7f3d0] border-solid content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[4px] shrink-0" data-name="Background+Border">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">Đang học</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="Heading 1">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-full">
                    <p className="leading-[19.25px]">{`Lập trình Web Chuyên Nghiệp với React 19, Next.js & TypeScript`}</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start pt-[10px] relative size-full">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">Hoàn tất 60%</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">9/15 bài</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#e2e8f0] border border-[#cbd5e1] border-solid h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background+Border">
                    <div className="absolute bg-gradient-to-r from-[#10b981] inset-[0_calc(40.04%-0.2px)_0_calc(0.22%-1px)] rounded-[9999px] to-[#14b8a6]" data-name="Gradient" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="Background">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start pb-[368.19px] pt-[12px] px-[12px] relative size-full">
              <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Background+Border+Shadow">
                <div className="relative shrink-0 w-full" data-name="Button">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[14px] py-[12px] relative size-full">
                    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                      <div className="bg-[#d1fae5] border border-[#6ee7b7] border-solid content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background+Border">
                        <div className="h-[7.5px] relative shrink-0 w-[10.5px]" data-name="Container">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/4e442.svg" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Margin">
                        <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[12px] whitespace-nowrap">
                              <p className="leading-[16px]">Unit 1: Nền tảng React Server Architecture</p>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                            <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">
                              <p className="leading-[16.5px]">5 bài - 42 phút</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[6px] relative shrink-0 w-[10.5px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/e869e.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Background+Border+Shadow">
                <div className="relative shrink-0 w-full" data-name="Button">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[14px] py-[12px] relative size-full">
                    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                      <div className="bg-[#d1fae5] border border-[#6ee7b7] border-solid content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background+Border">
                        <div className="h-[7.5px] relative shrink-0 w-[10.5px]" data-name="Container">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/4e442.svg" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Margin">
                        <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[12px] whitespace-nowrap">
                              <p className="leading-[16px]">{`Unit 2: Client & Server Component Boundaries`}</p>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                            <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">
                              <p className="leading-[16.5px]">12 bài - 1 tiếng</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[6px] relative shrink-0 w-[10.5px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/e869e.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(236,253,245,0.5)] border-2 border-[#10b981] border-solid content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Overlay+Border+Shadow">
                <div className="bg-[rgba(209,250,229,0.7)] border-[#a7f3d0] border-b border-solid relative shrink-0 w-full" data-name="Button">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[13px] pt-[12px] px-[14px] relative size-full">
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                        <div className="bg-[#059669] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center pb-[4.5px] pt-[3.5px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background+Shadow">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
                            <p className="leading-[16px]">3</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Margin">
                          <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#022c22] text-[12px] whitespace-nowrap">
                                <p className="leading-[16px]">{`Unit 3: Optimistic UI & Server Actions`}</p>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                              <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#065f46] text-[11px] whitespace-nowrap">
                                <p className="leading-[16.5px]">4 bài - 30 phút</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[6px] relative shrink-0 w-[10.5px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/6c92c.svg" />
                    </div>
                  </div>
                </div>
                <div className="bg-white relative shrink-0 w-full" data-name="Background">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start p-[8px] relative size-full">
                    <div className="content-stretch flex items-center justify-between p-[8px] relative rounded-[6px] shrink-0 w-full" data-name="Link">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Container">
                        <div className="relative shrink-0 size-[12px]" data-name="Container">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/42bb6.svg" />
                        </div>
                        <div className="content-stretch flex flex-col items-start pl-[10px] relative shrink-0" data-name="Margin">
                          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
                              <p className="leading-[16px]">Tên bài 1: Giới thiệu Server Components</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
                        <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">
                          <p className="leading-[16px]">8p12s</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center justify-between p-[8px] relative rounded-[6px] shrink-0 w-full" data-name="Link">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Container">
                        <div className="relative shrink-0 size-[12px]" data-name="Container">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/42bb6.svg" />
                        </div>
                        <div className="content-stretch flex flex-col items-start pl-[10px] relative shrink-0" data-name="Margin">
                          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
                              <p className="leading-[16px]">{`Tên bài 2: Server Actions & Mutations`}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
                        <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">
                          <p className="leading-[16px]">11p40s</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#ecfdf5] border-[#059669] border-l-4 border-solid content-stretch flex items-center justify-between pl-[14px] pr-[10px] py-[10px] relative rounded-[6px] shrink-0 w-full" data-name="Link">
                      <div className="relative shrink-0" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex isolate items-center overflow-clip relative rounded-[inherit] size-full">
                          <div className="content-stretch flex items-start relative shrink-0 size-[8px] z-[2]" data-name="Container">
                            <div className="absolute bg-[#34d399] inset-0 opacity-75 rounded-[9999px]" data-name="Background" />
                            <div className="bg-[#059669] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
                          </div>
                          <div className="content-stretch flex flex-col items-start pl-[10px] relative shrink-0 z-[1]" data-name="Margin">
                            <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#064e3b] text-[12px] whitespace-nowrap">
                                <p className="leading-[16px]">{`Tên bài 3: Xử lý Optimistic UI & Streaming`}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#d1fae5] border border-[#6ee7b7] border-solid relative rounded-[4px] shrink-0" data-name="Background+Border">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[7px] py-[3px] relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#065f46] text-[11px] whitespace-nowrap">
                            <p className="leading-[16px]">10p45s</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center justify-between p-[8px] relative rounded-[6px] shrink-0 w-full" data-name="Link">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Container">
                        <div className="h-[11.993px] relative shrink-0 w-[11.98px]" data-name="Container">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/a9a08.svg" />
                        </div>
                        <div className="content-stretch flex flex-col items-start pl-[10px] relative shrink-0" data-name="Margin">
                          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
                              <p className="leading-[16px]">Ôn tập: Kiểm tra kiến thức Unit 3</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#fef3c7] border border-[#fcd34d] border-solid content-stretch flex flex-col items-start px-[7px] py-[3px] relative rounded-[4px] shrink-0" data-name="Background+Border">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#92400e] text-[10px] whitespace-nowrap">
                          <p className="leading-[16px]">Quiz</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(241,245,249,0.7)] border border-[#e2e8f0] border-solid content-stretch flex flex-col items-start opacity-60 p-px relative rounded-[8px] shrink-0 w-full" data-name="Overlay+Border">
                <div className="relative shrink-0 w-full" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[14px] py-[12px] relative size-full">
                    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                      <div className="bg-[#cbd5e1] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
                        <div className="h-[12px] relative shrink-0 w-[10.5px]" data-name="Container">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/233c9.svg" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Margin">
                        <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                              <p className="leading-[16px]">{`Unit 4: Advanced Caching & Revalidation`}</p>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                            <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">
                              <p className="leading-[16.5px]">Chưa mở</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[6px] relative shrink-0 w-[10.5px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/e869e.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(241,245,249,0.7)] border border-[#e2e8f0] border-solid content-stretch flex flex-col items-start opacity-60 p-px relative rounded-[8px] shrink-0 w-full" data-name="Overlay+Border">
                <div className="relative shrink-0 w-full" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[14px] py-[12px] relative size-full">
                    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                      <div className="bg-[#cbd5e1] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
                        <div className="h-[12px] relative shrink-0 w-[10.5px]" data-name="Container">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/233c9.svg" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Margin">
                        <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                              <p className="leading-[16px]">{`Unit 5: Triển khai & Tối ưu hóa SEO Production`}</p>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                            <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">
                              <p className="leading-[16.5px]">Chưa mở</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[6px] relative shrink-0 w-[10.5px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/e869e.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f8fafc] border-[#e2e8f0] border-r border-solid col-[4/span_6] h-[1025.94px] justify-self-stretch overflow-auto relative row-1 shrink-0" data-name="Section">
          <div className="absolute bg-white border-[#e2e8f0] border-b border-solid content-stretch flex items-center justify-between left-0 pb-[15px] pt-[14px] px-[24px] right-0 top-0" data-name="Background+HorizontalBorder">
            <div className="relative shrink-0" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
                <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">Unit 3</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">•</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">Bài 3</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] whitespace-nowrap">
                    <p className="leading-[24px]">{`Xử lý Optimistic UI & Streaming với Next.js App Router`}</p>
                  </div>
                </div>
                <div className="content-stretch flex items-center pt-[6px] relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                    <div className="relative shrink-0 size-[12px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/760c1.svg" />
                    </div>
                    <div className="content-stretch flex flex-col items-start pl-[6px] relative shrink-0" data-name="Margin">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">10p45s</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0" data-name="Margin">
                    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                      <div className="h-[11.995px] relative shrink-0 w-[9px]" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/5bd60.svg" />
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[6px] relative shrink-0" data-name="Margin">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">6 phút đọc</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0" data-name="Margin">
                    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                      <div className="h-[12px] relative shrink-0 w-[9px]" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/ed296.svg" />
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[6px] relative shrink-0" data-name="Margin">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">Có sẵn tài liệu</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#059669] border border-[#059669] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[8px] shrink-0" data-name="Button">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[15px] pr-[23px] py-[9px] relative size-full">
                <div className="relative shrink-0" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
                      <p className="leading-[16px]">Tải video</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#f8fafc] content-stretch flex flex-col items-start left-0 p-[24px] right-0 top-[634.44px]" data-name="Background">
            <div className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Background+Border+Shadow">
              <div className="bg-[#f8fafc] border-[#e2e8f0] border-b border-solid relative shrink-0 w-full" data-name="Background+HorizontalBorder">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-auto pb-px px-[16px] relative rounded-[inherit] size-full">
                  <div data-action="lesson-tab" role="button" tabIndex={0} aria-label={"Bản ghi lời"} className="bg-white border-[#059669] border-b-2 border-solid relative shrink-0" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[14px] pt-[12px] px-[16px] relative size-full">
                      <div className="h-[12px] relative shrink-0 w-[9px]" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/d7992.svg" />
                      </div>
                      <div className="relative shrink-0" data-name="Margin">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative size-full">
                          <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[12px] text-center whitespace-nowrap">
                              <p className="leading-[16px]">Bản ghi lời</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-action="lesson-tab" role="button" tabIndex={0} aria-label={"Tài liệu (2)"} className="border-[rgba(0,0,0,0)] border-b-2 border-solid relative shrink-0" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[14px] pt-[12px] px-[16px] relative size-full">
                      <div className="h-[10.5px] relative shrink-0 w-[13.5px]" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/f432a.svg" />
                      </div>
                      <div className="relative shrink-0" data-name="Margin">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative size-full">
                          <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center whitespace-nowrap">
                              <p className="leading-[16px]">Tài liệu (2)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-action="lesson-tab" role="button" tabIndex={0} aria-label={"Tổng quan"} className="border-[rgba(0,0,0,0)] border-b-2 border-solid relative shrink-0" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[14px] pt-[12px] px-[16px] relative size-full">
                      <div className="relative shrink-0 size-[12px]" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/0e91a.svg" />
                      </div>
                      <div className="relative shrink-0" data-name="Margin">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative size-full">
                          <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center whitespace-nowrap">
                              <p className="leading-[16px]">Tổng quan</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-action="lesson-tab" role="button" tabIndex={0} aria-label={"Câu hỏi thường gặp"} className="border-[rgba(0,0,0,0)] border-b-2 border-solid relative shrink-0" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[14px] pt-[12px] px-[16px] relative size-full">
                      <div className="relative shrink-0 size-[12px]" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/8915f.svg" />
                      </div>
                      <div className="relative shrink-0" data-name="Margin">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative size-full">
                          <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center whitespace-nowrap">
                              <p className="leading-[16px]">Câu hỏi thường gặp</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white relative shrink-0 w-full" data-name="Background">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto p-[20px] relative rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
                    <div className="border-[#e2e8f0] border-b border-solid content-stretch flex items-center justify-between pb-[5px] relative shrink-0 w-full" data-name="HorizontalBorder">
                      <div className="relative shrink-0" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">
                            <p className="leading-[16px]">Nội dung bài giảng đồng bộ theo thời gian thực</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#ecfdf5] border border-[#a7f3d0] border-solid relative rounded-[4px] shrink-0" data-name="Background+Border">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9px] py-[3px] relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#047857] text-[11px] whitespace-nowrap">
                            <p className="leading-[16.5px]">Auto-scroll on</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[rgba(248,250,252,0.6)] border border-[#e2e8f0] border-solid content-stretch flex items-start p-[13px] relative rounded-[8px] shrink-0 w-full" data-name="Overlay+Border">
                      <div className="bg-[#d1fae5] border border-[#a7f3d0] border-solid relative rounded-[4px] shrink-0" data-name="Background+Border">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[11px] py-[5px] relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#047857] text-[12px] whitespace-nowrap">
                            <p className="leading-[16px]">00:00</p>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0" data-name="Margin">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[16px] pr-[10.77px] relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
                            <p className="leading-[19.5px] mb-0">Chào mừng các bạn đến với bài học xử lý Optimistic UI trong React 19 và Next.js App Router. Trong bài này, chúng ta sẽ tối ưu hóa trải</p>
                            <p className="leading-[19.5px]">nghiệm người dùng tức thì mà không cần chờ phản hồi mạng.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[rgba(236,253,245,0.6)] border-[#059669] border-b border-l-4 border-r border-solid border-t content-stretch flex items-start pl-[16px] pr-[13px] py-[13px] relative rounded-[8px] shrink-0 w-full" data-name="Overlay+Border">
                      <div className="bg-[#059669] border border-[#059669] border-solid relative rounded-[4px] shrink-0" data-name="Background+Border">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[11px] py-[5px] relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-white whitespace-nowrap">
                            <p className="leading-[16px]">00:45</p>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0" data-name="Margin">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[16px] pr-[2.98px] relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] whitespace-nowrap">
                            <p className="leading-[19.5px] mb-0">Chúng ta sẽ tìm hiểu cơ chế hook useOptimistic() và cách nó cập nhật giao diện người dùng tức thì trước khi server hoàn tất phản hồi.</p>
                            <p className="leading-[19.5px]">Điều này giúp loại bỏ hoàn toàn độ trễ thị giác khi bấm nút gửi.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[rgba(248,250,252,0.6)] border border-[#e2e8f0] border-solid content-stretch flex items-start p-[13px] relative rounded-[8px] shrink-0 w-full" data-name="Overlay+Border">
                      <div className="bg-[#d1fae5] border border-[#a7f3d0] border-solid relative rounded-[4px] shrink-0" data-name="Background+Border">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[11px] py-[5px] relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#047857] text-[12px] whitespace-nowrap">
                            <p className="leading-[16px]">01:25</p>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0" data-name="Margin">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[16px] pr-[31.84px] relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
                            <p className="leading-[19.5px] mb-0">Xem xét ví dụ thực tế: khi gửi một bình luận trong ứng dụng e-learning này, phản hồi hiển thị ngay lập tức trong luồng bình luận với</p>
                            <p className="leading-[19.5px]">{`trạng thái "đang xử lý".`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute aspect-video bg-[#020617] content-stretch flex flex-col items-start justify-end left-0 overflow-clip pt-[453.44px] right-0 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-[95px]" data-name="Background+Shadow">
            <div className="absolute bg-[#0c141f] content-stretch flex inset-0 items-center justify-center overflow-clip" data-name="Background">
              <div className="flex-[1_0_0] h-full min-w-px opacity-95 relative" style={{ backgroundImage: "linear-gradient(150.48822641729672deg, rgb(11, 19, 32) 0%, rgb(9, 24, 26) 50%, rgb(2, 6, 23) 100%)" }} data-name="Background">
                <div className="absolute content-stretch flex flex-col items-start left-[32px] right-[32px] top-[31px]" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                    <p className="leading-[19.5px]">{`// WeEdu Interactive Lesson: Optimistic UI Hook Implementation`}</p>
                  </div>
                </div>
                <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['JetBrains_Mono:Regular'] font-normal justify-center leading-[0] left-[32px] text-[#c084fc] text-[12px] top-[70.25px] whitespace-nowrap">
                  <p className="mb-0">
                    <span className="leading-[19.5px]">import</span>
                    <span className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[19.5px] text-[rgba(52,211,153,0.9)]">{` { useOptimistic, useTransition } `}</span>
                    <span className="leading-[19.5px]">from</span>
                    <span className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[19.5px] text-[rgba(52,211,153,0.9)]">{` `}</span>
                    <span className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[19.5px] text-[#fcd34d]">{`'react'`}</span>
                    <span className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[19.5px] text-[rgba(52,211,153,0.9)]">;</span>
                  </p>
                  <p>
                    <span className="leading-[19.5px]">import</span>
                    <span className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[19.5px] text-[rgba(52,211,153,0.9)]">{` { updateCommentAction } `}</span>
                    <span className="leading-[19.5px]">from</span>
                    <span className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[19.5px] text-[rgba(52,211,153,0.9)]">{` `}</span>
                    <span className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[19.5px] text-[#fcd34d]">{`'@/actions/comments'`}</span>
                    <span className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[19.5px] text-[rgba(52,211,153,0.9)]">;</span>
                  </p>
                </div>
                <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['JetBrains_Mono:Regular'] font-normal justify-center leading-[0] left-[32px] text-[#60a5fa] text-[12px] top-[167.75px] whitespace-nowrap">
                  <p className="mb-0 whitespace-pre">
                    <span className="leading-[19.5px]">export default function</span>
                    <span className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[19.5px] text-[rgba(52,211,153,0.9)]">{` `}</span>
                    <span className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[19.5px] text-[#fde047]">CommentThread</span>
                    <span className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[19.5px] text-[rgba(52,211,153,0.9)]">{`({ initialComments }) {`}</span>
                  </p>
                  <p className="mb-0 whitespace-pre">
                    <span className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[19.5px] text-[rgba(52,211,153,0.9)]">{`  `}</span>
                    <span className="leading-[19.5px]">const</span>
                    <span className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[19.5px] text-[rgba(52,211,153,0.9)]">{` [optimisticComments, addOptimisticComment] = `}</span>
                    <span className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[19.5px] text-[#fde047]">useOptimistic</span>
                    <span className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[19.5px] text-[rgba(52,211,153,0.9)]">(</span>
                  </p>
                  <p className="leading-[19.5px] mb-0 text-[rgba(52,211,153,0.9)] whitespace-pre">{`    initialComments,`}</p>
                  <p className="mb-0 whitespace-pre">
                    <span className="leading-[19.5px] text-[rgba(52,211,153,0.9)]">{`    (state, newComment) => [...state, { ...newComment, pending: `}</span>
                    <span className="leading-[19.5px] text-[#fb7185]">true</span>
                    <span className="leading-[19.5px] text-[rgba(52,211,153,0.9)]">{` }]`}</span>
                  </p>
                  <p className="leading-[19.5px] mb-0 text-[rgba(52,211,153,0.9)] whitespace-pre">{`  );`}</p>
                  <p className="whitespace-pre">
                    <span className="leading-[19.5px] text-[rgba(52,211,153,0.9)]">{`  `}</span>
                    <span className="leading-[19.5px] text-[#94a3b8]">{`// Đang phát trực tiếp bài giảng tại mốc thời lượng 04:45...`}</span>
                  </p>
                </div>
              </div>
              <div data-action="play" role="button" tabIndex={0} aria-label={"Play video"} className="absolute bg-[rgba(5,150,105,0.9)] border-2 border-[#6ee7b7] border-solid content-stretch flex items-center justify-center left-[439.5px] p-[2px] rounded-[9999px] size-[80px] top-[229.72px]" data-name="Button - Play video">
                <div className="absolute bg-[rgba(255,255,255,0)] left-[-2px] rounded-[9999px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-[80px] top-[-2px]" data-name="Button - Play video:shadow" />
                <div className="h-[21.024px] relative shrink-0 w-[22px]" data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/11ef4.svg" />
                </div>
              </div>
            </div>
            <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.95)] border-2 border-[#10b981] border-solid content-stretch flex flex-col gap-[8px] items-start p-[18px] right-[16px] rounded-[12px] top-[16px] w-[320px]" data-name="Background+Border+OverlayBlur">
              <div className="absolute bg-[rgba(255,255,255,0)] bottom-[-2px] right-[-2px] rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-[-2px] w-[320px]" data-name="Overlay+Shadow" />
              <div className="border-[#e2e8f0] border-b border-solid relative shrink-0 w-full" data-name="HorizontalBorder">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[9px] relative size-full">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                      <div className="relative shrink-0 size-[12px]" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/918ea.svg" />
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[6px] relative shrink-0" data-name="Margin">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                          <p className="leading-[16px]">CÂU HỎI TƯƠNG TÁC</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#fef3c7] border border-[#fcd34d] border-solid relative rounded-[4px] shrink-0" data-name="Background+Border">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9px] py-[3px] relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#92400e] text-[10px] whitespace-nowrap">
                        <p className="leading-[15px]">Mốc 04:45</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[12px] w-full">
                    <p className="leading-[19.5px] mb-0">Hàm nào trong React 19 cho phép hiển thị giá trị</p>
                    <p className="leading-[19.5px]">dự kiến trước khi Server Action hoàn tất?</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start pt-[4px] relative size-full">
                  <div data-action="quiz" role="button" tabIndex={0} aria-label={"A useTransition()"} className="bg-[#f8fafc] border border-[#e2e8f0] border-solid content-stretch flex items-center p-[9px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
                    <div className="h-[20px] relative shrink-0 w-[28px]" data-name="Margin">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[8px] relative size-full">
                        <div className="bg-[#e2e8f0] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[20px]" data-name="Background">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[11px] text-center whitespace-nowrap">
                            <p className="leading-[16px]">A</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">useTransition()</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-action="quiz" role="button" tabIndex={0} aria-label={"B useOptimistic()"} className="bg-[#ecfdf5] border border-[#10b981] border-solid content-stretch flex items-center p-[9px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
                    <div className="h-[20px] relative shrink-0 w-[28px]" data-name="Margin">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[8px] relative size-full">
                        <div className="bg-[#059669] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[20px]" data-name="Background">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-center text-white whitespace-nowrap">
                            <p className="leading-[16px]">B</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#022c22] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">useOptimistic()</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-[1_0_0] min-w-[10.5px] relative" data-name="Margin">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end min-w-[inherit] pl-[138.516px] relative size-full">
                        <div className="h-[7.5px] relative shrink-0 w-[10.5px]" data-name="Container">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/66f48.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-action="quiz" role="button" tabIndex={0} aria-label={"C useDeferredValue()"} className="bg-[#f8fafc] border border-[#e2e8f0] border-solid content-stretch flex items-center p-[9px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
                    <div className="h-[20px] relative shrink-0 w-[28px]" data-name="Margin">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[8px] relative size-full">
                        <div className="bg-[#e2e8f0] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[20px]" data-name="Background">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[11px] text-center whitespace-nowrap">
                            <p className="leading-[16px]">C</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">useDeferredValue()</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-t content-stretch flex flex-col from-[#020617] gap-[8px] items-start pb-[12px] pt-[32px] px-[16px] relative shrink-0 to-[rgba(15,23,42,0)] via-1/2 via-[rgba(15,23,42,0.8)] w-full" data-name="Background">
              <div className="content-stretch flex h-[12px] items-center relative shrink-0 w-full" data-name="Container">
                <div className="bg-[#334155] content-stretch flex flex-[1_0_0] flex-col h-[6px] items-start justify-center min-w-px relative rounded-[9999px]" data-name="Background">
                  <div className="bg-[#10b981] flex-[1_0_0] min-h-px relative rounded-[9999px] w-[412.5px]" data-name="Background">
                    <div className="-translate-y-1/2 absolute bg-white border-2 border-[#10b981] border-solid content-stretch flex flex-col items-end justify-center p-[2px] right-[-2px] rounded-[9999px] size-[18px] top-1/2" data-name="Background+Border">
                      <div className="bg-[rgba(255,255,255,0)] relative rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 size-[14px]" data-name="Overlay+Shadow" />
                    </div>
                  </div>
                  <div className="absolute bg-[#bcb88a] inset-[0_84.68%_0_15%] rounded-[1px]" data-name="Background" />
                  <div className="absolute bg-[#bcb88a] inset-[0_75.68%_0_24%] rounded-[1px]" data-name="Background" />
                  <div className="absolute bg-[#facc15] inset-[0_55.18%_0_44.5%] rounded-[1px]" data-name="Background" />
                  <div className="absolute bg-[#bcb88a] inset-[0_29.68%_0_70%] rounded-[1px]" data-name="Background" />
                  <div className="absolute bg-[#facc15] inset-[0_11.68%_0_88%] rounded-[1px]" data-name="Background" />
                </div>
              </div>
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                  <div data-action="play" role="button" tabIndex={0} aria-label={"Pause"} className="h-[12.264px] relative shrink-0 w-[10.5px]" data-name="Button - Pause">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/09a4e.svg" />
                  </div>
                  <div className="content-stretch flex flex-col items-start pl-[14px] relative shrink-0" data-name="Button - Tua lại 10 giây:margin">
                    <div data-action="rewind" role="button" tabIndex={0} aria-label={"Tua lại 10 giây"} className="h-[10.5px] relative shrink-0 w-[10.875px]" data-name="Button - Tua lại 10 giây">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/21317.svg" />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pl-[14px] relative shrink-0" data-name="Button - Tua tới 10 giây:margin">
                    <div data-action="forward" role="button" tabIndex={0} aria-label={"Tua tới 10 giây"} className="h-[10.5px] relative shrink-0 w-[10.875px]" data-name="Button - Tua tới 10 giây">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/05338.svg" />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pl-[14px] relative shrink-0" data-name="Margin">
                    <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#34d399] text-[12px] tracking-[0.3px] whitespace-nowrap">
                      <p className="leading-[16px]">04:45 / 10:45</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                  <div className="h-[10.741px] relative shrink-0 w-[15px]" data-name="Button - Âm lượng">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/130f4.svg" />
                  </div>
                  <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0" data-name="Button:margin">
                    <div className="bg-[#1e293b] border border-[#475569] border-solid content-stretch flex flex-col items-center justify-center px-[9px] py-[3px] relative rounded-[4px] shrink-0" data-name="Button">
                      <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#e2e8f0] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">1.0x</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0" data-name="Button - Cài đặt chất lượng:margin">
                    <div className="h-[12px] relative shrink-0 w-[11.304px]" data-name="Button - Cài đặt chất lượng">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/0e385.svg" />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0" data-name="Button - Toàn màn hình:margin">
                    <div data-action="fullscreen" role="button" tabIndex={0} aria-label={"Toàn màn hình"} className="relative shrink-0 size-[10.5px]" data-name="Button - Toàn màn hình">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/f9bf7.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white col-[10/span_3] content-stretch flex flex-col items-start justify-self-stretch overflow-auto relative row-1 self-start shrink-0" data-name="Aside">
          <div className="bg-[#f8fafc] border-[#e2e8f0] border-b border-solid content-stretch flex items-start pb-px relative shrink-0 w-full" data-name="Background+HorizontalBorder">
            <div data-action="lesson-tab" role="button" tabIndex={0} aria-label={"Ghi chú"} className="bg-white border-[#059669] border-b-2 border-solid relative shrink-0" data-name="Button">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[14px] pl-[57.91px] pr-[57.9px] pt-[12px] relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[12px] text-center whitespace-nowrap">
                  <p className="leading-[16px]">Ghi chú</p>
                </div>
              </div>
            </div>
            <div data-action="lesson-tab" role="button" tabIndex={0} aria-label={"Câu hỏi (3)"} className="border-[rgba(0,0,0,0)] border-b-2 border-solid relative shrink-0" data-name="Button">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[14px] pl-[48.23px] pr-[48.25px] pt-[12px] relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center whitespace-nowrap">
                  <p className="leading-[16px]">Câu hỏi (3)</p>
                </div>
              </div>
            </div>
            <div data-action="lesson-tab" role="button" tabIndex={0} aria-label={"Trao đổi"} className="border-[rgba(0,0,0,0)] border-b-2 border-solid relative shrink-0" data-name="Button">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[14px] pt-[12px] px-[56.47px] relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center whitespace-nowrap">
                  <p className="leading-[16px]">Trao đổi</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-start pb-[288.44px] pt-[16px] px-[16px] relative shrink-0 w-full" data-name="Background">
            <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Heading 3">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[12px] whitespace-nowrap">
                    <p className="leading-[16px]">Ghi chú của bạn</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">
                    <p className="leading-[16px]">Auto-sync @ 04:45</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] w-full">
                  <p className="leading-[16.5px]">Nơi bạn ghi chú các phần quan trọng trong video</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Margin">
              <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
                <div className="bg-[rgba(241,245,249,0.7)] border-[#e2e8f0] border-b border-solid relative shrink-0 w-full" data-name="Overlay+HorizontalBorder">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[7px] pt-[6px] px-[12px] relative size-full">
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                        <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="Button">
                          <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] text-center whitespace-nowrap">
                            <p className="leading-[16px]">B</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start pl-[10px] relative shrink-0" data-name="Button:margin">
                          <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="Button">
                            <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Italic'] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] text-center whitespace-nowrap">
                              <p className="leading-[16px]">I</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start pl-[10px] relative shrink-0" data-name="Button:margin">
                          <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="Button">
                            <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#475569] text-[12px] text-center whitespace-nowrap">
                              <p className="leading-[16px]">{`</>`}</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start pl-[10px] relative shrink-0" data-name="Button:margin">
                          <div className="h-[22.5px] relative shrink-0 w-[20px]" data-name="Button">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/da17d.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#ecfdf5] border border-[#6ee7b7] border-solid relative rounded-[4px] shrink-0" data-name="Button">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[9px] py-[3px] relative size-full">
                        <div className="relative shrink-0 size-[10px]" data-name="Container">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/a40c8.svg" />
                        </div>
                        <div className="relative shrink-0" data-name="Margin">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[4px] relative size-full">
                            <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
                              <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#047857] text-[11px] text-center whitespace-nowrap">
                                <p className="leading-[16px]">@ 04:45</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white relative shrink-0 w-full" data-name="Textarea">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto pb-[28px] pt-[12px] px-[12px] relative rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[12px] w-full whitespace-pre-wrap">
                        <p className="leading-[16px] mb-0">{`Lưu ý: useOptimistic nhận vào 2 tham số (state ban đầu, và hàm cập nhật `}</p>
                        <p className="leading-[16px]">dự kiến). Cần rollback nếu server reject.</p>
                      </div>
                    </div>
                  </div>
                <FieldControl field={"note"} label={"Lưu ý: useOptimistic nhận vào 2 tham số (state ban đầu, và hàm cập nhật dự kiến). Cần rollback nếu server reject."} hint={"Lưu ý: useOptimistic nhận vào 2 tham số (state ban đầu, và hàm cập nhật dự kiến). Cần rollback nếu server reject."} /></div>
                <div className="bg-[#f8fafc] border-[#e2e8f0] border-solid border-t relative shrink-0 w-full" data-name="Background+HorizontalBorder">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[8px] pt-[9px] px-[12px] relative size-full">
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                        <div className="h-[6.875px] relative shrink-0 w-[9.625px]" data-name="Container">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/d511e.svg" />
                        </div>
                        <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">
                            <p className="leading-[16px]">Đã lưu bản nháp</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-action="save-note" role="button" tabIndex={0} aria-label={"Đăng"} className="bg-[#059669] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[4px] shrink-0" data-name="Button">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
                          <p className="leading-[16px]">Đăng</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Margin">
              <div className="content-stretch flex flex-col gap-[12px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                      <p className="leading-[16px]">GHI CHÚ ĐÃ LƯU - 2</p>
                    </div>
                  </div>
                  <div className="h-[10.5px] relative shrink-0 w-[13.315px]" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/238de.svg" />
                  </div>
                </div>
                <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid content-stretch flex flex-col gap-[6px] items-start p-[13px] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
                  <div className="relative shrink-0 w-full" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
                      <div className="bg-[#d1fae5] border border-[#a7f3d0] border-solid content-stretch flex gap-[4px] items-center px-[9px] py-[3px] relative rounded-[4px] shrink-0" data-name="Background+Border">
                        <div className="h-[7.884px] relative shrink-0 w-[6.75px]" data-name="Container">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/4bf8c.svg" />
                        </div>
                        <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#047857] text-[11px] whitespace-nowrap">
                          <p className="leading-[16.5px]">01:45</p>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                        <div className="h-[19.906px] relative shrink-0 w-[11.906px]" data-name="Button - Sửa ghi chú">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/7e8ad.svg" />
                        </div>
                        <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Button - Xóa ghi chú:margin">
                          <div className="h-[20px] relative shrink-0 w-[10.5px]" data-name="Button - Xóa ghi chú">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/64c98.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] w-full">
                        <p className="leading-[18px] mb-0">Cần chú ý cơ chế rollback tự động khi server trả về lỗi, đảm bảo tính nhất</p>
                        <p className="leading-[18px]">quán dữ liệu người dùng.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid content-stretch flex flex-col gap-[6px] items-start p-[13px] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
                  <div className="relative shrink-0 w-full" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
                      <div className="bg-[#d1fae5] border border-[#a7f3d0] border-solid content-stretch flex gap-[4px] items-center px-[9px] py-[3px] relative rounded-[4px] shrink-0" data-name="Background+Border">
                        <div className="h-[7.884px] relative shrink-0 w-[6.75px]" data-name="Container">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/4bf8c.svg" />
                        </div>
                        <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#047857] text-[11px] whitespace-nowrap">
                          <p className="leading-[16.5px]">02:35</p>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                        <div className="h-[19.906px] relative shrink-0 w-[11.906px]" data-name="Button - Sửa ghi chú">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/7e8ad.svg" />
                        </div>
                        <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Button - Xóa ghi chú:margin">
                          <div className="h-[20px] relative shrink-0 w-[10.5px]" data-name="Button - Xóa ghi chú">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/64c98.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] w-full">
                        <p className="leading-[18px] mb-0">Cách kết hợp useTransition với Server Actions để bắt trạng thái isPending</p>
                        <p className="leading-[18px]">chính xác.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Margin">
              <div className="border-[#e2e8f0] border-solid border-t content-stretch flex flex-col gap-[8px] items-start pt-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
                <div className="relative shrink-0 w-full" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                        <p className="leading-[16px]">TRAO ĐỔI CỘNG ĐỒNG GẦN ĐÂY</p>
                      </div>
                    </div>
                    <div className="bg-[#ecfdf5] border border-[#a7f3d0] border-solid content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[4px] shrink-0" data-name="Background+Border">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[10px] tracking-[0.6px] uppercase whitespace-nowrap">
                        <p className="leading-[16px]">TRỰC TUYẾN (14)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start p-[11px] relative size-full">
                    <div className="relative shrink-0 w-full" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                        <div className="bg-[#059669] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[20px]" data-name="Background">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">
                            <p className="leading-[16px]">A</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] whitespace-nowrap">
                            <p className="leading-[16px]">Nguyễn Hoàng Long</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] whitespace-nowrap">
                            <p className="leading-[16px]">10 phút trước</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-full" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[11px] w-full">
                          <p className="leading-[16px] mb-0">Có ai thử dùng React 19 useOptimistic với form có upload ảnh lớn chưa ạ? Có bị</p>
                          <p className="leading-[16px]">lag bộ nhớ không?</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-full" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pt-[4px] relative size-full">
                        <div className="content-stretch flex items-center relative shrink-0" data-name="Button">
                          <div className="h-[9.623px] relative shrink-0 w-[11px]" data-name="Container">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/445d2.svg" />
                          </div>
                          <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                            <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] text-center whitespace-nowrap">
                                <p className="leading-[16px]">12</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0" data-name="Button:margin">
                          <div className="content-stretch flex items-center relative shrink-0" data-name="Button">
                            <div className="h-[9.623px] relative shrink-0 w-[11px]" data-name="Container">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/a4e60.svg" />
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0" data-name="Button:margin">
                          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[11px] text-center whitespace-nowrap">
                              <p className="leading-[16px]">Trả lời</p>
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
          <div className="bg-[#f8fafc] border-[#e2e8f0] border-solid border-t content-stretch flex flex-col items-start pb-[12px] pt-[13px] px-[12px] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
            <div className="relative shrink-0 w-full" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                <div className="bg-white border border-[#cbd5e1] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip pb-[8px] pt-[7px] px-[13px] relative rounded-[8px]" data-name="Input">
                  <div className="relative shrink-0 w-full" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-full">
                        <p className="leading-[normal]">{`Thảo luận cùng giảng viên & học viên...`}</p>
                      </div>
                    </div>
                  </div>
                <FieldControl field={"discussion"} label={"Thảo luận cùng giảng viên & học viên..."} hint={"Thảo luận cùng giảng viên & học viên..."} /></div>
                <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Button:margin">
                  <div data-action="send-comment" role="button" tabIndex={0} aria-label={"Gửi"} className="bg-[#059669] border border-[#059669] border-solid content-stretch flex flex-col items-center justify-center px-[13px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
                      <p className="leading-[16px]">Gửi</p>
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
      <Footer className="absolute border-[#355e3b] border-solid border-t content-stretch flex flex-col items-start left-0 pt-px top-[1209px] w-[1910px]" />
    </div>
  );
}
