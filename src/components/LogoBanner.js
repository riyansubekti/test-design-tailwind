import React from 'react'

const LogoBanner = () => {
  return (
    // logos-banner
    <div className="relative block w-full h-auto pt-2 pb-[6px] px-[50px] auto-cols-fr grid-cols-2 grid-flow-row border-t border-b border-solid border-[#1c1c1c] bg-[#0d0d0d]">
      {/* logo-banner-grid-1 */}
      <div className="relative flex w-full h-full max-w-[1400px] mx-auto justify-between items-center auto-cols-fr grid-cols-5 grid-flow-row">
        {/* logo-banner-wrp-1 */}
        <div className="flex w-1/4 h-full justify-center items-center auto-cols-fr grid-cols-2 grid-flow-row">
          {/* logo-svg-1 billboard */}
          <img src="https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f47938df703cc23c3f591a1_ds-logo-billboard.svg" loading="lazy" alt="" className="relative w-4/5 -top-[2px] border-0 max-w-full align-middle inline-block" />
        </div>
        <div className="flex w-1/4 h-full justify-center items-center auto-cols-fr grid-cols-2 grid-flow-row">
          {/* logo-svg-1 billboard */}
          <img src="https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f47938dac97a14ded1bc1cc_ds-logo-nytimes.svg" loading="lazy" alt="" className="relative w-4/5 -top-[2px] border-0 max-w-full align-middle inline-block" />
        </div>
        <div className="flex w-1/4 h-full justify-center items-center auto-cols-fr grid-cols-2 grid-flow-row">
          {/* logo-svg-1 billboard */}
          <img src="https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f47938d45fe451a495bd105_ds-logo-bloomberg.svg" loading="lazy" alt="" className="relative w-4/5 -top-[2px] border-0 max-w-full align-middle inline-block" />
        </div>
        <div className="flex w-1/4 h-full justify-center items-center auto-cols-fr grid-cols-2 grid-flow-row">
          {/* logo-svg-1 billboard */}
          <img src="https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f47938d82cc6d271fee4843_ds-logo-washpost.svg" loading="lazy" alt="" className="relative w-4/5 -top-[2px] border-0 max-w-full align-middle inline-block" />
        </div>
        <div className="flex w-1/4 h-full justify-center items-center auto-cols-fr grid-cols-2 grid-flow-row">
          {/* logo-svg-1 billboard */}
          <img src="https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f47938d0744f5accf1a88a2_ds-logo-espn.svg" loading="lazy" alt="" className="relative w-4/5 -top-[2px] border-0 max-w-full align-middle inline-block" />
        </div>
      </div>
    </div>
  )
}

export default LogoBanner