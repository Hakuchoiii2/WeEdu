import { FieldControl } from '../controls.jsx'

export default function DashboardPart1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[32px] py-[24px] relative size-full" data-name="MainLayout">
      <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_1754px] relative shrink-0 w-full" data-name="Container">
        <div className="col-[1/span_8] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="LEFT COLUMN (Main Content ~65%)">
          <div className="border-[#e2e8f0] border-b border-solid content-stretch flex items-center justify-between pb-[17px] relative shrink-0 w-full" data-name="Welcome Heading">
            <div className="relative shrink-0" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Heading 1">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold'] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[30px] tracking-[-0.75px] whitespace-nowrap">
                    <p className="leading-[36px]">Quản lý khóa học</p>
                  </div>
                  <div className="bg-[#ecfdf5] border border-[#a7f3d0] border-solid content-stretch flex flex-col items-start px-[11px] py-[3px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[12px] tracking-[-0.75px] whitespace-nowrap">
                      <p className="leading-[16px]">Học kỳ 1</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">
                    <p>
                      <span className="leading-[20px]">{`Buổi sáng vui vẻ, `}</span>
                      <span className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[20px] not-italic text-[#047857]">Nguyễn Văn A</span>
                      <span className="leading-[20px]">! Chúc bạn có một ngày học tập hiệu quả tại WeEdu.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#e2e8f0] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[8px] shrink-0" data-name="Background+Border+Shadow">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[13px] py-[7px] relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">
                  <p>
                    <span className="leading-[16px]">{`Hôm nay: `}</span>
                    <span className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[16px] not-italic text-[#1e293b]">Thứ Bảy, 07/11/2026</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section - SECTION: Tiếp tục bài học (Hero Continue Learning Card)">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Heading 2">
                <div className="bg-[#059669] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
                <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] whitespace-nowrap">
                  <p className="leading-[24px]">Tiếp tục bài học</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[12px] whitespace-nowrap">
                  <p className="leading-[16px]">Lịch sử học tập →</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col items-start overflow-clip p-[21px] relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Background+Border+Shadow">
              <div className="relative shrink-0 w-full" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-start relative size-full">
                  <div className="bg-[#0f172a] border border-[#e2e8f0] border-solid overflow-clip relative rounded-[12px] self-stretch shrink-0 w-[256px]" data-name="Background+Border">
                    <div className="absolute inset-[0_0_0.5px_0] opacity-90" style={{ backgroundImage: "linear-gradient(38.14726297047739deg, rgb(15, 23, 42) 0%, rgb(2, 44, 34) 50%, rgb(30, 41, 59) 100%)" }} data-name="Gradient" />
                    <div className="absolute content-stretch flex inset-[0_0_0.5px_0] items-center justify-center" data-name="Container">
                      <div className="relative shrink-0 size-[48px]" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/8078b.svg" />
                      </div>
                      <div className="absolute bg-[#059669] content-stretch flex items-center justify-center left-[103px] pl-[16px] pr-[12px] rounded-[9999px] size-[48px] top-[75.75px]" data-name="Background">
                        <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[48px] top-0" data-name="Overlay+Shadow" />
                        <div className="relative shrink-0 size-[20px]" data-name="SVG">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/71eed.svg" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bg-[rgba(0,0,0,0.75)] border border-[rgba(16,185,129,0.3)] border-solid bottom-[8.5px] content-stretch flex flex-col items-start left-[8px] px-[9px] py-[3px] rounded-[4px]" data-name="Overlay+Border">
                      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#6ee7b7] text-[10px] whitespace-nowrap">
                        <p className="leading-[15px]">Unit 3 • 10p45s</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-px py-[4px] relative self-stretch" data-name="Container">
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
                        <div className="bg-[#ecfdf5] border border-[#a7f3d0] border-solid content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[4px] shrink-0" data-name="Background+Border">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
                            <p className="leading-[16.5px]">IE106.P11 • KHÓA A</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                            <p className="leading-[16px]">Giảng viên: TS. Nguyễn Công Minh</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Heading 3">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] w-full">
                          <p className="leading-[28px]">{`Lập trình Web Chuyên Nghiệp với React 19 & Next.js`}</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-full">
                          <p>
                            <span className="leading-[20px]">{`Đang học: `}</span>
                            <span className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[20px] not-italic text-[#047857]">Tên bài học 3 - 10p45s:</span>
                            <span className="leading-[20px]">{` Tối ưu Server Components & Xử lý Optimistic UI`}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Margin">
                      <div className="border-[#f1f5f9] border-solid border-t content-stretch flex flex-col gap-[6px] items-start pt-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
                        <div className="relative shrink-0 w-full" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
                            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">
                                <p>
                                  <span className="leading-[16px]">{`Tiến độ tổng quan: `}</span>
                                  <span className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[16px] not-italic text-[#0f172a]">60%</span>
                                </p>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[12px] whitespace-nowrap">
                                <p className="leading-[16px]">18 / 30 bài đã hoàn thành</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#f1f5f9] border border-[#e2e8f0] border-solid h-[10px] relative rounded-[9999px] shrink-0 w-full" data-name="Background+Border">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                            <div className="absolute bg-gradient-to-r from-[#10b981] inset-[0_calc(40.02%-0.2px)_0_calc(0.11%-1px)] rounded-[9999px] to-[#14b8a6]" data-name="Gradient" />
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[10px] relative size-full">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
                              <div className="relative shrink-0 size-[14px]" data-name="SVG">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/05a50.svg" />
                              </div>
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">
                                <p className="leading-[16.5px]">Lần học gần nhất: 22 giờ trước</p>
                              </div>
                            </div>
                            <div data-action="lesson" role="button" tabIndex={0} aria-label={"Tiếp tục"} className="bg-[#059669] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[8px] items-center px-[20px] py-[8px] relative rounded-[12px] shrink-0" data-name="Button">
                              <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
                                <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
                                  <p className="leading-[20px]">Tiếp tục</p>
                                </div>
                              </div>
                              <div className="relative shrink-0 size-[16px]" data-name="SVG">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/a24ee.svg" />
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
                <div className="bg-[#059669] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
                <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] whitespace-nowrap">
                  <p className="leading-[24px]">Khóa học hiện tại của bạn -</p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[16px] whitespace-nowrap">
                    <p className="leading-[24px]">2</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[12px] whitespace-nowrap">
                  <p className="leading-[16px]">Tất cả khóa học (2)</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Container">
              <div className="bg-white border border-[#e2e8f0] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-[1_0_0] flex-col items-start justify-between min-w-px p-[17px] relative rounded-[12px]" data-name="Article">
                <div className="relative shrink-0 w-full" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                    <div className="bg-[#f1f5f9] border border-[#e2e8f0] border-solid content-stretch flex h-[128px] items-center justify-center overflow-clip p-px relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
                      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/35245.svg" />
                      </div>
                      <div className="absolute bg-gradient-to-b from-[rgba(15,23,42,0)] inset-[0_0.01px_0_0] to-[rgba(15,23,42,0.4)]" data-name="Gradient" />
                      <div className="absolute bg-[rgba(255,255,255,0.9)] border border-[#e2e8f0] border-solid left-[8px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[8px]" data-name="Overlay+Border+Shadow">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9px] py-[3px] relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[10px] whitespace-nowrap">
                            <p className="leading-[15px]">Mã môn: IT005</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bg-[rgba(15,23,42,0.8)] bottom-[8px] right-[8.01px] rounded-[4px]" data-name="Overlay">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                            <p className="leading-[16px]">75%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Heading 3">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] w-full">
                        <p className="leading-[24px]">Tên khóa học A - 75%</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-full">
                        <p className="leading-[16px]">{`Trí tuệ Nhân tạo & Xử lý Ngôn ngữ Tự nhiên`}</p>
                      </div>
                    </div>
                    <div className="bg-[#f1f5f9] border border-[#e2e8f0] border-solid h-[6px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background+Border">
                      <div className="absolute bg-[#059669] inset-[0_calc(25.09%-0.5px)_0_calc(0.17%-1px)] rounded-[9999px]" data-name="Background" />
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Margin">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
                    <div className="border-[#f1f5f9] border-solid border-t content-stretch flex items-center justify-between pt-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
                      <div className="relative shrink-0" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                            <p className="leading-[16px]">12/16 Bài tập</p>
                          </div>
                        </div>
                      </div>
                      <div data-action="lesson" role="button" tabIndex={0} aria-label={"Tới khóa học"} className="bg-[#ecfdf5] border border-[#a7f3d0] border-solid relative rounded-[8px] shrink-0" data-name="Button">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[15px] py-[7px] relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[12px] text-center whitespace-nowrap">
                            <p className="leading-[16px]">Tới khóa học</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#e2e8f0] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-[1_0_0] flex-col items-start justify-between min-w-px p-[17px] relative rounded-[12px]" data-name="Article">
                <div className="relative shrink-0 w-full" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                    <div className="bg-[#f1f5f9] border border-[#e2e8f0] border-solid content-stretch flex h-[128px] items-center justify-center overflow-clip p-px relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
                      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/067e5.svg" />
                      </div>
                      <div className="absolute bg-gradient-to-b from-[rgba(15,23,42,0)] inset-0 to-[rgba(15,23,42,0.4)]" data-name="Gradient" />
                      <div className="absolute bg-[rgba(255,255,255,0.9)] border border-[#e2e8f0] border-solid left-[8px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[8px]" data-name="Overlay+Border+Shadow">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9px] py-[3px] relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[10px] whitespace-nowrap">
                            <p className="leading-[15px]">Mã môn: IE106</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bg-[rgba(15,23,42,0.8)] bottom-[8px] right-[8px] rounded-[4px]" data-name="Overlay">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                            <p className="leading-[16px]">60%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Heading 3">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] w-full">
                        <p className="leading-[24px]">Tên khóa học B - 60%</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-full">
                        <p className="leading-[16px]">{`Kiến trúc Điện toán Đám mây & Kubernetes`}</p>
                      </div>
                    </div>
                    <div className="bg-[#f1f5f9] border border-[#e2e8f0] border-solid h-[6px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background+Border">
                      <div className="absolute bg-[#059669] inset-[0_calc(40.04%-0.2px)_0_calc(0.17%-1px)] rounded-[9999px]" data-name="Background" />
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Margin">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
                    <div className="border-[#f1f5f9] border-solid border-t content-stretch flex items-center justify-between pt-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
                      <div className="relative shrink-0" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                            <p className="leading-[16px]">9/15 Bài tập</p>
                          </div>
                        </div>
                      </div>
                      <div data-action="lesson" role="button" tabIndex={0} aria-label={"Tới khóa học"} className="bg-[#ecfdf5] border border-[#a7f3d0] border-solid relative rounded-[8px] shrink-0" data-name="Button">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[15px] py-[7px] relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[12px] text-center whitespace-nowrap">
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
          <div className="bg-white border border-[#e2e8f0] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[16px] items-start p-[21px] relative rounded-[12px] shrink-0 w-full" data-name="Section - SECTION: Bảng điểm & Tiến độ bài tập (Data Table with Tabs & Tooltip)">
            <div className="border-[#e2e8f0] border-b border-solid relative shrink-0 w-full" data-name="HorizontalBorder">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[13px] relative size-full">
                <div className="relative shrink-0" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                    <div className="bg-[#059669] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[6px] items-center px-[16px] py-[6px] relative rounded-[8px] shrink-0" data-name="Button">
                      <div className="bg-white relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
                        <p className="leading-[20px]">Khóa học A</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Button:margin">
                      <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative rounded-[8px] shrink-0" data-name="Button">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] text-center whitespace-nowrap">
                          <p className="leading-[20px]">Khóa học B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">Rê chuột vào dòng để xem chi tiết % đạt</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Table">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
                <div className="bg-[#f8fafc] border-[#e2e8f0] border-b border-solid border-t content-stretch flex flex-col items-start mb-[-1px] py-px relative shrink-0 w-full" data-name="Header">
                  <div className="relative shrink-0 w-full" data-name="Row">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
                      <div className="content-stretch flex flex-col items-center pb-[13px] pt-[12px] px-[12px] relative shrink-0 w-[49.38px]" data-name="Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center tracking-[0.6px] uppercase whitespace-nowrap">
                          <p className="leading-[16px]">STT</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start pb-[13px] pt-[12px] px-[16px] relative shrink-0 w-[456.75px]" data-name="Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                          <p className="leading-[16px]">TIÊU ĐỀ</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-center pb-[13px] pt-[12px] px-[16px] relative shrink-0 w-[142.63px]" data-name="Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center tracking-[0.6px] uppercase whitespace-nowrap">
                          <p className="leading-[16px]">UNIT</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-center pb-[13px] pt-[12px] px-[16px] relative shrink-0 w-[203.69px]" data-name="Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center tracking-[0.6px] uppercase whitespace-nowrap">
                          <p className="leading-[16px]">ĐIỂM</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-center pb-[13px] pt-[12px] px-[16px] relative shrink-0 w-[334.89px]" data-name="Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center tracking-[0.6px] uppercase whitespace-nowrap">
                          <p className="leading-[16px]">TRẠNG THÁI</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[213.5px] relative shrink-0 w-full" data-name="Body">
                  <div className="absolute border-[#f1f5f9] border-solid border-t content-stretch flex items-start justify-center left-0 pt-px right-0 top-[54px]" data-name="Row">
                    <div className="relative shrink-0 w-[49.38px]" data-name="Data">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[16.5px] pt-[15.5px] px-[12px] relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center whitespace-nowrap">
                          <p className="leading-[20px]">2</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-[456.75px]" data-name="Data">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16.5px] pt-[15.5px] px-[16px] relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
                          <p className="leading-[20px]">Câu hỏi 2</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-[142.63px]" data-name="Data">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[16.5px] pt-[15.5px] px-[16px] relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] text-center whitespace-nowrap">
                          <p className="leading-[20px]">1</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-[203.69px]" data-name="Data">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[16.5px] pt-[15.5px] px-[16px] relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e11d48] text-[14px] text-center whitespace-nowrap">
                          <p className="leading-[20px]">4 / 10</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-[334.89px]" data-name="Data">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[15.5px] pt-[14.5px] px-[16px] relative size-full">
                        <div className="bg-[#fff1f2] border border-[#fecdd3] border-solid content-stretch flex gap-[4px] items-center px-[11px] py-[3px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
                          <div className="relative shrink-0 size-[14px]" data-name="SVG">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/c9221.svg" />
                          </div>
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#be123c] text-[12px] text-center whitespace-nowrap">
                            <p className="leading-[16px]">CHƯA ĐẠT</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute border-[#f1f5f9] border-solid border-t content-stretch flex items-start justify-center left-0 pt-px right-0 top-[106px]" data-name="Row">
                    <div className="relative shrink-0 w-[49.38px]" data-name="Data">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[16.5px] pt-[15.5px] px-[12px] relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center whitespace-nowrap">
                          <p className="leading-[20px]">3</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-[456.75px]" data-name="Data">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16.5px] pt-[15.5px] px-[16px] relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
                          <p className="leading-[20px]">Bài ôn tập 1</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-[142.63px]" data-name="Data">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[16.5px] pt-[15.5px] px-[16px] relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] text-center whitespace-nowrap">
                          <p className="leading-[20px]">1</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-[203.69px]" data-name="Data">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[16.5px] pt-[15.5px] px-[16px] relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d97706] text-[14px] text-center whitespace-nowrap">
                          <p className="leading-[20px]">-- / 20</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-[334.89px]" data-name="Data">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[15.5px] pt-[14.5px] px-[16px] relative size-full">
                        <div className="bg-[#fffbeb] border border-[#fde68a] border-solid content-stretch flex gap-[4px] items-center px-[11px] py-[3px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
                          <div className="relative shrink-0 size-[14px]" data-name="SVG">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/375c9.svg" />
                          </div>
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#b45309] text-[12px] text-center whitespace-nowrap">
                            <p className="leading-[16px]">Đang chấm...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute border-[#f1f5f9] border-solid border-t content-stretch flex items-start justify-center left-0 pt-px right-0 top-[158px]" data-name="Row">
                    <div className="relative shrink-0 w-[49.38px]" data-name="Data">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[17.5px] pt-[17px] px-[12px] relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center whitespace-nowrap">
                          <p className="leading-[20px]">4</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-[456.75px]" data-name="Data">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17.5px] pt-[17px] px-[16px] relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
                          <p className="leading-[20px]">Kiểm tra giữa kỳ - Khóa A</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-[142.63px]" data-name="Data">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[17.5px] pt-[17px] px-[16px] relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] text-center whitespace-nowrap">
                          <p className="leading-[20px]">2</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-[203.69px]" data-name="Data">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[17px] pt-[17.5px] px-[16px] relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center whitespace-nowrap">
                          <p className="leading-[20px]">Chưa mở</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-[334.89px]" data-name="Data">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-[16px] py-[14px] relative size-full">
                        <div className="bg-[#f1f5f9] border border-[#e2e8f0] border-solid content-stretch flex items-center justify-center px-[9px] py-[3px] relative rounded-[4px] shrink-0" data-name="Background+Border">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[11px] text-center whitespace-nowrap">
                            <p className="leading-[20px]">Hạn: 24/11</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex items-start justify-center left-0 right-0 top-0" data-name="Row">
                    <div className="content-stretch flex flex-col items-center pb-[18px] pt-[17px] px-[12px] relative shrink-0 w-[49.38px]" data-name="Data">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center whitespace-nowrap">
                        <p className="leading-[20px]">1</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[14px] relative shrink-0 w-[456.75px]" data-name="Data">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
                        <p className="leading-[20px]">Câu hỏi 1</p>
                      </div>
                      <div className="bg-[#ecfdf5] border border-[#a7f3d0] border-solid content-stretch flex flex-col items-start px-[7px] py-[3px] relative rounded-[4px] shrink-0" data-name="Background+Border">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[10px] whitespace-nowrap">
                          <p className="leading-[20px]">Trắc nghiệm</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-center pb-[18px] pt-[17px] px-[16px] relative shrink-0 w-[142.63px]" data-name="Data">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] text-center whitespace-nowrap">
                        <p className="leading-[20px]">1</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-center pb-[18px] pt-[17px] px-[16px] relative shrink-0 w-[203.69px]" data-name="Data">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#059669] text-[14px] text-center whitespace-nowrap">
                        <p className="leading-[20px]">10 / 10</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-center pb-[17px] pt-[16px] px-[16px] relative shrink-0 w-[334.89px]" data-name="Data">
                      <div className="bg-[#ecfdf5] border border-[#a7f3d0] border-solid content-stretch flex gap-[4px] items-center px-[11px] py-[3px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
                        <div className="relative shrink-0 size-[14px]" data-name="SVG">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/7c4cb.svg" />
                        </div>
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[12px] text-center whitespace-nowrap">
                          <p className="leading-[16px]">ĐẠT</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[#e2e8f0] border-solid border-t relative shrink-0 w-full" data-name="HorizontalBorder">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-center flex flex-wrap items-center justify-between pr-[0.01px] pt-[13px] relative size-full">
                <div className="relative shrink-0" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">Hiển thị 3/3 bài tập của Unit 1</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0" data-name="Button">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[12px] text-center whitespace-nowrap">
                      <p className="leading-[16px]">{`Xem toàn bộ giáo trình & barem điểm →`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full" data-name="Section:margin">
            <div className="bg-white border border-[#e2e8f0] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[16px] items-start p-[21px] relative rounded-[12px] shrink-0 w-full" data-name="Section">
              <div className="border-[#e2e8f0] border-b border-solid relative shrink-0 w-full" data-name="HorizontalBorder">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[13px] relative size-full">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
                      <div className="bg-[#ecfdf5] border border-[#a7f3d0] border-solid content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[32px]" data-name="Background+Border">
                        <div className="relative shrink-0 size-[16px]" data-name="SVG">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/3a827.svg" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Heading 2">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] whitespace-nowrap">
                            <p className="leading-[24px]">Ghi chú học tập đã lưu (Study Notes)</p>
                          </div>
                          <div className="bg-[#ecfdf5] border border-[#a7f3d0] border-solid content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[12px] whitespace-nowrap">
                              <p className="leading-[16px]">6 ghi chú</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                            <p className="leading-[16px]">Tổng hợp ghi chú đính kèm mốc thời gian video theo từng môn học</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-action="new-note" role="button" tabIndex={0} aria-label={"Thêm ghi chú mới"} className="bg-[#059669] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[8px] shrink-0" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[12px] py-[6px] relative size-full">
                      <div className="relative shrink-0 size-[14px]" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/d32a3.svg" />
                      </div>
                      <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
                          <p className="leading-[16px]">Thêm ghi chú mới</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[280.56px] items-center relative size-full">
                  <div className="content-center flex flex-wrap gap-[6px] items-center relative shrink-0" data-name="Container">
                    <div className="bg-[#059669] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[6px] items-center px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Button">
                      <div className="bg-white relative rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
                        <p className="leading-[16px]">Tất cả (6)</p>
                      </div>
                    </div>
                    <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid content-stretch flex gap-[6px] items-center px-[13px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button">
                      <div className="relative shrink-0" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                            <p className="leading-[16px]">{`React 19 & Next.js`}</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#e2e8f0] relative rounded-[4px] shrink-0" data-name="Background">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-[6px] relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[10px] text-center whitespace-nowrap">
                            <p className="leading-[16px]">3</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid content-stretch flex gap-[6.01px] items-center px-[13px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button">
                      <div className="relative shrink-0" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                            <p className="leading-[16px]">{`Khóa A (AI & NLP)`}</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#e2e8f0] relative rounded-[4px] shrink-0" data-name="Background">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-[6px] relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[10px] text-center whitespace-nowrap">
                            <p className="leading-[16px]">2</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid content-stretch flex gap-[6px] items-center px-[13px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button">
                      <div className="relative shrink-0" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                            <p className="leading-[16px]">{`Khóa B (Cloud & K8s)`}</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#e2e8f0] relative rounded-[4px] shrink-0" data-name="Background">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-[6px] relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[10px] text-center whitespace-nowrap">
                            <p className="leading-[16px]">1</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[320px] min-w-px relative" data-name="Container">
                    <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[30px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Input">
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
              <div className="relative shrink-0 w-full" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
                  <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid content-stretch flex gap-[12px] items-start p-[15px] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
                    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
                        <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
                          <div className="bg-[#ecfdf5] border border-[#a7f3d0] border-solid content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[4px] shrink-0" data-name="Background+Border">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
                              <p className="leading-[16.5px]">{`REACT 19 & NEXT.JS`}</p>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
                              <p className="leading-[16px]">Unit 3 - Bài 3: Xử lý Optimistic UI</p>
                            </div>
                          </div>
                          <div className="bg-[#d1fae5] border border-[#6ee7b7] border-solid content-stretch flex gap-[4px] items-center px-[9px] py-[3px] relative rounded-[6px] shrink-0" data-name="Button">
                            <div className="relative shrink-0 size-[12px]" data-name="SVG">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/10c38.svg" />
                            </div>
                            <div className="relative shrink-0" data-name="Container">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                                <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[11px] text-center whitespace-nowrap">
                                  <p className="leading-[16.5px]">@ 04:45</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-[96.55000305175781px] pl-[538.938px] relative" data-name="Margin">
                            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] whitespace-nowrap">
                                <p className="leading-[15px]">Cập nhật 2 giờ trước</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white border border-[#e2e8f0] border-solid content-stretch flex items-center p-[11px] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
                          <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[12px] whitespace-nowrap">
                            <p>
                              <span className="leading-[19.5px]">Lưu ý quan trọng:</span>
                              <span className="[word-break:break-word] font-['Liberation_Mono:Regular'] leading-[19.5px] not-italic text-[#334155]">{` `}</span>
                            </p>
                          </div>
                          <div className="bg-[#ecfdf5] h-[18px] relative rounded-[4px] shrink-0 w-[101.63px]" data-name="Code">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] left-[4px] not-italic text-[#047857] text-[12px] top-[9px] whitespace-nowrap">
                                <p className="leading-[19.5px]">useOptimistic</p>
                              </div>
                            </div>
                          </div>
                          <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
                            <p className="leading-[19.5px]">{` nhận vào 2 tham số (state ban đầu, và hàm cập nhật dự kiến). Cần rollback nếu server reject hoặc trả HTTP 500.`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-center relative size-full">
                        <div data-action="lesson" role="button" tabIndex={0} aria-label={"Xem lại"} className="bg-[#ecfdf5] border border-[#a7f3d0] border-solid content-stretch flex gap-[4px] items-center px-[11px] py-[5px] relative rounded-[6px] shrink-0" data-name="Button">
                          <div className="relative shrink-0 size-[12px]" data-name="SVG">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/e1cb4.svg" />
                          </div>
                          <div className="relative shrink-0" data-name="Container">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[12px] text-center whitespace-nowrap">
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
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/14415.svg" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid content-stretch flex gap-[12px] items-start p-[15px] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
                    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
                        <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
                          <div className="bg-[#ecfdf5] border border-[#a7f3d0] border-solid content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[4px] shrink-0" data-name="Background+Border">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
                              <p className="leading-[16.5px]">KHÓA A • IT005</p>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
                              <p className="leading-[16px]">{`Unit 1 - Bài 2: Gradient Descent & Loss Functions`}</p>
                            </div>
                          </div>
                          <div className="bg-[#d1fae5] border border-[#6ee7b7] border-solid content-stretch flex gap-[4px] items-center px-[9px] py-[3px] relative rounded-[6px] shrink-0" data-name="Button">
                            <div className="relative shrink-0 size-[12px]" data-name="SVG">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/10c38.svg" />
                            </div>
                            <div className="relative shrink-0" data-name="Container">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                                <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[11px] text-center whitespace-nowrap">
                                  <p className="leading-[16.5px]">@ 08:30</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-[103.12999725341797px] pl-[468.109px] relative" data-name="Margin">
                            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] whitespace-nowrap">
                                <p className="leading-[15px]">Cập nhật 1 ngày trước</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white border border-[#e2e8f0] border-solid content-stretch flex items-center p-[11px] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
                          <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
                            <p className="leading-[19.5px]">{`Sử dụng `}</p>
                          </div>
                          <div className="bg-[#ecfdf5] h-[18px] relative rounded-[4px] shrink-0 w-[108.83px]" data-name="Code">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] left-[4px] not-italic text-[#047857] text-[12px] top-[9px] whitespace-nowrap">
                                <p className="leading-[19.5px]">Adam Optimizer</p>
                              </div>
                            </div>
                          </div>
                          <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
                            <p className="leading-[19.5px]">{` với learning rate = 0.001 cho bài toán NLP quy mô lớn để đạt điểm hội tụ nhanh và tránh kẹt tại saddle points.`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-center relative size-full">
                        <div data-action="lesson" role="button" tabIndex={0} aria-label={"Xem lại"} className="bg-[#ecfdf5] border border-[#a7f3d0] border-solid content-stretch flex gap-[4px] items-center px-[11px] py-[5px] relative rounded-[6px] shrink-0" data-name="Button">
                          <div className="relative shrink-0 size-[12px]" data-name="SVG">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/e1cb4.svg" />
                          </div>
                          <div className="relative shrink-0" data-name="Container">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[12px] text-center whitespace-nowrap">
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
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/14415.svg" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid content-stretch flex gap-[12px] items-start p-[15px] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
                    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
                        <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
                          <div className="bg-[#ecfdf5] border border-[#a7f3d0] border-solid content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[4px] shrink-0" data-name="Background+Border">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
                              <p className="leading-[16.5px]">KHÓA B • IE106</p>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
                              <p className="leading-[16px]">{`Unit 2 - Bài 1: Docker & Container Orchestration`}</p>
                            </div>
                          </div>
                          <div className="bg-[#d1fae5] border border-[#6ee7b7] border-solid content-stretch flex gap-[4px] items-center px-[9px] py-[3px] relative rounded-[6px] shrink-0" data-name="Button">
                            <div className="relative shrink-0 size-[12px]" data-name="SVG">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/10c38.svg" />
                            </div>
                            <div className="relative shrink-0" data-name="Container">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                                <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[11px] text-center whitespace-nowrap">
                                  <p className="leading-[16.5px]">@ 01:25</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-[105.2300033569336px] pl-[476.672px] relative" data-name="Margin">
                            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] whitespace-nowrap">
                                <p className="leading-[15px]">Cập nhật 3 ngày trước</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white border border-[#e2e8f0] border-solid h-[61px] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
                          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] left-[10px] not-italic text-[#334155] text-[12px] top-[19px] whitespace-nowrap">
                            <p className="leading-[19.5px]">{`Cần nhớ cơ chế rollback tự động khi Deployment trong Kubernetes phát hiện Pod CrashLoopBackOff: sử dụng `}</p>
                          </div>
                          <div className="absolute bg-[#ecfdf5] h-[18px] left-[758.92px] rounded-[4px] top-[10px] w-[260.05px]" data-name="Code">
                            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] left-[4px] not-italic text-[#047857] text-[12px] top-[9px] whitespace-nowrap">
                              <p className="leading-[19.5px]">kubectl rollout undo deployment/...</p>
                            </div>
                          </div>
                          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] left-[1018.97px] not-italic text-[#334155] text-[12px] top-[19px] whitespace-nowrap">
                            <p className="leading-[19.5px]">{` để`}</p>
                          </div>
                          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] left-[10px] not-italic text-[#334155] text-[12px] top-[38.5px] whitespace-nowrap">
                            <p className="leading-[19.5px]">hoàn tác phiên bản.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-center relative size-full">
                        <div data-action="lesson" role="button" tabIndex={0} aria-label={"Xem lại"} className="bg-[#ecfdf5] border border-[#a7f3d0] border-solid content-stretch flex gap-[4px] items-center px-[11px] py-[5px] relative rounded-[6px] shrink-0" data-name="Button">
                          <div className="relative shrink-0 size-[12px]" data-name="SVG">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/e1cb4.svg" />
                          </div>
                          <div className="relative shrink-0" data-name="Container">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[12px] text-center whitespace-nowrap">
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
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/14415.svg" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[#e2e8f0] border-solid border-t relative shrink-0 w-full" data-name="HorizontalBorder">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[9px] relative size-full">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">Hiển thị 3 / 6 ghi chú gần nhất</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
                      <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[12px] text-center whitespace-nowrap">
                          <p className="leading-[16px]">Xuất toàn bộ ghi chú (PDF / Markdown)</p>
                        </div>
                      </div>
                      <div className="relative shrink-0 size-[14px]" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/c1f1b.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-[9/span_4] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Aside - RIGHT COLUMN (Utility & Stats Sidebar ~35%)">
          <div className="bg-white border border-[#e2e8f0] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[16px] items-start p-[21px] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
            <div className="relative shrink-0 w-full" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Heading 2">
                  <div className="relative shrink-0 size-[16px]" data-name="SVG">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/9593d.svg" />
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
                    <p className="leading-[20px]">Lịch học - Tháng 11/2026</p>
                  </div>
                </div>
                <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                  <div className="content-stretch flex flex-col items-center justify-center mr-[-0.01px] p-[4px] relative rounded-[4px] shrink-0" data-name="Button - Tháng trước">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] text-center whitespace-nowrap">
                      <p className="leading-[24px]">‹</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Button - Tháng sau:margin">
                    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="Button - Tháng sau">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] text-center whitespace-nowrap">
                        <p className="leading-[24px]">›</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[13px] relative size-full">
                <div className="border-[#e2e8f0] border-b border-solid relative shrink-0 w-full" data-name="HorizontalBorder">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center pb-[9px] relative size-full">
                    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[11px] text-center whitespace-nowrap">
                          <p className="leading-[16.5px]">T2</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[11px] text-center whitespace-nowrap">
                          <p className="leading-[16.5px]">T3</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[11px] text-center whitespace-nowrap">
                          <p className="leading-[16.5px]">T4</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[11px] text-center whitespace-nowrap">
                          <p className="leading-[16.5px]">T5</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[11px] text-center whitespace-nowrap">
                          <p className="leading-[16.5px]">T6</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[11px] text-center whitespace-nowrap">
                          <p className="leading-[16.5px]">T7</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[11px] text-center whitespace-nowrap">
                          <p className="leading-[16.5px]">CN</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-y-[6px] grid grid-cols-[repeat(7,minmax(0,1fr))] grid-rows-[______24px_24px_26px_26px_24px_24px] pt-[8px] relative size-full">
                    <div className="col-7 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-1 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">1</p>
                      </div>
                    </div>
                    <div className="col-1 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-2 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">2</p>
                      </div>
                    </div>
                    <div className="col-2 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-2 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">3</p>
                      </div>
                    </div>
                    <div className="col-3 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-2 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">4</p>
                      </div>
                    </div>
                    <div className="col-4 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-2 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">5</p>
                      </div>
                    </div>
                    <div className="col-5 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-2 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">6</p>
                      </div>
                    </div>
                    <div className="col-6 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-2 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">7</p>
                      </div>
                    </div>
                    <div className="col-7 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-2 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">8</p>
                      </div>
                    </div>
                    <div className="col-1 content-stretch flex flex-col items-center justify-self-stretch pb-[6.5px] pt-[3.5px] px-[4px] relative rounded-[4px] row-3 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">9</p>
                      </div>
                    </div>
                    <div className="col-2 content-stretch flex flex-col items-center justify-self-stretch pb-[6.5px] pt-[3.5px] px-[4px] relative rounded-[4px] row-3 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">10</p>
                      </div>
                    </div>
                    <div className="col-4 content-stretch flex flex-col items-center justify-self-stretch pb-[6.5px] pt-[3.5px] px-[4px] relative rounded-[4px] row-3 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">12</p>
                      </div>
                    </div>
                    <div className="col-5 content-stretch flex flex-col items-center justify-self-stretch pb-[6.5px] pt-[3.5px] px-[4px] relative rounded-[4px] row-3 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">13</p>
                      </div>
                    </div>
                    <div className="col-6 content-stretch flex flex-col items-center justify-self-stretch pb-[6.5px] pt-[3.5px] px-[4px] relative rounded-[4px] row-3 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">14</p>
                      </div>
                    </div>
                    <div className="col-7 content-stretch flex flex-col items-center justify-self-stretch pb-[6.5px] pt-[3.5px] px-[4px] relative rounded-[4px] row-3 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">15</p>
                      </div>
                    </div>
                    <div className="col-1 content-stretch flex flex-col items-center justify-self-stretch pb-[6.5px] pt-[3.5px] px-[4px] relative rounded-[4px] row-4 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">16</p>
                      </div>
                    </div>
                    <div className="col-2 content-stretch flex flex-col items-center justify-self-stretch pb-[6.5px] pt-[3.5px] px-[4px] relative rounded-[4px] row-4 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">17</p>
                      </div>
                    </div>
                    <div className="col-3 content-stretch flex flex-col items-center justify-self-stretch pb-[6.5px] pt-[3.5px] px-[4px] relative rounded-[4px] row-4 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">18</p>
                      </div>
                    </div>
                    <div className="col-5 content-stretch flex flex-col items-center justify-self-stretch pb-[6.5px] pt-[3.5px] px-[4px] relative rounded-[4px] row-4 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">20</p>
                      </div>
                    </div>
                    <div className="col-6 content-stretch flex flex-col items-center justify-self-stretch pb-[6.5px] pt-[3.5px] px-[4px] relative rounded-[4px] row-4 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">21</p>
                      </div>
                    </div>
                    <div className="col-7 content-stretch flex flex-col items-center justify-self-stretch pb-[6.5px] pt-[3.5px] px-[4px] relative rounded-[4px] row-4 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">22</p>
                      </div>
                    </div>
                    <div className="col-1 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-5 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">23</p>
                      </div>
                    </div>
                    <div className="col-3 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-5 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">25</p>
                      </div>
                    </div>
                    <div className="col-4 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-5 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">26</p>
                      </div>
                    </div>
                    <div className="col-5 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-5 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">27</p>
                      </div>
                    </div>
                    <div className="col-6 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-5 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">28</p>
                      </div>
                    </div>
                    <div className="col-7 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-5 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">29</p>
                      </div>
                    </div>
                    <div className="col-1 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[4px] row-6 self-start shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">30</p>
                      </div>
                    </div>
                    <div className="bg-[#fffbeb] border border-[#fde68a] border-solid col-3 content-stretch flex flex-col items-center justify-self-stretch p-[5px] relative rounded-[4px] row-3 self-start shrink-0" data-name="Background+Border">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#92400e] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">11</p>
                      </div>
                      <div className="-translate-x-1/2 absolute bg-[#f59e0b] bottom-[2px] left-1/2 rounded-[9999px] size-[4px]" data-name="Background" />
                    </div>
                    <div className="bg-[#fffbeb] border border-[#fde68a] border-solid col-4 content-stretch flex flex-col items-center justify-self-stretch p-[5px] relative rounded-[4px] row-4 self-start shrink-0" data-name="Background+Border">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#92400e] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">19</p>
                      </div>
                      <div className="-translate-x-1/2 absolute bg-[#f59e0b] bottom-[2px] left-1/2 rounded-[9999px] size-[4px]" data-name="Background" />
                    </div>
                    <div className="bg-[#059669] col-2 content-stretch flex flex-col items-center justify-self-stretch p-[4px] relative rounded-[9999px] row-5 self-start shrink-0" data-name="Background">
                      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_0px_0px_2px_#6ee7b7,0px_1px_2px_0px_rgba(0,0,0,0.05)]" data-name="Overlay+Shadow" />
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold'] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
                        <p className="leading-[16px]">24</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative size-full">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Heading 3">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                      <p className="leading-[16px]">THỜI HẠN SẮP TỚI</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] tracking-[0.6px] uppercase whitespace-nowrap">
                      <p className="leading-[16px]">3 HẠN NỘP</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
                  <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid content-stretch flex items-center justify-between p-[11px] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#b45309] text-[11px] whitespace-nowrap">
                            <p className="leading-[16.5px]">11/11/2026 (23:59)</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[12px] whitespace-nowrap">
                            <p className="leading-[16px]">Câu hỏi ngắn - Khóa A</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-[#e2e8f0] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[4px] shrink-0" data-name="Background+Border+Shadow">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9px] py-[3px] relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[10px] whitespace-nowrap">
                          <p className="leading-[15px]">Unit 1</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid content-stretch flex items-center justify-between p-[11px] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#b45309] text-[11px] whitespace-nowrap">
                            <p className="leading-[16.5px]">19/11/2026 (23:59)</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[12px] whitespace-nowrap">
                            <p className="leading-[16px]">Bài ôn tập - Khóa B</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-[#e2e8f0] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[4px] shrink-0" data-name="Background+Border+Shadow">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9px] py-[3px] relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[10px] whitespace-nowrap">
                          <p className="leading-[15px]">Unit 2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#ecfdf5] border-2 border-[#34d399] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border+Shadow">
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
                          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[11px] whitespace-nowrap">
                              <p className="leading-[16.5px]">24/11/2026 (Hôm nay)</p>
                            </div>
                          </div>
                          <div className="bg-[#059669] relative rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] whitespace-nowrap">
                            <p className="leading-[16px]">Kiểm tra - Khóa A</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[10px] whitespace-nowrap">
                            <p className="leading-[15px]">Nhấn chuột trái để làm bài</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#059669] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[6px] shrink-0" data-name="Button">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[10px] py-[4px] relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
                          <p className="leading-[16px]">Tới bài làm</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-[#e2e8f0] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] items-start p-[21px] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
            <div className="relative shrink-0 w-full" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                    <p className="leading-[16px]">CHUỖI HỌC TRONG TUẦN</p>
                  </div>
                </div>
                <div className="bg-[#ecfdf5] border border-[#a7f3d0] border-solid content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold'] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[12px] whitespace-nowrap">
                    <p className="leading-[16px]">7/7 ngày 🔥</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start justify-center relative size-full">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] text-center whitespace-nowrap">
                    <p className="leading-[15px]">T2</p>
                  </div>
                  <div className="bg-[#059669] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center pb-[6.5px] pt-[5.5px] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background+Shadow">
                    <div className="[word-break:break-word] flex flex-col font-['FreeSans:Semi_Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
                      <p className="leading-[16px]">✓</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] text-center whitespace-nowrap">
                    <p className="leading-[15px]">T3</p>
                  </div>
                  <div className="bg-[#059669] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center pb-[6.5px] pt-[5.5px] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background+Shadow">
                    <div className="[word-break:break-word] flex flex-col font-['FreeSans:Semi_Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
                      <p className="leading-[16px]">✓</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] text-center whitespace-nowrap">
                    <p className="leading-[15px]">T4</p>
                  </div>
                  <div className="bg-[#059669] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center pb-[6.5px] pt-[5.5px] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background+Shadow">
                    <div className="[word-break:break-word] flex flex-col font-['FreeSans:Semi_Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
                      <p className="leading-[16px]">✓</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] text-center whitespace-nowrap">
                    <p className="leading-[15px]">T5</p>
                  </div>
                  <div className="bg-[#059669] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center pb-[6.5px] pt-[5.5px] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background+Shadow">
                    <div className="[word-break:break-word] flex flex-col font-['FreeSans:Semi_Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
                      <p className="leading-[16px]">✓</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] text-center whitespace-nowrap">
                    <p className="leading-[15px]">T6</p>
                  </div>
                  <div className="bg-[#059669] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center pb-[6.5px] pt-[5.5px] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background+Shadow">
                    <div className="[word-break:break-word] flex flex-col font-['FreeSans:Semi_Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
                      <p className="leading-[16px]">✓</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] text-center whitespace-nowrap">
                    <p className="leading-[15px]">T7</p>
                  </div>
                  <div className="bg-[#059669] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center pb-[6.5px] pt-[5.5px] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background+Shadow">
                    <div className="[word-break:break-word] flex flex-col font-['FreeSans:Semi_Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
                      <p className="leading-[16px]">✓</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] text-center whitespace-nowrap">
                    <p className="leading-[15px]">CN</p>
                  </div>
                  <div className="bg-[#059669] content-stretch flex items-center justify-center pb-[6.5px] pt-[5.5px] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background">
                    <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_0px_0px_2px_#6ee7b7,0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[28px] top-0" data-name="Overlay+Shadow" />
                    <div className="[word-break:break-word] flex flex-col font-['FreeSans:Semi_Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
                      <p className="leading-[16px]">✓</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-[#e2e8f0] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] items-start p-[21px] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
            <div className="relative shrink-0 w-full" data-name="Heading 2">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[12px] tracking-[0.6px] uppercase w-full">
                  <p className="leading-[16px]">QUÁ TRÌNH HỌC CỦA BẠN</p>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start justify-center relative size-full">
                <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-px p-[15px] relative rounded-[12px]" data-name="Background+Border">
                  <div className="relative shrink-0 w-full" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] w-full">
                        <p className="leading-[16.5px]">Hiện tại, bạn đã hoàn thành</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-name="Margin">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[8px] relative size-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold'] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#059669] text-[30px] tracking-[-0.75px] w-full">
                          <p className="leading-[36px]">45%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[11px] w-full">
                        <p className="leading-[16.5px]">qua 2 khóa học - 10 units</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-start min-w-px p-[15px] relative rounded-[12px]" data-name="Background+Border">
                  <div className="relative shrink-0 w-full" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] w-full">
                        <p className="leading-[16.5px]">Hôm nay, bạn đã dành ra</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-name="Margin">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[8px] relative size-full">
                      <div className="content-stretch flex flex-col items-start pb-[2.5px] relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold'] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[24px] tracking-[-0.6px] w-full">
                          <p className="leading-[24px]">1h 30m</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[11px] w-full">
                        <p className="leading-[16.5px]">nhiều hơn hôm qua 1 tiếng! 🚀</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-[#e2e8f0] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] items-start p-[21px] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
            <div className="border-[#e2e8f0] border-b border-solid relative shrink-0 w-full" data-name="HorizontalBorder">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[9px] relative size-full">
                <div className="relative shrink-0" data-name="Heading 2">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
                        <p className="leading-[20px]">Thông báo</p>
                      </div>
                    </div>
                    <div className="bg-[#fff1f2] border border-[#fecdd3] border-solid content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#be123c] text-[10px] whitespace-nowrap">
                        <p className="leading-[20px]">15 mới</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0" data-name="Button">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[11px] text-center whitespace-nowrap">
                      <p className="leading-[16.5px]">Đánh dấu tất cả đã đọc</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-h-[288px] relative shrink-0 w-full" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start max-h-[inherit] overflow-auto pr-[4px] relative rounded-[inherit] size-full">
                <div className="bg-[rgba(255,251,235,0.6)] border border-[#fde68a] border-solid content-stretch flex gap-[10px] items-start p-[11px] relative rounded-[8px] shrink-0 w-full" data-name="Overlay+Border">
                  <div className="h-[26px] relative shrink-0 w-[24px]" data-name="Margin">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
                      <div className="bg-[#fef3c7] border border-[#fcd34d] border-solid content-stretch flex items-center justify-center pb-[4.5px] pt-[3.5px] px-px relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background+Border">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#b45309] text-[12px] text-center whitespace-nowrap">
                          <p className="leading-[16px]">!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[12px] w-full">
                          <p className="leading-[19.5px]">Hôm nay là deadline của bài tập 1 của khóa Lập trình Web...</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] w-full">
                          <p className="leading-[15px]">01/10/2026 • 20:00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0" data-name="Button - Xóa thông báo">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[4px] relative size-full">
                      <div className="relative shrink-0 size-[14px]" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/14415.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid content-stretch flex gap-[10px] items-start p-[11px] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
                  <div className="h-[26px] relative shrink-0 w-[24px]" data-name="Margin">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
                      <div className="bg-[#d1fae5] border border-[#6ee7b7] border-solid content-stretch flex items-center justify-center pb-[4.5px] pt-[3.5px] px-px relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background+Border">
                        <div className="[word-break:break-word] flex flex-col font-['FreeSans:Semi_Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[12px] text-center whitespace-nowrap">
                          <p className="leading-[16px]">✓</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[12px] w-full">
                          <p className="leading-[19.5px]">Chúc mừng bạn! Bạn đã hoàn thành khóa học nền tảng React...</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] w-full">
                          <p className="leading-[15px]">02/10/2026 • 15:30</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0" data-name="Button - Xóa thông báo">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[4px] relative size-full">
                      <div className="relative shrink-0 size-[14px]" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/14415.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid content-stretch flex gap-[10px] items-start p-[11px] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
                  <div className="h-[26px] relative shrink-0 w-[24px]" data-name="Margin">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
                      <div className="bg-[#d1fae5] border border-[#6ee7b7] border-solid content-stretch flex items-center justify-center pb-[4.5px] pt-[3.5px] px-px relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background+Border">
                        <div className="[word-break:break-word] flex flex-col font-['FreeSans:Semi_Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[12px] text-center whitespace-nowrap">
                          <p className="leading-[16px]">✓</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[12px] w-full">
                          <p className="leading-[19.5px]">Bài ôn tập của bạn đã được gửi thành công đến giảng viên!</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] w-full">
                          <p className="leading-[15px]">15/10/2026 • 09:12</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0" data-name="Button - Xóa thông báo">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[4px] relative size-full">
                      <div className="relative shrink-0 size-[14px]" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/14415.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[rgba(255,241,242,0.6)] border border-[#fecdd3] border-solid content-stretch flex gap-[10px] items-start p-[11px] relative rounded-[8px] shrink-0 w-full" data-name="Overlay+Border">
                  <div className="h-[26px] relative shrink-0 w-[24px]" data-name="Margin">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
                      <div className="bg-[#ffe4e6] border border-[#fda4af] border-solid content-stretch flex items-center justify-center pb-[4.5px] pt-[3.5px] px-px relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background+Border">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#be123c] text-[12px] text-center whitespace-nowrap">
                          <p className="leading-[16px]">!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#9f1239] text-[12px] w-full">
                          <p className="leading-[19.5px]">Bài tập của bạn chưa được gửi do mạng chập chờn. Vui lòng bấm thử lại.</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] w-full">
                          <p className="leading-[15px]">16/10/2026 • 18:45</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0" data-name="Button - Xóa thông báo">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[4px] relative size-full">
                      <div className="relative shrink-0 size-[14px]" data-name="SVG">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/14415.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[2px] pt-[6px] relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[12px] text-center whitespace-nowrap">
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
