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

export default function PreviewDarkPart1Part3() {
  return <Footer className="border-[#355e3b] border-solid border-t content-stretch flex flex-col items-start pt-px relative size-full" />;
}
