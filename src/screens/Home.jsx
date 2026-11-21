import {PopularCourses} from '../Academy'
import {HeaderAccount} from '../Account'
import {ReviewRail,useHomeReveal} from '../HomeMotion'
import {CartIcon} from '../Shop'
import ThemeSwitch from '../ThemeSwitch'
import { FieldControl } from '../controls.jsx'

export default function Home() {
  const revealRoot=useHomeReveal()
  return (
    <div className="content-stretch flex flex-col items-center relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 250, 252) 0%, rgb(248, 250, 252) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="[LIGHT] Trang chủ khi chưa đăng nhập">
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-[1920px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(11, 21, 16) 0%, rgb(11, 21, 16) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="HEADER">
        <div className="h-[137px] relative shrink-0 w-full" data-name="1920px Desktop Container / Canvas Frame">
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
                        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] left-[calc(50%+0.29px)] not-italic text-[#bcb88a] text-[15px] text-center top-[10.5px] whitespace-nowrap">
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
      </div>
      <div ref={revealRoot} className="content-stretch flex flex-col gap-[96px] items-start py-[64px] relative shrink-0 w-[1920px]" data-name="Main - MAIN PAGE BODY CONTAINER (NO HEADER, NO FOOTER)">
        <div className="content-stretch flex flex-col items-start px-[120px] relative shrink-0 w-[1920px]" data-name="Section - 1. HERO SECTION (2-column split: 6 cols each, gap 24px)">
          <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_533.50px] relative shrink-0 w-full" data-name="Container">
            <div className="col-[1/span_6] content-stretch flex flex-col items-start justify-center justify-self-stretch pr-[24px] relative row-1 self-center shrink-0" data-name="Left Column (6 cols)">
              <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0" data-name="Margin">
                <div className="bg-[#ecfdf5] border border-[rgba(167,243,208,0.8)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[10px] items-center px-[15px] py-[7px] relative rounded-[9999px] shrink-0" data-name="Background+Border+Shadow">
                  <div className="bg-[#059669] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                        <p className="leading-[16px]">NỀN TẢNG HỌC TRỰC TUYẾN THẾ HỆ MỚI</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[137.25px] relative shrink-0 w-full" data-name="Heading 1:margin">
                <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1.18px]" data-name="Heading 1">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold'] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[48px] tracking-[-1.2px] whitespace-nowrap">
                    <p className="leading-[56.64px] mb-0" style={{marginBottom:8}}>HỌC THỰC CHIẾN</p>
                    <p className="bg-clip-text bg-gradient-to-r from-[#065f46] leading-[56.64px] text-[transparent] to-[#56642b] via-1/2 via-[#0f766e]">ĐI ĐÔI VỚI LÀM</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start max-w-[620px] pb-[36px] relative shrink-0 w-[620px]" data-name="Margin">
                <div className="content-stretch flex flex-col items-start max-w-[620px] relative shrink-0 w-full" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[18px] w-full">
                    <p className="leading-[29.25px] mb-0">Khám phá hơn 1.000+ khóa học công nghệ, thiết kế và kinh doanh bám</p>
                    <p className="leading-[29.25px] mb-0">sát thực tế doanh nghiệp. Xây dựng dự án thật, tích lũy portfolio chuẩn</p>
                    <p className="leading-[29.25px]">mực và sẵn sàng bứt phá sự nghiệp cùng đội ngũ chuyên gia hàng đầu.</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Action Buttons">
                <div data-action="register" role="button" tabIndex={0} aria-label={"Đăng ký miễn phí"} className="bg-[#004532] content-stretch flex items-center justify-center px-[32px] py-[16px] relative rounded-[12px] shrink-0" data-name="Link">
                  <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(2,44,34,0.15),0px_2px_4px_-2px_rgba(2,44,34,0.15)]" data-name="Link:shadow" />
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
                      <p className="leading-[24px]">Đăng ký miễn phí</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col h-[20px] items-start pl-[10px] relative shrink-0 w-[30px]" data-name="SVG:margin">
                    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
                      <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[20px]" data-name="SVG">
                        <div className="absolute inset-[20.83%_12.5%]" data-name="Vector">
                          <div className="absolute inset-[-7.86%_-6.11%]">
                            <img alt="" className="block max-w-none size-full" src="/assets/d26ee.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-action="explore" role="button" tabIndex={0} aria-label={"Tìm hiểu thêm"} className="bg-white border border-[#e2e8f0] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center px-[33px] py-[17px] relative rounded-[12px] shrink-0" data-name="Link">
                  <div className="h-[20px] relative shrink-0 w-[28px]" data-name="SVG:margin">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[8px] relative size-full">
                      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
                        <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[20px]" data-name="SVG">
                          <div className="absolute inset-[36.95%_36.68%_36.95%_41.67%]" data-name="Vector">
                            <div className="absolute inset-[-15.96%_-19.24%]">
                              <img alt="" className="block max-w-none size-full" src="/assets/f396d.svg" />
                            </div>
                          </div>
                          <div className="absolute inset-[12.5%]" data-name="Vector">
                            <div className="absolute inset-[-5.56%]">
                              <img alt="" className="block max-w-none size-full" src="/assets/9bb66.svg" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[16px] whitespace-nowrap">
                        <p className="leading-[24px]">Tìm hiểu thêm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start max-w-[560px] pt-[40px] relative shrink-0 w-[560px]" data-name="Trust Badges:margin">
                <div className="border-[#e2e8f0] border-solid border-t content-stretch flex gap-[24px] items-start justify-center max-w-[560px] pt-[41px] relative shrink-0 w-full" data-name="Trust Badges">
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[24px] tracking-[-0.6px] w-full">
                          <p className="leading-[32px]">45.000+</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-full">
                          <p className="leading-[16px]">Học viên tích cực</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[24px] tracking-[-0.6px] w-full">
                          <p className="leading-[32px]">1.200+</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-full">
                          <p className="leading-[16px]">Bài giảng thực chiến</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[24px] tracking-[-0.6px] w-full">
                          <p className="leading-[32px]">96%</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-full">
                          <p className="leading-[16px]">Học viên có việc làm</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-[7/span_6] content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Right Column (6 cols: Sleek Light UI Preview Card)">
              <div className="absolute blur-[40px] inset-[-6px_-6px_-5.5px_-6px] opacity-70 rounded-[24px]" style={{ backgroundImage: "linear-gradient(32.999885898651975deg, rgba(209, 250, 229, 0.7) 0%, rgba(240, 253, 250, 0.5) 100%)" }} data-name="Subtle Glow effect" />
              <div className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(226,232,240,0.6),0px_8px_10px_-6px_rgba(226,232,240,0.6)] shrink-0 w-full" data-name="Master Workspace Card">
                <div className="bg-[rgba(248,250,252,0.9)] border-[#e2e8f0] border-b border-solid relative shrink-0 w-full" data-name="Window Topbar">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[15px] pt-[14px] px-[24px] relative size-full">
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                        <div className="bg-[#fb7185] relative rounded-[9999px] shrink-0 size-[12px]" data-name="Background" />
                        <div className="bg-[#fbbf24] relative rounded-[9999px] shrink-0 size-[12px]" data-name="Background" />
                        <div className="bg-[#34d399] relative rounded-[9999px] shrink-0 size-[12px]" data-name="Background" />
                        <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Margin">
                          <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">
                            <p className="leading-[16px]">{`workspace.weedu.vn — Bài 08: Interactive UI & Component State`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
                        <div className="bg-[#ecfdf5] border border-[#a7f3d0] border-solid content-stretch flex items-center px-[9px] py-[3px] relative rounded-[4px] shrink-0" data-name="Background+Border">
                          <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#047857] text-[11px] whitespace-nowrap">
                            <p className="leading-[16.5px]">Live Server</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                            <p className="leading-[16px]">React 19 + Tailwind</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[rgba(248,250,252,0.4)] relative shrink-0 w-full" data-name="Workspace Body: Split Coding & Design View">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[20px] gap-y-[20px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_432px] p-[24px] relative size-full">
                    <div className="bg-[#0f172a] border border-[#1e293b] border-solid col-[1/span_7] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start justify-between justify-self-stretch p-[17px] relative rounded-[12px] row-1 self-start shrink-0" data-name="Code Editor Pane (7 cols)">
                      <div className="relative shrink-0 w-full" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
                          <div className="border-[#1e293b] border-b border-solid content-stretch flex items-center justify-between pb-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
                            <div className="relative shrink-0" data-name="Container">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                                <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#34d399] text-[11px] whitespace-nowrap">
                                  <p className="leading-[16px]">CourseCard.tsx</p>
                                </div>
                              </div>
                            </div>
                            <div className="relative shrink-0" data-name="Container">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                                <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#6ee7b7] text-[11px] whitespace-nowrap">
                                  <p className="leading-[16px]">● Auto-Saved</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal h-[312px] leading-[0] overflow-clip relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="Pre">
                            <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 text-[#c084fc] top-[9px]">
                              <p>
                                <span className="leading-[19.5px]">import</span>
                                <span className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[19.5px] text-[#cbd5e1]">{` { useState } `}</span>
                                <span className="leading-[19.5px]">from</span>
                                <span className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[19.5px] text-[#cbd5e1]">{` `}</span>
                                <span className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[19.5px] text-[#6ee7b7]">{`'react'`}</span>
                              </p>
                            </div>
                            <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[230.44px] text-[#cbd5e1] top-[9px]">
                              <p className="leading-[19.5px] mb-0 whitespace-pre">;</p>
                              <p className="leading-[19.5px] mb-0 whitespace-pre">​</p>
                              <p className="leading-[19.5px] whitespace-pre">​</p>
                            </div>
                            <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 text-[#64748b] top-[67.5px]">
                              <p className="leading-[19.5px] mb-0 whitespace-pre">{`// WeEdu Interactive Lesson`}</p>
                              <p className="mb-0 whitespace-pre">
                                <span className="leading-[19.5px] text-[#c084fc]">export function</span>
                                <span className="leading-[19.5px] text-[#cbd5e1]">{` `}</span>
                                <span className="leading-[19.5px] text-[#93c5fd]">CourseCard</span>
                                <span className="leading-[19.5px] text-[#cbd5e1]">{`({ title, mentor }) {`}</span>
                              </p>
                              <p className="whitespace-pre">
                                <span className="leading-[19.5px] text-[#cbd5e1]">{`  `}</span>
                                <span className="leading-[19.5px] text-[#c084fc]">const</span>
                                <span className="leading-[19.5px] text-[#cbd5e1]">{` [enrolled, setEnrolled] = useState(`}</span>
                                <span className="leading-[19.5px] text-[#fbbf24]">false</span>
                                <span className="leading-[19.5px] text-[#cbd5e1]">);</span>
                              </p>
                            </div>
                            <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[14.41px] text-[#c084fc] top-[126px]">
                              <p>
                                <span className="leading-[19.5px]">return</span>
                                <span className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[19.5px] text-[#cbd5e1]">{` (`}</span>
                              </p>
                            </div>
                            <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 text-[#cbd5e1] top-[223.5px]">
                              <p className="mb-0 whitespace-pre">
                                <span className="leading-[19.5px]">{`    <`}</span>
                                <span className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[19.5px] text-[#34d399]">div</span>
                                <span className="leading-[19.5px]">{` className=`}</span>
                                <span className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[19.5px] text-[#6ee7b7]">{`"weedu-card p-4 rounded-xl"`}</span>
                                <span className="leading-[19.5px]">{`>`}</span>
                              </p>
                              <p className="mb-0 whitespace-pre">
                                <span className="leading-[19.5px]">{`      <`}</span>
                                <span className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[19.5px] text-[#34d399]">Badge</span>
                                <span className="leading-[19.5px]">{`>Bán chạy</`}</span>
                                <span className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[19.5px] text-[#34d399]">Badge</span>
                                <span className="leading-[19.5px]">{`>`}</span>
                              </p>
                              <p className="mb-0 whitespace-pre">
                                <span className="leading-[19.5px]">{`      <`}</span>
                                <span className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[19.5px] text-[#34d399]">h3</span>
                                <span className="leading-[19.5px]">{`>{title}</`}</span>
                                <span className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[19.5px] text-[#34d399]">h3</span>
                                <span className="leading-[19.5px]">{`>`}</span>
                              </p>
                              <p className="mb-0 whitespace-pre">
                                <span className="leading-[19.5px]">{`      <`}</span>
                                <span className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[19.5px] text-[#34d399]">button</span>
                                <span className="leading-[19.5px]">{` onClick={() => setEnrolled(`}</span>
                                <span className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[19.5px] text-[#fbbf24]">true</span>
                                <span className="leading-[19.5px]">{`)}>`}</span>
                              </p>
                              <p className="mb-0 whitespace-pre">
                                <span className="leading-[19.5px]">{`        {enrolled ? `}</span>
                                <span className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[19.5px] text-[#6ee7b7]">{`'Đã bắt đầu'`}</span>
                                <span className="leading-[19.5px]">{` : `}</span>
                                <span className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[19.5px] text-[#6ee7b7]">{`'Học ngay'`}</span>
                                <span className="leading-[19.5px]">{`}`}</span>
                              </p>
                              <p className="mb-0 whitespace-pre">
                                <span className="leading-[19.5px]">{`      </`}</span>
                                <span className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[19.5px] text-[#34d399]">button</span>
                                <span className="leading-[19.5px]">{`>`}</span>
                              </p>
                              <p className="mb-0 whitespace-pre">
                                <span className="leading-[19.5px]">{`    </`}</span>
                                <span className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[19.5px] text-[#34d399]">div</span>
                                <span className="leading-[19.5px]">{`>`}</span>
                              </p>
                              <p className="leading-[19.5px] mb-0 whitespace-pre">{`  );`}</p>
                              <p className="leading-[19.5px] whitespace-pre">{`}`}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 w-full" data-name="Margin">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
                          <div className="border-[#1e293b] border-solid border-t content-stretch flex items-center justify-between pt-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
                            <div className="relative shrink-0" data-name="Container">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
                                <div className="relative shrink-0 size-[14px]" data-name="SVG">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/136ee.svg" />
                                </div>
                                <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#34d399] text-[11px] whitespace-nowrap">
                                  <p className="leading-[16px]">0 Lỗi • TypeScript Checked</p>
                                </div>
                              </div>
                            </div>
                            <div className="relative shrink-0" data-name="Container">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                                <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">
                                  <p className="leading-[16px]">UTF-8</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-[8/span_5] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch pb-[83px] relative row-1 self-start shrink-0" data-name="Live Interactive UI Preview Pane (5 cols)">
                      <div className="bg-white border border-[#e2e8f0] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[2px] items-start p-[17px] relative rounded-[12px] shrink-0 w-full" data-name="Mini Course Card Interactive Demo">
                        <div className="relative shrink-0 w-full" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
                            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
                                <p className="leading-[16.5px]">XEM TRƯỚC KẾT QUẢ</p>
                              </div>
                            </div>
                            <div className="bg-[#10b981] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
                          </div>
                        </div>
                        <div className="bg-[rgba(236,253,245,0.7)] border border-[#d1fae5] border-solid h-[118px] relative rounded-[8px] shrink-0 w-full" data-name="Overlay+Border">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip pb-[13px] pt-[19px] px-[13px] relative rounded-[inherit] size-full">
                            <div className="relative shrink-0 size-[48px]" data-name="SVG">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/a42ef.svg" />
                            </div>
                            <div className="absolute bg-[rgba(209,250,229,0.9)] border border-[#a7f3d0] border-solid left-[8px] rounded-[4px] top-[14px]" data-name="Overlay+Border">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9px] py-[3px] relative size-full">
                                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[10px] whitespace-nowrap">
                                  <p className="leading-[15px]">UI/UX Design</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pt-[10px] relative rounded-[inherit] size-full">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] w-full">
                              <p className="leading-[16px]">Design System Figma Pro</p>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] w-full">
                              <p className="leading-[16.5px]">Giảng viên: Trần Hoàng Long</p>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[8px] relative size-full">
                            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[12px] whitespace-nowrap">
                                <p className="leading-[16px]">499.000đ</p>
                              </div>
                            </div>
                            <div className="bg-[#f1f5f9] border border-[#e2e8f0] border-solid content-stretch flex flex-col items-start px-[11px] py-[5px] relative rounded-[4px] shrink-0" data-name="Background+Border">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[10px] whitespace-nowrap">
                                <p data-action="lesson" role="button" tabIndex={0} aria-label={"Xem bài tập"} className="leading-[15px]">Xem bài tập</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white border border-[#e2e8f0] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[6px] items-start p-[15px] relative rounded-[12px] shrink-0 w-full" data-name="Learning Progress Widget">
                        <div className="relative shrink-0 w-full" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
                            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
                                <p className="leading-[16px]">Tiến độ bài thực hành</p>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                              <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#047857] text-[12px] whitespace-nowrap">
                                <p className="leading-[16px]">85%</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#f1f5f9] h-[6px] relative rounded-[9999px] shrink-0 w-full" data-name="Background">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                            <div className="absolute bg-gradient-to-r from-[#059669] inset-[0_15%_0_0] rounded-[9999px] to-[#14b8a6]" data-name="Gradient" />
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[2px] relative size-full">
                            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] whitespace-nowrap">
                                <p className="leading-[15px]">17/20 Thử thách hoàn thành</p>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[10px] whitespace-nowrap">
                                <p className="leading-[15px]">+150 XP</p>
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
        <div className="content-stretch flex flex-col gap-[40px] items-start px-[120px] relative shrink-0 w-[1920px]" data-name="Section - 4-column card grid (3 cols per card, 24px gutter)">
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Margin">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
                  <p className="leading-[16px]">ĐA DẠNG LĨNH VỰC</p>
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[30px] text-center tracking-[-0.75px] whitespace-nowrap">
              <p className="leading-[36px]">Khám phá các chủ đề</p>
            </div>
            <div className="content-stretch flex flex-col h-[16px] items-start pt-[12px] relative shrink-0 w-[48px]" data-name="Margin">
              <div className="bg-[#059669] h-[4px] relative rounded-[9999px] shrink-0 w-[48px]" data-name="Background" />
            </div>
          </div>
          <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_260px] relative shrink-0 w-full" data-name="Container">
            <div data-action="catalog" role="button" tabIndex={0} aria-label={"Category 1: Lập trình"} className="bg-white border border-[rgba(226,232,240,0.8)] border-solid col-[1/span_3] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-between justify-self-stretch p-[33px] relative rounded-[16px] row-1 self-start shrink-0" data-name="Category 1: Lập trình">
              <div className="h-[84px] relative shrink-0 w-[64px]" data-name="Margin">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative size-full">
                  <div className="bg-[#ecfdf5] border border-[#d1fae5] border-solid content-stretch flex items-center justify-center p-px relative rounded-[16px] shrink-0 size-[64px]" data-name="Background+Border">
                    <div className="relative shrink-0 size-[32px]" data-name="SVG">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/07be6.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0" data-name="Heading 3:margin">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] text-center whitespace-nowrap">
                      <p data-action="catalog" role="button" tabIndex={0} aria-label={"Lập trình"} className="leading-[28px]">Lập trình</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0" data-name="Margin">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
                  <div className="content-stretch flex flex-col items-center pl-[3.84px] pr-[3.86px] relative shrink-0" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] text-center whitespace-nowrap">
                      <p className="leading-[21px] mb-0">{`Web, Mobile, Backend, AI & Cấu trúc dữ liệu thuật`}</p>
                      <p className="leading-[21px]">toán</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[12px] text-center whitespace-nowrap">
                    <p className="leading-[16px]">380+ khóa học →</p>
                  </div>
                </div>
              </div>
            </div>
            <div data-action="catalog" role="button" tabIndex={0} aria-label={"Category 2: Thiết k"} className="bg-white border border-[rgba(226,232,240,0.8)] border-solid col-[4/span_3] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-between justify-self-stretch p-[33px] relative rounded-[16px] row-1 self-start shrink-0" data-name="Category 2: Thiết k">
              <div className="h-[84px] relative shrink-0 w-[64px]" data-name="Margin">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative size-full">
                  <div className="bg-[#ecfdf5] border border-[#d1fae5] border-solid content-stretch flex items-center justify-center p-px relative rounded-[16px] shrink-0 size-[64px]" data-name="Background+Border">
                    <div className="relative shrink-0 size-[32px]" data-name="SVG">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/e6f66.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0" data-name="Heading 3:margin">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] text-center whitespace-nowrap">
                      <p className="leading-[28px]">Thiết kế</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0" data-name="Margin">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
                  <div className="content-stretch flex flex-col items-center pl-[4.39px] pr-[4.41px] relative shrink-0" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] text-center whitespace-nowrap">
                      <p className="leading-[21px] mb-0">{`UI/UX Design, Figma Pro, Đồ họa 2D/3D & Motion`}</p>
                      <p className="leading-[21px]">Graphics</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[12px] text-center whitespace-nowrap">
                    <p className="leading-[16px]">240+ khóa học →</p>
                  </div>
                </div>
              </div>
            </div>
            <div data-action="catalog" role="button" tabIndex={0} aria-label={"Category 3: Ngoại ng"} className="bg-white border border-[rgba(226,232,240,0.8)] border-solid col-[7/span_3] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-between justify-self-stretch p-[33px] relative rounded-[16px] row-1 self-start shrink-0" data-name="Category 3: Ngoại ng">
              <div className="h-[84px] relative shrink-0 w-[64px]" data-name="Margin">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative size-full">
                  <div className="bg-[#ecfdf5] border border-[#d1fae5] border-solid content-stretch flex items-center justify-center p-px relative rounded-[16px] shrink-0 size-[64px]" data-name="Background+Border">
                    <div className="relative shrink-0 size-[32px]" data-name="SVG">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/45fd5.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0" data-name="Heading 3:margin">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] text-center whitespace-nowrap">
                      <p className="leading-[28px]">Ngoại ngữ</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0" data-name="Margin">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
                  <div className="content-stretch flex flex-col items-center pl-[6px] pr-[6.02px] relative shrink-0" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] text-center whitespace-nowrap">
                      <p className="leading-[21px] mb-0">{`IELTS thực chiến, Tiếng Anh công nghệ IT & Giao`}</p>
                      <p className="leading-[21px]">tiếp kinh doanh</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[12px] text-center whitespace-nowrap">
                    <p className="leading-[16px]">190+ khóa học →</p>
                  </div>
                </div>
              </div>
            </div>
            <div data-action="catalog" role="button" tabIndex={0} aria-label={"Category 4: Marketing"} className="bg-white border border-[rgba(226,232,240,0.8)] border-solid col-[10/span_3] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-between justify-self-stretch p-[33px] relative rounded-[16px] row-1 self-start shrink-0" data-name="Category 4: Marketing">
              <div className="h-[84px] relative shrink-0 w-[64px]" data-name="Margin">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative size-full">
                  <div className="bg-[#ecfdf5] border border-[#d1fae5] border-solid content-stretch flex items-center justify-center p-px relative rounded-[16px] shrink-0 size-[64px]" data-name="Background+Border">
                    <div className="relative shrink-0 size-[32px]" data-name="SVG">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/51611.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0" data-name="Heading 3:margin">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] text-center whitespace-nowrap">
                      <p className="leading-[28px]">Marketing</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0" data-name="Margin">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
                  <div className="content-stretch flex flex-col items-center px-[15.11px] relative shrink-0" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] text-center whitespace-nowrap">
                      <p className="leading-[21px] mb-0">{`Digital Growth, SEO, Performance Ads & Data-`}</p>
                      <p className="leading-[21px]">driven Marketing</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[12px] text-center whitespace-nowrap">
                    <p className="leading-[16px]">150+ khóa học →</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start px-[120px] relative shrink-0 w-[1920px]" data-name="Section - 4-column card grid (3 cols per card, 24px gutter)">
          <div className="border-[#e2e8f0] border-b border-solid content-stretch flex items-end justify-between pb-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
            <div className="relative shrink-0" data-name="Paragraph">
              <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6.5px] items-start leading-[0] not-italic pt-[5.5px] relative size-full whitespace-nowrap">
                <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center relative shrink-0 text-[#047857] text-[12px] tracking-[1.2px] uppercase">
                  <p className="leading-[16px]">TUYỂN CHỌN CHẤT LƯỢNG</p>
                </div>
                <div className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#0f172a] text-[30px] tracking-[-0.75px]">
                  <p className="leading-[36px]">Khóa học phổ biến</p>
                </div>
              </div>
            </div>
            <div data-action="catalog" role="button" tabIndex={0} aria-label={"Xem thêm"} className="relative shrink-0" data-name="Link">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center py-[4px] relative size-full">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[14px] whitespace-nowrap">
                    <p className="leading-[20px]">Xem thêm</p>
                  </div>
                </div>
                <div className="h-[3.75px] relative shrink-0 w-[9.469px]" data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/55a47.svg" />
                </div>
              </div>
            </div>
          </div>
          <PopularCourses/>
        </div>
        <div className="content-stretch flex flex-col gap-[40px] items-start px-[120px] relative shrink-0 w-[1920px]" data-name="Section - 3-column card grid (4 cols per card, 24px gutter)">
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Margin">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
                  <p className="leading-[16px]">ĐỒNG HÀNH THÀNH CÔNG</p>
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[30px] text-center tracking-[-0.75px] whitespace-nowrap">
              <p className="leading-[36px]">Cảm nhận từ học viên</p>
            </div>
            <div className="content-stretch flex flex-col h-[16px] items-start pt-[12px] relative shrink-0 w-[48px]" data-name="Margin">
              <div className="bg-[#059669] h-[4px] relative rounded-[9999px] shrink-0 w-[48px]" data-name="Background" />
            </div>
          </div>
          <ReviewRail>
            <div className="bg-white border border-[#e2e8f0] border-solid col-[1/span_4] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start justify-between justify-self-stretch p-[33px] relative rounded-[16px] row-1 self-start shrink-0" data-name="Testimonial 1">
              <div className="relative shrink-0 w-full" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[22.75px] items-start pb-[24px] relative size-full">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Quote Icon & Stars">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
                      <div className="relative shrink-0 size-[16px]" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/65703.svg" />
                      </div>
                      <div className="relative shrink-0 size-[16px]" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/65703.svg" />
                      </div>
                      <div className="relative shrink-0 size-[16px]" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/65703.svg" />
                      </div>
                      <div className="relative shrink-0 size-[16px]" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/65703.svg" />
                      </div>
                      <div className="relative shrink-0 size-[16px]" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/65703.svg" />
                      </div>
                    </div>
                    <div className="relative shrink-0 size-[32px]" data-name="SVG">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/eb044.svg" />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Quote">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Italic'] font-normal italic justify-center leading-[0] relative shrink-0 text-[#334155] text-[14px] w-full">
                      <p className="leading-[22.75px] mb-0">{`"Khóa học Next.js thực sự thay đổi cách mình làm dự án. Lộ trình bài`}</p>
                      <p className="leading-[22.75px] mb-0">bản, giảng viên chữa code chi tiết đến từng dòng và mình đã tự tin apply</p>
                      <p className="leading-[22.75px]">{`thành công vị trí Frontend Engineer ngay sau khi tốt nghiệp khóa học!"`}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[#f1f5f9] border-solid border-t relative shrink-0 w-full" data-name="Student Profile">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14px] items-center pt-[17px] relative size-full">
                  <div className="bg-[#d1fae5] border-2 border-[#a7f3d0] border-solid relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background+Border">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[16px] text-center whitespace-nowrap">
                        <p className="leading-[24px]">NA</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
                          <p className="leading-[20px]">Nguyễn Tuấn Anh</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">Frontend Developer tại TechVn</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#e2e8f0] border-solid col-[5/span_4] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start justify-between justify-self-stretch p-[33px] relative rounded-[16px] row-1 self-start shrink-0" data-name="Testimonial 2">
              <div className="relative shrink-0 w-full" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[22.75px] items-start pb-[24px] relative size-full">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
                      <div className="relative shrink-0 size-[16px]" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/65703.svg" />
                      </div>
                      <div className="relative shrink-0 size-[16px]" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/65703.svg" />
                      </div>
                      <div className="relative shrink-0 size-[16px]" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/65703.svg" />
                      </div>
                      <div className="relative shrink-0 size-[16px]" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/65703.svg" />
                      </div>
                      <div className="relative shrink-0 size-[16px]" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/65703.svg" />
                      </div>
                    </div>
                    <div className="relative shrink-0 size-[32px]" data-name="SVG">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/eb044.svg" />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Italic'] font-normal italic justify-center leading-[0] relative shrink-0 text-[#334155] text-[14px] w-full">
                      <p className="leading-[22.75px] mb-0">{`"Khóa Figma Design System trên WeEdu giúp mình hiểu sâu sắc về`}</p>
                      <p className="leading-[22.75px] mb-0">Token, Component và quy trình bàn giao thiết kế cho Dev. Giao diện học</p>
                      <p className="leading-[22.75px]">{`trực quan và tài liệu bài giảng cực kỳ đầy đủ, thực tế."`}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[#f1f5f9] border-solid border-t relative shrink-0 w-full" data-name="HorizontalBorder">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14px] items-center pt-[17px] relative size-full">
                  <div className="bg-[#d1fae5] border-2 border-[#a7f3d0] border-solid relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background+Border">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[16px] text-center whitespace-nowrap">
                        <p className="leading-[24px]">TH</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
                          <p className="leading-[20px]">Trần Thu Hà</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">UI/UX Designer tại Giao Hàng Tiết Kiệm</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#e2e8f0] border-solid col-[9/span_4] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start justify-between justify-self-stretch p-[33px] relative rounded-[16px] row-1 self-start shrink-0" data-name="Testimonial 3">
              <div className="relative shrink-0 w-full" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[22.75px] items-start pb-[24px] relative size-full">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
                      <div className="relative shrink-0 size-[16px]" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/65703.svg" />
                      </div>
                      <div className="relative shrink-0 size-[16px]" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/65703.svg" />
                      </div>
                      <div className="relative shrink-0 size-[16px]" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/65703.svg" />
                      </div>
                      <div className="relative shrink-0 size-[16px]" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/65703.svg" />
                      </div>
                      <div className="relative shrink-0 size-[16px]" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/65703.svg" />
                      </div>
                    </div>
                    <div className="relative shrink-0 size-[32px]" data-name="SVG">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/eb044.svg" />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Italic'] font-normal italic justify-center leading-[0] relative shrink-0 text-[#334155] text-[14px] w-full">
                      <p className="leading-[22.75px] mb-0">{`"Trước đây học lý thuyết rất nhanh nản, nhưng cách tiếp cận 'học đi đôi`}</p>
                      <p className="leading-[22.75px] mb-0">{`với làm' qua các project thực tế tại WeEdu giúp mình ghi nhớ sâu và xây`}</p>
                      <p className="leading-[22.75px]">{`dựng được portfolio xịn sò để nộp hồ sơ xin việc."`}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[#f1f5f9] border-solid border-t relative shrink-0 w-full" data-name="HorizontalBorder">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14px] items-center pt-[17px] relative size-full">
                  <div className="bg-[#d1fae5] border-2 border-[#a7f3d0] border-solid relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background+Border">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[16px] text-center whitespace-nowrap">
                        <p className="leading-[24px]">VD</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
                          <p className="leading-[20px]">Vũ Đức Minh</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">{`Data Analyst & Automation Specialist`}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ReviewRail>
        </div>
      </div>
    </div>
  );
}
