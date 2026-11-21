export default function CatalogHoverPart1() {
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
                    <p className="leading-[16px]">Hiển thị 8 khóa học phù hợp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-[#e2e8f0] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-between p-[17px] relative rounded-[16px] shrink-0 w-full" data-name="Filter & Sort Bar">
          <div className="relative shrink-0" data-name="Subcategory Tabs">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center overflow-auto relative rounded-[inherit] size-full">
              <div data-action="filter-category" role="button" tabIndex={0} aria-label={"Tất cả"} className="bg-[#014421] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Button">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
                  <p className="leading-[16px]">Tất cả</p>
                </div>
              </div>
              <div data-action="filter-category" role="button" tabIndex={0} aria-label={"Frontend"} className="bg-[#f1f5f9] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Button">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                  <p className="leading-[16px]">Frontend</p>
                </div>
              </div>
              <div data-action="filter-category" role="button" tabIndex={0} aria-label={"Backend & Cơ sở dữ liệu"} className="bg-[#f1f5f9] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Button">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                  <p className="leading-[16px]">{`Backend & Cơ sở dữ liệu`}</p>
                </div>
              </div>
              <div data-action="filter-category" role="button" tabIndex={0} aria-label={"Data & AI"} className="bg-[#f1f5f9] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Button">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                  <p className="leading-[16px]">{`Data & AI`}</p>
                </div>
              </div>
              <div data-action="filter-category" role="button" tabIndex={0} aria-label={"Di động (Mobile)"} className="bg-[#f1f5f9] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Button">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                  <p className="leading-[16px]">Di động (Mobile)</p>
                </div>
              </div>
              <div data-action="filter-category" role="button" tabIndex={0} aria-label={"Cơ sở ngành UIT"} className="bg-[#f1f5f9] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Button">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                  <p className="leading-[16px]">Cơ sở ngành UIT</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Right Dropdowns (Filters & Sorting)">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-center flex flex-wrap gap-[10px] items-center relative size-full">
              <div data-action="filter-menu" role="button" tabIndex={0} aria-label={"Trình độ: Mọi cấp độ"} className="content-stretch flex flex-col items-start relative shrink-0" data-name="Level Filter">
                <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid content-stretch flex items-center overflow-clip pl-[15px] pr-[33px] py-[9px] relative rounded-[12px] shrink-0" data-name="Options">
                  <div className="-translate-y-1/2 absolute left-[171px] size-[24px] top-1/2" data-name="image">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/3e568.svg" />
                  </div>
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[16px] whitespace-nowrap">
                        <p className="leading-[24px]">Trình độ: Mọi cấp độ</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[30.95%] content-stretch flex flex-col items-start right-[9.67px] top-[30.95%]" data-name="Container">
                  <div className="h-[4.933px] relative shrink-0 w-[8px]" data-name="Icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/afe6c.svg" />
                  </div>
                </div>
              </div>
              <div data-action="filter-menu" role="button" tabIndex={0} aria-label={"Giá: Tất cả"} className="content-stretch flex flex-col items-start relative shrink-0" data-name="Price Filter">
                <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid content-stretch flex items-center overflow-clip pl-[15px] pr-[33px] py-[9px] relative rounded-[12px] shrink-0" data-name="Options">
                  <div className="-translate-y-1/2 absolute left-[115px] size-[24px] top-1/2" data-name="image">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/3e568.svg" />
                  </div>
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[19.23px] relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[16px] whitespace-nowrap">
                        <p className="leading-[24px]">Giá: Tất cả</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[30.95%] content-stretch flex flex-col items-start right-[10px] top-[30.95%]" data-name="Container">
                  <div className="h-[4.933px] relative shrink-0 w-[8px]" data-name="Icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/afe6c.svg" />
                  </div>
                </div>
              </div>
              <div data-action="filter-menu" role="button" tabIndex={0} aria-label={"Sắp xếp: Phổ biến nhất"} className="content-stretch flex flex-col items-start relative shrink-0" data-name="Sort Order">
                <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid content-stretch flex items-center overflow-clip pl-[15px] pr-[33px] py-[9px] relative rounded-[12px] shrink-0" data-name="Options">
                  <div className="-translate-y-1/2 absolute left-[190px] size-[24px] top-1/2" data-name="image">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/3e568.svg" />
                  </div>
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[16px] whitespace-nowrap">
                        <p className="leading-[24px]">Sắp xếp: Phổ biến nhất</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[30.95%] content-stretch flex flex-col items-start right-[9.72px] top-[30.95%]" data-name="Container">
                  <div className="h-[8px] relative shrink-0 w-[12px]" data-name="Icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/5183d.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[__519px_518.12px] relative shrink-0 w-full" data-name="COURSE CARDS GRID">
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
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12.4px] items-start p-[20px] relative size-full">
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
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12.4px] items-start p-[20px] relative size-full">
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
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12.4px] items-start p-[20px] relative size-full">
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
            <div className="bg-[#0f172a] relative shrink-0 w-full z-[2]" data-name="Background">
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
            <div className="bg-[#0f172a] relative shrink-0 w-full z-[2]" data-name="Background">
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
            <div className="bg-[#0f172a] relative shrink-0 w-full z-[2]" data-name="Background">
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
            <div className="bg-[#0f172a] relative shrink-0 w-full z-[2]" data-name="Background">
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
          <div className="col-1 flex h-[529.89px] items-center justify-center relative row-1 self-start shrink-0 w-[395.76px]">
            <div className="flex-none scale-x-102 scale-y-102">
              <div data-action="detail" role="button" tabIndex={0} aria-label={"CARD 1: Lập trình Python cơ bản (Featured Card theo yêu cầu)"} className="bg-white border-2 border-[#22c55e] border-solid content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-[388px]" data-name="CARD 1: Lập trình Python cơ bản (Featured Card theo yêu cầu)">
                <div className="aspect-video bg-[#0f172a] relative shrink-0 w-full" data-name="Thumbnail & Play Preview (Hover active)">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                    <div className="absolute flex inset-[-5.4px_-9.6px] items-center justify-center" style={{ containerType: "size" }}>
                      <div className="flex-none h-[100cqh] w-[100cqw]">
                        <div className="relative size-full" data-name="Lập trình Python cơ bản">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img alt="" className="absolute h-full left-[-1.61%] max-w-none top-0 w-[103.23%]" src="/assets/d9003.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bg-[rgba(0,0,0,0.25)] content-stretch flex inset-0 items-center justify-center" data-name="Overlay">
                      <div className="flex items-center justify-center relative shrink-0 size-[52.804px]">
                        <div className="flex-none scale-x-[110.00000000000001%] scale-y-[110.00000000000001%]">
                          <div className="bg-[#22c55e] content-stretch flex items-center justify-center relative rounded-[9999px] size-[48.004px]" data-name="Background">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(16,185,129,0.4),0px_4px_6px_-4px_rgba(16,185,129,0.4)] size-[48.004px] top-1/2" data-name="Overlay+Shadow" />
                            <div className="h-[16.333px] relative shrink-0 w-[12.833px]" data-name="Container">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/c0538.svg" />
                            </div>
                          </div>
                        </div>
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
                <div className="bg-gradient-to-b from-white relative shrink-0 to-[rgba(236,253,245,0.3)] w-full" data-name="Details">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
                    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Container">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
                            <p className="leading-[15px]">LẬP TRÌNH PYTHON</p>
                          </div>
                        </div>
                        <div className="bg-[#d1fae5] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[10px] whitespace-nowrap">
                            <p className="leading-[15px]">Chứng chỉ UIT</p>
                          </div>
                        </div>
                      </div>
                      <div className="h-[22.5px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
                        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] left-0 not-italic text-[#064e3b] text-[15px] top-[10.5px] w-[210.716px]">
                          <p className="leading-[22.5px]">LẬP TRÌNH PYTHON CƠ BẢN</p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
                        <div className="relative shrink-0 size-[10px]" data-name="Container">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/34208.svg" />
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
                    <div className="bg-[rgba(236,253,245,0.8)] border border-[#a7f3d0] border-solid content-stretch flex gap-[4px] items-start justify-center p-[9px] relative rounded-[12px] shrink-0 w-full" data-name="Quick Specs">
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
                      <div className="border-[#a7f3d0] border-l border-r border-solid flex-[1_0_0] min-w-px relative" data-name="Border">
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
                    <div className="border-[#f1f5f9] border-solid border-t content-stretch flex flex-col gap-[10px] items-start pt-[9px] relative shrink-0 w-full" data-name="Price & CTA (Hover active state with simulated cursor pointer)">
                      <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                          <div className="absolute h-[28px] left-0 top-0 w-[163px]" data-name="Container">
                            <div className="absolute content-stretch flex flex-col items-start left-0 top-0" data-name="Container">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold'] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#014421] text-[20px] whitespace-nowrap">
                                <p className="leading-[28px]">299.000đ</p>
                              </div>
                            </div>
                            <div className="absolute content-stretch flex flex-col items-start left-[107.32px] top-[9px]" data-name="Container">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                                <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[16px] line-through">490.000đ</p>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bg-[#d1fae5] content-stretch flex flex-col items-start left-[293.98px] px-[8px] py-[2px] rounded-[4px] top-[7px]" data-name="Background">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#014421] text-[12px] whitespace-nowrap">
                              <p className="leading-[16px]">-40%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 w-full" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                          <div data-action="detail" role="button" tabIndex={0} aria-label={"Xem chi tiết"} className="bg-[#22c55e] border border-[rgba(0,0,0,0)] border-solid content-stretch flex gap-[10px] items-center justify-center pl-[126.363px] pr-[122.363px] py-[10px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
                            <div className="absolute bg-[rgba(255,255,255,0)] inset-[-1px] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(16,185,129,0.3),0px_2px_4px_-2px_rgba(16,185,129,0.3)]" data-name="Button:shadow" />
                            <div className="relative shrink-0" data-name="Container">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                                <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
                                  <p className="leading-[16px]">Xem chi tiết</p>
                                </div>
                              </div>
                            </div>
                            <div className="h-[18px] relative shrink-0" data-name="Container:css-transform">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center py-px relative size-full">
                                <div className="relative shrink-0 size-[10.667px]" data-name="Container">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/28520.svg" />
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
        </div>
        <div className="content-stretch flex gap-[8px] items-center justify-center pt-[24px] relative shrink-0 w-full" data-name="Pagination">
          <div className="bg-white border border-[#e2e8f0] border-solid content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[40px]" data-name="Button">
            <div className="h-[9px] relative shrink-0 w-[5.55px]" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/71d74.svg" />
            </div>
          </div>
          <div data-action="page" role="button" tabIndex={0} aria-label={"1"} className="bg-[#014421] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center pb-[10.5px] pt-[9.5px] relative rounded-[12px] shrink-0 size-[40px]" data-name="Button">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
              <p className="leading-[20px]">1</p>
            </div>
          </div>
          <div data-action="page" role="button" tabIndex={0} aria-label={"2"} className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col items-center justify-center pb-[10.5px] pt-[9.5px] px-px relative rounded-[12px] shrink-0 size-[40px]" data-name="Button">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">2</p>
            </div>
          </div>
          <div data-action="page" role="button" tabIndex={0} aria-label={"3"} className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col items-center justify-center pb-[10.5px] pt-[9.5px] px-px relative rounded-[12px] shrink-0 size-[40px]" data-name="Button">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">3</p>
            </div>
          </div>
          <div className="h-[2.683px] relative shrink-0 w-[29.396px]" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/66d63.svg" />
          </div>
          <div data-action="page" role="button" tabIndex={0} aria-label={"8"} className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col items-center justify-center pb-[10.5px] pt-[9.5px] px-px relative rounded-[12px] shrink-0 size-[40px]" data-name="Button">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">8</p>
            </div>
          </div>
          <div data-action="page" role="button" tabIndex={0} aria-label={"Sau"} className="bg-white border border-[#e2e8f0] border-solid content-stretch flex gap-[4px] h-[40px] items-center px-[17px] py-px relative rounded-[12px] shrink-0" data-name="Button">
            <div className="relative shrink-0" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[20px]">Sau</p>
                </div>
              </div>
            </div>
            <div className="h-[9px] relative shrink-0 w-[5.55px]" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/075e8.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
