import React from 'react'

const Explore = ({ dataExplore }) => {
  return (
    // home-section-2
    <div className="relative w-full px-[50px] border-t border-solid border-[#1c1c1c] bg-[#0d0d0d]">
      {/* home-section-wrp-2 */}
      <div className="w-full h-full max-w-[1400px] mx-auto pt-10 pb-20 justify-between items-start">
        {/* links-grid-2 */}
        <div className="flex w-full mb-20 justify-between flex-wrap auto-cols-fr grid-cols-2 grid-flow-row ">
          {/* link-card-2 */}
          {
            dataExplore.map(data => (
              <div key={data.id} className="overflow-hidden lg:w-[49%] lg:mb-0 md:w-[full] mb-5 pt-[50px] border border-solid border-[hsla(0,0%,100%,.07)] rounded-2xl bg-[#171717] no-underline">
                {/* link-card-wrp-1 */}
                <div className="px-5">
                  {/* card-txt-3 */}
                  <div className="mb-3 text-[#f90] text-sm leading-[14px] font-bold text-center tracking-[1.6px] uppercase">
                    {data.heading}
                  </div>
                  {/* card-hd-1 */}
                  <h3 className="mb-4 text-white text-[32px] leading-8 font-semibold text-center tracking-[.4px]">
                    {data.title}
                  </h3>
                  {/* card-txt-2 */}
                  <div className="w-4/5 mx-auto mb-[30px] text-white text-xl leading-[30px] font-medium text-center tracking-[.24px]">
                    {data.desc}
                  </div>
                  {/* card-btn-1 w-button kurang transition */}
                  <a href="/" className="relative flex w-[190px] h-12 mb-10 mx-auto px-6 justify-center items-center border-none rounded-3xl bg-white font-sohemono text-[#050505] text-sm leading-[18px] tracking-[.14px] border-0 cursor-pointer">
                    {data.btn}
                  </a>
                </div>
                {/* img-array-main */}
                <div className="relative flex overflow-hidden -mb-[15px] justify-between items-stretch">
                  {/* img-array-wrp-1 */}
                  <div className="relative flex-col flex-1">
                    {/* array-img-1 */}
                    <img src={data.images[0]} loading="lazy" alt="" className="mb-[15px] rounded-r-xl border-0 max-w-full align-middle inline-block" />
                    {/* array-img-2 */}
                    <img src={data.images[1]} loading="lazy" alt="" className="rounded-tr-xl rounded-bl-xl border-0 max-w-full align-middle inline-block" />
                  </div>
                  {/* img-array-wrp-2 */}
                  <div className="relative w-[35%] mx-[15px] pt-5 flex-col">
                    {/* array-img-3 */}
                    <img src={data.images[2]} loading="lazy" alt="" className="mb-[15px] rounded-xl" />
                    {/* array-img-4 */}
                    <img src={data.images[3]} loading="lazy" alt="" className="rounded-t-xl" />
                  </div>
                  {/* img-array-wrp-1 */}
                  <div className="relative flex-col flex-1">
                    {/* array-img-5 */}
                    <img src={data.images[4]} loading="lazy" alt="" className="mb-[15px] rounded-l-xl" />
                    {/* array-img-6 */}
                    <img src={data.images[5]} loading="lazy" alt="" className="rounded-tl-xl rounded-br-xl" />
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        {/* subscribe-banner */}
        <div className="w-[560px] max-w-full mx-auto">
          {/* subscribe-hd-1 */}
          <div className="mb-5 text-white text-2xl leading-6 font-extrabold text-center tracking-[2px]">
            GET THE WEEKLY SUMMARY
          </div>
          {/* subscribe-txt-1 */}
          <div className="mb-[30px] font-sohemono-buch text-white text-[15px] leading-[27px] text-center tracking-[.15px]">
            Join 7,500+ including Fortune 500 CEOs, championship coaches, and bestselling authors who get my free weekly summary.
          </div>
          {/* form-block-1 w-form */}
          <div className="w-4/5 mx-auto mb-[45px]">
            <form>
              {/* form-wrp-1 */}
              <div className="flex w-full h-14 justify-between flex-wrap">
                {/* txt-field-1 w-input */}
                <input type="email" className="h-full mb-0 px-5 flex-1 border-[1.5px] border-solid border-white rounded-l-lg bg-transparent font-sohemono-buch text-white tracking-[.24px]" autoComplete="off" maxLength="256" name="Subscribe-Email" data-name="Subscribe Email" placeholder="Enter your email…" id="Subscribe-Email" required="" />
                {/* form-btn-1 w-butto kurang transition */}
                <input type="submit" value="Try It" data-wait="One sec…" className="h-full px-5 rounded-r-lg bg-white font-sohemono text-[rgb(5,5,5)] text-sm leading-[22px] tracking-[0.24px] border-[1.5px] border-solid border-white" />
              </div>
            </form>
          </div>
          {/* subscribe-txt-2 */}
          <div className="w-4/5 mx-auto mb-0 font-sohemono-buch text-[rgb(122,122,122)] text-[15px] leading-[18px] text-center tracking-[0.32px]">
            By subscribing, you agree to our 
            <a href="/legal/privacy-policy" target="_blank" className="font-sohemono-buch text-[rgb(122,122,122)] text-[15px] leading-[18px] cursor-pointer underline"> privacy policy</a>.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore