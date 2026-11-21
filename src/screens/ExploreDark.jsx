import {CategoryBar, CourseGroup, ExampleCourses} from '../Categories'
import Header from './CatalogDarkPart2'
import Footer from './FooterDark'
export default function ExploreDark(){return <div style={{background:'#00180d'}}><Header/>      <div className="relative content-stretch flex flex-col gap-[40px] items-start left-0 px-[48px] py-[32px] right-0 " data-name="MainContent">
        <div className="border-[#14412e] border-b border-solid content-stretch flex items-center justify-between pb-[21px] relative shrink-0 w-full" data-name="Section - Breadcrumbs & Dynamic Counter Banner">
          <div className="relative shrink-0" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                    <p className="leading-[16px]">TRANG CHỦ</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#475569] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                    <p className="leading-[16px]">/</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                    <p className="leading-[16px]">{`KHÁM PHÁ & DANH MỤC`}</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Heading 1">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[30px] text-white tracking-[-0.75px] whitespace-nowrap">
                  <p className="leading-[36px]">Trung Tâm Khám Phá Tri Thức</p>
                </div>
                <div className="bg-[#013220] border border-[#355e3b] border-solid content-stretch flex flex-col items-start px-[11px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[12px] tracking-[-0.75px] whitespace-nowrap">
                    <p className="leading-[16px]">Bản quyền 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-[#355e3b] border-solid relative rounded-[12px] shrink-0" data-name="Background+Border+Shadow">
            <div aria-hidden className="absolute bg-[#002113] bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none rounded-[12px]" />
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center px-[21px] py-[11px] relative size-full">
              <div className="bg-[#10b981] relative rounded-[9999px] shrink-0 size-[12px]" data-name="Background" />
              <div className="relative shrink-0" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#cbd5e1] text-[14px] whitespace-nowrap">
                    <p>
                      <span className="leading-[20px]">{`Hơn `}</span>
                      <span className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[20px] text-[#bcb88a]">1,420+</span>
                      <span className="leading-[20px]">{` khóa học chọn lọc cập nhật mỗi ngày`}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
          </div>
        </div>
        <CategoryBar />
        <CourseGroup name="Công nghệ">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Section - SECTION 1: Phổ biến trong Công nghệ (Exact match to danhmuc.jpg)">
          <div className="border-[#14412e] border-b border-solid content-stretch flex items-end justify-between pb-[13px] relative shrink-0 w-full" data-name="Section Header Bar">
            <div className="relative shrink-0" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
                <div className="bg-[#8a9a5b] h-[32px] relative rounded-[9999px] shrink-0 w-[10px]" data-name="Background" />
                <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-white tracking-[-0.6px] whitespace-nowrap">
                      <p className="leading-[32px]">Phổ biến trong Công nghệ</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">Các khóa học lập trình và công nghệ cốt lõi được bình chọn cao nhất</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-action="catalog" role="button" tabIndex={0} aria-label={"Nhiều hơn... »"} className="relative shrink-0" data-name="Link - Nhiều hơn... >>' Button (from sketch)">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.99px] items-center relative size-full">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#8a9a5b] text-[14px] whitespace-nowrap">
                    <p className="leading-[20px]">Nhiều hơn...</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#8a9a5b] text-[14px] whitespace-nowrap">
                    <p className="leading-[20px]">»</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[__304.75px_304.75px] relative shrink-0 w-full" data-name="2 rows x 3 columns Course Grid (6 Cards)">
            <div data-action="detail" role="button" tabIndex={0} aria-label={"Card 1: Web Fullstack"} className="bg-[#002113] border border-[#355e3b] border-solid col-1 content-stretch flex flex-col items-start justify-between justify-self-stretch overflow-clip p-px relative rounded-[16px] row-1 self-start shrink-0" data-name="Card 1: Web Fullstack">
              <div className="relative shrink-0 w-full" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
                  <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="bg-[#013220] border border-[#355e3b] border-solid content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                        <p className="leading-[16px]">CÔNG NGHỆ</p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">⏱️ 68 giờ học</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pb-[0.75px] pt-[7px] relative shrink-0 w-full" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white w-full">
                      <p className="leading-[24.75px]">{`Lập trình Web Fullstack với React & Node.js`}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip pb-[12px] relative shrink-0 w-full" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] w-full">
                      <p className="leading-[16px] mb-0">Xây dựng ứng dụng hoàn chỉnh từ giao diện người dùng hiện đại đến máy chủ RESTful API và cơ sở</p>
                      <p className="leading-[16px]">dữ liệu MongoDB/PostgreSQL.</p>
                    </div>
                  </div>
                  <div className="border-[#14412e] border-solid border-t content-stretch flex gap-[12px] items-center pt-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
                    <div className="bg-[#013220] border border-[#8a9a5b] border-solid relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] px-px relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[12px] text-center whitespace-nowrap">
                          <p className="leading-[16px]">NV</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#e2e8f0] text-[12px] whitespace-nowrap">
                            <p className="leading-[16px]">Nguyễn Văn Vũ</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] whitespace-nowrap">
                            <p className="leading-[15px]">Senior Architect @ VNG</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#00180d] border-[#14412e] border-solid border-t relative shrink-0 w-full" data-name="Background+HorizontalBorder">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[16px] pt-[17px] px-[24px] relative size-full">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#fbbf24] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">★ 4.9</p>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">
                            <p className="leading-[16px]">(1,840 học viên)</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[18px] whitespace-nowrap">
                          <p className="leading-[28px]">899.000 ₫</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#013220] border border-[#355e3b] border-solid relative rounded-[12px] shrink-0" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#e2e8f0] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">Xem chi tiết →</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-action="detail" role="button" tabIndex={0} aria-label={"Card 3: Mobile Flutter"} className="bg-[#002113] border border-[#355e3b] border-solid col-3 content-stretch flex flex-col items-start justify-between justify-self-stretch overflow-clip p-px relative rounded-[16px] row-1 self-start shrink-0" data-name="Card 3: Mobile Flutter">
              <div className="relative shrink-0 w-full" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
                  <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="bg-[#013220] border border-[#355e3b] border-solid content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                        <p className="leading-[16px]">MOBILE DEV</p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">⏱️ 52 giờ học</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pb-[0.75px] pt-[7px] relative shrink-0 w-full" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white w-full">
                      <p className="leading-[24.75px]">Phát triển ứng dụng Mobile Flutter đa nền tảng</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip pb-[12px] relative shrink-0 w-full" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] w-full">
                      <p className="leading-[16px] mb-0">{`Viết một lần chạy mượt mà trên cả iOS & Android. Tích hợp thanh toán, bản đồ, thông báo đẩy và`}</p>
                      <p className="leading-[16px]">kiến trúc BLoC.</p>
                    </div>
                  </div>
                  <div className="border-[#14412e] border-solid border-t content-stretch flex gap-[12px] items-center pt-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
                    <div className="bg-[#013220] border border-[#8a9a5b] border-solid relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] px-px relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[12px] text-center whitespace-nowrap">
                          <p className="leading-[16px]">LK</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#e2e8f0] text-[12px] whitespace-nowrap">
                            <p className="leading-[16px]">Lê Tuấn Kiệt</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] whitespace-nowrap">
                            <p className="leading-[15px]">Mobile Lead @ MoMo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#00180d] border-[#14412e] border-solid border-t relative shrink-0 w-full" data-name="Background+HorizontalBorder">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[16px] pt-[17px] px-[24px] relative size-full">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#fbbf24] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">★ 4.8</p>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">
                            <p className="leading-[16px]">(980 học viên)</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[18px] whitespace-nowrap">
                          <p className="leading-[28px]">799.000 ₫</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#013220] border border-[#355e3b] border-solid relative rounded-[12px] shrink-0" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#e2e8f0] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">Xem chi tiết →</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-action="detail" role="button" tabIndex={0} aria-label={"Card 4: DevOps & Cloud"} className="bg-[#002113] border border-[#355e3b] border-solid col-1 content-stretch flex flex-col items-start justify-between justify-self-stretch overflow-clip p-px relative rounded-[16px] row-2 self-start shrink-0" data-name="Card 4: DevOps & Cloud">
              <div className="relative shrink-0 w-full" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
                  <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="bg-[#013220] border border-[#355e3b] border-solid content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                        <p className="leading-[16px]">DEVOPS / CLOUD</p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">⏱️ 40 giờ học</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pb-[0.75px] pt-[7px] relative shrink-0 w-full" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white w-full">
                      <p className="leading-[24.75px]">{`DevOps & Cloud Computing với AWS & Docker`}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip pb-[12px] relative shrink-0 w-full" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] w-full">
                      <p className="leading-[16px] mb-0">{`Tự động hóa CI/CD pipelines, điều phối cụm Kubernetes, giám sát hệ thống bằng Prometheus &`}</p>
                      <p className="leading-[16px]">Grafana chuẩn doanh nghiệp.</p>
                    </div>
                  </div>
                  <div className="border-[#14412e] border-solid border-t content-stretch flex gap-[12px] items-center pt-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
                    <div className="bg-[#013220] border border-[#8a9a5b] border-solid relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] px-px relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[12px] text-center whitespace-nowrap">
                          <p className="leading-[16px]">ĐH</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#e2e8f0] text-[12px] whitespace-nowrap">
                            <p className="leading-[16px]">Đặng Huy Hoàng</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] whitespace-nowrap">
                            <p className="leading-[15px]">AWS Certified Solutions Architect</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#00180d] border-[#14412e] border-solid border-t relative shrink-0 w-full" data-name="Background+HorizontalBorder">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[16px] pt-[17px] px-[24px] relative size-full">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#fbbf24] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">★ 4.9</p>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">
                            <p className="leading-[16px]">(1,430 học viên)</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[18px] whitespace-nowrap">
                          <p className="leading-[28px]">950.000 ₫</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#013220] border border-[#355e3b] border-solid relative rounded-[12px] shrink-0" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#e2e8f0] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">Xem chi tiết →</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-action="detail" role="button" tabIndex={0} aria-label={"Card 5: Python Data Science"} className="bg-[#002113] border border-[#355e3b] border-solid col-2 content-stretch flex flex-col items-start justify-between justify-self-stretch overflow-clip p-px relative rounded-[16px] row-2 self-start shrink-0" data-name="Card 5: Python Data Science">
              <div className="relative shrink-0 w-full" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
                  <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="bg-[#013220] border border-[#355e3b] border-solid content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                        <p className="leading-[16px]">DATA SCIENCE</p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">⏱️ 38 giờ học</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pb-[0.75px] pt-[7px] relative shrink-0 w-full" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white w-full">
                      <p className="leading-[24.75px]">Lập trình Python toàn diện cho Data Science</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip pb-[12px] relative shrink-0 w-full" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] w-full">
                      <p className="leading-[16px] mb-0">Khai phá dữ liệu lớn bằng Pandas, NumPy, trực quan hóa biểu đồ nâng cao và thống kê suy diễn</p>
                      <p className="leading-[16px]">chuyên sâu cho phân tích kinh doanh.</p>
                    </div>
                  </div>
                  <div className="border-[#14412e] border-solid border-t content-stretch flex gap-[12px] items-center pt-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
                    <div className="bg-[#013220] border border-[#8a9a5b] border-solid relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] px-px relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[12px] text-center whitespace-nowrap">
                          <p className="leading-[16px]">PT</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#e2e8f0] text-[12px] whitespace-nowrap">
                            <p className="leading-[16px]">Phạm Thùy Linh</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] whitespace-nowrap">
                            <p className="leading-[15px]">Head of Analytics @ Shopee</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#00180d] border-[#14412e] border-solid border-t relative shrink-0 w-full" data-name="Background+HorizontalBorder">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[16px] pt-[17px] px-[24px] relative size-full">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#fbbf24] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">★ 4.8</p>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">
                            <p className="leading-[16px]">(2,110 học viên)</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[18px] whitespace-nowrap">
                          <p className="leading-[28px]">690.000 ₫</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#013220] border border-[#355e3b] border-solid relative rounded-[12px] shrink-0" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#e2e8f0] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">Xem chi tiết →</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-action="detail" role="button" tabIndex={0} aria-label={"Card 6: An toàn thông tin"} className="bg-[#002113] border border-[#355e3b] border-solid col-3 content-stretch flex flex-col items-start justify-between justify-self-stretch overflow-clip p-px relative rounded-[16px] row-2 self-start shrink-0" data-name="Card 6: An toàn thông tin">
              <div className="relative shrink-0 w-full" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
                  <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="bg-[#013220] border border-[#355e3b] border-solid content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                        <p className="leading-[16px]">BẢO MẬT MẠNG</p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">⏱️ 36 giờ học</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pb-[0.75px] pt-[7px] relative shrink-0 w-full" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white w-full">
                      <p className="leading-[24.75px]">{`An toàn thông tin & Kỹ thuật phòng thủ mạng`}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip pb-[12px] relative shrink-0 w-full" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] w-full">
                      <p className="leading-[16px] mb-0">Nắm vững kỹ thuật rà quét lỗ hổng OWASP Top 10, phân tích mã độc và thiết lập tường lửa thế hệ</p>
                      <p className="leading-[16px]">mới (Next-Gen Firewall).</p>
                    </div>
                  </div>
                  <div className="border-[#14412e] border-solid border-t content-stretch flex gap-[12px] items-center pt-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
                    <div className="bg-[#013220] border border-[#8a9a5b] border-solid relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] px-px relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[12px] text-center whitespace-nowrap">
                          <p className="leading-[16px]">BH</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#e2e8f0] text-[12px] whitespace-nowrap">
                            <p className="leading-[16px]">Bùi Huy Hùng</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] whitespace-nowrap">
                            <p className="leading-[15px]">Cyber Security Lead @ FPT IS</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#00180d] border-[#14412e] border-solid border-t relative shrink-0 w-full" data-name="Background+HorizontalBorder">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[16px] pt-[17px] px-[24px] relative size-full">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#fbbf24] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">★ 4.9</p>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">
                            <p className="leading-[16px]">(860 học viên)</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[18px] whitespace-nowrap">
                          <p className="leading-[28px]">850.000 ₫</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#013220] border border-[#355e3b] border-solid relative rounded-[12px] shrink-0" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#e2e8f0] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">Xem chi tiết →</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-action="detail" role="button" tabIndex={0} aria-label={"Card 2: AI & ML (Best Seller)"} className="bg-[#002113] border border-[#355e3b] border-solid col-2 content-stretch flex flex-col items-start justify-between justify-self-stretch overflow-clip p-px relative rounded-[16px] row-1 self-start shrink-0" data-name="Card 2: AI & ML (Best Seller)">
              <div className="relative shrink-0 w-full" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
                  <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="bg-[#013220] border border-[#355e3b] border-solid content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                        <p className="leading-[16px]">TRÍ TUỆ NHÂN TẠO</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pr-[80px] relative shrink-0" data-name="Margin">
                      <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">⏱️ 45 giờ học</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pb-[0.75px] pt-[7px] relative shrink-0 w-full" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white w-full">
                      <p className="leading-[24.75px]">{`Trí tuệ nhân tạo & Machine Learning thực chiến`}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip pb-[12px] relative shrink-0 w-full" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] w-full">
                      <p className="leading-[16px] mb-0">Huấn luyện mô hình Deep Learning, xử lý ngôn ngữ tự nhiên LLMs và triển khai mô hình AI trên môi</p>
                      <p className="leading-[16px]">trường Production.</p>
                    </div>
                  </div>
                  <div className="border-[#14412e] border-solid border-t content-stretch flex gap-[12px] items-center pt-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
                    <div className="bg-[#013220] border border-[#8a9a5b] border-solid relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] px-px relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[12px] text-center whitespace-nowrap">
                          <p className="leading-[16px]">TL</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#e2e8f0] text-[12px] whitespace-nowrap">
                            <p className="leading-[16px]">TS. Trần Quang Linh</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] whitespace-nowrap">
                            <p className="leading-[15px]">AI Researcher @ Viettel</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-[#f59e0b] right-0 rounded-bl-[8px] top-0" data-name="Background">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] py-[2px] relative size-full">
                  <div className="absolute bg-[rgba(255,255,255,0)] inset-0 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#020617] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
                    <p className="leading-[15px]">BÁN CHẠY NHẤT</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#00180d] border-[#14412e] border-solid border-t relative shrink-0 w-full" data-name="Background+HorizontalBorder">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[16px] pt-[17px] px-[24px] relative size-full">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#fbbf24] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">★ 5.0</p>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">
                            <p className="leading-[16px]">(3,120 học viên)</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[18px] whitespace-nowrap">
                          <p className="leading-[28px]">1.250.000 ₫</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#8a9a5b] relative rounded-[12px] shrink-0" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
                      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#00180d] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">Xem chi tiết →</p>
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
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Section - SECTION 2: Phổ biến trong Ngôn ngữ (Exact match to danhmuc.jpg)">
          <div className="border-[#14412e] border-b border-solid content-stretch flex items-end justify-between pb-[13px] relative shrink-0 w-full" data-name="Section Header Bar">
            <div className="relative shrink-0" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
                <div className="bg-[#8a9a5b] h-[32px] relative rounded-[9999px] shrink-0 w-[10px]" data-name="Background" />
                <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-white tracking-[-0.6px] whitespace-nowrap">
                      <p className="leading-[32px]">Phổ biến trong Ngôn ngữ</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">{`Khóa học ngoại ngữ chất lượng cao với giảng viên bản xứ & chuyên gia chứng chỉ`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-action="catalog" role="button" tabIndex={0} aria-label={"Nhiều hơn... »"} className="relative shrink-0" data-name="Link - Nhiều hơn... >>' Button (from sketch)">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.99px] items-center relative size-full">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#8a9a5b] text-[14px] whitespace-nowrap">
                    <p className="leading-[20px]">Nhiều hơn...</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#8a9a5b] text-[14px] whitespace-nowrap">
                    <p className="leading-[20px]">»</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[__304.75px_304.75px] relative shrink-0 w-full" data-name="2 rows x 3 columns Language Grid (6 Cards)">
            <div data-action="detail" role="button" tabIndex={0} aria-label={"Card 1: IELTS Masterclass"} className="bg-[#002113] border border-[#355e3b] border-solid col-1 content-stretch flex flex-col items-start justify-between justify-self-stretch overflow-clip p-px relative rounded-[16px] row-1 self-start shrink-0" data-name="Card 1: IELTS Masterclass">
              <div className="relative shrink-0 w-full" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
                  <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="bg-[#013220] border border-[#355e3b] border-solid content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                        <p className="leading-[16px]">TIẾNG ANH</p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">⏱️ 90 giờ học</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pb-[0.75px] pt-[7px] relative shrink-0 w-full" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white w-full">
                      <p className="leading-[24.75px]">IELTS Masterclass 7.5+ - 4 Kỹ năng đột phá</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip pb-[12px] relative shrink-0 w-full" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] w-full">
                      <p className="leading-[16px] mb-0">Chiến lược giải đề Writing Task 2 và Speaking phản xạ tự nhiên. Sửa bài trực tiếp 1:1 cùng cựu giám</p>
                      <p className="leading-[16px]">khảo chấm thi IDP.</p>
                    </div>
                  </div>
                  <div className="border-[#14412e] border-solid border-t content-stretch flex gap-[12px] items-center pt-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
                    <div className="bg-[#013220] border border-[#8a9a5b] border-solid relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] px-px relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[12px] text-center whitespace-nowrap">
                          <p className="leading-[16px]">DM</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#e2e8f0] text-[12px] whitespace-nowrap">
                            <p className="leading-[16px]">David Miller, MA</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] whitespace-nowrap">
                            <p className="leading-[15px]">Head IELTS Examiner (8.5 Overall)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#00180d] border-[#14412e] border-solid border-t relative shrink-0 w-full" data-name="Background+HorizontalBorder">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[16px] pt-[17px] px-[24px] relative size-full">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#fbbf24] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">★ 5.0</p>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">
                            <p className="leading-[16px]">(3,450 học viên)</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[18px] whitespace-nowrap">
                          <p className="leading-[28px]">1.490.000 ₫</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#013220] border border-[#355e3b] border-solid relative rounded-[12px] shrink-0" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#e2e8f0] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">Xem chi tiết →</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-action="detail" role="button" tabIndex={0} aria-label={"Card 2: Tiếng Anh công s"} className="bg-[#002113] border border-[#355e3b] border-solid col-2 content-stretch flex flex-col items-start justify-between justify-self-stretch overflow-clip p-px relative rounded-[16px] row-1 self-start shrink-0" data-name="Card 2: Tiếng Anh công s">
              <div className="relative shrink-0 w-full" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
                  <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="bg-[#013220] border border-[#355e3b] border-solid content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                        <p className="leading-[16px]">BUSINESS ENGLISH</p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">⏱️ 32 giờ học</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pb-[0.75px] pt-[7px] relative shrink-0 w-full" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white w-full">
                      <p className="leading-[24.75px]">Tiếng Anh giao tiếp công sở chuyên sâu</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip pb-[12px] relative shrink-0 w-full" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] w-full">
                      <p className="leading-[16px] mb-0">Soạn thảo email thương mại chuyên nghiệp, thuyết trình đàm phán hợp đồng và xử lý tình huống</p>
                      <p className="leading-[16px]">với đối tác quốc tế.</p>
                    </div>
                  </div>
                  <div className="border-[#14412e] border-solid border-t content-stretch flex gap-[12px] items-center pt-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
                    <div className="bg-[#013220] border border-[#8a9a5b] border-solid relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] px-px relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[12px] text-center whitespace-nowrap">
                          <p className="leading-[16px]">TH</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#e2e8f0] text-[12px] whitespace-nowrap">
                            <p className="leading-[16px]">Trần Hoàng Mai</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] whitespace-nowrap">
                            <p className="leading-[15px]">Corporate Trainer @ Unilever</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#00180d] border-[#14412e] border-solid border-t relative shrink-0 w-full" data-name="Background+HorizontalBorder">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[16px] pt-[17px] px-[24px] relative size-full">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#fbbf24] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">★ 4.8</p>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">
                            <p className="leading-[16px]">(1,670 học viên)</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[18px] whitespace-nowrap">
                          <p className="leading-[28px]">650.000 ₫</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#013220] border border-[#355e3b] border-solid relative rounded-[12px] shrink-0" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#e2e8f0] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">Xem chi tiết →</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-action="detail" role="button" tabIndex={0} aria-label={"Card 3: JLPT N3 Cấp tốc"} className="bg-[#002113] border border-[#355e3b] border-solid col-3 content-stretch flex flex-col items-start justify-between justify-self-stretch overflow-clip p-px relative rounded-[16px] row-1 self-start shrink-0" data-name="Card 3: JLPT N3 Cấp tốc">
              <div className="relative shrink-0 w-full" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
                  <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="bg-[#013220] border border-[#355e3b] border-solid content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                        <p className="leading-[16px]">TIẾNG NHẬT</p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">⏱️ 65 giờ học</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pb-[0.75px] pt-[7px] relative shrink-0 w-full" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white w-full">
                      <p className="leading-[24.75px]">{`Tiếng Nhật JLPT N3 cấp tốc & Giao tiếp bản ngữ`}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip pb-[12px] relative shrink-0 w-full" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] w-full">
                      <p className="leading-[16px] mb-0">Hệ thống hóa 650 chữ Hán Kanji, 120 mẫu ngữ pháp then chốt và phương pháp luyện nghe Dokkai</p>
                      <p className="leading-[16px]">đạt điểm tối đa.</p>
                    </div>
                  </div>
                  <div className="border-[#14412e] border-solid border-t content-stretch flex gap-[12px] items-center pt-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
                    <div className="bg-[#013220] border border-[#8a9a5b] border-solid relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] px-px relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[12px] text-center whitespace-nowrap">
                          <p className="leading-[16px]">KY</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#e2e8f0] text-[12px] whitespace-nowrap">
                            <p className="leading-[16px]">Kenji Yamada</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] whitespace-nowrap">
                            <p className="leading-[15px]">Giảng viên bản ngữ JLPT N1</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#00180d] border-[#14412e] border-solid border-t relative shrink-0 w-full" data-name="Background+HorizontalBorder">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[16px] pt-[17px] px-[24px] relative size-full">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#fbbf24] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">★ 4.9</p>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">
                            <p className="leading-[16px]">(1,120 học viên)</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[18px] whitespace-nowrap">
                          <p className="leading-[28px]">890.000 ₫</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#013220] border border-[#355e3b] border-solid relative rounded-[12px] shrink-0" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#e2e8f0] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">Xem chi tiết →</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-action="detail" role="button" tabIndex={0} aria-label={"Card 4: Tiếng Hàn Biên Phiên Dịch"} className="bg-[#002113] border border-[#355e3b] border-solid col-1 content-stretch flex flex-col items-start justify-between justify-self-stretch overflow-clip p-px relative rounded-[16px] row-2 self-start shrink-0" data-name="Card 4: Tiếng Hàn Biên Phiên Dịch">
              <div className="relative shrink-0 w-full" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
                  <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="bg-[#013220] border border-[#355e3b] border-solid content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                        <p className="leading-[16px]">TIẾNG HÀN</p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">⏱️ 48 giờ học</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pb-[0.75px] pt-[7px] relative shrink-0 w-full" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white w-full">
                      <p className="leading-[24.75px]">{`Tiếng Hàn tổng quát & Biên phiên dịch ứng dụng`}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip pb-[12px] relative shrink-0 w-full" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] w-full">
                      <p className="leading-[16px] mb-0">Chinh phục TOPIK II cấp độ 4, nắm bắt ngữ cảnh văn hóa doanh nghiệp Hàn Quốc tại các tập</p>
                      <p className="leading-[16px]">đoàn Samsung, LG.</p>
                    </div>
                  </div>
                  <div className="border-[#14412e] border-solid border-t content-stretch flex gap-[12px] items-center pt-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
                    <div className="bg-[#013220] border border-[#8a9a5b] border-solid relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] px-px relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[12px] text-center whitespace-nowrap">
                          <p className="leading-[16px]">PJ</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#e2e8f0] text-[12px] whitespace-nowrap">
                            <p className="leading-[16px]">Park Ji-Hoon</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] whitespace-nowrap">
                            <p className="leading-[15px]">Chuyên gia ngôn ngữ Hàn - Việt</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#00180d] border-[#14412e] border-solid border-t relative shrink-0 w-full" data-name="Background+HorizontalBorder">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[16px] pt-[17px] px-[24px] relative size-full">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#fbbf24] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">★ 4.8</p>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">
                            <p className="leading-[16px]">(840 học viên)</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[18px] whitespace-nowrap">
                          <p className="leading-[28px]">720.000 ₫</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#013220] border border-[#355e3b] border-solid relative rounded-[12px] shrink-0" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#e2e8f0] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">Xem chi tiết →</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-action="detail" role="button" tabIndex={0} aria-label={"Card 5: Tiếng Trung HSK 4"} className="bg-[#002113] border border-[#355e3b] border-solid col-2 content-stretch flex flex-col items-start justify-between justify-self-stretch overflow-clip p-px relative rounded-[16px] row-2 self-start shrink-0" data-name="Card 5: Tiếng Trung HSK 4">
              <div className="relative shrink-0 w-full" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
                  <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="bg-[#013220] border border-[#355e3b] border-solid content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                        <p className="leading-[16px]">TIẾNG TRUNG</p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">⏱️ 55 giờ học</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pb-[0.75px] pt-[7px] relative shrink-0 w-full" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white w-full">
                      <p className="leading-[24.75px]">{`Tiếng Trung HSK 4 thực chiến & Đàm thoại buôn bán`}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip pb-[12px] relative shrink-0 w-full" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] w-full">
                      <p className="leading-[16px] mb-0">Hơn 1200 từ vựng cốt lõi HSK 4 mới, giao dịch tìm nguồn hàng Quảng Châu, 1688, Taobao tự tin</p>
                      <p className="leading-[16px]">không cần phiên dịch viên.</p>
                    </div>
                  </div>
                  <div className="border-[#14412e] border-solid border-t content-stretch flex gap-[12px] items-center pt-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
                    <div className="bg-[#013220] border border-[#8a9a5b] border-solid relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] px-px relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[12px] text-center whitespace-nowrap">
                          <p className="leading-[16px]">LĐ</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#e2e8f0] text-[12px] whitespace-nowrap">
                            <p className="leading-[16px]">Lý Diệu Linh</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] whitespace-nowrap">
                            <p className="leading-[15px]">Thạc sĩ Ngôn ngữ Bắc Kinh</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#00180d] border-[#14412e] border-solid border-t relative shrink-0 w-full" data-name="Background+HorizontalBorder">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[16px] pt-[17px] px-[24px] relative size-full">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#fbbf24] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">★ 4.9</p>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">
                            <p className="leading-[16px]">(1,950 học viên)</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[18px] whitespace-nowrap">
                          <p className="leading-[28px]">820.000 ₫</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#013220] border border-[#355e3b] border-solid relative rounded-[12px] shrink-0" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#e2e8f0] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">Xem chi tiết →</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-action="detail" role="button" tabIndex={0} aria-label={"Card 6: Phát âm chuẩn IPA"} className="bg-[#002113] border border-[#355e3b] border-solid col-3 content-stretch flex flex-col items-start justify-between justify-self-stretch overflow-clip p-px relative rounded-[16px] row-2 self-start shrink-0" data-name="Card 6: Phát âm chuẩn IPA">
              <div className="relative shrink-0 w-full" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
                  <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="bg-[#013220] border border-[#355e3b] border-solid content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                        <p className="leading-[16px]">{`PHÁT ÂM & NGỮ ĐIỆU`}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">⏱️ 24 giờ học</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pb-[0.75px] pt-[7px] relative shrink-0 w-full" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white w-full">
                      <p className="leading-[24.75px]">{`Phát âm chuẩn IPA tiếng Anh bản ngữ & Nối âm tự nhiên`}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip pb-[12px] relative shrink-0 w-full" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] w-full">
                      <p className="leading-[16px] mb-0">Khắc phục triệt để lỗi nuốt âm cuối, cải thiện ngữ điệu chuẩn Anh-Mỹ giúp bạn nói tiếng Anh mượt</p>
                      <p className="leading-[16px]">mà và tự tin 100%.</p>
                    </div>
                  </div>
                  <div className="border-[#14412e] border-solid border-t content-stretch flex gap-[12px] items-center pt-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
                    <div className="bg-[#013220] border border-[#8a9a5b] border-solid relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] px-px relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[12px] text-center whitespace-nowrap">
                          <p className="leading-[16px]">SM</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#e2e8f0] text-[12px] whitespace-nowrap">
                            <p className="leading-[16px]">Sarah Mitchell</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] whitespace-nowrap">
                            <p className="leading-[15px]">TESOL Master Trainer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#00180d] border-[#14412e] border-solid border-t relative shrink-0 w-full" data-name="Background+HorizontalBorder">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[16px] pt-[17px] px-[24px] relative size-full">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#fbbf24] text-[12px] whitespace-nowrap">
                          <p className="leading-[16px]">★ 4.9</p>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">
                            <p className="leading-[16px]">(2,800 học viên)</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#bcb88a] text-[18px] whitespace-nowrap">
                          <p className="leading-[28px]">499.000 ₫</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#013220] border border-[#355e3b] border-solid relative rounded-[12px] shrink-0" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#e2e8f0] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">Xem chi tiết →</p>
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
        <div className="bg-gradient-to-r border border-[#355e3b] border-solid content-stretch flex from-[#013220] items-center justify-between overflow-clip p-[33px] relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 to-[#013220] via-1/2 via-[#002113] w-full" data-name="Section - Intermediate Banner: Roadmap Highlighting">
          <div className="absolute bg-[rgba(53,94,59,0.2)] blur-[40px] bottom-[-40px] right-[-40px] rounded-[9999px] size-[256px]" data-name="Decorative background circles" />
          <div className="absolute bg-[rgba(138,154,91,0.1)] blur-[40px] h-[192px] left-[calc(33.35%-0.33px)] right-[calc(56.12%+0.12px)] rounded-[9999px] top-[-40px]" data-name="Overlay+Blur" />
          <div className="max-w-[768px] relative shrink-0" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start max-w-[inherit] relative size-full">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#8a9a5b] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                    <p className="leading-[16px]">🚀 LỘ TRÌNH HỌC TOÀN DIỆN</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                    <p className="leading-[16px]">•</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#8a9a5b] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                    <p className="leading-[16px]">CHỨNG CHỈ QUỐC TẾ</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[24px] text-white whitespace-nowrap">
                  <p className="leading-[30px] mb-0">Định hướng nghề nghiệp số cùng mạng lưới chuyên gia công nghệ</p>
                  <p className="leading-[30px]">WeEdu</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#cbd5e1] text-[14px] whitespace-nowrap">
                  <p className="leading-[20px] mb-0">Tham gia chương trình Mentor 1:1, đánh giá năng lực đầu vào và cam kết giới thiệu việc làm tại hơn 120+ doanh nghiệp</p>
                  <p className="leading-[20px]">đối tác hàng đầu.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
              <div className="bg-[#8a9a5b] content-stretch flex gap-[8px] items-center px-[32px] py-[14px] relative rounded-[12px] shrink-0" data-name="Button">
                <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.35px_0_0] rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
                <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#00180d] text-[14px] text-center whitespace-nowrap">
                    <p className="leading-[20px]">Khám phá Lộ trình Tech 2026</p>
                  </div>
                </div>
                <div className="h-[4.219px] relative shrink-0 w-[10.652px]" data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/bc887.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><Footer/></div>}