import { FieldControl } from '../controls.jsx'

export default function DashboardDarkPart1() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start px-[32px] py-[24px] relative size-full" data-name="MainLayout">
      <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_1756px] relative shrink-0 w-full" data-name="Container">
        <div className="col-[1/span_8] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="LEFT COLUMN (Main Content ~65%)">
          <div className="border-[rgba(19,78,50,0.4)] border-b border-solid content-stretch flex items-center justify-between pb-[17px] relative shrink-0 w-full" data-name="Welcome Heading">
            <div className="relative shrink-0" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Heading 1">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold'] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-white tracking-[-0.75px] whitespace-nowrap">
                    <p className="leading-[36px]">Quản lý khóa học</p>
                  </div>
                  <div className="bg-[rgba(138,154,91,0.2)] border border-[rgba(138,154,91,0.3)] border-solid content-stretch flex flex-col items-start px-[11px] py-[3px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[12px] tracking-[-0.75px] whitespace-nowrap">
                      <p className="leading-[16px]">Học kỳ 1</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
                    <p>
                      <span className="leading-[20px]">{`Buổi sáng vui vẻ, `}</span>
                      <span className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[20px] not-italic text-[#8a9a5b]">Nguyễn Văn A</span>
                      <span className="leading-[20px]">! Chúc bạn có một ngày học tập hiệu quả tại WeEdu.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(4,35,21,0.6)] border border-[#134e32] border-solid relative rounded-[8px] shrink-0" data-name="Overlay+Border">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[13px] py-[7px] relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                  <p>
                    <span className="leading-[16px]">{`Hôm nay: `}</span>
                    <span className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] not-italic text-[#e2e8f0]">Thứ Bảy, 07/11/2026</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section - SECTION: Tiếp tục bài học (Hero Continue Learning Card)">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Heading 2">
                <div className="bg-[#10b981] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
                <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[16px] whitespace-nowrap">
                  <p className="leading-[24px]">Tiếp tục bài học</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[12px] whitespace-nowrap">
                  <p className="leading-[16px]">Lịch sử học tập →</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r border border-[rgba(19,78,50,0.8)] border-solid content-stretch flex flex-col from-[#032315] items-start overflow-clip p-[21px] relative rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0 to-[#042818] via-1/2 via-[#05321f] w-full" data-name="Highlight Resume Card">
              <div className="absolute bg-[rgba(16,185,129,0.1)] blur-[64px] bottom-[-79.5px] right-[-80px] rounded-[9999px] size-[256px]" data-name="Glow background highlight" />
              <div className="relative shrink-0 w-full" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-start relative size-full">
                  <div className="bg-[rgba(0,0,0,0.6)] border border-[rgba(19,78,50,0.6)] border-solid overflow-clip relative rounded-[12px] self-stretch shrink-0 w-[256px]" data-name="Video / Course Thumbnail">
                    <div className="absolute inset-[0_0_0.5px_0] opacity-80" style={{ backgroundImage: "linear-gradient(38.14726297047739deg, rgb(2, 24, 13) 0%, rgb(15, 79, 44) 100%)" }} data-name="Fallback geometric illustration pattern for preview" />
                    <div className="absolute content-stretch flex inset-[0_0_0.5px_0] items-center justify-center" data-name="Container">
                      <div className="relative shrink-0 size-[48px]" data-name="SVG - Wireframe 'X' graphic representation + Play Button">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/8078b.svg" />
                      </div>
                      <div className="absolute bg-[rgba(16,185,129,0.9)] content-stretch flex items-center justify-center left-[103px] pl-[16px] pr-[12px] rounded-[9999px] size-[48px] top-[75.75px]" data-name="Overlay">
                        <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[48px] top-0" data-name="Overlay+Shadow" />
                        <div className="relative shrink-0 size-[20px]" data-name="SVG">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/71eed.svg" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bg-[rgba(0,0,0,0.8)] border border-[rgba(16,185,129,0.3)] border-solid bottom-[8.5px] content-stretch flex flex-col items-start left-[8px] px-[9px] py-[3px] rounded-[4px]" data-name="Overlay+Border">
                      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[10px] whitespace-nowrap">
                        <p className="leading-[15px]">Unit 3 • 10p45s</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-px py-[4px] relative self-stretch" data-name="Course Details">
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
                        <div className="bg-[#07331f] border border-[#134e32] border-solid content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[4px] shrink-0" data-name="Background+Border">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
                            <p className="leading-[16.5px]">IE106.P11 • KHÓA A</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                            <p className="leading-[16px]">Giảng viên: TS. Nguyễn Công Minh</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Heading 3">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
                          <p className="leading-[28px]">{`Lập trình Web Chuyên Nghiệp với React 19 & Next.js`}</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[14px] w-full">
                          <p>
                            <span className="leading-[20px]">{`Đang học: `}</span>
                            <span className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[20px] not-italic text-[#34d399]">Tên bài học 3 - 10p45s:</span>
                            <span className="leading-[20px]">{` Tối ưu Server Components & Xử lý Optimistic UI`}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Progress Bar & CTA:margin">
                      <div className="border-[rgba(19,78,50,0.4)] border-solid border-t content-stretch flex flex-col gap-[6px] items-start pt-[13px] relative shrink-0 w-full" data-name="Progress Bar & CTA">
                        <div className="relative shrink-0 w-full" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pr-[0.01px] relative size-full">
                            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                                <p>
                                  <span className="leading-[16px]">{`Tiến độ tổng quan: `}</span>
                                  <span className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[16px] not-italic text-[#e2e8f0]">60%</span>
                                </p>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[12px] whitespace-nowrap">
                                <p className="leading-[16px]">18 / 30 bài đã hoàn thành</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#00140b] border border-[rgba(19,78,50,0.6)] border-solid h-[10px] relative rounded-[9999px] shrink-0 w-full" data-name="Background+Border">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                            <div className="absolute bg-gradient-to-r from-[#8a9a5b] inset-[0_calc(40.02%-0.2px)_0_calc(0.11%-1px)] rounded-[9999px] to-[#10b981]" data-name="Gradient" />
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[10px] relative size-full">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
                              <div className="relative shrink-0 size-[14px]" data-name="SVG">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/bd79d.svg" />
                              </div>
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">
                                <p className="leading-[16.5px]">Lần học gần nhất: 22 giờ trước</p>
                              </div>
                            </div>
                            <div data-action="lesson" role="button" tabIndex={0} aria-label={"Tiếp tục"} className="bg-[#10b981] content-stretch flex gap-[8px] items-center px-[20px] py-[8px] relative rounded-[12px] shrink-0" data-name="Button">
                              <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(2,44,34,0.4),0px_4px_6px_-4px_rgba(2,44,34,0.4)]" data-name="Button:shadow" />
                              <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
                                <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#001209] text-[14px] text-center whitespace-nowrap">
                                  <p className="leading-[20px]">Tiếp tục</p>
                                </div>
                              </div>
                              <div className="relative shrink-0 size-[16px]" data-name="SVG">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/c84a3.svg" />
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
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section - SECTION: Khóa học hiện tại của bạn - 2 (Enrolled Courses Grid)">
            <div className="content-stretch flex items-center justify-between pr-[0.01px] relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Heading 2">
                <div className="bg-[#8a9a5b] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
                <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[16px] whitespace-nowrap">
                  <p className="leading-[24px]">Khóa học hiện tại của bạn -</p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[16px] whitespace-nowrap">
                    <p className="leading-[24px]">2</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#bcb88a] text-[12px] whitespace-nowrap">
                  <p className="leading-[16px]">Tất cả khóa học (2)</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Container">
              <div className="bg-[#032316] border border-[#134e32] border-solid content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-px p-[17px] relative rounded-[12px]" data-name="Article - Course Card 1: Khóa học A">
                <div className="relative shrink-0 w-full" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                    <div className="bg-[#00170d] border border-[rgba(19,78,50,0.6)] border-solid content-stretch flex h-[128px] items-center justify-center overflow-clip p-px relative rounded-[8px] shrink-0 w-full" data-name="Mock thumbnail with wireframe X placeholder">
                      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="SVG - Wireframe cross motif">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/c0852.svg" />
                      </div>
                      <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-[0_0.01px_0_0] to-[rgba(0,0,0,0.6)]" data-name="Gradient" />
                      <div className="absolute bg-[rgba(4,35,21,0.9)] border border-[#134e32] border-solid left-[8px] rounded-[4px] top-[8px]" data-name="Overlay+Border">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9px] py-[3px] relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[10px] whitespace-nowrap">
                            <p className="leading-[15px]">Mã môn: IT005</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bg-[rgba(0,0,0,0.7)] bottom-[8px] right-[8.01px] rounded-[4px]" data-name="Overlay">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                            <p className="leading-[16px]">75%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Heading 3">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[16px] w-full">
                        <p className="leading-[24px]">Tên khóa học A - 75%</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-full">
                        <p className="leading-[16px]">{`Trí tuệ Nhân tạo & Xử lý Ngôn ngữ Tự nhiên`}</p>
                      </div>
                    </div>
                    <div className="bg-[#00140b] border border-[rgba(19,78,50,0.4)] border-solid h-[6px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Progress">
                      <div className="absolute bg-[#10b981] inset-[0_calc(25.09%-0.5px)_0_calc(0.17%-1px)] rounded-[9999px]" data-name="Background" />
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Margin">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
                    <div className="border-[rgba(19,78,50,0.4)] border-solid border-t content-stretch flex items-center justify-between pr-[0.01px] pt-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
                      <div className="relative shrink-0" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                            <p className="leading-[16px]">12/16 Bài tập</p>
                          </div>
                        </div>
                      </div>
                      <div data-action="lesson" role="button" tabIndex={0} aria-label={"Tới khóa học"} className="bg-[#07331f] border border-[#134e32] border-solid relative rounded-[8px] shrink-0" data-name="Button">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[15px] py-[7px] relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[12px] text-center whitespace-nowrap">
                            <p className="leading-[16px]">Tới khóa học</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#032316] border border-[#134e32] border-solid content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-px p-[17px] relative rounded-[12px]" data-name="Article - Course Card 2: Khóa học B">
                <div className="relative shrink-0 w-full" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                    <div className="bg-[#00170d] border border-[rgba(19,78,50,0.6)] border-solid content-stretch flex h-[128px] items-center justify-center overflow-clip p-px relative rounded-[8px] shrink-0 w-full" data-name="Mock thumbnail with wireframe X placeholder">
                      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="SVG - Wireframe cross motif">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/37f7c.svg" />
                      </div>
                      <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 to-[rgba(0,0,0,0.6)]" data-name="Gradient" />
                      <div className="absolute bg-[rgba(4,35,21,0.9)] border border-[#134e32] border-solid left-[8px] rounded-[4px] top-[8px]" data-name="Overlay+Border">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9px] py-[3px] relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[10px] whitespace-nowrap">
                            <p className="leading-[15px]">Mã môn: IE106</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bg-[rgba(0,0,0,0.7)] bottom-[8px] right-[8px] rounded-[4px]" data-name="Overlay">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                            <p className="leading-[16px]">60%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Heading 3">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[16px] w-full">
                        <p className="leading-[24px]">Tên khóa học B - 60%</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-full">
                        <p className="leading-[16px]">{`Kiến trúc Điện toán Đám mây & Kubernetes`}</p>
                      </div>
                    </div>
                    <div className="bg-[#00140b] border border-[rgba(19,78,50,0.4)] border-solid h-[6px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Progress">
                      <div className="absolute bg-[#8a9a5b] inset-[0_calc(40.04%-0.2px)_0_calc(0.17%-1px)] rounded-[9999px]" data-name="Background" />
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Margin">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
                    <div className="border-[rgba(19,78,50,0.4)] border-solid border-t content-stretch flex items-center justify-between pr-[0.01px] pt-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
                      <div className="relative shrink-0" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                            <p className="leading-[16px]">9/15 Bài tập</p>
                          </div>
                        </div>
                      </div>
                      <div data-action="lesson" role="button" tabIndex={0} aria-label={"Tới khóa học"} className="bg-[#07331f] border border-[#134e32] border-solid relative rounded-[8px] shrink-0" data-name="Button">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[15px] py-[7px] relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[12px] text-center whitespace-nowrap">
                            <p className="leading-[16px]">Tới khóa học</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#032316] border border-[#134e32] border-solid content-stretch flex flex-col gap-[16px] items-start p-[21px] relative rounded-[12px] shrink-0 w-full" data-name="Section - SECTION: Bảng điểm & Tiến độ bài tập (Data Table with Tabs & Tooltip)">
            <div className="absolute bg-[rgba(255,255,255,0)] inset-[-1px_-1px_-1.5px_-1px] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Section - SECTION: Bảng điểm & Tiến độ bài tập (Data Table with Tabs & Tooltip):shadow" />
            <div className="border-[rgba(19,78,50,0.6)] border-b border-solid relative shrink-0 w-full" data-name="Tabs Header matching wireframe ('Khóa học A | Khóa học B')">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[13px] relative size-full">
                <div className="relative shrink-0" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                    <div className="bg-[#07331f] border border-[rgba(138,154,91,0.6)] border-solid content-stretch flex gap-[6px] items-center px-[17px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button">
                      <div className="bg-[#34d399] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#6ee7b7] text-[14px] text-center whitespace-nowrap">
                        <p className="leading-[20px]">Khóa học A</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Button:margin">
                      <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative rounded-[8px] shrink-0" data-name="Button">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center whitespace-nowrap">
                          <p className="leading-[20px]">Khóa học B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">Rê chuột vào dòng để xem chi tiết % đạt</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Table Container → Table">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
                <div className="bg-[#00170d] border-[rgba(19,78,50,0.8)] border-b border-solid border-t content-stretch flex flex-col items-start mb-[-1px] py-px relative shrink-0 w-full" data-name="Header">
                  <div className="relative shrink-0 w-full" data-name="Row">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
                      <div className="content-stretch flex flex-col items-center pb-[13px] pt-[12px] px-[12px] relative shrink-0 w-[49.38px]" data-name="Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center tracking-[0.6px] uppercase whitespace-nowrap">
                          <p className="leading-[16px]">STT</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start pb-[13px] pt-[12px] px-[16px] relative shrink-0 w-[455px]" data-name="Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                          <p className="leading-[16px]">TIÊU ĐỀ</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-center pb-[13px] pt-[12px] px-[16px] relative shrink-0 w-[143px]" data-name="Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center tracking-[0.6px] uppercase whitespace-nowrap">
                          <p className="leading-[16px]">UNIT</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-center pb-[13px] pt-[12px] px-[16px] relative shrink-0 w-[204.2px]" data-name="Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center tracking-[0.6px] uppercase whitespace-nowrap">
                          <p className="leading-[16px]">ĐIỂM</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-center pb-[13px] pt-[12px] px-[16px] relative shrink-0 w-[335.75px]" data-name="Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center tracking-[0.6px] uppercase whitespace-nowrap">
                          <p className="leading-[16px]">TRẠNG THÁI</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[213.5px] relative shrink-0 w-full" data-name="Body">
                  <div className="absolute border-[rgba(19,78,50,0.4)] border-solid border-t content-stretch flex items-start justify-center left-0 pt-px right-0 top-[54px]" data-name="Row 2: Câu hỏi 2">
                    <div className="relative shrink-0 w-[49.38px]" data-name="Data">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[16.5px] pt-[15.5px] px-[12px] relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[14px] text-center whitespace-nowrap">
                          <p className="leading-[20px]">2</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-[455px]" data-name="Data">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16.5px] pt-[15.5px] px-[16px] relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                          <p className="leading-[20px]">Câu hỏi 2</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-[143px]" data-name="Data">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[16.5px] pt-[15.5px] px-[16px] relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[14px] text-center whitespace-nowrap">
                          <p className="leading-[20px]">1</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-[204.2px]" data-name="Data">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[16.5px] pt-[15.5px] px-[16px] relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#fb7185] text-[14px] text-center whitespace-nowrap">
                          <p className="leading-[20px]">4 / 10</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-[335.75px]" data-name="Data">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[15.5px] pt-[14.5px] px-[16px] relative size-full">
                        <div className="bg-[rgba(76,5,25,0.8)] border border-[rgba(244,63,94,0.4)] border-solid content-stretch flex gap-[4px] items-center px-[11px] py-[3px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border">
                          <div className="relative shrink-0 size-[14px]" data-name="SVG">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/1d92e.svg" />
                          </div>
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#fda4af] text-[12px] text-center whitespace-nowrap">
                            <p className="leading-[16px]">CHƯA ĐẠT</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute border-[rgba(19,78,50,0.4)] border-solid border-t content-stretch flex items-start justify-center left-0 pt-px right-0 top-[106px]" data-name="Row 3: Bài ôn tập 1">
                    <div className="relative shrink-0 w-[49.38px]" data-name="Data">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[16.5px] pt-[15.5px] px-[12px] relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[14px] text-center whitespace-nowrap">
                          <p className="leading-[20px]">3</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-[455px]" data-name="Data">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16.5px] pt-[15.5px] px-[16px] relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                          <p className="leading-[20px]">Bài ôn tập 1</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-[143px]" data-name="Data">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[16.5px] pt-[15.5px] px-[16px] relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[14px] text-center whitespace-nowrap">
                          <p className="leading-[20px]">1</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-[204.2px]" data-name="Data">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[16.5px] pt-[15.5px] px-[16px] relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#fcd34d] text-[14px] text-center whitespace-nowrap">
                          <p className="leading-[20px]">-- / 20</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-[335.75px]" data-name="Data">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[15.5px] pt-[14.5px] px-[16px] relative size-full">
                        <div className="bg-[rgba(69,26,3,0.8)] border border-[rgba(245,158,11,0.4)] border-solid content-stretch flex gap-[4px] items-center px-[11px] py-[3px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border">
                          <div className="relative shrink-0 size-[14px]" data-name="SVG">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/94a5e.svg" />
                          </div>
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#fcd34d] text-[12px] text-center whitespace-nowrap">
                            <p className="leading-[16px]">Đang chấm...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute border-[rgba(19,78,50,0.4)] border-solid border-t content-stretch flex items-start justify-center left-0 pt-px right-0 top-[158px]" data-name="Row 4: Additional realistic row">
                    <div className="relative shrink-0 w-[49.38px]" data-name="Data">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[17.5px] pt-[17px] px-[12px] relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[14px] text-center whitespace-nowrap">
                          <p className="leading-[20px]">4</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-[455px]" data-name="Data">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17.5px] pt-[17px] px-[16px] relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                          <p className="leading-[20px]">Kiểm tra giữa kỳ - Khóa A</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-[143px]" data-name="Data">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[17.5px] pt-[17px] px-[16px] relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[14px] text-center whitespace-nowrap">
                          <p className="leading-[20px]">2</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-[204.2px]" data-name="Data">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[17px] pt-[17.5px] px-[16px] relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center whitespace-nowrap">
                          <p className="leading-[20px]">Chưa mở</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-[335.75px]" data-name="Data">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-[16px] py-[14px] relative size-full">
                        <div className="bg-[#1e293b] border border-[#334155] border-solid content-stretch flex items-center justify-center px-[9px] py-[3px] relative rounded-[4px] shrink-0" data-name="Background+Border">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[11px] text-center whitespace-nowrap">
                            <p className="leading-[20px]">Hạn: 24/11</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex items-start justify-center left-0 right-0 top-0" data-name="Row 1: Câu hỏi 1 (with Interactive Tooltip preview matching wireframe note 'rê chuột')">
                    <div className="content-stretch flex flex-col items-center pb-[18px] pt-[17px] px-[12px] relative shrink-0 w-[49.38px]" data-name="Data">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[14px] text-center whitespace-nowrap">
                        <p className="leading-[20px]">1</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[7.99px] items-center px-[16px] py-[14px] relative shrink-0 w-[455px]" data-name="Data">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                        <p className="leading-[20px]">Câu hỏi 1</p>
                      </div>
                      <div className="bg-[#042315] border border-[#134e32] border-solid content-stretch flex flex-col items-start px-[7px] py-[3px] relative rounded-[4px] shrink-0" data-name="Background+Border">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[10px] whitespace-nowrap">
                          <p className="leading-[20px]">Trắc nghiệm</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-center pb-[18px] pt-[17px] px-[16px] relative shrink-0 w-[143px]" data-name="Data">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[14px] text-center whitespace-nowrap">
                        <p className="leading-[20px]">1</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-center pb-[18px] pt-[17px] px-[16px] relative shrink-0 w-[204.2px]" data-name="Data">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[14px] text-center whitespace-nowrap">
                        <p className="leading-[20px]">10 / 10</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-center pb-[17px] pt-[16px] px-[16px] relative shrink-0 w-[335.75px]" data-name="Data">
                      <div className="bg-[#022c22] border border-[rgba(16,185,129,0.4)] border-solid content-stretch flex gap-[4px] items-center px-[11px] py-[3px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
                        <div className="relative shrink-0 size-[14px]" data-name="SVG">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/136ee.svg" />
                        </div>
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#6ee7b7] text-[12px] text-center whitespace-nowrap">
                          <p className="leading-[16px]">ĐẠT</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[rgba(19,78,50,0.4)] border-solid border-t relative shrink-0 w-full" data-name="Bottom Footer Info">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-center flex flex-wrap items-center justify-between pt-[13px] relative size-full">
                <div className="relative shrink-0" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">Hiển thị 3/3 bài tập của Unit 1</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0" data-name="Button">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[12px] text-center whitespace-nowrap">
                      <p className="leading-[16px]">{`Xem toàn bộ giáo trình & barem điểm →`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full" data-name="Section:margin">
            <div className="bg-[#032316] border border-[#134e32] border-solid content-stretch flex flex-col gap-[16px] items-start p-[21px] relative rounded-[12px] shrink-0 w-full" data-name="Section">
              <div className="absolute bg-[rgba(255,255,255,0)] inset-[-1px_-1px_-0.5px_-1px] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Section:shadow" />
              <div className="border-[rgba(19,78,50,0.6)] border-b border-solid relative shrink-0 w-full" data-name="Header & Meta info">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[13px] relative size-full">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
                      <div className="bg-[#07331f] border border-[rgba(138,154,91,0.4)] border-solid content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[32px]" data-name="Background+Border">
                        <div className="relative shrink-0 size-[16px]" data-name="SVG">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/a4128.svg" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Heading 2">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
                            <p className="leading-[24px]">Ghi chú học tập đã lưu (Study Notes)</p>
                          </div>
                          <div className="bg-[rgba(138,154,91,0.2)] border border-[rgba(138,154,91,0.3)] border-solid content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[12px] whitespace-nowrap">
                              <p className="leading-[16px]">6 ghi chú</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                            <p className="leading-[16px]">Tổng hợp ghi chú đính kèm mốc thời gian video theo từng môn học</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-action="new-note" role="button" tabIndex={0} aria-label={"Thêm ghi chú mới"} className="bg-[#10b981] relative rounded-[8px] shrink-0" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[12px] py-[6px] relative size-full">
                      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
                      <div className="relative shrink-0 size-[14px]" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/f1911.svg" />
                      </div>
                      <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#001209] text-[12px] text-center whitespace-nowrap">
                          <p className="leading-[16px]">Thêm ghi chú mới</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="Search & Course Filter Tabs">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[281.16px] items-center relative size-full">
                  <div className="content-center flex flex-wrap gap-[6px] items-center relative shrink-0" data-name="Course Tabs">
                    <div className="border border-[rgba(138,154,91,0.6)] border-solid content-stretch flex gap-[6px] items-center px-[13px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button">
                      <div aria-hidden className="absolute bg-[#07331f] inset-0 pointer-events-none rounded-[8px]" />
                      <div className="bg-[#34d399] relative rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#6ee7b7] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">Tất cả (6)</p>
                      </div>
                      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
                    </div>
                    <div className="bg-[#00170d] border border-[rgba(19,78,50,0.6)] border-solid content-stretch flex gap-[6px] items-center px-[13px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button">
                      <div className="relative shrink-0" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center whitespace-nowrap">
                            <p className="leading-[16px]">{`React 19 & Next.js`}</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#042315] relative rounded-[4px] shrink-0" data-name="Background">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-[6px] relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[10px] text-center whitespace-nowrap">
                            <p className="leading-[16px]">3</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#00170d] border border-[rgba(19,78,50,0.6)] border-solid content-stretch flex gap-[6px] items-center px-[13px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button">
                      <div className="relative shrink-0" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center whitespace-nowrap">
                            <p className="leading-[16px]">{`Khóa A (AI & NLP)`}</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#042315] relative rounded-[4px] shrink-0" data-name="Background">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-[6px] relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[10px] text-center whitespace-nowrap">
                            <p className="leading-[16px]">2</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#00170d] border border-[rgba(19,78,50,0.6)] border-solid content-stretch flex gap-[5.99px] items-center px-[13px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button">
                      <div className="relative shrink-0" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center whitespace-nowrap">
                            <p className="leading-[16px]">{`Khóa B (Cloud & K8s)`}</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#042315] relative rounded-[4px] shrink-0" data-name="Background">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-[6px] relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[10px] text-center whitespace-nowrap">
                            <p className="leading-[16px]">1</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[320px] min-w-px relative" data-name="Quick Filter / Search input">
                    <div className="bg-[#00170d] border border-[rgba(19,78,50,0.8)] border-solid h-[30px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Input">
                      <div className="absolute content-stretch flex flex-col items-start left-[36px] overflow-clip right-[24px] top-[6px]" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                          <p className="leading-[normal]">Tìm kiếm ghi chú, mốc thời gian...</p>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex items-center left-[36px] right-[12px] top-[6px]" data-name="Container">
                        <div className="flex-[1_0_0] h-[16px] min-w-px relative" data-name="Container" />
                        <div className="h-[8px] relative shrink-0 w-[12px]" data-name="Margin" />
                      </div>
                    <FieldControl field={"text"} label={"Tìm kiếm ghi chú, mốc thời gian..."} hint={"Tìm kiếm ghi chú, mốc thời gian..."} /></div>
                    <div className="absolute bottom-0 content-stretch flex items-center left-0 pl-[12px] top-0" data-name="Container">
                      <div className="relative shrink-0 size-[14px]" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/f0ee2.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="Notes List / Cards Grid">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
                  <div className="bg-[#00170d] border border-[#134e32] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[12px] items-start p-[15px] relative rounded-[12px] shrink-0 w-full" data-name="Note 1: React 19 / Optimistic UI">
                    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
                        <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
                          <div className="bg-[#07331f] border border-[#134e32] border-solid content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[4px] shrink-0" data-name="Background+Border">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
                              <p className="leading-[16.5px]">{`REACT 19 & NEXT.JS`}</p>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] whitespace-nowrap">
                              <p className="leading-[16px]">Unit 3 - Bài 3: Xử lý Optimistic UI</p>
                            </div>
                          </div>
                          <div className="bg-[#022c22] border border-[rgba(16,185,129,0.4)] border-solid content-stretch flex gap-[4px] items-center px-[9px] py-[3px] relative rounded-[6px] shrink-0" data-name="Button">
                            <div className="relative shrink-0 size-[12px]" data-name="SVG">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/f1d31.svg" />
                            </div>
                            <div className="relative shrink-0" data-name="Container">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                                <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#6ee7b7] text-[11px] text-center whitespace-nowrap">
                                  <p className="leading-[16.5px]">@ 04:45</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-[96.55000305175781px] pl-[539.5px] relative" data-name="Margin">
                            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] whitespace-nowrap">
                                <p className="leading-[15px]">Cập nhật 2 giờ trước</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[rgba(0,0,0,0.4)] border border-[rgba(19,78,50,0.4)] border-solid content-stretch flex flex-col items-start p-[11px] relative rounded-[8px] shrink-0 w-full" data-name="Overlay+Border">
                          <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[12px] whitespace-nowrap">
                            <p>
                              <span className="leading-[19.5px]">Lưu ý quan trọng:</span>
                              <span className="[word-break:break-word] font-['Liberation_Mono:Regular'] leading-[19.5px] not-italic text-[#e2e8f0]">{` `}</span>
                              <span className="[word-break:break-word] font-['Liberation_Mono:Regular'] leading-[19.5px] not-italic text-[#6ee7b7]">useOptimistic</span>
                              <span className="[word-break:break-word] font-['Liberation_Mono:Regular'] leading-[19.5px] not-italic text-[#e2e8f0]">{` nhận vào 2 tham số (state ban đầu, và hàm cập nhật dự kiến). Cần rollback nếu server reject hoặc trả HTTP 500.`}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-center relative size-full">
                        <div data-action="lesson" role="button" tabIndex={0} aria-label={"Xem lại"} className="bg-[#07331f] border border-[#134e32] border-solid content-stretch flex gap-[4px] items-center px-[11px] py-[5px] relative rounded-[6px] shrink-0" data-name="Button">
                          <div className="relative shrink-0 size-[12px]" data-name="SVG">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/69020.svg" />
                          </div>
                          <div className="relative shrink-0" data-name="Container">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[12px] text-center whitespace-nowrap">
                                <p className="leading-[16px]">Xem lại</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
                          <div className="content-stretch flex flex-col items-start p-[4px] relative rounded-[4px] shrink-0" data-name="Button - Sao chép ghi chú">
                            <div className="relative shrink-0 size-[14px]" data-name="SVG">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/46ab6.svg" />
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col items-start p-[4px] relative rounded-[4px] shrink-0" data-name="Button - Chỉnh sửa ghi chú">
                            <div className="relative shrink-0 size-[14px]" data-name="SVG">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/e02cf.svg" />
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col items-start p-[4px] relative rounded-[4px] shrink-0" data-name="Button - Xóa ghi chú">
                            <div className="relative shrink-0 size-[14px]" data-name="SVG">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/450f6.svg" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#00170d] border border-[#134e32] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[12px] items-start p-[15px] relative rounded-[12px] shrink-0 w-full" data-name="Note 2: Khóa A / AI & NLP">
                    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
                        <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
                          <div className="bg-[#07331f] border border-[#134e32] border-solid content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[4px] shrink-0" data-name="Background+Border">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
                              <p className="leading-[16.5px]">KHÓA A • IT005</p>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] whitespace-nowrap">
                              <p className="leading-[16px]">{`Unit 1 - Bài 2: Gradient Descent & Loss Functions`}</p>
                            </div>
                          </div>
                          <div className="bg-[#022c22] border border-[rgba(16,185,129,0.4)] border-solid content-stretch flex gap-[4px] items-center px-[9px] py-[3px] relative rounded-[6px] shrink-0" data-name="Button">
                            <div className="relative shrink-0 size-[12px]" data-name="SVG">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/f1d31.svg" />
                            </div>
                            <div className="relative shrink-0" data-name="Container">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                                <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#6ee7b7] text-[11px] text-center whitespace-nowrap">
                                  <p className="leading-[16.5px]">@ 08:30</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-[103.12999725341797px] pl-[468.672px] relative" data-name="Margin">
                            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] whitespace-nowrap">
                                <p className="leading-[15px]">Cập nhật 1 ngày trước</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[rgba(0,0,0,0.4)] border border-[rgba(19,78,50,0.4)] border-solid content-stretch flex flex-col items-start p-[11px] relative rounded-[8px] shrink-0 w-full" data-name="Overlay+Border">
                          <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#e2e8f0] text-[12px] whitespace-nowrap">
                            <p>
                              <span className="leading-[19.5px]">{`Sử dụng `}</span>
                              <span className="[word-break:break-word] font-['Liberation_Mono:Regular'] leading-[19.5px] not-italic text-[#6ee7b7]">Adam Optimizer</span>
                              <span className="leading-[19.5px]">{` với learning rate = 0.001 cho bài toán NLP quy mô lớn để đạt điểm hội tụ nhanh và tránh kẹt tại saddle points.`}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-center relative size-full">
                        <div data-action="lesson" role="button" tabIndex={0} aria-label={"Xem lại"} className="bg-[#07331f] border border-[#134e32] border-solid content-stretch flex gap-[4px] items-center px-[11px] py-[5px] relative rounded-[6px] shrink-0" data-name="Button">
                          <div className="relative shrink-0 size-[12px]" data-name="SVG">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/69020.svg" />
                          </div>
                          <div className="relative shrink-0" data-name="Container">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[12px] text-center whitespace-nowrap">
                                <p className="leading-[16px]">Xem lại</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
                          <div className="content-stretch flex flex-col items-start p-[4px] relative rounded-[4px] shrink-0" data-name="Button - Sao chép ghi chú">
                            <div className="relative shrink-0 size-[14px]" data-name="SVG">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/46ab6.svg" />
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col items-start p-[4px] relative rounded-[4px] shrink-0" data-name="Button - Chỉnh sửa ghi chú">
                            <div className="relative shrink-0 size-[14px]" data-name="SVG">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/e02cf.svg" />
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col items-start p-[4px] relative rounded-[4px] shrink-0" data-name="Button - Xóa ghi chú">
                            <div className="relative shrink-0 size-[14px]" data-name="SVG">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/450f6.svg" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#00170d] border border-[#134e32] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[12px] items-start p-[15px] relative rounded-[12px] shrink-0 w-full" data-name="Note 3: Khóa B / Cloud & Kubernetes">
                    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
                        <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
                          <div className="bg-[#07331f] border border-[#134e32] border-solid content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[4px] shrink-0" data-name="Background+Border">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
                              <p className="leading-[16.5px]">KHÓA B • IE106</p>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] whitespace-nowrap">
                              <p className="leading-[16px]">{`Unit 2 - Bài 1: Docker & Container Orchestration`}</p>
                            </div>
                          </div>
                          <div className="bg-[#022c22] border border-[rgba(16,185,129,0.4)] border-solid content-stretch flex gap-[4px] items-center px-[9px] py-[3px] relative rounded-[6px] shrink-0" data-name="Button">
                            <div className="relative shrink-0 size-[12px]" data-name="SVG">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/f1d31.svg" />
                            </div>
                            <div className="relative shrink-0" data-name="Container">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                                <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#6ee7b7] text-[11px] text-center whitespace-nowrap">
                                  <p className="leading-[16.5px]">@ 01:25</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-[105.2300033569336px] pl-[477.234px] relative" data-name="Margin">
                            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] whitespace-nowrap">
                                <p className="leading-[15px]">Cập nhật 3 ngày trước</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[rgba(0,0,0,0.4)] border border-[rgba(19,78,50,0.4)] border-solid content-stretch flex flex-col items-start p-[11px] relative rounded-[8px] shrink-0 w-full" data-name="Overlay+Border">
                          <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#e2e8f0] text-[12px] whitespace-nowrap">
                            <p className="mb-0">
                              <span className="leading-[19.5px]">{`Cần nhớ cơ chế rollback tự động khi Deployment trong Kubernetes phát hiện Pod CrashLoopBackOff: sử dụng `}</span>
                              <span className="[word-break:break-word] font-['Liberation_Mono:Regular'] leading-[19.5px] not-italic text-[#6ee7b7]">kubectl rollout undo deployment/...</span>
                              <span className="leading-[19.5px]">{` để`}</span>
                            </p>
                            <p className="leading-[19.5px]">hoàn tác phiên bản.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-center relative size-full">
                        <div data-action="lesson" role="button" tabIndex={0} aria-label={"Xem lại"} className="bg-[#07331f] border border-[#134e32] border-solid content-stretch flex gap-[4px] items-center px-[11px] py-[5px] relative rounded-[6px] shrink-0" data-name="Button">
                          <div className="relative shrink-0 size-[12px]" data-name="SVG">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/69020.svg" />
                          </div>
                          <div className="relative shrink-0" data-name="Container">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[12px] text-center whitespace-nowrap">
                                <p className="leading-[16px]">Xem lại</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
                          <div className="content-stretch flex flex-col items-start p-[4px] relative rounded-[4px] shrink-0" data-name="Button - Sao chép ghi chú">
                            <div className="relative shrink-0 size-[14px]" data-name="SVG">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/46ab6.svg" />
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col items-start p-[4px] relative rounded-[4px] shrink-0" data-name="Button - Chỉnh sửa ghi chú">
                            <div className="relative shrink-0 size-[14px]" data-name="SVG">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/e02cf.svg" />
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col items-start p-[4px] relative rounded-[4px] shrink-0" data-name="Button - Xóa ghi chú">
                            <div className="relative shrink-0 size-[14px]" data-name="SVG">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/450f6.svg" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[rgba(19,78,50,0.4)] border-solid border-t relative shrink-0 w-full" data-name="Bottom section footer actions">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[9px] relative size-full">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">Hiển thị 3 / 6 ghi chú gần nhất</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
                      <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[12px] text-center whitespace-nowrap">
                          <p className="leading-[16px]">Xuất toàn bộ ghi chú (PDF / Markdown)</p>
                        </div>
                      </div>
                      <div className="relative shrink-0 size-[14px]" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/ebead.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-[9/span_4] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Aside - RIGHT COLUMN (Utility & Stats Sidebar ~35%)">
          <div className="bg-[#032316] border border-[#134e32] border-solid content-stretch flex flex-col gap-[16px] items-start p-[21px] relative rounded-[12px] shrink-0 w-full" data-name="SECTION: Lịch học & Thời hạn (Calendar & Deadlines)">
            <div className="absolute bg-[rgba(255,255,255,0)] inset-[-1px] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="SECTION: Lịch học & Thời hạn (Calendar & Deadlines):shadow" />
            <div className="relative shrink-0 w-full" data-name="Calendar Header">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Heading 2">
                  <div className="relative shrink-0 size-[16px]" data-name="SVG">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/764b1.svg" />
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                    <p className="leading-[20px]">Lịch học - Tháng 11/2026</p>
                  </div>
                </div>
                <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                  <div className="content-stretch flex flex-col items-center justify-center mr-[-0.01px] p-[4px] relative rounded-[4px] shrink-0" data-name="Button - Tháng trước">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[16px] text-center whitespace-nowrap">
                      <p className="leading-[24px]">‹</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Button - Tháng sau:margin">
                    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="Button - Tháng sau">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[16px] text-center whitespace-nowrap">
                        <p className="leading-[24px]">›</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#00170d] border border-[rgba(19,78,50,0.6)] border-solid relative rounded-[8px] shrink-0 w-full" data-name="Calendar Grid Layout">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[13px] relative size-full">
                <div className="border-[rgba(19,78,50,0.4)] border-b border-solid relative shrink-0 w-full" data-name="Days of Week Header">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center pb-[9px] relative size-full">
                    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[11px] text-center whitespace-nowrap">
                          <p className="leading-[16.5px]">T2</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[11px] text-center whitespace-nowrap">
                          <p className="leading-[16.5px]">T3</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[11px] text-center whitespace-nowrap">
                          <p className="leading-[16.5px]">T4</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[11px] text-center whitespace-nowrap">
                          <p className="leading-[16.5px]">T5</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[11px] text-center whitespace-nowrap">
                          <p className="leading-[16.5px]">T6</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[11px] text-center whitespace-nowrap">
                          <p className="leading-[16.5px]">T7</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[11px] text-center whitespace-nowrap">
                          <p className="leading-[16.5px]">CN</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Calendar Dates (Month of Nov 2026 starting Sun 1)">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-y-[6px] grid grid-cols-[repeat(7,minmax(0,1fr))] grid-rows-[______24px_24px_24px_24px_24px_24px] pt-[8px] relative size-full">
                    <div className="col-7 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-1 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">1</p>
                      </div>
                    </div>
                    <div className="col-1 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-2 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">2</p>
                      </div>
                    </div>
                    <div className="col-2 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-2 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">3</p>
                      </div>
                    </div>
                    <div className="col-3 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-2 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">4</p>
                      </div>
                    </div>
                    <div className="col-4 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-2 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">5</p>
                      </div>
                    </div>
                    <div className="col-5 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-2 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">6</p>
                      </div>
                    </div>
                    <div className="col-6 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-2 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">7</p>
                      </div>
                    </div>
                    <div className="col-7 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-2 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">8</p>
                      </div>
                    </div>
                    <div className="col-1 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-3 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">9</p>
                      </div>
                    </div>
                    <div className="col-2 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-3 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">10</p>
                      </div>
                    </div>
                    <div className="col-4 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-3 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">12</p>
                      </div>
                    </div>
                    <div className="col-5 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-3 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">13</p>
                      </div>
                    </div>
                    <div className="col-6 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-3 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">14</p>
                      </div>
                    </div>
                    <div className="col-7 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-3 self-start shrink-0" data-name="Container">
                      <div className="h-[8.848px] relative shrink-0 w-[10.723px]" data-name="Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/4c046.svg" />
                      </div>
                    </div>
                    <div className="col-1 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-4 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">16</p>
                      </div>
                    </div>
                    <div className="col-2 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-4 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">17</p>
                      </div>
                    </div>
                    <div className="col-3 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-4 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">18</p>
                      </div>
                    </div>
                    <div className="col-5 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-4 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">20</p>
                      </div>
                    </div>
                    <div className="col-6 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-4 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">21</p>
                      </div>
                    </div>
                    <div className="col-7 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-4 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">22</p>
                      </div>
                    </div>
                    <div className="col-1 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-5 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">23</p>
                      </div>
                    </div>
                    <div className="col-3 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-5 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">25</p>
                      </div>
                    </div>
                    <div className="col-4 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-5 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">26</p>
                      </div>
                    </div>
                    <div className="col-5 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-5 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">27</p>
                      </div>
                    </div>
                    <div className="col-6 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-5 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">28</p>
                      </div>
                    </div>
                    <div className="col-7 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-5 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">29</p>
                      </div>
                    </div>
                    <div className="col-1 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-6 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">30</p>
                      </div>
                    </div>
                    <div className="bg-[#07331f] col-3 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-3 self-start shrink-0" data-name="Day 11 Deadline Dot">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">11</p>
                      </div>
                      <div className="-translate-x-1/2 absolute bg-[#fbbf24] bottom-[2px] left-1/2 rounded-[9999px] size-[4px]" data-name="Background" />
                    </div>
                    <div className="bg-[#07331f] col-4 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-4 self-start shrink-0" data-name="Day 19 Deadline Dot">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">19</p>
                      </div>
                      <div className="-translate-x-1/2 absolute bg-[#fbbf24] bottom-[2px] left-1/2 rounded-[9999px] size-[4px]" data-name="Background" />
                    </div>
                    <div className="bg-[#059669] col-2 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[9999px] row-5 self-start shrink-0" data-name="Day 24 (Circled in wireframe mockup)">
                      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_0px_0px_2px_rgba(52,211,153,0.5),0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Day 24 (Circled in wireframe mockup):shadow" />
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold'] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
                        <p className="leading-[16px]">24</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Section: Thời hạn (Deadlines matching wireframe)">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative size-full">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Heading 3">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                      <p className="leading-[16px]">THỜI HẠN SẮP TỚI</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[0.6px] uppercase whitespace-nowrap">
                      <p className="leading-[16px]">3 HẠN NỘP</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
                  <div className="bg-[#00170d] border border-[rgba(19,78,50,0.6)] border-solid content-stretch flex items-center justify-between p-[11px] relative rounded-[8px] shrink-0 w-full" data-name="Deadline 1">
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#fbbf24] text-[11px] whitespace-nowrap">
                            <p className="leading-[16.5px]">11/11/2026 (23:59)</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e2e8f0] text-[12px] whitespace-nowrap">
                            <p className="leading-[16px]">Câu hỏi ngắn - Khóa A</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#07331f] border border-[#134e32] border-solid relative rounded-[4px] shrink-0" data-name="Background+Border">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9px] py-[3px] relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[10px] whitespace-nowrap">
                          <p className="leading-[15px]">Unit 1</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#00170d] border border-[rgba(19,78,50,0.6)] border-solid content-stretch flex items-center justify-between p-[11px] relative rounded-[8px] shrink-0 w-full" data-name="Deadline 2">
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#fbbf24] text-[11px] whitespace-nowrap">
                            <p className="leading-[16.5px]">19/11/2026 (23:59)</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e2e8f0] text-[12px] whitespace-nowrap">
                            <p className="leading-[16px]">Bài ôn tập - Khóa B</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#07331f] border border-[#134e32] border-solid relative rounded-[4px] shrink-0" data-name="Background+Border">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9px] py-[3px] relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[10px] whitespace-nowrap">
                          <p className="leading-[15px]">Unit 2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[rgba(2,44,34,0.6)] border-2 border-[rgba(16,185,129,0.7)] border-solid content-stretch flex items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Deadline 3 (Circled item from wireframe with Click Indicator -> 'Tới bài làm')">
                    <div className="absolute bg-[rgba(255,255,255,0)] inset-[-2px_-2px_-1.5px_-2px] rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Deadline 3 (Circled item from wireframe with Click Indicator -> 'Tới bài làm'):shadow" />
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
                          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[11px] whitespace-nowrap">
                              <p className="leading-[16.5px]">24/11/2026 (Hôm nay)</p>
                            </div>
                          </div>
                          <div className="bg-[#34d399] relative rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                            <p className="leading-[16px]">Kiểm tra - Khóa A</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(110,231,183,0.8)] whitespace-nowrap">
                            <p className="leading-[15px]">Nhấn chuột trái để làm bài</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#10b981] relative rounded-[6px] shrink-0" data-name="Button - Action matching wireframe callout box '24/11 - Kiểm tra - Khóa A -> [Tới bài làm">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[10px] py-[4px] relative size-full">
                        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" data-name="Button - Action matching wireframe callout box '24/11 - Kiểm tra - Khóa A -> [Tới bài làm:shadow" />
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#001209] text-[12px] text-center whitespace-nowrap">
                          <p className="leading-[16px]">Tới bài làm</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#032316] border border-[#134e32] border-solid content-stretch flex flex-col gap-[12px] items-start p-[21px] relative rounded-[12px] shrink-0 w-full" data-name="SECTION: Chuỗi học trong tuần (Streak 7/7)">
            <div className="absolute bg-[rgba(255,255,255,0)] inset-[-1px] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="SECTION: Chuỗi học trong tuần (Streak 7/7):shadow" />
            <div className="relative shrink-0 w-full" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e2e8f0] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                    <p className="leading-[16px]">CHUỖI HỌC TRONG TUẦN</p>
                  </div>
                </div>
                <div className="bg-[#022c22] border border-[rgba(16,185,129,0.4)] border-solid content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold'] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[12px] whitespace-nowrap">
                    <p className="leading-[16px]">7/7 ngày 🔥</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="7-day checkboxes / circular badges (T2 -> CN) matching wireframe">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start justify-center relative size-full">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center whitespace-nowrap">
                    <p className="leading-[15px]">T2</p>
                  </div>
                  <div className="bg-[#10b981] content-stretch flex items-center justify-center pb-[6.5px] pt-[5.5px] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background">
                    <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[28px] top-0" data-name="Overlay+Shadow" />
                    <div className="[word-break:break-word] flex flex-col font-['FreeSans:Semi_Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[#001209] text-[12px] text-center whitespace-nowrap">
                      <p className="leading-[16px]">✓</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center whitespace-nowrap">
                    <p className="leading-[15px]">T3</p>
                  </div>
                  <div className="bg-[#10b981] content-stretch flex items-center justify-center pb-[6.5px] pt-[5.5px] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background">
                    <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[28px] top-0" data-name="Overlay+Shadow" />
                    <div className="[word-break:break-word] flex flex-col font-['FreeSans:Semi_Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[#001209] text-[12px] text-center whitespace-nowrap">
                      <p className="leading-[16px]">✓</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center whitespace-nowrap">
                    <p className="leading-[15px]">T4</p>
                  </div>
                  <div className="bg-[#10b981] content-stretch flex items-center justify-center pb-[6.5px] pt-[5.5px] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background">
                    <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[28px] top-0" data-name="Overlay+Shadow" />
                    <div className="[word-break:break-word] flex flex-col font-['FreeSans:Semi_Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[#001209] text-[12px] text-center whitespace-nowrap">
                      <p className="leading-[16px]">✓</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center whitespace-nowrap">
                    <p className="leading-[15px]">T5</p>
                  </div>
                  <div className="bg-[#10b981] content-stretch flex items-center justify-center pb-[6.5px] pt-[5.5px] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background">
                    <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[28px] top-0" data-name="Overlay+Shadow" />
                    <div className="[word-break:break-word] flex flex-col font-['FreeSans:Semi_Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[#001209] text-[12px] text-center whitespace-nowrap">
                      <p className="leading-[16px]">✓</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center whitespace-nowrap">
                    <p className="leading-[15px]">T6</p>
                  </div>
                  <div className="bg-[#10b981] content-stretch flex items-center justify-center pb-[6.5px] pt-[5.5px] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background">
                    <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[28px] top-0" data-name="Overlay+Shadow" />
                    <div className="[word-break:break-word] flex flex-col font-['FreeSans:Semi_Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[#001209] text-[12px] text-center whitespace-nowrap">
                      <p className="leading-[16px]">✓</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center whitespace-nowrap">
                    <p className="leading-[15px]">T7</p>
                  </div>
                  <div className="bg-[#10b981] content-stretch flex items-center justify-center pb-[6.5px] pt-[5.5px] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background">
                    <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[28px] top-0" data-name="Overlay+Shadow" />
                    <div className="[word-break:break-word] flex flex-col font-['FreeSans:Semi_Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[#001209] text-[12px] text-center whitespace-nowrap">
                      <p className="leading-[16px]">✓</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center whitespace-nowrap">
                    <p className="leading-[15px]">CN</p>
                  </div>
                  <div className="bg-[#34d399] content-stretch flex items-center justify-center pb-[6.5px] pt-[5.5px] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background">
                    <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_0px_0px_2px_#6ee7b7,0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[28px] top-0" data-name="Overlay+Shadow" />
                    <div className="[word-break:break-word] flex flex-col font-['FreeSans:Semi_Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[#001209] text-[12px] text-center whitespace-nowrap">
                      <p className="leading-[16px]">✓</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#032316] border border-[#134e32] border-solid content-stretch flex flex-col gap-[12px] items-start p-[21px] relative rounded-[12px] shrink-0 w-full" data-name="SECTION: Quá trình học của bạn (Learning Stats Analytics)">
            <div className="absolute bg-[rgba(255,255,255,0)] inset-[-1px_-1px_-1.5px_-1px] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="SECTION: Quá trình học của bạn (Learning Stats Analytics):shadow" />
            <div className="relative shrink-0 w-full" data-name="Heading 2">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e2e8f0] text-[12px] tracking-[0.6px] uppercase w-full">
                  <p className="leading-[16px]">QUÁ TRÌNH HỌC CỦA BẠN</p>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start justify-center relative size-full">
                <div className="bg-[#00170d] border border-[rgba(19,78,50,0.6)] border-solid content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-px p-[15px] relative rounded-[12px]" data-name="Metric Card 1: 45% hoàn thành">
                  <div className="relative shrink-0 w-full" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[11px] w-full">
                        <p className="leading-[16.5px]">Hiện tại, bạn đã hoàn thành</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-name="Margin">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[8px] relative size-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold'] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[30px] tracking-[-0.75px] w-full">
                          <p className="leading-[36px]">45%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[11px] w-full">
                        <p className="leading-[16.5px]">qua 2 khóa học - 10 units</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#00170d] border border-[rgba(19,78,50,0.6)] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-start min-w-px p-[15px] relative rounded-[12px]" data-name="Metric Card 2: 1 giờ 30 phút">
                  <div className="relative shrink-0 w-full" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[11px] w-full">
                        <p className="leading-[16.5px]">Hôm nay, bạn đã dành ra</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-name="Margin">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[8px] relative size-full">
                      <div className="content-stretch flex flex-col items-start pb-[2.5px] relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold'] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.6px] w-full">
                          <p className="leading-[24px]">1h 30m</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[11px] w-full">
                        <p className="leading-[16.5px]">nhiều hơn hôm qua 1 tiếng! 🚀</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#032316] border border-[#134e32] border-solid content-stretch flex flex-col gap-[12px] items-start p-[21px] relative rounded-[12px] shrink-0 w-full" data-name="SECTION: Thông báo - 15 (Notifications List)">
            <div className="absolute bg-[rgba(255,255,255,0)] inset-[-1px] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="SECTION: Thông báo - 15 (Notifications List):shadow" />
            <div className="border-[rgba(19,78,50,0.6)] border-b border-solid relative shrink-0 w-full" data-name="HorizontalBorder">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[9px] relative size-full">
                <div className="relative shrink-0" data-name="Heading 2">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                        <p className="leading-[20px]">Thông báo</p>
                      </div>
                    </div>
                    <div className="bg-[rgba(136,19,55,0.6)] border border-[rgba(225,29,72,0.4)] border-solid content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#fda4af] text-[10px] whitespace-nowrap">
                        <p className="leading-[20px]">15 mới</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0" data-name="Button">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[11px] text-center whitespace-nowrap">
                      <p className="leading-[16.5px]">Đánh dấu tất cả đã đọc</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-h-[288px] relative shrink-0 w-full" data-name="Notification Items List matching wireframe icons (!, checkmark, trash)">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start max-h-[inherit] overflow-auto pr-[4px] relative rounded-[inherit] size-full">
                <div className="bg-[#00170d] border border-[rgba(120,53,15,0.4)] border-solid content-stretch flex gap-[10px] items-start p-[11px] relative rounded-[8px] shrink-0 w-full" data-name="Item 1: Alert Warning">
                  <div className="h-[26px] relative shrink-0 w-[24px]" data-name="Margin">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
                      <div className="bg-[#451a03] border border-[rgba(245,158,11,0.4)] border-solid content-stretch flex items-center justify-center pb-[4.5px] pt-[3.5px] px-px relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background+Border">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#fbbf24] text-[12px] text-center whitespace-nowrap">
                          <p className="leading-[16px]">!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e2e8f0] text-[12px] w-full">
                          <p className="leading-[19.5px]">Hôm nay là deadline của bài tập 1 của khóa Lập trình Web...</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] w-full">
                          <p className="leading-[15px]">01/10/2026 • 20:00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-60 relative shrink-0" data-name="Button - Xóa thông báo">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[4px] relative size-full">
                      <div className="relative shrink-0 size-[14px]" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/450f6.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#00170d] border border-[rgba(19,78,50,0.6)] border-solid content-stretch flex gap-[10px] items-start p-[11px] relative rounded-[8px] shrink-0 w-full" data-name="Item 2: Success Check">
                  <div className="h-[26px] relative shrink-0 w-[24px]" data-name="Margin">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
                      <div className="bg-[#022c22] border border-[rgba(16,185,129,0.4)] border-solid content-stretch flex items-center justify-center pb-[4.5px] pt-[3.5px] px-px relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background+Border">
                        <div className="[word-break:break-word] flex flex-col font-['FreeSans:Semi_Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[12px] text-center whitespace-nowrap">
                          <p className="leading-[16px]">✓</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e2e8f0] text-[12px] w-full">
                          <p className="leading-[19.5px]">Chúc mừng bạn! Bạn đã hoàn thành khóa học nền tảng React...</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] w-full">
                          <p className="leading-[15px]">02/10/2026 • 15:30</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-60 relative shrink-0" data-name="Button - Xóa thông báo">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[4px] relative size-full">
                      <div className="relative shrink-0 size-[14px]" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/450f6.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#00170d] border border-[rgba(19,78,50,0.6)] border-solid content-stretch flex gap-[10px] items-start p-[11px] relative rounded-[8px] shrink-0 w-full" data-name="Item 3: Success Submission">
                  <div className="h-[26px] relative shrink-0 w-[24px]" data-name="Margin">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
                      <div className="bg-[#022c22] border border-[rgba(16,185,129,0.4)] border-solid content-stretch flex items-center justify-center pb-[4.5px] pt-[3.5px] px-px relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background+Border">
                        <div className="[word-break:break-word] flex flex-col font-['FreeSans:Semi_Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[12px] text-center whitespace-nowrap">
                          <p className="leading-[16px]">✓</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e2e8f0] text-[12px] w-full">
                          <p className="leading-[19.5px]">Bài ôn tập của bạn đã được gửi thành công đến giảng viên!</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] w-full">
                          <p className="leading-[15px]">15/10/2026 • 09:12</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-60 relative shrink-0" data-name="Button - Xóa thông báo">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[4px] relative size-full">
                      <div className="relative shrink-0 size-[14px]" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/450f6.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#00170d] border border-[rgba(76,5,25,0.7)] border-solid content-stretch flex gap-[10px] items-start p-[11px] relative rounded-[8px] shrink-0 w-full" data-name="Item 4: Warning Network error">
                  <div className="h-[26px] relative shrink-0 w-[24px]" data-name="Margin">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
                      <div className="bg-[#4c0519] border border-[rgba(244,63,94,0.4)] border-solid content-stretch flex items-center justify-center pb-[4.5px] pt-[3.5px] px-px relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background+Border">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#fb7185] text-[12px] text-center whitespace-nowrap">
                          <p className="leading-[16px]">!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fecdd3] text-[12px] w-full">
                          <p className="leading-[19.5px]">Bài tập của bạn chưa được gửi do mạng chập chờn. Vui lòng bấm thử lại.</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] w-full">
                          <p className="leading-[15px]">16/10/2026 • 18:45</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-60 relative shrink-0" data-name="Button - Xóa thông báo">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[4px] relative size-full">
                      <div className="relative shrink-0 size-[14px]" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/450f6.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[2px] pt-[6px] relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a9a5b] text-[12px] text-center whitespace-nowrap">
                  <p className="leading-[16px]">Xem thêm thông báo cũ hơn →</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
