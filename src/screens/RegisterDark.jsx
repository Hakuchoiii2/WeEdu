import { FieldControl } from '../controls.jsx'

export default function RegisterDark() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start p-[32px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(1, 68, 33) 0%, rgb(1, 68, 33) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="[DARK] Đăng ký">
      <div className="absolute bg-[rgba(255,255,255,0)] bottom-[-0.5px] left-0 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.65)] top-0 w-[480px]" data-name="Standalone Register Modal Container (480px width, 32px padding, 0px border radius, no outer border):shadow" />
      <div className="border-[rgba(53,94,59,0.6)] border-b border-solid content-stretch flex items-start justify-between pb-[21px] relative shrink-0 w-full" data-name="Modal Header">
        <div className="relative shrink-0" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.6px] whitespace-nowrap">
                <p className="leading-[33px]">Đăng ký tài khoản</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#bcb88a] text-[12px] whitespace-nowrap">
                <p className="leading-[16px]">Bắt đầu hành trình học tập thực chiến cùng WeEdu</p>
              </div>
            </div>
          </div>
        </div>
        <div data-action="close" role="button" tabIndex={0} aria-label={"Đóng"} className="relative shrink-0 size-[32px]" data-name="Button - Đóng">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
            <div className="relative shrink-0 size-[20px]" data-name="SVG">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/5cf3b.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Register Form">
        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Field 1: Họ và tên">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.9)] tracking-[0.6px] uppercase w-full">
              <p className="leading-[16px]">HỌ VÀ TÊN</p>
            </div>
          </div>
          <div className="bg-[#013220] border border-[#355e3b] border-solid content-stretch flex items-start justify-center overflow-clip pb-[13px] pt-[12px] px-[15px] relative shrink-0 w-full" data-name="Input">
            <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(138,154,91,0.6)] w-full">
                  <p className="leading-[normal]">Nguyễn Văn A</p>
                </div>
              </div>
            </div>
          <FieldControl field={"name"} label={"Họ và tên"} hint={"Nguyễn Văn A"} /></div>
        </div>
        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Field 2: Email">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.9)] tracking-[0.6px] uppercase w-full">
              <p className="leading-[16px]">EMAIL</p>
            </div>
          </div>
          <div className="bg-[#013220] border border-[#355e3b] border-solid content-stretch flex items-start justify-center overflow-clip pb-[13px] pt-[12px] px-[15px] relative shrink-0 w-full" data-name="Input">
            <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(138,154,91,0.6)] w-full">
                  <p className="leading-[normal]">nhapemail@weedu.vn</p>
                </div>
              </div>
            </div>
          <FieldControl field={"email"} label={"Email"} hint={"nhapemail@weedu.vn"} /></div>
        </div>
        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Field 3: Mật khẩu">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.9)] tracking-[0.6px] uppercase w-full">
              <p className="leading-[16px]">MẬT KHẨU</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
            <div className="bg-[#013220] border border-[#355e3b] border-solid content-stretch flex items-start justify-center overflow-clip pb-[13px] pl-[15px] pr-[41px] pt-[12px] relative shrink-0 w-full" data-name="Input">
              <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(138,154,91,0.6)] w-full">
                    <p className="leading-[normal]">Tối thiểu 8 ký tự</p>
                  </div>
                </div>
              </div>
            <FieldControl field={"password"} label={"Mật khẩu"} hint={"Tối thiểu 8 ký tự"} /></div>

          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Field 4: Nhập lại mật khẩu">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.9)] tracking-[0.6px] uppercase w-full">
              <p className="leading-[16px]">NHẬP LẠI MẬT KHẨU</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
            <div className="bg-[#013220] border border-[#355e3b] border-solid content-stretch flex items-start justify-center overflow-clip pb-[13px] pl-[15px] pr-[41px] pt-[12px] relative shrink-0 w-full" data-name="Input">
              <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(138,154,91,0.6)] w-full">
                    <p className="leading-[normal]">Nhập lại mật khẩu vừa tạo</p>
                  </div>
                </div>
              </div>
            <FieldControl field={"confirm"} label={"Nhập lại mật khẩu"} hint={"Nhập lại mật khẩu vừa tạo"} /></div>

          </div>
        </div>
          <label className="auth-consent">
            <input type="checkbox" name="terms" defaultChecked />
            <span>Tôi đồng ý với <strong>Điều khoản sử dụng</strong> &amp; <strong>Chính sách bảo mật</strong></span>
          </label>
        <div data-action="submit-auth" role="button" tabIndex={0} aria-label={"Đăng ký"} className="bg-[#8a9a5b] content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0 w-full" data-name="Primary CTA Button → Button">
          <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#013220] text-[14px] text-center tracking-[0.35px] whitespace-nowrap">
              <p className="leading-[20px]">Đăng ký</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[16px] items-start pl-[8px] relative shrink-0 w-[24px]" data-name="SVG:margin">
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
              <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[16px]" data-name="SVG">
                <div className="absolute inset-[20.83%_12.5%]" data-name="Vector">
                  <div className="absolute inset-[-8.93%_-6.94%]">
                    <img alt="" className="block max-w-none size-full" src="/assets/d6f69.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Divider Line">
        <div className="absolute content-stretch flex inset-[4px_0_0_0] items-center" data-name="Container">
          <div className="border-[rgba(53,94,59,0.7)] border-solid border-t flex-[1_0_0] h-px min-w-px relative" data-name="Horizontal Divider" />
        </div>
        <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Container">
          <div className="bg-[#014421] content-stretch flex flex-col items-start px-[12px] relative self-stretch shrink-0" data-name="Background">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bcb88a] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
              <p className="leading-[16px]">HOẶC ĐĂNG KÝ NHANH VỚI</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[12px] items-start pt-[4px] relative shrink-0 w-full" data-name="Social Login Buttons Row">
        <div data-action="social" role="button" tabIndex={0} aria-label={"Google"} className="bg-[#013220] border border-[#355e3b] border-solid content-stretch flex items-center justify-center pl-[32.83px] pr-[32.85px] py-[11px] relative shrink-0" data-name="Button - Google">
          <div className="relative shrink-0 size-[16px]" data-name="SVG">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/f7830.svg" />
          </div>
          <div className="relative shrink-0" data-name="Margin">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative size-full">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
                  <p className="leading-[16px]">Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-action="social" role="button" tabIndex={0} aria-label={"Facebook"} className="bg-[#013220] border border-[#355e3b] border-solid content-stretch flex items-center justify-center px-[25.22px] py-[11px] relative shrink-0" data-name="Button - Facebook">
          <div className="relative shrink-0 size-[16px]" data-name="SVG">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/1bd36.svg" />
          </div>
          <div className="relative shrink-0" data-name="Margin">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative size-full">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
                  <p className="leading-[16px]">Facebook</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-action="social" role="button" tabIndex={0} aria-label={"GitHub"} className="bg-[#013220] border border-[#355e3b] border-solid content-stretch flex items-center justify-center px-[33.5px] py-[11px] relative shrink-0" data-name="Button - GitHub">
          <div className="relative shrink-0 size-[16px]" data-name="SVG">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/fe1d8.svg" />
          </div>
          <div className="relative shrink-0" data-name="Margin">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative size-full">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
                  <p className="leading-[16px]">GitHub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] content-stretch flex gap-[4px] items-start justify-center leading-[0] not-italic pt-[3.5px] relative shrink-0 text-[12px] text-center w-full whitespace-nowrap" data-name="Bottom Footer Link">
        <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[rgba(255,255,255,0.8)]">
          <p className="leading-[16px]">{`Đã có tài khoản? `}</p>
        </div>
        <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center relative shrink-0 text-[#bcb88a]">
          <p data-action="login" role="button" tabIndex={0} aria-label={"Đăng nhập"} className="leading-[16px]">Đăng nhập</p>
        </div>
      </div>
    </div>
  );
}
