import {Discount,TitleCover} from '../CoursePresentation'
import {useHomeReveal} from '../HomeMotion'
export default function MemberDark() {
  const revealRoot=useHomeReveal()
  return (
    <div className="content-stretch flex flex-col items-center relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(11, 19, 16) 0%, rgb(11, 19, 16) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="[DARK] Trang chủ khi đã đăng nhập">
      <div ref={revealRoot} className="content-stretch flex flex-col gap-[48px] items-start pb-[96px] pt-[48px] px-[120px] relative shrink-0 w-[1920px]" data-name="Main - MAIN BODY CONTENT CONTAINER: 1920px width, 120px side padding, 12-column grid system">
        <div className="bg-[#101f17] border border-[#1c382a] border-solid content-stretch flex items-center justify-between overflow-clip p-[33px] relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Section - 1. PERSONALIZED WELCOME BLOCK">
          <div className="absolute bg-[rgba(22,56,39,0.4)] blur-[64px] right-[-64px] rounded-[9999px] size-[320px] top-[-64px]" data-name="Background Ambient Glow" />
          <div className="max-w-[768px] relative shrink-0" data-name="Left Column: Greeting & Inline Quick Metrics">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] relative size-full">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
                <div className="bg-[#153426] border border-[#24583e] border-solid content-stretch flex gap-[8px] items-center px-[13px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
                  <div className="bg-[#4ade80] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#86efac] text-[12px] whitespace-nowrap">
                    <p className="leading-[16px]">Học viên tích cực</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a86] text-[14px] whitespace-nowrap">
                    <p className="leading-[20px]">Hôm nay, Thứ Sáu 13/11</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Heading 1">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold'] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-white tracking-[-0.75px] uppercase whitespace-nowrap">
                  <p className="leading-[36px]">CHÀO MỪNG QUAY LẠI!</p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.75px] uppercase whitespace-nowrap">
                    <p className="leading-[32px]">👋</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[16px] whitespace-nowrap">
                  <p className="leading-[24px]">Hãy tiếp tục hoàn thành mục tiêu học tập hàng ngày để duy trì chuỗi phong độ xuất sắc của bạn.</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[24px] items-center pt-[8px] relative shrink-0 w-full" data-name="Inline Quick Metrics">
                <div className="bg-[rgba(11,19,16,0.9)] border border-[#1c382a] border-solid content-stretch flex gap-[12px] items-center px-[17px] py-[11px] relative rounded-[12px] shrink-0" data-name="Metric 1">
                  <div className="bg-[#153426] border border-[#24583e] border-solid relative rounded-[8px] shrink-0 size-[36px]" data-name="Background+Border">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
                      <div className="relative shrink-0 size-[20px]" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/c802a.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a86] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">Thời gian học hôm nay</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] h-[24px] leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Paragraph">
                        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold'] font-bold justify-center left-0 text-[16px] text-white top-[12px]">
                          <p className="leading-[24px]">{`45 phút `}</p>
                        </div>
                        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular'] font-normal justify-center left-[64.22px] text-[#4ade80] text-[12px] top-[13.5px]">
                          <p className="leading-[16px]">(Đạt mục tiêu)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[rgba(11,19,16,0.9)] border border-[#1c382a] border-solid content-stretch flex gap-[12px] items-center px-[17px] py-[11px] relative rounded-[12px] shrink-0" data-name="Metric 2">
                  <div className="bg-[#153426] border border-[#24583e] border-solid relative rounded-[8px] shrink-0 size-[36px]" data-name="Background+Border">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
                      <div className="relative shrink-0 size-[20px]" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/2b222.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a86] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">Chuỗi học tập</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
                          <p className="leading-[24px]">7 ngày liên tiếp 🔥</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Right Column: Minimal Geometric Learning Streak Badge">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pr-[16px] relative size-full">
              <div className="bg-[#0b1310] border border-[#24583e] border-solid h-[182px] min-w-[200px] relative rounded-[16px] shrink-0 w-[200px]" data-name="Background+Border">
                <div className="absolute bg-[rgba(255,255,255,0)] inset-[-1px] rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center left-1/2 top-[calc(50%+16px)]" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.7px] uppercase whitespace-nowrap">
                    <p className="leading-[20px]">STREAK MASTER</p>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-[36.78px] pt-[4px] top-[116px]" data-name="Margin">
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#86efac] text-[12px] text-center whitespace-nowrap">
                      <p className="leading-[16px]">Top 5% học viên tuần</p>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-[53px] pt-[12px] top-[136px]" data-name="Margin">
                  <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-name="Container">
                    <div className="bg-[#4ade80] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
                    <div className="bg-[#4ade80] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
                    <div className="bg-[#4ade80] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
                    <div className="bg-[#4ade80] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
                    <div className="bg-[#4ade80] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
                    <div className="bg-[#4ade80] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
                    <div className="bg-[#4ade80] content-stretch flex flex-col items-start relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background">
                      <div className="bg-[rgba(255,255,255,0)] relative rounded-[9999px] shadow-[0px_0px_0px_2px_#86efac] shrink-0 size-[8px]" data-name="Overlay+Shadow" />
                    </div>
                  </div>
                </div>
                <div className="absolute h-[72px] left-[67px] top-[24px] w-[64px]" data-name="Geometric Streak Icon:margin">
                  <div className="absolute content-stretch flex h-[64px] items-center justify-center left-[-1.94px] top-0 w-[67.882px]" data-name="Geometric Streak Icon">
                    <div className="absolute inset-[0_1.94px] opacity-25 rounded-[9999px]" style={{ backgroundImage: "linear-gradient(45deg, rgb(28, 56, 42) 0%, rgb(74, 222, 128) 100%)" }} data-name="Gradient" />
                    <div className="flex items-center justify-center relative shrink-0 size-[67.882px]">
                      <div className="flex-none rotate-45">
                        <div className="border border-[#24583e] border-solid content-stretch flex items-center justify-center p-px relative rounded-[12px] size-[48px]" data-name="Background+Border+Shadow">
                          <div aria-hidden className="absolute bg-[#101f17] inset-0 pointer-events-none rounded-[12px]" />
                          <div className="flex items-center justify-center relative shrink-0 size-[32.605px]">
                            <div className="-rotate-45 flex-none">
                              <div className="relative" data-name="Container">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                                  <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold'] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#86efac] text-[24px] text-center whitespace-nowrap">
                                    <p className="leading-[32px]">7</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section - 2. CONTINUE LEARNING WIDGET ('Tiếp tục học')">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Heading 2">
              <div className="bg-[#4ade80] relative rounded-[9999px] shrink-0 size-[10px]" data-name="Background" />
              <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">
                <p data-action="lesson" role="button" tabIndex={0} aria-label={"Tiếp tục học"} className="leading-[28px]">Tiếp tục học</p>
              </div>
            </div>
            <div data-action="dashboard" role="button" tabIndex={0} aria-label={"Xem tất cả khóa học của tôi →"} className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a86] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">Xem tất cả khóa học của tôi →</p>
              </div>
            </div>
          </div>
          <div className="bg-[#101f17] border border-[#1c382a] border-solid content-stretch flex gap-[32px] items-center p-[25px] relative rounded-[16px] shrink-0 w-full" data-name="Prominent full-width 12-column horizontal card">
            <div className="absolute bg-[rgba(255,255,255,0)] inset-[-1px] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Prominent full-width 12-column horizontal card:shadow" />
            <div className="bg-[#0b1310] border border-[#1c382a] border-solid h-[176px] relative rounded-[12px] shrink-0 w-[320px]" data-name="Left: 16:9 Course Thumbnail">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                <div className="absolute content-stretch flex flex-col inset-0 items-center justify-center p-[16px]" style={{ backgroundImage: "linear-gradient(151.31385242626055deg, rgb(11, 19, 16) 0%, rgb(16, 31, 23) 50%, rgb(21, 52, 38) 100%)" }} data-name="Geometric Abstract Thumbnail Representation">
                  <div className="content-stretch flex flex-col h-[56px] items-start pb-[8px] relative shrink-0 w-[48px]" data-name="Margin">
                    <div className="bg-[#153426] border border-[#24583e] border-solid content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[48px]" data-name="Background+Border">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[48px] top-1/2" data-name="Overlay+Shadow" />
                      <div className="relative shrink-0 size-[24px]" data-name="SVG - Figma / UI Pen Tool Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/b5cfe.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#86efac] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">
                      <p className="leading-[16px]">UI/UX DESIGN</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a86] text-[11px] whitespace-nowrap">
                      <p className="leading-[16.5px]">Figma Auto Layout</p>
                    </div>
                  </div>
                </div>
                <div className="absolute backdrop-blur-[4px] bg-[rgba(21,52,38,0.9)] border border-[#24583e] border-solid content-stretch flex gap-[6px] items-center left-[12px] px-[11px] py-[5px] rounded-[4px] top-[12px]" data-name="Overlay+Border+OverlayBlur">
                  <div className="bg-[#4ade80] relative rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#86efac] text-[11px] whitespace-nowrap">
                    <p className="leading-[16.5px]">Đang học</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-[1_0_0] min-w-px relative" data-name="Middle: Course Title, Lesson Subtitle, Progress Bar">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11.5px] items-start justify-center relative size-full">
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
                  <div className="bg-[#153426] border border-[#24583e] border-solid content-stretch flex flex-col items-start px-[11px] py-[3px] relative rounded-[4px] shrink-0" data-name="Background+Border">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#86efac] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">Khóa học cốt lõi</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a86] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">Giảng viên: Hoàng Nam Phong (Lead UX)</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.6px] w-full">
                    <p className="leading-[32px]">Thiết kế UI/UX thực chiến với Figma</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
                  <div className="relative shrink-0 size-[16px]" data-name="SVG">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/73e5d.svg" />
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#86efac] text-[14px] whitespace-nowrap">
                    <p className="leading-[20px]">{`Đang học: Bài 12 — Hệ thống lưới 12 cột & Auto Layout`}</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start max-w-[672px] pt-[8px] relative shrink-0 w-[672px]" data-name="Horizontal Progress Bar:margin">
                  <div className="content-stretch flex flex-col gap-[6px] items-start max-w-[672px] relative shrink-0 w-full" data-name="Horizontal Progress Bar">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">Tiến độ tổng quan</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#86efac] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">65% hoàn thành (13/20 bài học)</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#1c382a] border border-[#24583e] border-solid h-[12px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background+Border">
                      <div className="absolute bg-gradient-to-r from-[#24583e] inset-[2px_calc(35.14%-0.3px)_2px_calc(0.45%-0.99px)] rounded-[9999px] to-[#4ade80] via-1/2 via-[#8a9a5b]" data-name="Gradient" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0" data-name="Right: High-contrast primary CTA button">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[16px] pr-[8px] relative size-full">
                <div data-action="lesson" role="button" tabIndex={0} aria-label={"Học tiếp"} className="bg-[#8a9a5b] content-stretch flex gap-[12px] items-center px-[32px] py-[16px] relative rounded-[12px] shrink-0" data-name="Button">
                  <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(138,154,91,0.2),0px_4px_6px_-4px_rgba(138,154,91,0.2)]" data-name="Button:shadow" />
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0b1310] text-[16px] text-center whitespace-nowrap">
                      <p className="leading-[24px]">Học tiếp</p>
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[20px]" data-name="SVG">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/83e8c.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#101f17] border border-[#1c382a] border-solid content-stretch flex flex-col gap-[24px] items-start p-[33px] relative rounded-[16px] shrink-0 w-full" data-name="Section - 3. WEEKLY LEARNING PROGRESS ('Tiến độ học tập tuần này')">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-[-1px] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Section - 3. WEEKLY LEARNING PROGRESS ('Tiến độ học tập tuần này'):shadow" />
          <div className="border-[#1c382a] border-b border-solid relative shrink-0 w-full" data-name="Dashboard Header">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17px] relative size-full">
              <div className="relative shrink-0" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Heading 2">
                    <div className="bg-[#4ade80] relative rounded-[9999px] shrink-0 size-[10px]" data-name="Background" />
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">
                      <p className="leading-[28px]">Tiến độ học tập tuần này</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a86] text-[12px] whitespace-nowrap">
                      <p>
                        <span className="leading-[16px]">{`Tổng thời gian tích lũy tuần này: `}</span>
                        <span className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[16px] not-italic text-white">4 giờ 15 phút</span>
                        <span className="leading-[16px]">{` / Mục tiêu: `}</span>
                        <span className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[16px] not-italic text-[#86efac]">3 giờ 30 phút</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0" data-name="Target legend & Status badge">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24.01px] items-center relative size-full">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
                    <div className="border-[#24583e] border-dashed border-t-2 h-[2px] relative shrink-0 w-[20px]" data-name="Horizontal Divider" />
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a86] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">Mục tiêu: 30p/ngày</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#153426] border border-[#24583e] border-solid content-stretch flex gap-[6px] items-center px-[13px] py-[5px] relative rounded-[8px] shrink-0" data-name="Background+Border">
                    <div className="bg-[#4ade80] relative rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#86efac] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">Vượt 121% chỉ tiêu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Minimalist Vertical Bar Chart">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] pt-[32px] px-[32px] relative size-full">
              <div className="absolute border-[#24583e] border-b-2 border-dashed h-[10.5px] left-[32px] right-[32px] top-[100px]" data-name="Dashed Target Line at 30 min (represented at ~50% height of 200px chart area)">
                <div className="absolute bg-[#101f17] border border-[#1c382a] border-solid bottom-0 content-stretch flex flex-col items-start px-[9px] py-px right-0 rounded-[4px] top-[-10.5px]" data-name="Background+Border">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#86efac] text-[11px] whitespace-nowrap">
                    <p className="leading-[16.5px]">Mục tiêu: 30p/ngày</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[48px] h-[180px] items-start justify-center relative shrink-0 w-full" data-name="Bar Columns Container">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-[201px] items-center justify-end min-w-px relative" data-name="T2: 35 min (Above target)">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a86] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">35p</p>
                    </div>
                  </div>
                  <div className="bg-[#1c382a] h-[105px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[48px]" data-name="Background" />
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a86] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">T2</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-[201px] items-center justify-end min-w-px relative" data-name="T3: 40 min">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a86] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">40p</p>
                    </div>
                  </div>
                  <div className="bg-[#1c382a] h-[120px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[48px]" data-name="Background" />
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a86] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">T3</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-[201px] items-center justify-end min-w-px relative" data-name="T4: 25 min (Below target)">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a86] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">25p</p>
                    </div>
                  </div>
                  <div className="bg-[rgba(28,56,42,0.7)] h-[75px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[48px]" data-name="Overlay" />
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a86] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">T4</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-[201px] items-center justify-end min-w-px relative" data-name="T5: 50 min">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a86] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">50p</p>
                    </div>
                  </div>
                  <div className="bg-[#1c382a] h-[145px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[48px]" data-name="Background" />
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a86] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">T5</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-[201px] items-center justify-end min-w-px relative" data-name="T6: Today - 45 min (Active highlight)">
                  <div className="bg-[#153426] border border-[#24583e] border-solid content-stretch flex gap-[4px] items-center px-[9px] py-[3px] relative rounded-[4px] shrink-0" data-name="Background+Border">
                    <div className="bg-[#4ade80] relative rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold'] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#86efac] text-[11px] tracking-[0.275px] whitespace-nowrap">
                      <p className="leading-[16.5px]">Hôm nay 45p</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-t content-stretch flex flex-col from-[#1c382a] h-[135px] items-center justify-end relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 to-[#4ade80] via-1/2 via-[#8a9a5b] w-[48px]" data-name="Background">
                    <div className="bg-[rgba(255,255,255,0)] h-[135px] relative shadow-[0px_0px_0px_2px_#4ade80,0px_10px_15px_-3px_rgba(74,222,128,0.2),0px_4px_6px_-4px_rgba(74,222,128,0.2)] shrink-0 w-[48px]" data-name="Overlay+Shadow" />
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4ade80] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">T6</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-[201px] items-center justify-end min-w-px opacity-40 relative" data-name="T7: 0 min (Upcoming)">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a86] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">-</p>
                    </div>
                  </div>
                  <div className="bg-[#0b1310] border-[#1c382a] border-dashed border-t-2 h-[8px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[48px]" data-name="Background+HorizontalBorder" />
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a86] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">T7</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-[201px] items-center justify-end min-w-px opacity-40 relative" data-name="CN: 0 min (Upcoming)">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a86] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">-</p>
                    </div>
                  </div>
                  <div className="bg-[#0b1310] border-[#1c382a] border-dashed border-t-2 h-[8px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[48px]" data-name="Background+HorizontalBorder" />
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a86] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">CN</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Section - 4. RECOMMENDED COURSES ('Gợi ý dành cho bạn')">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Heading 2">
                <div className="bg-[#4ade80] relative rounded-[9999px] shrink-0 size-[10px]" data-name="Background" />
                <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">
                  <p className="leading-[28px]">Gợi ý dành cho bạn</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a86] text-[12px] whitespace-nowrap">
                  <p className="leading-[16px]">Dựa trên thói quen học và các kỹ năng bạn quan tâm gần đây</p>
                </div>
              </div>
            </div>
            <div data-action="catalog" role="button" tabIndex={0} aria-label={"Xem thêm"} className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Link">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#86efac] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">Xem thêm</p>
              </div>
              <div className="h-[3.75px] relative shrink-0 w-[9.469px]" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/ad568.svg" />
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="4-Column Course Card Grid">
            <div data-action="detail" role="button" tabIndex={0} aria-label={"Card 1"} className="bg-[#101f17] border border-[#1c382a] border-solid content-stretch flex flex-[1_0_0] flex-col isolate items-start min-w-px overflow-clip p-px relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Card 1">
              <TitleCover variant="lagoon" tag="Bán chạy" title="Fullstack Web Development" meta="36 bài · 24h" subtitle="Học qua thực hành" />
              <div className="relative shrink-0 w-full z-[1]" data-name="Body Content">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full">
                  <div className="content-stretch flex flex-col gap-[5.5px] items-start pt-[5.5px] relative shrink-0 w-full" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#86efac] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
                      <p className="leading-[16.5px]">LẬP TRÌNH FRONTEND</p>
                    </div>
                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 3">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full">
                        <p className="leading-[24px] mb-0">{`Fullstack Web Dev: Next.js 15, TypeScript &`}</p>
                        <p className="leading-[24px]">Tailwind CSS</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[2.5px] relative shrink-0 w-full" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a86] text-[12px] w-full">
                        <p className="leading-[16px]">GV: ThS. Lê Quang Huy</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                          <p className="leading-[16px]">4.9</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['FreeSans:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#f59e0b] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">★★★★★</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a86] text-[11px] whitespace-nowrap">
                          <p className="leading-[16px]">(1,420)</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-[#1c382a] border-solid border-t content-stretch flex items-center justify-between pt-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
                      <div className="relative shrink-0" data-name="Paragraph">
                        <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-baseline leading-[0] not-italic relative size-full whitespace-nowrap">
                          <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#4ade80] text-[18px]">
                            <p className="leading-[28px]">499.000đ</p>
                          </div>
                          <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[#64748b] text-[12px]">
                            <span className="old-price-pair"><span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[16px] line-through">899.000đ</span><Discount price={499000} list={899000}/></span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#153426] border border-[#24583e] border-solid relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
                          <div className="relative shrink-0 size-[16px]" data-name="SVG">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/9f9c5.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-action="detail" role="button" tabIndex={0} aria-label={"Card 2"} className="bg-[#101f17] border border-[#1c382a] border-solid content-stretch flex flex-[1_0_0] flex-col isolate items-start min-w-px overflow-clip p-px relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Card 2">
              <TitleCover variant="berry" tag="Khuyên học" title="Prompt Engineering" meta="28 bài · 18h" subtitle="Học qua thực hành" />
              <div className="relative shrink-0 w-full z-[1]" data-name="Body Content">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full">
                  <div className="content-stretch flex flex-col gap-[5.5px] items-start pt-[5.5px] relative shrink-0 w-full" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#86efac] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
                      <p className="leading-[16.5px]">TRÍ TUỆ NHÂN TẠO</p>
                    </div>
                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 3">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full">
                        <p className="leading-[24px] mb-0">{`Prompt Engineering & Tích hợp LLM API cho`}</p>
                        <p className="leading-[24px]">Developers</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[2.5px] relative shrink-0 w-full" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a86] text-[12px] w-full">
                        <p className="leading-[16px]">GV: TS. Nguyễn Thanh Tuấn</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                          <p className="leading-[16px]">4.9</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['FreeSans:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#f59e0b] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">★★★★★</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a86] text-[11px] whitespace-nowrap">
                          <p className="leading-[16px]">(850)</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-[#1c382a] border-solid border-t content-stretch flex items-center justify-between pt-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
                      <div className="relative shrink-0" data-name="Paragraph">
                        <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-baseline leading-[0] not-italic relative size-full whitespace-nowrap">
                          <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#4ade80] text-[18px]">
                            <p className="leading-[28px]">599.000đ</p>
                          </div>
                          <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[#64748b] text-[12px]">
                            <span className="old-price-pair"><span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[16px] line-through">999.000đ</span><Discount price={599000} list={999000}/></span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#153426] border border-[#24583e] border-solid relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
                          <div className="relative shrink-0 size-[16px]" data-name="SVG">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/9f9c5.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-action="detail" role="button" tabIndex={0} aria-label={"Card 3"} className="bg-[#101f17] border border-[#1c382a] border-solid content-stretch flex flex-[1_0_0] flex-col isolate items-start min-w-px overflow-clip p-px relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Card 3">
              <TitleCover variant="orbit" tag="Nâng cao" title="Design System" meta="42 bài · 30h" subtitle="Học qua thực hành" />
              <div className="relative shrink-0 w-full z-[1]" data-name="Body Content">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full">
                  <div className="content-stretch flex flex-col gap-[5.5px] items-start pt-[5.5px] relative shrink-0 w-full" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#86efac] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
                      <p className="leading-[16.5px]">UI/UX DESIGN</p>
                    </div>
                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 3">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full">
                        <p className="leading-[24px] mb-0">Xây dựng Design System quy mô doanh</p>
                        <p className="leading-[24px]">nghiệp với Token</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[2.5px] relative shrink-0 w-full" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a86] text-[12px] w-full">
                        <p className="leading-[16px]">GV: Trần Thu Hà (Senior Product Designer)</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                          <p className="leading-[16px]">4.8</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['FreeSans:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#f59e0b] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">★★★★★</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a86] text-[11px] whitespace-nowrap">
                          <p className="leading-[16px]">(620)</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-[#1c382a] border-solid border-t content-stretch flex items-center justify-between pt-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
                      <div className="relative shrink-0" data-name="Paragraph">
                        <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-baseline leading-[0] not-italic relative size-full whitespace-nowrap">
                          <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#4ade80] text-[18px]">
                            <p className="leading-[28px]">449.000đ</p>
                          </div>
                          <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[#64748b] text-[12px]">
                            <span className="old-price-pair"><span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[16px] line-through">799.000đ</span><Discount price={449000} list={799000}/></span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#153426] border border-[#24583e] border-solid relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
                          <div className="relative shrink-0 size-[16px]" data-name="SVG">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/9f9c5.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-action="detail" role="button" tabIndex={0} aria-label={"Card 4"} className="bg-[#101f17] border border-[#1c382a] border-solid content-stretch flex flex-[1_0_0] flex-col isolate items-start min-w-px overflow-clip p-px relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Card 4">
              <TitleCover variant="solar" tag="Miễn phí" title="Git & GitHub" meta="18 bài · 10h" subtitle="Học qua thực hành" />
              <div className="relative shrink-0 w-full z-[1]" data-name="Body Content">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full">
                  <div className="content-stretch flex flex-col gap-[5.5px] items-start pt-[5.5px] relative shrink-0 w-full" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#86efac] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
                      <p className="leading-[16.5px]">KỸ NĂNG CÔNG NGHỆ</p>
                    </div>
                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 3">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full">
                        <p className="leading-[24px] mb-0">{`Git, GitHub & Quy trình làm việc nhóm chuẩn`}</p>
                        <p className="leading-[24px]">Agile/Scrum</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[2.5px] relative shrink-0 w-full" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a86] text-[12px] w-full">
                        <p className="leading-[16px]">GV: Đỗ Minh Anh</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                          <p className="leading-[16px]">4.9</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['FreeSans:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#f59e0b] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">★★★★★</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a86] text-[11px] whitespace-nowrap">
                          <p className="leading-[16px]">(3,420)</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-[#1c382a] border-solid border-t content-stretch flex items-center justify-between pt-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
                      <div className="relative shrink-0" data-name="Paragraph">
                        <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-baseline leading-[0] not-italic relative size-full whitespace-nowrap">
                          <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#4ade80] text-[18px]">
                            <p className="leading-[28px]">Miễn phí</p>
                          </div>
                          <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[#8a9a86] text-[12px]">
                            <p className="leading-[16px]">Học trọn đời</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#153426] border border-[#24583e] border-solid relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
                          <div className="relative shrink-0 size-[16px]" data-name="SVG">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/9f9c5.svg" />
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
  );
}
