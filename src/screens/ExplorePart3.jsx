import {CategoryBar, CourseGroup, ExampleCourses} from '../Categories'
export default function ExplorePart3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[80px] pt-[32px] px-[56px] relative size-full" data-name="MainContent">
      <div className="border-[#e2e8f0] border-b border-solid content-stretch flex items-center justify-between pb-[21px] relative shrink-0 w-full" data-name="Top Title & Navigation Breadcrumb / Header from Sketch Wireframe (Tab Khám phá)">
        <div className="relative shrink-0" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d5a3f] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">
                  <p className="leading-[16px]">KHÁM PHÁ TRI THỨC</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d5a3f] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">
                  <p className="leading-[16px]">•</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">
                  <p className="leading-[16px]">KHOÁ HỌC CHẤT LƯỢNG CAO 2026</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[30px] tracking-[-0.75px] whitespace-nowrap">
                <p className="leading-[36px]">{`Trung tâm Danh mục & Khám phá`}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative shrink-0" data-name="Quick Stats & Filter Control">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
            <div className="bg-white border border-[#e2e8f0] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center mr-[-0.01px] px-[17px] py-[9px] relative rounded-[8px] shrink-0" data-name="Background+Border+Shadow">
              <div className="bg-[#10b981] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
              <div className="relative shrink-0" data-name="Margin">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
                    <p className="leading-[16px]">1,240+ khóa học chọn lọc</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0" data-name="Margin">
              <div className="bg-white border border-[#e2e8f0] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center px-[17px] py-[9px] relative rounded-[8px] shrink-0" data-name="Background+Border+Shadow">
                <div className="relative shrink-0" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">Sắp xếp:</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0" data-name="Options:margin">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative size-full">
                    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Options">
                      <div className="-translate-y-1/2 absolute left-[87px] size-[18px] top-1/2" data-name="image">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/e651a.svg" />
                      </div>
                      <div className="content-stretch flex flex-col items-start pr-[34.31px] relative shrink-0" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1b4332] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">Phổ biến nhất</p>
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
        <CategoryBar />
        <CourseGroup name="Công nghệ">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[32px] pt-[16px] relative shrink-0 w-full" data-name="SectionTechCourses">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Section Header">
          <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
            <div className="bg-[#1b4332] h-[28px] relative rounded-[9999px] shrink-0 w-[10px]" data-name="Background" />
            <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Margin">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[24px] tracking-[-0.6px] whitespace-nowrap">
                    <p className="leading-[32px]">Phổ biến trong Công nghệ</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
                    <p className="leading-[20px]">Các khoá học phát triển phần mềm, AI, dữ liệu được đăng ký nhiều nhất</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#ecfdf5] border border-[#d1fae5] border-solid content-stretch flex items-center px-[17px] py-[9px] relative rounded-[8px] shrink-0" data-name="Link - More link mapped from sketch: 'nhiều hơn">
            <div className="relative shrink-0" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1b4332] text-[14px] whitespace-nowrap">
                  <p className="leading-[20px]">Nhiều hơn...</p>
                </div>
              </div>
            </div>
            <div className="relative shrink-0" data-name="Margin">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[6px] relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1b4332] text-[14px] whitespace-nowrap">
                  <p className="leading-[20px]">{`>>`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[__379px_379px] relative shrink-0 w-full" data-name="2x3 Course Cards Grid">
          <div data-action="detail" role="button" tabIndex={0} aria-label={"Card 1"} className="bg-white border border-[#e2e8f0] border-solid col-1 content-stretch flex flex-col isolate items-start justify-self-stretch overflow-clip p-px relative rounded-[12px] row-1 self-start shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Card 1">
            <div className="bg-[#f1f5f9] h-[192px] relative shrink-0 w-full z-[2]" data-name="Background">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Fullstack Web">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[165.93%] left-0 max-w-none top-[-32.97%] w-full" src="/assets/7fb9a.png" />
                  </div>
                </div>
                <div className="absolute bg-[#1b4332] content-stretch flex flex-col items-start left-[12px] px-[10px] py-[4px] rounded-[6px] top-[12px]" data-name="Background">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[11px] text-white tracking-[0.275px] uppercase whitespace-nowrap">
                    <p className="leading-[16.5px]">BÁN CHẠY NHẤT</p>
                  </div>
                </div>
                <div className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.6)] bottom-[12px] content-stretch flex flex-col items-start px-[8px] py-[2px] right-[12.01px] rounded-[4px]" data-name="Overlay+OverlayBlur">
                  <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                    <p className="leading-[16px]">48 giờ học</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full z-[1]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
                <div className="content-stretch flex flex-col gap-[7.5px] items-start pb-[12px] relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="bg-[#ecfdf5] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d5a3f] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">Công nghệ Web</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Paragraph">
                      <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Symbol">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/330b1.svg" />
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">{` 3,420 học viên`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[16px] w-full">
                      <p className="leading-[22px] mb-0">{`Lập trình Web Fullstack Toàn Diện: ReactJS, NodeJS & TypeScript từ`}</p>
                      <p className="leading-[22px]">Zero</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/9bf5a.svg" />
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">Giảng viên: ThS. Hoàng Tuấn Anh (VNG Corp)</p>
                    </div>
                  </div>
                </div>
                <div className="border-[#f1f5f9] border-solid border-t content-stretch flex items-center justify-between pr-[0.01px] pt-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                      <div className="h-[12.001px] relative shrink-0 w-[12.379px]" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/b7992.svg" />
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#f59e0b] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">4.9</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">(842)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[24px] relative shrink-0 w-[159.09px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <div className="absolute content-stretch flex items-start justify-end left-0 top-[5.5px]" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] text-right whitespace-nowrap">
                          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[16px] line-through">1.500.000đ</p>
                        </div>
                      </div>
                      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] right-[-0.01px] text-[#1b4332] text-[16px] text-right top-[11.5px] whitespace-nowrap">
                        <p className="leading-[24px]">899.000đ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-action="detail" role="button" tabIndex={0} aria-label={"Card 2"} className="bg-white border border-[#e2e8f0] border-solid col-2 content-stretch flex flex-col isolate items-start justify-self-stretch overflow-clip p-px relative rounded-[12px] row-1 self-start shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Card 2">
            <div className="bg-[#f1f5f9] h-[192px] relative shrink-0 w-full z-[2]" data-name="Background">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Python AI">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[165.94%] left-0 max-w-none top-[-32.97%] w-full" src="/assets/97ce1.png" />
                  </div>
                </div>
                <div className="absolute bg-[#2d5a3f] content-stretch flex flex-col items-start left-[12px] px-[10px] py-[4px] rounded-[6px] top-[12px]" data-name="Background">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[11px] text-white tracking-[0.275px] uppercase whitespace-nowrap">
                    <p className="leading-[16.5px]">XU HƯỚNG MỚI</p>
                  </div>
                </div>
                <div className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.6)] bottom-[12px] content-stretch flex flex-col items-start px-[8px] py-[2px] right-[12px] rounded-[4px]" data-name="Overlay+OverlayBlur">
                  <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                    <p className="leading-[16px]">52 giờ học</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full z-[1]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
                <div className="content-stretch flex flex-col gap-[7.5px] items-start pb-[12px] relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="bg-[#ecfdf5] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d5a3f] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">Trí Tuệ Nhân Tạo</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Paragraph">
                      <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Symbol">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/330b1.svg" />
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">{` 2,890 học viên`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[16px] w-full">
                      <p className="leading-[22px] mb-0">{`Khóa học Trí tuệ Nhân tạo Ứng dụng & Xây dựng Ứng dụng LLM với`}</p>
                      <p className="leading-[22px]">Python</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/9bf5a.svg" />
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">Giảng viên: Dr. Nguyễn Vũ Hưng (AI Research)</p>
                    </div>
                  </div>
                </div>
                <div className="border-[#f1f5f9] border-solid border-t content-stretch flex items-center justify-between pt-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                      <div className="h-[12.001px] relative shrink-0 w-[12.379px]" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/b7992.svg" />
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#f59e0b] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">4.95</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">(1,120)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[24px] relative shrink-0 w-[172.5px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <div className="absolute content-stretch flex items-start justify-end left-0 top-[5.5px]" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] text-right whitespace-nowrap">
                          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[16px] line-through">1.890.000đ</p>
                        </div>
                      </div>
                      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] right-[0.01px] text-[#1b4332] text-[16px] text-right top-[11.5px] whitespace-nowrap">
                        <p className="leading-[24px]">1.250.000đ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-action="detail" role="button" tabIndex={0} aria-label={"Card 3"} className="bg-white border border-[#e2e8f0] border-solid col-3 content-stretch flex flex-col isolate items-start justify-self-stretch overflow-clip p-px relative rounded-[12px] row-1 self-start shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Card 3">
            <div className="bg-[#f1f5f9] h-[192px] relative shrink-0 w-full z-[2]" data-name="Background">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                <div className="flex-[1_0_0] min-h-px relative w-full" data-name="DevOps">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[165.94%] left-0 max-w-none top-[-32.97%] w-full" src="/assets/a1ea0.png" />
                  </div>
                </div>
                <div className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.6)] bottom-[12px] content-stretch flex flex-col items-start px-[8px] py-[2px] right-[12px] rounded-[4px]" data-name="Overlay+OverlayBlur">
                  <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                    <p className="leading-[16px]">36 giờ học</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full z-[1]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
                <div className="content-stretch flex flex-col gap-[7.5px] items-start pb-[12px] relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="bg-[#ecfdf5] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d5a3f] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">{`DevOps & Cloud`}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Paragraph">
                      <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Symbol">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/330b1.svg" />
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">{` 1,640 học viên`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[16px] w-full">
                      <p className="leading-[22px] mb-0">{`Thực chiến DevOps: Docker, Kubernetes, CI/CD Pipeline & AWS Thực`}</p>
                      <p className="leading-[22px]">hành</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/9bf5a.svg" />
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">Giảng viên: Trần Minh Đức (DevOps Lead)</p>
                    </div>
                  </div>
                </div>
                <div className="border-[#f1f5f9] border-solid border-t content-stretch flex items-center justify-between pt-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                      <div className="h-[12.001px] relative shrink-0 w-[12.379px]" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/b7992.svg" />
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#f59e0b] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">4.85</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">(630)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[24px] relative shrink-0 w-[160.58px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <div className="absolute content-stretch flex items-start justify-end left-0 top-[5.5px]" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] text-right whitespace-nowrap">
                          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[16px] line-through">1.600.000đ</p>
                        </div>
                      </div>
                      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] right-0 text-[#1b4332] text-[16px] text-right top-[11.5px] whitespace-nowrap">
                        <p className="leading-[24px]">990.000đ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-action="detail" role="button" tabIndex={0} aria-label={"Card 4"} className="bg-white border border-[#e2e8f0] border-solid col-1 content-stretch flex flex-col isolate items-start justify-self-stretch overflow-clip p-px relative rounded-[12px] row-2 self-start shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Card 4">
            <div className="bg-[#f1f5f9] h-[192px] relative shrink-0 w-full z-[2]" data-name="Background">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Flutter Dev">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[165.93%] left-0 max-w-none top-[-32.97%] w-full" src="/assets/14b44.png" />
                  </div>
                </div>
                <div className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.6)] bottom-[12px] content-stretch flex flex-col items-start px-[8px] py-[2px] right-[12.01px] rounded-[4px]" data-name="Overlay+OverlayBlur">
                  <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                    <p className="leading-[16px]">40 giờ học</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full z-[1]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
                <div className="content-stretch flex flex-col gap-[7.5px] items-start pb-[12px] relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex items-center justify-between pr-[0.01px] relative shrink-0 w-full" data-name="Container">
                    <div className="bg-[#ecfdf5] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d5a3f] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">Mobile Dev</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Paragraph">
                      <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Symbol">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/330b1.svg" />
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">{` 1,980 học viên`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[16px] w-full">
                      <p className="leading-[22px] mb-0">{`Lập trình ứng dụng Di động Đa nền tảng với Flutter & Clean`}</p>
                      <p className="leading-[22px]">Architecture</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/9bf5a.svg" />
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">Giảng viên: Lê Hồng Phong (Senior Mobile Dev)</p>
                    </div>
                  </div>
                </div>
                <div className="border-[#f1f5f9] border-solid border-t content-stretch flex items-center justify-between pt-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                      <div className="h-[12.001px] relative shrink-0 w-[12.379px]" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/b7992.svg" />
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#f59e0b] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">4.8</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">(420)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[24px] relative shrink-0 w-[156.52px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <div className="absolute content-stretch flex items-start justify-end left-0 top-[5.5px]" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] text-right whitespace-nowrap">
                          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[16px] line-through">1.350.000đ</p>
                        </div>
                      </div>
                      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] right-0 text-[#1b4332] text-[16px] text-right top-[11.5px] whitespace-nowrap">
                        <p className="leading-[24px]">799.000đ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-action="detail" role="button" tabIndex={0} aria-label={"Card 5"} className="bg-white border border-[#e2e8f0] border-solid col-2 content-stretch flex flex-col isolate items-start justify-self-stretch overflow-clip p-px relative rounded-[12px] row-2 self-start shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Card 5">
            <div className="bg-[#f1f5f9] h-[192px] relative shrink-0 w-full z-[2]" data-name="Background">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Data Analytics">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[165.94%] left-0 max-w-none top-[-32.97%] w-full" src="/assets/ef499.png" />
                  </div>
                </div>
                <div className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.6)] bottom-[12px] content-stretch flex flex-col items-start px-[8px] py-[2px] right-[12px] rounded-[4px]" data-name="Overlay+OverlayBlur">
                  <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                    <p className="leading-[16px]">32 giờ học</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full z-[1]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
                <div className="content-stretch flex flex-col gap-[7.5px] items-start pb-[12px] relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex items-center justify-between pr-[0.01px] relative shrink-0 w-full" data-name="Container">
                    <div className="bg-[#ecfdf5] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d5a3f] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">{`Dữ liệu & Phân tích`}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Paragraph">
                      <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Symbol">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/330b1.svg" />
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">{` 2,150 học viên`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[16px] w-full">
                      <p className="leading-[22px] mb-0">Data Analyst Masterclass: Phân tích Dữ liệu với SQL, Power BI và</p>
                      <p className="leading-[22px]">Python</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/9bf5a.svg" />
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">Giảng viên: Đặng Nhật Quang (Head of Data)</p>
                    </div>
                  </div>
                </div>
                <div className="border-[#f1f5f9] border-solid border-t content-stretch flex items-center justify-between pt-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                      <div className="h-[12.001px] relative shrink-0 w-[12.379px]" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/b7992.svg" />
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#f59e0b] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">4.9</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">(710)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[24px] relative shrink-0 w-[161.61px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <div className="absolute content-stretch flex items-start justify-end left-0 top-[5.5px]" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] text-right whitespace-nowrap">
                          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[16px] line-through">1.400.000đ</p>
                        </div>
                      </div>
                      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] right-0 text-[#1b4332] text-[16px] text-right top-[11.5px] whitespace-nowrap">
                        <p className="leading-[24px]">850.000đ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-action="detail" role="button" tabIndex={0} aria-label={"Card 6"} className="bg-white border border-[#e2e8f0] border-solid col-3 content-stretch flex flex-col isolate items-start justify-self-stretch overflow-clip p-px relative rounded-[12px] row-2 self-start shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Card 6">
            <div className="bg-[#f1f5f9] h-[192px] relative shrink-0 w-full z-[2]" data-name="Background">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Cyber Security">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[165.94%] left-0 max-w-none top-[-32.97%] w-full" src="/assets/01889.png" />
                  </div>
                </div>
                <div className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.6)] bottom-[12px] content-stretch flex flex-col items-start px-[8px] py-[2px] right-[12px] rounded-[4px]" data-name="Overlay+OverlayBlur">
                  <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                    <p className="leading-[16px]">45 giờ học</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full z-[1]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
                <div className="content-stretch flex flex-col gap-[7.5px] items-start pb-[12px] relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="bg-[#ecfdf5] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d5a3f] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">Bảo mật An ninh mạng</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Paragraph">
                      <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Symbol">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/330b1.svg" />
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">{` 1,320 học viên`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[16px] w-full">
                      <p className="leading-[22px] mb-0">{`An ninh mạng & Phòng chống Xâm nhập Thực chiến (Ethical Hacking`}</p>
                      <p className="leading-[22px]">2026)</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/9bf5a.svg" />
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">Giảng viên: Vũ Hải Đăng (Security Consultant)</p>
                    </div>
                  </div>
                </div>
                <div className="border-[#f1f5f9] border-solid border-t content-stretch flex items-center justify-between pt-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                      <div className="h-[12.001px] relative shrink-0 w-[12.379px]" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/b7992.svg" />
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#f59e0b] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">4.88</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">(512)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[24px] relative shrink-0 w-[168.63px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <div className="absolute content-stretch flex items-start justify-end left-0 top-[5.5px]" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] text-right whitespace-nowrap">
                          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[16px] line-through">1.950.000đ</p>
                        </div>
                      </div>
                      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] right-0 text-[#1b4332] text-[16px] text-right top-[11.5px] whitespace-nowrap">
                        <p className="leading-[24px]">1.190.000đ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </CourseGroup>

        <CourseGroup name="Ngôn ngữ">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[40px] pt-[32px] relative shrink-0 w-full" data-name="SectionLanguageCourses">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Section Header">
          <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
            <div className="bg-[#2d5a3f] h-[28px] relative rounded-[9999px] shrink-0 w-[10px]" data-name="Background" />
            <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Margin">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[24px] tracking-[-0.6px] whitespace-nowrap">
                    <p className="leading-[32px]">Phổ biến trong Ngôn ngữ</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
                    <p className="leading-[20px]">Chinh phục ngoại ngữ giao tiếp và chứng chỉ quốc tế cấp tốc cùng chuyên gia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#ecfdf5] border border-[#d1fae5] border-solid content-stretch flex items-center px-[17px] py-[9px] relative rounded-[8px] shrink-0" data-name="Link - More link mapped from sketch: 'nhiều hơn">
            <div className="relative shrink-0" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1b4332] text-[14px] whitespace-nowrap">
                  <p className="leading-[20px]">Nhiều hơn...</p>
                </div>
              </div>
            </div>
            <div className="relative shrink-0" data-name="Margin">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[6px] relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1b4332] text-[14px] whitespace-nowrap">
                  <p className="leading-[20px]">{`>>`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[__379px_379px] relative shrink-0 w-full" data-name="2x3 Language Course Cards Grid">
          <div data-action="detail" role="button" tabIndex={0} aria-label={"Card 1: IELTS"} className="bg-white border border-[#e2e8f0] border-solid col-1 content-stretch flex flex-col isolate items-start justify-self-stretch overflow-clip p-px relative rounded-[12px] row-1 self-start shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Card 1: IELTS">
            <div className="bg-[#f1f5f9] h-[192px] relative shrink-0 w-full z-[2]" data-name="Background">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                <div className="flex-[1_0_0] min-h-px relative w-full" data-name="IELTS">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[165.93%] left-0 max-w-none top-[-32.97%] w-full" src="/assets/6fa43.png" />
                  </div>
                </div>
                <div className="absolute bg-[#1b4332] content-stretch flex flex-col items-start left-[12px] px-[10px] py-[4px] rounded-[6px] top-[12px]" data-name="Background">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[11px] text-white tracking-[0.275px] uppercase whitespace-nowrap">
                    <p className="leading-[16.5px]">CAM KẾT ĐẦU RA</p>
                  </div>
                </div>
                <div className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.6)] bottom-[12px] content-stretch flex flex-col items-start px-[8px] py-[2px] right-[12.01px] rounded-[4px]" data-name="Overlay+OverlayBlur">
                  <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                    <p className="leading-[16px]">60 giờ</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full z-[1]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[22px] items-start p-[20px] relative size-full">
                <div className="content-stretch flex flex-col gap-[7.5px] items-start pb-[12px] relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="bg-[#ecfdf5] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d5a3f] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">Tiếng Anh Học Thuật</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Paragraph">
                      <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Symbol">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/330b1.svg" />
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">{` 4,500 học viên`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[16px] w-full">
                      <p className="leading-[22px]">{`Luyện thi IELTS Chuyên Sâu 7.5+: Bứt phá Kỹ năng Writing & Speaking`}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/9bf5a.svg" />
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">Giảng viên: Cựu giám khảo IELTS 8.5</p>
                    </div>
                  </div>
                </div>
                <div className="border-[#f1f5f9] border-solid border-t content-stretch flex items-center justify-between pr-[0.01px] pt-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                      <div className="h-[12.001px] relative shrink-0 w-[12.379px]" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/b7992.svg" />
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#f59e0b] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">4.98</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">(1,840)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[24px] relative shrink-0 w-[177.59px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <div className="absolute content-stretch flex items-start justify-end left-0 top-[5.5px]" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] text-right whitespace-nowrap">
                          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[16px] line-through">2.200.000đ</p>
                        </div>
                      </div>
                      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] right-[-0.01px] text-[#1b4332] text-[16px] text-right top-[11.5px] whitespace-nowrap">
                        <p className="leading-[24px]">1.450.000đ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-action="detail" role="button" tabIndex={0} aria-label={"Card 2: Tiếng Anh Giao Tiếp Doanh Nghiệp"} className="bg-white border border-[#e2e8f0] border-solid col-2 content-stretch flex flex-col isolate items-start justify-self-stretch overflow-clip p-px relative rounded-[12px] row-1 self-start shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Card 2: Tiếng Anh Giao Tiếp Doanh Nghiệp">
            <div className="bg-[#f1f5f9] h-[192px] relative shrink-0 w-full z-[2]" data-name="Background">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Business English">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[165.94%] left-0 max-w-none top-[-32.97%] w-full" src="/assets/265a6.png" />
                  </div>
                </div>
                <div className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.6)] bottom-[12px] content-stretch flex flex-col items-start px-[8px] py-[2px] right-[12px] rounded-[4px]" data-name="Overlay+OverlayBlur">
                  <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                    <p className="leading-[16px]">30 giờ</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full z-[1]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
                <div className="content-stretch flex flex-col gap-[7.5px] items-start pb-[12px] relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="bg-[#ecfdf5] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d5a3f] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">Giao tiếp Văn phòng</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Paragraph">
                      <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Symbol">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/330b1.svg" />
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">{` 3,110 học viên`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[16px] w-full">
                      <p className="leading-[22px] mb-0">{`Tiếng Anh Thương Mại & Giao Tiếp Chuyên Nghiệp Dành Cho Người Đi`}</p>
                      <p className="leading-[22px]">Làm</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/9bf5a.svg" />
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">Giảng viên: Ms. Jennifer Mai (CELTA Certified)</p>
                    </div>
                  </div>
                </div>
                <div className="border-[#f1f5f9] border-solid border-t content-stretch flex items-center justify-between pt-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                      <div className="h-[12.001px] relative shrink-0 w-[12.379px]" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/b7992.svg" />
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#f59e0b] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">4.9</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">(920)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[24px] relative shrink-0 w-[160.45px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <div className="absolute content-stretch flex items-start justify-end left-0 top-[5.5px]" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] text-right whitespace-nowrap">
                          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[16px] line-through">1.200.000đ</p>
                        </div>
                      </div>
                      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] right-0 text-[#1b4332] text-[16px] text-right top-[11.5px] whitespace-nowrap">
                        <p className="leading-[24px]">690.000đ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-action="detail" role="button" tabIndex={0} aria-label={"Card 3: Tiếng Nhật JLPT N3"} className="bg-white border border-[#e2e8f0] border-solid col-3 content-stretch flex flex-col isolate items-start justify-self-stretch overflow-clip p-px relative rounded-[12px] row-1 self-start shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Card 3: Tiếng Nhật JLPT N3">
            <div className="bg-[#f1f5f9] h-[192px] relative shrink-0 w-full z-[2]" data-name="Background">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Japanese JLPT">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[165.94%] left-0 max-w-none top-[-32.97%] w-full" src="/assets/131e4.png" />
                  </div>
                </div>
                <div className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.6)] bottom-[12px] content-stretch flex flex-col items-start px-[8px] py-[2px] right-[12px] rounded-[4px]" data-name="Overlay+OverlayBlur">
                  <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                    <p className="leading-[16px]">55 giờ</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full z-[1]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[22px] items-start p-[20px] relative size-full">
                <div className="content-stretch flex flex-col gap-[7.5px] items-start pb-[12px] relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="bg-[#ecfdf5] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d5a3f] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">Tiếng Nhật JLPT</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Paragraph">
                      <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Symbol">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/330b1.svg" />
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">{` 1,820 học viên`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[16px] w-full">
                      <p className="leading-[22px]">Tiếng Nhật Cấp Tốc N3: Ngữ pháp cốt lõi, Kanji và Luyện đề thi thực tế</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/9bf5a.svg" />
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">{`Giảng viên: Sensei Tanaka & Cô Mai Chi (N1)`}</p>
                    </div>
                  </div>
                </div>
                <div className="border-[#f1f5f9] border-solid border-t content-stretch flex items-center justify-between pt-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                      <div className="h-[12.001px] relative shrink-0 w-[12.379px]" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/b7992.svg" />
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#f59e0b] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">4.87</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">(680)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[24px] relative shrink-0 w-[160.67px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <div className="absolute content-stretch flex items-start justify-end left-0 top-[5.5px]" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] text-right whitespace-nowrap">
                          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[16px] line-through">1.500.000đ</p>
                        </div>
                      </div>
                      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] right-0 text-[#1b4332] text-[16px] text-right top-[11.5px] whitespace-nowrap">
                        <p className="leading-[24px]">920.000đ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-action="detail" role="button" tabIndex={0} aria-label={"Card 4: Tiếng Hàn TOPIK"} className="bg-white border border-[#e2e8f0] border-solid col-1 content-stretch flex flex-col isolate items-start justify-self-stretch overflow-clip p-px relative rounded-[12px] row-2 self-start shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Card 4: Tiếng Hàn TOPIK">
            <div className="bg-[#f1f5f9] h-[192px] relative shrink-0 w-full z-[2]" data-name="Background">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Korean Topik">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[165.93%] left-0 max-w-none top-[-32.97%] w-full" src="/assets/40409.png" />
                  </div>
                </div>
                <div className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.6)] bottom-[12px] content-stretch flex flex-col items-start px-[8px] py-[2px] right-[12.01px] rounded-[4px]" data-name="Overlay+OverlayBlur">
                  <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                    <p className="leading-[16px]">42 giờ</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full z-[1]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[22px] items-start p-[20px] relative size-full">
                <div className="content-stretch flex flex-col gap-[7.5px] items-start pb-[12px] relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex items-center justify-between pr-[0.01px] relative shrink-0 w-full" data-name="Container">
                    <div className="bg-[#ecfdf5] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d5a3f] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">Tiếng Hàn TOPIK</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Paragraph">
                      <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Symbol">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/330b1.svg" />
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">{` 1,450 học viên`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[16px] w-full">
                      <p className="leading-[22px]">{`Chinh phục TOPIK II (Level 3 - 4) Toàn Diện & Kỹ năng viết câu 53, 54`}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/9bf5a.svg" />
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">{`Giảng viên: ThS. Park Min Jun & Lê Thảo`}</p>
                    </div>
                  </div>
                </div>
                <div className="border-[#f1f5f9] border-solid border-t content-stretch flex items-center justify-between pt-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                      <div className="h-[12.001px] relative shrink-0 w-[12.379px]" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/b7992.svg" />
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#f59e0b] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">4.84</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">(490)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[24px] relative shrink-0 w-[159.97px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <div className="absolute content-stretch flex items-start justify-end left-0 top-[5.5px]" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] text-right whitespace-nowrap">
                          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[16px] line-through">1.350.000đ</p>
                        </div>
                      </div>
                      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] right-[0.01px] text-[#1b4332] text-[16px] text-right top-[11.5px] whitespace-nowrap">
                        <p className="leading-[24px]">850.000đ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-action="detail" role="button" tabIndex={0} aria-label={"Card 5: Tiếng Trung HSK"} className="bg-white border border-[#e2e8f0] border-solid col-2 content-stretch flex flex-col isolate items-start justify-self-stretch overflow-clip p-px relative rounded-[12px] row-2 self-start shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Card 5: Tiếng Trung HSK">
            <div className="bg-[#f1f5f9] h-[192px] relative shrink-0 w-full z-[2]" data-name="Background">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Chinese HSK">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[165.94%] left-0 max-w-none top-[-32.97%] w-full" src="/assets/86337.png" />
                  </div>
                </div>
                <div className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.6)] bottom-[12px] content-stretch flex flex-col items-start px-[8px] py-[2px] right-[12px] rounded-[4px]" data-name="Overlay+OverlayBlur">
                  <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                    <p className="leading-[16px]">38 giờ</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full z-[1]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
                <div className="content-stretch flex flex-col gap-[7.5px] items-start pb-[12px] relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="bg-[#ecfdf5] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d5a3f] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">Tiếng Trung HSK</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Paragraph">
                      <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Symbol">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/330b1.svg" />
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">{` 2,210 học viên`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[16px] w-full">
                      <p className="leading-[22px] mb-0">{`Khóa học Tiếng Trung HSK 4 Cấp Tốc: 1200 Từ Vựng & Mẹo Làm Bài Thi`}</p>
                      <p className="leading-[22px]">Đạt Điểm Cao</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/9bf5a.svg" />
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">Giảng viên: Trần Tiểu My (HSK 6 - ĐH Bắc Kinh)</p>
                    </div>
                  </div>
                </div>
                <div className="border-[#f1f5f9] border-solid border-t content-stretch flex items-center justify-between pr-[0.01px] pt-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                      <div className="h-[12.001px] relative shrink-0 w-[12.379px]" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/b7992.svg" />
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#f59e0b] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">4.92</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">(830)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[24px] relative shrink-0 w-[158.59px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <div className="absolute content-stretch flex items-start justify-end left-0 top-[5.5px]" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] text-right whitespace-nowrap">
                          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[16px] line-through">1.250.000đ</p>
                        </div>
                      </div>
                      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] right-[-0.01px] text-[#1b4332] text-[16px] text-right top-[11.5px] whitespace-nowrap">
                        <p className="leading-[24px]">790.000đ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-action="detail" role="button" tabIndex={0} aria-label={"Card 6: Ngữ âm & IPA Tiếng Anh Chuẩn Bản X"} className="bg-white border border-[#e2e8f0] border-solid col-3 content-stretch flex flex-col isolate items-start justify-self-stretch overflow-clip p-px relative rounded-[12px] row-2 self-start shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Card 6: Ngữ âm & IPA Tiếng Anh Chuẩn Bản X">
            <div className="bg-[#f1f5f9] h-[192px] relative shrink-0 w-full z-[2]" data-name="Background">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Pronunciation IPA">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[165.94%] left-0 max-w-none top-[-32.97%] w-full" src="/assets/5b24b.png" />
                  </div>
                </div>
                <div className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.6)] bottom-[12px] content-stretch flex flex-col items-start px-[8px] py-[2px] right-[12px] rounded-[4px]" data-name="Overlay+OverlayBlur">
                  <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                    <p className="leading-[16px]">22 giờ</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full z-[1]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[22px] items-start p-[20px] relative size-full">
                <div className="content-stretch flex flex-col gap-[7.5px] items-start pb-[12px] relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="bg-[#ecfdf5] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d5a3f] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">Ngữ Âm Cơ Bản</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Paragraph">
                      <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Symbol">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/330b1.svg" />
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">{` 5,120 học viên`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[16px] w-full">
                      <p className="leading-[22px]">{`Chuẩn Hóa Ngữ Âm Quốc Tế IPA & Tự Tin Giao Tiếp Chuẩn Giọng Mỹ`}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/9bf5a.svg" />
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">Giảng viên: David Alexander (Chuyên gia Ngôn ngữ)</p>
                    </div>
                  </div>
                </div>
                <div className="border-[#f1f5f9] border-solid border-t content-stretch flex items-center justify-between pt-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                      <div className="h-[12.001px] relative shrink-0 w-[12.379px]" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/b7992.svg" />
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#f59e0b] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">4.96</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">(2,410)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[24px] relative shrink-0 w-[152.61px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <div className="absolute content-stretch flex items-start justify-end left-0 top-[5.5px]" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] text-right whitespace-nowrap">
                          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[16px] line-through">850.000đ</p>
                        </div>
                      </div>
                      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] right-0 text-[#1b4332] text-[16px] text-right top-[11.5px] whitespace-nowrap">
                        <p className="leading-[24px]">490.000đ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </CourseGroup>
        <ExampleCourses />
      <div className="bg-gradient-to-r border border-[#bce1cc] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex from-[#e8f5ee] items-center justify-between p-[33px] relative rounded-[16px] shrink-0 to-[#d6ece0] w-full" data-name="Section - IntermediateCareerBanner">
        <div className="max-w-[768px] relative shrink-0" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.4px] items-start max-w-[inherit] pt-[2px] relative size-full">
            <div className="bg-[rgba(255,255,255,0.7)] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Overlay">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1b4332] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                <p className="leading-[16px]">🎯 LỘ TRÌNH ĐƯỢC THIẾT KẾ RIÊNG</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[4.6px] relative shrink-0 w-full" data-name="Heading 3">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#0e271d] text-[24px] whitespace-nowrap">
                <p className="leading-[32px]">Chưa xác định được lộ trình học phù hợp với năng lực?</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#334155] text-[14px] whitespace-nowrap">
                <p className="leading-[22.75px] mb-0">Làm bài test đánh giá kỹ năng 10 phút để nhận lộ trình học tập cá nhân hóa được công nhận bởi hơn 120 doanh nghiệp</p>
                <p className="leading-[22.75px]">công nghệ đối tác tại Việt Nam.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative shrink-0" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
            <div data-action="explore" role="button" tabIndex={0} aria-label={"Tìm hiểu thêm"} className="bg-white border border-[#bce1cc] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center px-[25px] py-[13px] relative rounded-[12px] shrink-0" data-name="Button">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1b4332] text-[14px] text-center whitespace-nowrap">
                <p className="leading-[20px]">Tìm hiểu thêm</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0" data-name="Button:margin">
              <div className="bg-[#1b4332] content-stretch flex flex-col items-center justify-center px-[28px] py-[12px] relative rounded-[12px] shrink-0" data-name="Button">
                <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
                  <p className="leading-[20px]">Khám phá Lộ trình Tech 2026 →</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
