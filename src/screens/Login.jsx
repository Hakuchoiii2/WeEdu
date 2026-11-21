import { FieldControl } from '../controls.jsx'

export default function Login() {
  return (
    <div className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col gap-[24px] items-start p-[33px] relative size-full" data-name="[LIGHT] Đăng nhập">
      <div className="absolute bg-[rgba(255,255,255,0)] bottom-[-1px] left-[-1px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-[-1px] w-[460px]" data-name="STANDALONE LOGIN MODAL CARD COMPONENT:shadow" />
      <div className="relative shrink-0 w-full" data-name="Modal Header">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-name="Container">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[24px] tracking-[-0.6px] whitespace-nowrap">
                <p data-action="login" role="button" tabIndex={0} aria-label={"Đăng nhập"} className="leading-[30px]">Đăng nhập</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] tracking-[0.3px] whitespace-nowrap">
                <p className="leading-[16px]">Chào mừng bạn quay lại với nền tảng học WeEdu</p>
              </div>
            </div>
          </div>
          <button data-action="close" type="button" aria-label={"Đóng modal"} className="bg-[#f1f5f9] content-stretch cursor-pointer flex items-center justify-center relative shrink-0 size-[32px]" data-name="Button - Đóng modal">
            <div className="relative shrink-0 size-[20px]" data-name="SVG">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/59249.svg" />
            </div>
          </button>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Login Form">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Field 1: Email hoặc tên đăng nhập">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] tracking-[0.6px] uppercase w-full">
                <p className="leading-[16px]">Email hoặc tên đăng nhập</p>
              </div>
            </div>
            <div className="bg-[#f8fafc] border border-[#cbd5e1] border-solid content-stretch flex h-[44px] items-start justify-center overflow-clip px-[15px] py-[13.5px] relative shrink-0 w-full" data-name="Input">
              <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-full">
                    <p className="leading-[normal]">nhapemail@weedu.vn</p>
                  </div>
                </div>
              </div>
            <FieldControl field={"email"} label={"Email hoặc tên đăng nhập"} hint={"nhapemail@weedu.vn"} /></div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-start pt-[16px] relative shrink-0 w-full" data-name="Field 2: Mật khẩu">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] tracking-[0.6px] uppercase w-full">
                <p className="leading-[16px]">Mật khẩu</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
              <div className="bg-[#f8fafc] border border-[#cbd5e1] border-solid content-stretch flex h-[44px] items-start justify-center overflow-clip pl-[15px] pr-[45px] py-[14px] relative shrink-0 w-full" data-name="Input">
                <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
                    <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] tracking-[1.4px] w-full">
                      <p className="leading-[normal]">••••••••••••</p>
                    </div>
                  </div>
                </div>
              <FieldControl field={"password"} label={"Mật khẩu"} hint={"••••••••••••"} /></div>

            </div>
          </div>
          <button type="button" className="forgot-link" data-action="recover">Quên mật khẩu?</button>
          <div data-action="submit-auth" role="button" tabIndex={0} aria-label={"Đăng nhập"} className="bg-[#047857] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[7.99px] h-[44px] items-center justify-center relative shrink-0 w-full" data-name="Primary CTA Button → Button">
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.35px] whitespace-nowrap">
                <p className="leading-[20px]">Đăng nhập</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[16px]" data-name="SVG">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/d0606.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Divider Line">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
          <div className="absolute content-stretch flex inset-[0_0_0.5px_0] items-center" data-name="Container">
            <div className="border-[#e2e8f0] border-solid border-t flex-[1_0_0] h-px min-w-px relative" data-name="Horizontal Divider" />
          </div>
          <div className="bg-white content-stretch flex flex-col items-start px-[12px] relative shrink-0" data-name="Background">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
              <p className="leading-[16.5px]">HOẶC TIẾP TỤC VỚI</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Social Login Buttons (Google, Facebook, GitHub)">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start relative size-full">
          <div data-action="social" role="button" tabIndex={0} aria-label={"Google"} className="bg-white border border-[#e2e8f0] border-solid content-stretch flex gap-[6px] h-[40px] items-center justify-center pl-[30.83px] pr-[30.85px] py-px relative shrink-0" data-name="Button - Google">
            <div className="relative shrink-0 size-[16px]" data-name="SVG">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/a82cd.svg" />
            </div>
            <div className="relative shrink-0" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                  <p className="leading-[16px]">Google</p>
                </div>
              </div>
            </div>
          </div>
          <div data-action="social" role="button" tabIndex={0} aria-label={"Facebook"} className="bg-white border border-[#e2e8f0] border-solid content-stretch flex gap-[6px] h-[40px] items-center justify-center px-[23.22px] py-px relative shrink-0" data-name="Button - Facebook">
            <div className="relative shrink-0 size-[16px]" data-name="SVG">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/1bd36.svg" />
            </div>
            <div className="relative shrink-0" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                  <p className="leading-[16px]">Facebook</p>
                </div>
              </div>
            </div>
          </div>
          <div data-action="social" role="button" tabIndex={0} aria-label={"GitHub"} className="bg-white border border-[#e2e8f0] border-solid content-stretch flex gap-[6px] h-[40px] items-center justify-center pl-[31.48px] pr-[31.51px] py-px relative shrink-0" data-name="Button - GitHub">
            <div className="relative shrink-0 size-[16px]" data-name="SVG">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/82517.svg" />
            </div>
            <div className="relative shrink-0" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                  <p className="leading-[16px]">GitHub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Bottom Registration Link">
        <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start justify-center leading-[0] not-italic pt-[3.5px] relative size-full text-[12px] text-center whitespace-nowrap">
          <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[#475569]">
            <p className="leading-[16px]">{`Chưa có tài khoản? `}</p>
          </div>
          <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center relative shrink-0 text-[#047857]">
            <p data-action="register" role="button" tabIndex={0} aria-label={"Đăng ký ngay"} className="leading-[16px]">Đăng ký ngay</p>
          </div>
        </div>
      </div>
    </div>
  );
}
