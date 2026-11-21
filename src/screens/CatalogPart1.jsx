import {FilterBar,FilteredCards,useCatalog} from '../CatalogFilters'
export default function CatalogPart1() {
  const {ids}=useCatalog()
  return (
    <div className="bg-[#f8faf8] content-stretch flex flex-col items-start px-[100px] py-[40px] relative size-full" data-name="Main - MAIN CONTENT: COURSE CATALOG">
      <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1720px] px-[48px] relative shrink-0 w-full" data-name="Container">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Breadcrumb & Header Hero">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Nav">
            <div data-action="home" role="button" tabIndex={0} aria-label={"Trang chủ"} className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                <p className="leading-[16px]">Trang chủ</p>
              </div>
            </div>
            <div className="h-[7px] relative shrink-0 w-[4.317px]" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/aa697.svg" />
            </div>
            <div data-action="catalog" role="button" tabIndex={0} aria-label={"Lập trình"} className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                <p className="leading-[16px]">Lập trình</p>
              </div>
            </div>
            <div className="h-[7px] relative shrink-0 w-[4.317px]" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/aa697.svg" />
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#014421] text-[12px] whitespace-nowrap">
                <p className="leading-[16px]">Lập trình Python</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-end justify-between pt-[4px] relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold'] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[36px] tracking-[-0.9px] whitespace-nowrap">
                  <p className="leading-[40px]">Khóa học Lập trình</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start max-w-[768px] relative shrink-0 w-full" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] whitespace-nowrap">
                  <p className="leading-[24px] mb-0">Nâng cao kỹ năng lập trình từ con số 0 đến chuyên nghiệp với lộ trình thực chiến, giáo trình chuẩn</p>
                  <p className="leading-[24px]">hóa từ giảng viên và chuyên gia hàng đầu.</p>
                </div>
              </div>
            </div>
            <div className="bg-[#d1fae5] border border-[#a7f3d0] border-solid content-stretch flex gap-[8px] items-center px-[15px] py-[7px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
              <div className="bg-[#059669] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
              <div className="relative shrink-0" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#014421] text-[12px] whitespace-nowrap">
                    <p className="leading-[16px]">Hiển thị {ids.length} khóa học phù hợp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FilterBar />
        <FilteredCards>
          <div data-action="detail" role="button" tabIndex={0} aria-label={"CARD 1: Lập trình Python cơ bản (Featured Card theo yêu cầu)"} className="bg-white border border-[#e2e8f0] border-solid col-1 content-stretch flex flex-col isolate items-start justify-self-stretch overflow-clip p-px relative rounded-[16px] row-1 self-start shrink-0" data-name="CARD 1: Lập trình Python cơ bản (Featured Card theo yêu cầu)">
            <div className="bg-[#0f172a] relative shrink-0 w-full z-[2]" data-name="Thumbnail & Play Preview">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                <div className="h-[217.13px] relative shrink-0 w-full" data-name="Lập trình Python cơ bản">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-full left-[-1.61%] max-w-none top-0 w-[103.23%]" src="/assets/d9003.png" />
                  </div>
                </div>
                <div className="absolute content-stretch flex gap-[6px] items-start left-[12px] top-[12px]" data-name="Container">
                  <div className="bg-[#014421] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start px-[10px] py-[4px] relative rounded-[6px] self-stretch shrink-0" data-name="Background+Shadow">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">
                      <p className="leading-[16.5px]">Bán chạy</p>
                    </div>
                  </div>
                  <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col items-start px-[10px] py-[4px] relative rounded-[6px] self-stretch shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Overlay+Shadow+OverlayBlur">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[11px] whitespace-nowrap">
                      <p className="leading-[16.5px]">Cơ bản</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full z-[1]" data-name="Details">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
                <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
                        <p className="leading-[15px]">LẬP TRÌNH PYTHON</p>
                      </div>
                    </div>
                    <div className="bg-[#d1fae5] content-stretch flex flex-col items-start opacity-0 px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[10px] whitespace-nowrap">
                        <p className="leading-[15px]">Chứng chỉ UIT</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-[22.5px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
                    <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] left-0 not-italic text-[#0f172a] text-[15px] top-[10.5px] w-[210.71px]">
                      <p className="leading-[22.5px]">LẬP TRÌNH PYTHON CƠ BẢN</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="relative shrink-0 size-[10px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/1f8b9.svg" />
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">
                        <p>
                          <span className="leading-[16px]">{`Giảng viên: `}</span>
                          <span className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[16px] not-italic text-[#1e293b]">Nguyễn Văn A</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="h-[12.667px] relative shrink-0 w-[13.333px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/2bd96.svg" />
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">4.8</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">/ 5</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">(1.200 học viên)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f8fafc] border border-[#f1f5f9] border-solid content-stretch flex gap-[4px] items-start justify-center p-[9px] relative rounded-[12px] shrink-0 w-full" data-name="Quick Specs">
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-center pb-[2.5px] relative size-full">
                      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[11px] text-center whitespace-nowrap">
                          <p className="leading-[16.5px]">18h30m</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[9px] text-center whitespace-nowrap">
                        <p className="leading-[13.5px]">Thời lượng</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-[#e2e8f0] border-l border-r border-solid flex-[1_0_0] min-w-px relative" data-name="Border">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-center pb-[2.5px] px-px relative size-full">
                      <div className="relative shrink-0 w-full" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[11px] text-center whitespace-nowrap">
                            <p className="leading-[16.5px]">48 bài</p>
                          </div>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[9px] text-center whitespace-nowrap">
                        <p className="leading-[13.5px]">Bài học</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-center pb-[2.5px] relative size-full">
                      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[11px] text-center whitespace-nowrap">
                          <p className="leading-[16.5px]">Đầu ra UIT</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[9px] text-center whitespace-nowrap">
                        <p className="leading-[13.5px]">Chứng nhận</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#f1f5f9] border-solid border-t content-stretch flex flex-col gap-[10px] items-start pt-[9px] relative shrink-0 w-full" data-name="Price & CTA">
                  <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <div className="[word-break:break-word] absolute content-stretch flex gap-[8px] items-baseline leading-[0] left-0 not-italic top-0 whitespace-nowrap" data-name="Paragraph">
                        <div className="flex flex-col font-['Inter:Extra_Bold'] font-extrabold justify-center relative shrink-0 text-[#014421] text-[20px]">
                          <p className="leading-[28px]">299.000đ</p>
                        </div>
                        <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[#94a3b8] text-[12px]">
                          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[16px] line-through">490.000đ</p>
                        </div>
                      </div>
                      <div className="absolute bg-[#d1fae5] content-stretch flex flex-col items-start left-[295.98px] px-[8px] py-[2px] rounded-[4px] top-[7px]" data-name="Background">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#014421] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">-40%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-action="detail" role="button" tabIndex={0} aria-label={"Xem chi tiết"} className="bg-[rgba(255,255,255,0)] border border-[#e2e8f0] border-solid relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center justify-center px-[17px] py-[11px] relative size-full">
                      <div className="relative shrink-0" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                            <p className="leading-[16px]">Xem chi tiết</p>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 size-[10.667px]" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/175c5.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-action="detail" role="button" tabIndex={0} aria-label={"CARD 2: Lập Trình Web Fullstack JavaScript"} className="bg-white border border-[#e2e8f0] border-solid col-2 content-stretch flex flex-col isolate items-start justify-self-stretch overflow-clip p-px relative rounded-[16px] row-1 self-start shrink-0" data-name="CARD 2: Lập Trình Web Fullstack JavaScript">
            <div className="bg-[#0f172a] relative shrink-0 w-full z-[2]" data-name="Background">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                <div className="h-[217.13px] relative shrink-0 w-full" data-name="Lập Trình Web Fullstack JavaScript">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-full left-[-1.61%] max-w-none top-0 w-[103.23%]" src="/assets/e3e43.png" />
                  </div>
                </div>
                <div className="absolute content-stretch flex gap-[6px] items-start left-[12px] top-[12px]" data-name="Container">
                  <div className="bg-[#059669] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start px-[10px] py-[4px] relative rounded-[6px] self-stretch shrink-0" data-name="Background+Shadow">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">
                      <p className="leading-[16.5px]">Hot nhất</p>
                    </div>
                  </div>
                  <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col items-start px-[10px] py-[4px] relative rounded-[6px] self-stretch shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Overlay+Shadow+OverlayBlur">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[11px] whitespace-nowrap">
                      <p className="leading-[16.5px]">Fullstack</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full z-[1]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
                <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
                        <p className="leading-[15px]">{`FRONTEND & BACKEND`}</p>
                      </div>
                    </div>
                    <div className="bg-[#d1fae5] content-stretch flex flex-col items-start opacity-0 px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[10px] whitespace-nowrap">
                        <p className="leading-[15px]">Chứng chỉ UIT</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-[22.5px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
                    <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] left-0 not-italic text-[#0f172a] text-[15px] top-[10.5px] w-[223.49px]">
                      <p className="leading-[22.5px]">WEB FULLSTACK JAVASCRIPT</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="relative shrink-0 size-[10px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/1f8b9.svg" />
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">
                        <p>
                          <span className="leading-[16px]">{`Giảng viên: `}</span>
                          <span className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[16px] not-italic text-[#1e293b]">Lê Quốc Huy (Tech Lead)</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="h-[12.667px] relative shrink-0 w-[13.333px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/2bd96.svg" />
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">4.85</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">/ 5</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">(2.450 học viên)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f8fafc] border border-[#f1f5f9] border-solid content-stretch flex gap-[4px] items-start justify-center p-[9px] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-center pb-[2.5px] relative size-full">
                      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[11px] text-center whitespace-nowrap">
                          <p className="leading-[16.5px]">42h00m</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[9px] text-center whitespace-nowrap">
                        <p className="leading-[13.5px]">Thời lượng</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-[#e2e8f0] border-l border-r border-solid flex-[1_0_0] min-w-px relative" data-name="Border">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-center pb-[2.5px] px-px relative size-full">
                      <div className="relative shrink-0 w-full" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[11px] text-center whitespace-nowrap">
                            <p className="leading-[16.5px]">82 bài</p>
                          </div>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[9px] text-center whitespace-nowrap">
                        <p className="leading-[13.5px]">Bài học</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-center pb-[2.5px] relative size-full">
                      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[11px] text-center whitespace-nowrap">
                          <p className="leading-[16.5px]">Đầu ra UIT</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[9px] text-center whitespace-nowrap">
                        <p className="leading-[13.5px]">Chứng nhận</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#f1f5f9] border-solid border-t content-stretch flex flex-col gap-[10px] items-start pt-[9px] relative shrink-0 w-full" data-name="HorizontalBorder">
                  <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <div className="[word-break:break-word] absolute content-stretch flex gap-[8px] items-baseline leading-[0] left-0 not-italic top-0 whitespace-nowrap" data-name="Paragraph">
                        <div className="flex flex-col font-['Inter:Extra_Bold'] font-extrabold justify-center relative shrink-0 text-[#014421] text-[20px]">
                          <p className="leading-[28px]">599.000đ</p>
                        </div>
                        <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[#94a3b8] text-[12px]">
                          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[16px] line-through">999.000đ</p>
                        </div>
                      </div>
                      <div className="absolute bg-[#d1fae5] content-stretch flex flex-col items-start left-[295.98px] px-[8px] py-[2px] rounded-[4px] top-[7px]" data-name="Background">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#014421] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">-40%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-action="detail" role="button" tabIndex={0} aria-label={"Xem chi tiết"} className="bg-[rgba(255,255,255,0)] border border-[#e2e8f0] border-solid relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center justify-center px-[17px] py-[11px] relative size-full">
                      <div className="relative shrink-0" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                            <p className="leading-[16px]">Xem chi tiết</p>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 size-[10.667px]" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/175c5.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-action="detail" role="button" tabIndex={0} aria-label={"CARD 3: Khoa Học Dữ Liệu & AI Thực Chiến"} className="bg-white border border-[#e2e8f0] border-solid col-3 content-stretch flex flex-col isolate items-start justify-self-stretch overflow-clip p-px relative rounded-[16px] row-1 self-start shrink-0" data-name="CARD 3: Khoa Học Dữ Liệu & AI Thực Chiến">
            <div className="bg-[#0f172a] relative shrink-0 w-full z-[2]" data-name="Background">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                <div className="h-[217.13px] relative shrink-0 w-full" data-name="Khoa Học Dữ Liệu & AI Thực Chiến">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-full left-[-1.61%] max-w-none top-0 w-[103.23%]" src="/assets/4dfbe.png" />
                  </div>
                </div>
                <div className="absolute content-stretch flex gap-[6px] items-start left-[12px] top-[12px]" data-name="Container">
                  <div className="bg-[#bcb88a] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start px-[10px] py-[4px] relative rounded-[6px] self-stretch shrink-0" data-name="Background+Shadow">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#013220] text-[11px] whitespace-nowrap">
                      <p className="leading-[16.5px]">Xu hướng AI</p>
                    </div>
                  </div>
                  <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col items-start px-[10px] py-[4px] relative rounded-[6px] self-stretch shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Overlay+Shadow+OverlayBlur">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[11px] whitespace-nowrap">
                      <p className="leading-[16.5px]">Machine Learning</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full z-[1]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
                <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
                        <p className="leading-[15px]">{`DATA & AI ENGINE`}</p>
                      </div>
                    </div>
                    <div className="bg-[#d1fae5] content-stretch flex flex-col items-start opacity-0 px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[10px] whitespace-nowrap">
                        <p className="leading-[15px]">Chứng chỉ UIT</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-[22.5px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
                    <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] left-0 not-italic text-[#0f172a] text-[15px] top-[10.5px] w-[303.28px]">
                      <p className="leading-[22.5px]">{`KHOA HỌC DỮ LIỆU & TRÍ TUỆ NHÂN TẠO`}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="relative shrink-0 size-[10px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/1f8b9.svg" />
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">
                        <p>
                          <span className="leading-[16px]">{`Giảng viên: `}</span>
                          <span className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[16px] not-italic text-[#1e293b]">TS. Đặng Minh Quân</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="h-[12.667px] relative shrink-0 w-[13.333px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/2bd96.svg" />
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">4.92</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">/ 5</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">(1.670 học viên)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f8fafc] border border-[#f1f5f9] border-solid content-stretch flex gap-[4px] items-start justify-center p-[9px] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-center pb-[2.5px] relative size-full">
                      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[11px] text-center whitespace-nowrap">
                          <p className="leading-[16.5px]">36h00m</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[9px] text-center whitespace-nowrap">
                        <p className="leading-[13.5px]">Thời lượng</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-[#e2e8f0] border-l border-r border-solid flex-[1_0_0] min-w-px relative" data-name="Border">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-center pb-[2.5px] px-px relative size-full">
                      <div className="relative shrink-0 w-full" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[11px] text-center whitespace-nowrap">
                            <p className="leading-[16.5px]">64 bài</p>
                          </div>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[9px] text-center whitespace-nowrap">
                        <p className="leading-[13.5px]">Bài học</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-center pb-[2.5px] relative size-full">
                      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[11px] text-center whitespace-nowrap">
                          <p className="leading-[16.5px]">Đầu ra UIT</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[9px] text-center whitespace-nowrap">
                        <p className="leading-[13.5px]">Chứng nhận</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#f1f5f9] border-solid border-t content-stretch flex flex-col gap-[10px] items-start pt-[9px] relative shrink-0 w-full" data-name="HorizontalBorder">
                  <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <div className="[word-break:break-word] absolute content-stretch flex gap-[8px] items-baseline leading-[0] left-0 not-italic top-0 whitespace-nowrap" data-name="Paragraph">
                        <div className="flex flex-col font-['Inter:Extra_Bold'] font-extrabold justify-center relative shrink-0 text-[#014421] text-[20px]">
                          <p className="leading-[28px]">649.000đ</p>
                        </div>
                        <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[#94a3b8] text-[12px]">
                          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[16px] line-through">1.080.000đ</p>
                        </div>
                      </div>
                      <div className="absolute bg-[#d1fae5] content-stretch flex flex-col items-start left-[295.98px] px-[8px] py-[2px] rounded-[4px] top-[7px]" data-name="Background">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#014421] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">-40%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-action="detail" role="button" tabIndex={0} aria-label={"Xem chi tiết"} className="bg-[rgba(255,255,255,0)] border border-[#e2e8f0] border-solid relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center justify-center px-[17px] py-[11px] relative size-full">
                      <div className="relative shrink-0" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                            <p className="leading-[16px]">Xem chi tiết</p>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 size-[10.667px]" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/175c5.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-action="detail" role="button" tabIndex={0} aria-label={"CARD 4: Cấu Trúc Dữ Liệu & Giải Thuật"} className="bg-white border border-[#e2e8f0] border-solid col-4 content-stretch flex flex-col isolate items-start justify-self-stretch overflow-clip p-px relative rounded-[16px] row-1 self-start shrink-0" data-name="CARD 4: Cấu Trúc Dữ Liệu & Giải Thuật">
            <div className="bg-[#0f172a] relative shrink-0 w-full z-[2]" data-name="Background">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                <div className="h-[217.13px] relative shrink-0 w-full" data-name="Cấu Trúc Dữ Liệu & Giải Thuật">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-full left-[-1.61%] max-w-none top-0 w-[103.23%]" src="/assets/305c2.png" />
                  </div>
                </div>
                <div className="absolute content-stretch flex gap-[6px] items-start left-[12px] top-[12px]" data-name="Container">
                  <div className="bg-[#014421] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start px-[10px] py-[4px] relative rounded-[6px] self-stretch shrink-0" data-name="Background+Shadow">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">
                      <p className="leading-[16.5px]">Cốt lõi UIT</p>
                    </div>
                  </div>
                  <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col items-start px-[10px] py-[4px] relative rounded-[6px] self-stretch shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Overlay+Shadow+OverlayBlur">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[11px] whitespace-nowrap">
                      <p className="leading-[16.5px]">Nền tảng</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full z-[1]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
                <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
                        <p className="leading-[15px]">KHOA HỌC MÁY TÍNH</p>
                      </div>
                    </div>
                    <div className="bg-[#d1fae5] content-stretch flex flex-col items-start opacity-0 px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[10px] whitespace-nowrap">
                        <p className="leading-[15px]">Chứng chỉ UIT</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-[22.5px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
                    <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] left-0 not-italic text-[#0f172a] text-[15px] top-[10.5px] w-[245.48px]">
                      <p className="leading-[22.5px]">{`CẤU TRÚC DỮ LIỆU & GIẢI THUẬT`}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="relative shrink-0 size-[10px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/1f8b9.svg" />
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">
                        <p>
                          <span className="leading-[16px]">{`Giảng viên: `}</span>
                          <span className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[16px] not-italic text-[#1e293b]">PGS. Võ Thành Long</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="h-[12.667px] relative shrink-0 w-[13.333px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/2bd96.svg" />
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">4.95</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">/ 5</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">(3.120 học viên)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f8fafc] border border-[#f1f5f9] border-solid content-stretch flex gap-[4px] items-start justify-center p-[9px] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-center pb-[2.5px] relative size-full">
                      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[11px] text-center whitespace-nowrap">
                          <p className="leading-[16.5px]">30h00m</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[9px] text-center whitespace-nowrap">
                        <p className="leading-[13.5px]">Thời lượng</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-[#e2e8f0] border-l border-r border-solid flex-[1_0_0] min-w-px relative" data-name="Border">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-center pb-[2.5px] px-px relative size-full">
                      <div className="relative shrink-0 w-full" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[11px] text-center whitespace-nowrap">
                            <p className="leading-[16.5px]">60 bài</p>
                          </div>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[9px] text-center whitespace-nowrap">
                        <p className="leading-[13.5px]">Bài học</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-center pb-[2.5px] relative size-full">
                      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[11px] text-center whitespace-nowrap">
                          <p className="leading-[16.5px]">Đầu ra UIT</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[9px] text-center whitespace-nowrap">
                        <p className="leading-[13.5px]">Chứng nhận</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#f1f5f9] border-solid border-t content-stretch flex flex-col gap-[10px] items-start pt-[9px] relative shrink-0 w-full" data-name="HorizontalBorder">
                  <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <div className="[word-break:break-word] absolute content-stretch flex gap-[8px] items-baseline leading-[0] left-0 not-italic top-0 whitespace-nowrap" data-name="Paragraph">
                        <div className="flex flex-col font-['Inter:Extra_Bold'] font-extrabold justify-center relative shrink-0 text-[#014421] text-[20px]">
                          <p className="leading-[28px]">399.000đ</p>
                        </div>
                        <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[#94a3b8] text-[12px]">
                          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[16px] line-through">699.000đ</p>
                        </div>
                      </div>
                      <div className="absolute bg-[#d1fae5] content-stretch flex flex-col items-start left-[296.33px] px-[8px] py-[2px] rounded-[4px] top-[7px]" data-name="Background">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#014421] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">-43%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-action="detail" role="button" tabIndex={0} aria-label={"Xem chi tiết"} className="bg-[rgba(255,255,255,0)] border border-[#e2e8f0] border-solid relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center justify-center px-[17px] py-[11px] relative size-full">
                      <div className="relative shrink-0" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                            <p className="leading-[16px]">Xem chi tiết</p>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 size-[10.667px]" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/175c5.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-action="detail" role="button" tabIndex={0} aria-label={"CARD 5: C++ Nâng Cao & Tối Ưu Hệ Thống"} className="bg-white border border-[#e2e8f0] border-solid col-1 content-stretch flex flex-col isolate items-start justify-self-stretch overflow-clip p-px relative rounded-[16px] row-2 self-start shrink-0" data-name="CARD 5: C++ Nâng Cao & Tối Ưu Hệ Thống">
            <div className="bg-[#0f172a] mb-[-0.01px] relative shrink-0 w-full z-[2]" data-name="Background">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                <div className="h-[217.13px] relative shrink-0 w-full" data-name="Lập Trình C++ Nâng Cao & Tối Ưu Hệ Thống">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-full left-[-1.61%] max-w-none top-0 w-[103.23%]" src="/assets/bab95.png" />
                  </div>
                </div>
                <div className="absolute content-stretch flex gap-[6px] items-start left-[12px] top-[12px]" data-name="Container">
                  <div className="bg-[#014421] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start px-[10px] py-[4px] relative rounded-[6px] self-stretch shrink-0" data-name="Background+Shadow">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">
                      <p className="leading-[16.5px]">Nâng cao</p>
                    </div>
                  </div>
                  <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col items-start px-[10px] py-[4px] relative rounded-[6px] self-stretch shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Overlay+Shadow+OverlayBlur">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[11px] whitespace-nowrap">
                      <p className="leading-[16.5px]">Hệ thống</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full z-[1]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
                <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
                        <p className="leading-[15px]">LẬP TRÌNH HỆ THỐNG</p>
                      </div>
                    </div>
                    <div className="bg-[#d1fae5] content-stretch flex flex-col items-start opacity-0 px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[10px] whitespace-nowrap">
                        <p className="leading-[15px]">Chứng chỉ UIT</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-[22.5px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
                    <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] left-0 not-italic text-[#0f172a] text-[15px] top-[10.5px] w-[268.06px]">
                      <p className="leading-[22.5px]">{`C++ NÂNG CAO & TỐI ƯU HỆ THỐNG`}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="relative shrink-0 size-[10px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/1f8b9.svg" />
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">
                        <p>
                          <span className="leading-[16px]">{`Giảng viên: `}</span>
                          <span className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[16px] not-italic text-[#1e293b]">ThS. Trần Hoàng Nam</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="h-[12.667px] relative shrink-0 w-[13.333px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/2bd96.svg" />
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">4.90</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">/ 5</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">(890 học viên)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f8fafc] border border-[#f1f5f9] border-solid content-stretch flex gap-[4px] items-start justify-center p-[9px] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-center pb-[2.5px] relative size-full">
                      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[11px] text-center whitespace-nowrap">
                          <p className="leading-[16.5px]">24h00m</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[9px] text-center whitespace-nowrap">
                        <p className="leading-[13.5px]">Thời lượng</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-[#e2e8f0] border-l border-r border-solid flex-[1_0_0] min-w-px relative" data-name="Border">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-center pb-[2.5px] px-px relative size-full">
                      <div className="relative shrink-0 w-full" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[11px] text-center whitespace-nowrap">
                            <p className="leading-[16.5px]">56 bài</p>
                          </div>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[9px] text-center whitespace-nowrap">
                        <p className="leading-[13.5px]">Bài học</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-center pb-[2.5px] relative size-full">
                      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[11px] text-center whitespace-nowrap">
                          <p className="leading-[16.5px]">Đầu ra UIT</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[9px] text-center whitespace-nowrap">
                        <p className="leading-[13.5px]">Chứng nhận</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#f1f5f9] border-solid border-t content-stretch flex flex-col gap-[10px] items-start pt-[9px] relative shrink-0 w-full" data-name="HorizontalBorder">
                  <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <div className="[word-break:break-word] absolute content-stretch flex gap-[8px] items-baseline leading-[0] left-0 not-italic top-0 whitespace-nowrap" data-name="Paragraph">
                        <div className="flex flex-col font-['Inter:Extra_Bold'] font-extrabold justify-center relative shrink-0 text-[#014421] text-[20px]">
                          <p className="leading-[28px]">449.000đ</p>
                        </div>
                        <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[#94a3b8] text-[12px]">
                          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[16px] line-through">750.000đ</p>
                        </div>
                      </div>
                      <div className="absolute bg-[#d1fae5] content-stretch flex flex-col items-start left-[295.98px] px-[8px] py-[2px] rounded-[4px] top-[7px]" data-name="Background">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#014421] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">-40%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-action="detail" role="button" tabIndex={0} aria-label={"Xem chi tiết"} className="bg-[rgba(255,255,255,0)] border border-[#e2e8f0] border-solid relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center justify-center px-[17px] py-[11px] relative size-full">
                      <div className="relative shrink-0" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                            <p className="leading-[16px]">Xem chi tiết</p>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 size-[10.667px]" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/175c5.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-action="detail" role="button" tabIndex={0} aria-label={"CARD 6: Phát Triển Di Động React Native & Flutter"} className="bg-white border border-[#e2e8f0] border-solid col-2 content-stretch flex flex-col isolate items-start justify-self-stretch overflow-clip p-px relative rounded-[16px] row-2 self-start shrink-0" data-name="CARD 6: Phát Triển Di Động React Native & Flutter">
            <div className="bg-[#0f172a] mb-[-0.01px] relative shrink-0 w-full z-[2]" data-name="Background">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                <div className="h-[217.13px] relative shrink-0 w-full" data-name="Phát Triển Ứng Dụng Di Động React Native & Flutter">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-full left-[-1.61%] max-w-none top-0 w-[103.23%]" src="/assets/ffa47.png" />
                  </div>
                </div>
                <div className="absolute content-stretch flex gap-[6px] items-start left-[12px] top-[12px]" data-name="Container">
                  <div className="bg-[#059669] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start px-[10px] py-[4px] relative rounded-[6px] self-stretch shrink-0" data-name="Background+Shadow">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">
                      <p className="leading-[16.5px]">Mới nhất</p>
                    </div>
                  </div>
                  <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col items-start px-[10px] py-[4px] relative rounded-[6px] self-stretch shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Overlay+Shadow+OverlayBlur">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[11px] whitespace-nowrap">
                      <p className="leading-[16.5px]">Cross-platform</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full z-[1]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
                <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
                        <p className="leading-[15px]">MOBILE APP DEVELOPMENT</p>
                      </div>
                    </div>
                    <div className="bg-[#d1fae5] content-stretch flex flex-col items-start opacity-0 px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[10px] whitespace-nowrap">
                        <p className="leading-[15px]">Chứng chỉ UIT</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-[22.5px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
                    <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] left-0 not-italic text-[#0f172a] text-[15px] top-[10.5px] w-[262.26px]">
                      <p className="leading-[22.5px]">{`DI ĐỘNG REACT NATIVE & FLUTTER`}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="relative shrink-0 size-[10px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/1f8b9.svg" />
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">
                        <p>
                          <span className="leading-[16px]">{`Giảng viên: `}</span>
                          <span className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[16px] not-italic text-[#1e293b]">KS. Phạm Minh Đức</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="h-[12.667px] relative shrink-0 w-[13.333px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/2bd96.svg" />
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">4.82</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">/ 5</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">(1.150 học viên)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f8fafc] border border-[#f1f5f9] border-solid content-stretch flex gap-[4px] items-start justify-center p-[9px] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-center pb-[2.5px] relative size-full">
                      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[11px] text-center whitespace-nowrap">
                          <p className="leading-[16.5px]">28h30m</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[9px] text-center whitespace-nowrap">
                        <p className="leading-[13.5px]">Thời lượng</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-[#e2e8f0] border-l border-r border-solid flex-[1_0_0] min-w-px relative" data-name="Border">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-center pb-[2.5px] px-px relative size-full">
                      <div className="relative shrink-0 w-full" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[11px] text-center whitespace-nowrap">
                            <p className="leading-[16.5px]">52 bài</p>
                          </div>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[9px] text-center whitespace-nowrap">
                        <p className="leading-[13.5px]">Bài học</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-center pb-[2.5px] relative size-full">
                      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[11px] text-center whitespace-nowrap">
                          <p className="leading-[16.5px]">Đầu ra UIT</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[9px] text-center whitespace-nowrap">
                        <p className="leading-[13.5px]">Chứng nhận</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#f1f5f9] border-solid border-t content-stretch flex flex-col gap-[10px] items-start pt-[9px] relative shrink-0 w-full" data-name="HorizontalBorder">
                  <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <div className="[word-break:break-word] absolute content-stretch flex gap-[8px] items-baseline leading-[0] left-0 not-italic top-0 whitespace-nowrap" data-name="Paragraph">
                        <div className="flex flex-col font-['Inter:Extra_Bold'] font-extrabold justify-center relative shrink-0 text-[#014421] text-[20px]">
                          <p className="leading-[28px]">520.000đ</p>
                        </div>
                        <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[#94a3b8] text-[12px]">
                          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[16px] line-through">850.000đ</p>
                        </div>
                      </div>
                      <div className="absolute bg-[#d1fae5] content-stretch flex flex-col items-start left-[296.7px] px-[8px] py-[2px] rounded-[4px] top-[7px]" data-name="Background">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#014421] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">-38%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-action="detail" role="button" tabIndex={0} aria-label={"Xem chi tiết"} className="bg-[rgba(255,255,255,0)] border border-[#e2e8f0] border-solid relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center justify-center px-[17px] py-[11px] relative size-full">
                      <div className="relative shrink-0" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                            <p className="leading-[16px]">Xem chi tiết</p>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 size-[10.667px]" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/175c5.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-action="detail" role="button" tabIndex={0} aria-label={"CARD 7: Lập Trình Java Spring Boot Chuyên Sâu"} className="bg-white border border-[#e2e8f0] border-solid col-3 content-stretch flex flex-col isolate items-start justify-self-stretch overflow-clip p-px relative rounded-[16px] row-2 self-start shrink-0" data-name="CARD 7: Lập Trình Java Spring Boot Chuyên Sâu">
            <div className="bg-[#0f172a] mb-[-0.01px] relative shrink-0 w-full z-[2]" data-name="Background">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                <div className="h-[217.13px] relative shrink-0 w-full" data-name="Lập Trình Java Spring Boot Chuyên Sâu">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-full left-[-1.61%] max-w-none top-0 w-[103.23%]" src="/assets/58bb8.png" />
                  </div>
                </div>
                <div className="absolute content-stretch flex gap-[6px] items-start left-[12px] top-[12px]" data-name="Container">
                  <div className="bg-[#014421] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start px-[10px] py-[4px] relative rounded-[6px] self-stretch shrink-0" data-name="Background+Shadow">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">
                      <p className="leading-[16.5px]">Enterprise</p>
                    </div>
                  </div>
                  <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col items-start px-[10px] py-[4px] relative rounded-[6px] self-stretch shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Overlay+Shadow+OverlayBlur">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[11px] whitespace-nowrap">
                      <p className="leading-[16.5px]">Chuyên sâu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full z-[1]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
                <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
                        <p className="leading-[15px]">ENTERPRISE BACKEND</p>
                      </div>
                    </div>
                    <div className="bg-[#d1fae5] content-stretch flex flex-col items-start opacity-0 px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[10px] whitespace-nowrap">
                        <p className="leading-[15px]">Chứng chỉ UIT</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-[22.5px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
                    <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] left-0 not-italic text-[#0f172a] text-[15px] top-[10.5px] w-[287.49px]">
                      <p className="leading-[22.5px]">{`JAVA SPRING BOOT & MICROSERVICES`}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="relative shrink-0 size-[10px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/1f8b9.svg" />
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">
                        <p>
                          <span className="leading-[16px]">{`Giảng viên: `}</span>
                          <span className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[16px] not-italic text-[#1e293b]">ThS. Đỗ Thùy Trang</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="h-[12.667px] relative shrink-0 w-[13.333px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/2bd96.svg" />
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">4.88</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">/ 5</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">(1.340 học viên)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f8fafc] border border-[#f1f5f9] border-solid content-stretch flex gap-[4px] items-start justify-center p-[9px] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-center pb-[2.5px] relative size-full">
                      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[11px] text-center whitespace-nowrap">
                          <p className="leading-[16.5px]">34h00m</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[9px] text-center whitespace-nowrap">
                        <p className="leading-[13.5px]">Thời lượng</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-[#e2e8f0] border-l border-r border-solid flex-[1_0_0] min-w-px relative" data-name="Border">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-center pb-[2.5px] px-px relative size-full">
                      <div className="relative shrink-0 w-full" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[11px] text-center whitespace-nowrap">
                            <p className="leading-[16.5px]">70 bài</p>
                          </div>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[9px] text-center whitespace-nowrap">
                        <p className="leading-[13.5px]">Bài học</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-center pb-[2.5px] relative size-full">
                      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[11px] text-center whitespace-nowrap">
                          <p className="leading-[16.5px]">Đầu ra UIT</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[9px] text-center whitespace-nowrap">
                        <p className="leading-[13.5px]">Chứng nhận</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#f1f5f9] border-solid border-t content-stretch flex flex-col gap-[10px] items-start pt-[9px] relative shrink-0 w-full" data-name="HorizontalBorder">
                  <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <div className="[word-break:break-word] absolute content-stretch flex gap-[8px] items-baseline leading-[0] left-0 not-italic top-0 whitespace-nowrap" data-name="Paragraph">
                        <div className="flex flex-col font-['Inter:Extra_Bold'] font-extrabold justify-center relative shrink-0 text-[#014421] text-[20px]">
                          <p className="leading-[28px]">560.000đ</p>
                        </div>
                        <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[#94a3b8] text-[12px]">
                          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[16px] line-through">950.000đ</p>
                        </div>
                      </div>
                      <div className="absolute bg-[#d1fae5] content-stretch flex flex-col items-start left-[299.36px] px-[8px] py-[2px] rounded-[4px] top-[7px]" data-name="Background">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#014421] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">-41%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-action="detail" role="button" tabIndex={0} aria-label={"Xem chi tiết"} className="bg-[rgba(255,255,255,0)] border border-[#e2e8f0] border-solid relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center justify-center px-[17px] py-[11px] relative size-full">
                      <div className="relative shrink-0" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                            <p className="leading-[16px]">Xem chi tiết</p>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 size-[10.667px]" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/175c5.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-action="detail" role="button" tabIndex={0} aria-label={"CARD 8: Lập Trình Hướng Đối Tượng (OOP) Chuẩn UIT"} className="bg-white border border-[#e2e8f0] border-solid col-4 content-stretch flex flex-col isolate items-start justify-self-stretch overflow-clip p-px relative rounded-[16px] row-2 self-start shrink-0" data-name="CARD 8: Lập Trình Hướng Đối Tượng (OOP) Chuẩn UIT">
            <div className="bg-[#0f172a] mb-[-0.01px] relative shrink-0 w-full z-[2]" data-name="Background">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                <div className="h-[217.13px] relative shrink-0 w-full" data-name="Lập Trình Hướng Đối Tượng (OOP) Chuẩn UIT">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-full left-[-1.61%] max-w-none top-0 w-[103.23%]" src="/assets/463f0.png" />
                  </div>
                </div>
                <div className="absolute content-stretch flex gap-[6px] items-start left-[12px] top-[12px]" data-name="Container">
                  <div className="bg-[#014421] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start px-[10px] py-[4px] relative rounded-[6px] self-stretch shrink-0" data-name="Background+Shadow">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">
                      <p className="leading-[16.5px]">Cốt lõi UIT</p>
                    </div>
                  </div>
                  <div className="bg-[#bcb88a] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start px-[10px] py-[4px] relative rounded-[6px] self-stretch shrink-0" data-name="Background+Shadow">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#013220] text-[11px] whitespace-nowrap">
                      <p className="leading-[16.5px]">Top Đánh giá</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full z-[1]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
                <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
                        <p className="leading-[15px]">KHOA HỌC MÁY TÍNH</p>
                      </div>
                    </div>
                    <div className="bg-[#d1fae5] content-stretch flex flex-col items-start opacity-0 px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[10px] whitespace-nowrap">
                        <p className="leading-[15px]">Chứng chỉ UIT</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-[22.5px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
                    <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] left-0 not-italic text-[#0f172a] text-[15px] top-[10.5px] w-[277.1px]">
                      <p className="leading-[22.5px]">LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG (OOP)</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="relative shrink-0 size-[10px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/1f8b9.svg" />
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">
                        <p>
                          <span className="leading-[16px]">{`Giảng viên: `}</span>
                          <span className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[16px] not-italic text-[#1e293b]">TS. Bùi Minh Triết</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="h-[12.667px] relative shrink-0 w-[13.333px]" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/2bd96.svg" />
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">4.96</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">/ 5</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">(2.800 học viên)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f8fafc] border border-[#f1f5f9] border-solid content-stretch flex gap-[4px] items-start justify-center p-[9px] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-center pb-[2.5px] relative size-full">
                      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[11px] text-center whitespace-nowrap">
                          <p className="leading-[16.5px]">26h00m</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[9px] text-center whitespace-nowrap">
                        <p className="leading-[13.5px]">Thời lượng</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-[#e2e8f0] border-l border-r border-solid flex-[1_0_0] min-w-px relative" data-name="Border">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-center pb-[2.5px] px-px relative size-full">
                      <div className="relative shrink-0 w-full" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[11px] text-center whitespace-nowrap">
                            <p className="leading-[16.5px]">50 bài</p>
                          </div>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[9px] text-center whitespace-nowrap">
                        <p className="leading-[13.5px]">Bài học</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-center pb-[2.5px] relative size-full">
                      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[11px] text-center whitespace-nowrap">
                          <p className="leading-[16.5px]">Đầu ra UIT</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[9px] text-center whitespace-nowrap">
                        <p className="leading-[13.5px]">Chứng nhận</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#f1f5f9] border-solid border-t content-stretch flex flex-col gap-[10px] items-start pt-[9px] relative shrink-0 w-full" data-name="HorizontalBorder">
                  <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <div className="[word-break:break-word] absolute content-stretch flex gap-[8px] items-baseline leading-[0] left-0 not-italic top-0 whitespace-nowrap" data-name="Paragraph">
                        <div className="flex flex-col font-['Inter:Extra_Bold'] font-extrabold justify-center relative shrink-0 text-[#014421] text-[20px]">
                          <p className="leading-[28px]">350.000đ</p>
                        </div>
                        <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[#94a3b8] text-[12px]">
                          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[16px] line-through">600.000đ</p>
                        </div>
                      </div>
                      <div className="absolute bg-[#d1fae5] content-stretch flex flex-col items-start left-[296.52px] px-[8px] py-[2px] rounded-[4px] top-[7px]" data-name="Background">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#014421] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">-42%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-action="detail" role="button" tabIndex={0} aria-label={"Xem chi tiết"} className="bg-[rgba(255,255,255,0)] border border-[#e2e8f0] border-solid relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center justify-center px-[17px] py-[11px] relative size-full">
                      <div className="relative shrink-0" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                            <p className="leading-[16px]">Xem chi tiết</p>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 size-[10.667px]" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/175c5.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FilteredCards>
        
        <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Section - Recommendation Banner:margin">
          <div className="bg-[#014421] content-stretch flex items-center justify-between p-[32px] relative rounded-[16px] shrink-0 w-full" data-name="Section - Recommendation Banner">
            <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Section - Recommendation Banner:shadow" />
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
              <div className="bg-[rgba(16,185,129,0.2)] border border-[rgba(16,185,129,0.3)] border-solid content-stretch flex items-center justify-center p-px relative rounded-[16px] shrink-0 size-[56px]" data-name="Overlay+Border">
                <div className="h-[24px] relative shrink-0 w-[29.333px]" data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/ed77f.svg" />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">
                    <p className="leading-[28px]">Bạn chưa biết nên bắt đầu từ đâu?</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(167,243,208,0.9)] whitespace-nowrap">
                    <p className="leading-[20px]">Làm bài trắc nghiệm 3 phút để hệ thống AI của WeEdu đề xuất lộ trình học lập trình tương thích nhất.</p>
                  </div>
                </div>
              </div>
            </div>
            <div data-action="dashboard" role="button" tabIndex={0} aria-label={"Khám phá lộ trình"} className="bg-[#8a9a5b] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[8px] items-center px-[24px] py-[12px] relative rounded-[9999px] shrink-0" data-name="Link">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#013220] text-[14px] whitespace-nowrap">
                  <p className="leading-[20px]">Khám phá lộ trình</p>
                </div>
              </div>
              <div className="h-[9px] relative shrink-0 w-[5.55px]" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/0d77f.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
