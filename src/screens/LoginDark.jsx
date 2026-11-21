import { FieldControl } from '../controls.jsx'

export default function LoginDark() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(1, 68, 33) 0%, rgb(1, 68, 33) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="[DARK] Đăng nhập">
      <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-0 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[460px]" data-name="STANDALONE LOGIN MODAL CARD COMPONENT:shadow" />
      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Modal Header">
        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-name="Container">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.6px] whitespace-nowrap">
              <p data-action="login" role="button" tabIndex={0} aria-label={"Đăng nhập"} className="leading-[30px]">Đăng nhập</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#bcb88a] text-[12px] tracking-[0.3px] whitespace-nowrap">
              <p className="leading-[16px]">Chào mừng bạn quay lại với nền tảng học WeEdu</p>
            </div>
          </div>
        </div>
        <div data-action="close" role="button" tabIndex={0} aria-label={"Đóng modal"} className="bg-[rgba(1,50,32,0.6)] content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Button - Đóng modal">
          <div className="relative shrink-0 size-[20px]" data-name="SVG">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/69ece.svg" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Login Form">
        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Field 1: Email hoặc tên đăng nhập">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e5e7eb] text-[12px] tracking-[0.6px] uppercase w-full">
              <p className="leading-[16px]">Email hoặc tên đăng nhập</p>
            </div>
          </div>
          <div className="bg-[#013220] border border-[#355e3b] border-solid content-stretch flex h-[44px] items-start justify-center overflow-clip px-[15px] py-[13.5px] relative shrink-0 w-full" data-name="Input">
            <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
                  <p className="leading-[normal]">nhapemail@weedu.vn</p>
                </div>
              </div>
            </div>
          <FieldControl field={"email"} label={"Email hoặc tên đăng nhập"} hint={"nhapemail@weedu.vn"} /></div>
        </div>
        <div className="content-stretch flex flex-col gap-[6px] items-start pt-[16px] relative shrink-0 w-full" data-name="Field 2: Mật khẩu">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e5e7eb] text-[12px] tracking-[0.6px] uppercase w-full">
              <p className="leading-[16px]">Mật khẩu</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
            <div className="bg-[#013220] border border-[#355e3b] border-solid content-stretch flex h-[44px] items-start justify-center overflow-clip pl-[15px] pr-[45px] py-[14px] relative shrink-0 w-full" data-name="Input">
              <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[1.4px] w-full">
                    <p className="leading-[normal]">••••••••••••</p>
                  </div>
                </div>
              </div>
            <FieldControl field={"password"} label={"Mật khẩu"} hint={"••••••••••••"} /></div>

          </div>
        </div>
        <button type="button" className="forgot-link" data-action="recover">Quên mật khẩu?</button>
        <div data-action="submit-auth" role="button" tabIndex={0} aria-label={"Đăng nhập"} className="bg-[#8a9a5b] content-stretch flex gap-[7.99px] h-[44px] items-center justify-center relative shrink-0 w-full" data-name="Primary CTA Button → Button">
          <div className="absolute bg-[rgba(255,255,255,0)] h-[44px] left-0 right-0 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0" data-name="Button:shadow" />
          <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#013220] text-[14px] text-center tracking-[0.35px] whitespace-nowrap">
              <p className="leading-[20px]">Đăng nhập</p>
            </div>
          </div>
          <div className="relative shrink-0 size-[16px]" data-name="SVG">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/16193.svg" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Divider Line">
        <div className="absolute content-stretch flex inset-[0_0_0.5px_0] items-center" data-name="Container">
          <div className="border-[rgba(53,94,59,0.7)] border-solid border-t flex-[1_0_0] h-px min-w-px relative" data-name="Horizontal Divider" />
        </div>
        <div className="bg-[#014421] content-stretch flex flex-col items-start px-[12px] relative shrink-0" data-name="Background">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bcb88a] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
            <p className="leading-[16.5px]">HOẶC TIẾP TỤC VỚI</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Social Login Buttons (Google, Facebook, GitHub)">
        <div data-action="social" role="button" tabIndex={0} aria-label={"Google"} className="bg-[rgba(1,50,32,0.6)] border border-[#355e3b] border-solid content-stretch flex gap-[6px] h-[40px] items-center justify-center pl-[31.17px] pr-[31.18px] py-px relative shrink-0" data-name="Button - Google">
          <div className="relative shrink-0 size-[16px]" data-name="SVG">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/a82cd.svg" />
          </div>
          <div className="relative shrink-0" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5e7eb] text-[12px] text-center whitespace-nowrap">
                <p className="leading-[16px]">Google</p>
              </div>
            </div>
          </div>
        </div>
        <div data-action="social" role="button" tabIndex={0} aria-label={"Facebook"} className="bg-[rgba(1,50,32,0.6)] border border-[#355e3b] border-solid content-stretch flex gap-[6px] h-[40px] items-center justify-center px-[23.55px] py-px relative shrink-0" data-name="Button - Facebook">
          <div className="relative shrink-0 size-[16px]" data-name="SVG">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/1bd36.svg" />
          </div>
          <div className="relative shrink-0" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5e7eb] text-[12px] text-center whitespace-nowrap">
                <p className="leading-[16px]">Facebook</p>
              </div>
            </div>
          </div>
        </div>
        <div data-action="social" role="button" tabIndex={0} aria-label={"GitHub"} className="bg-[rgba(1,50,32,0.6)] border border-[#355e3b] border-solid content-stretch flex gap-[6px] h-[40px] items-center justify-center pl-[31.82px] pr-[31.85px] py-px relative shrink-0" data-name="Button - GitHub">
          <div className="relative shrink-0 size-[16px]" data-name="SVG">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/fe1d8.svg" />
          </div>
          <div className="relative shrink-0" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5e7eb] text-[12px] text-center whitespace-nowrap">
                <p className="leading-[16px]">GitHub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] content-stretch flex gap-[4px] items-start justify-center leading-[0] not-italic pt-[3.5px] relative shrink-0 text-[12px] text-center w-full whitespace-nowrap" data-name="Bottom Registration Link">
        <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[#d1d5db]">
          <p className="leading-[16px]">{`Chưa có tài khoản? `}</p>
        </div>
        <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center relative shrink-0 text-[#8a9a5b]">
          <p data-action="register" role="button" tabIndex={0} aria-label={"Đăng ký ngay"} className="leading-[16px]">Đăng ký ngay</p>
        </div>
      </div>
    </div>
  );
}
