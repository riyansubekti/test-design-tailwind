import React from 'react'

const Hero = () => {
  return (
    // home-section-2
    <div className="bg-[#050505] relative w-full px-[50px] border-t border-solid border-[#1c1c1c]">
      {/* hero-section-wrp */}
      <div className="w-full h-full max-w-[1400px] mx-auto justify-between items-start">
        {/* hero-wrp-1 */}
        <div className="flex flex-col-reverse md:flex-row overflow-visible w-full justify-between flex-wrap items-stretch auto-cols-fr grid-cols-2 grid-rows-2 object-fill">
          {/* hero-wrp-2 */}
          <div className="relative w-full mt-8 md:mt-0 md:w-[42%] py-[5%] pr-[2.5%]">
            <div className="w-[76%] md:w-full mx-auto">
              {/* hero-hd-1 */}
              <h1 className="mb-4 text-center md:text-left text-white text-[32px] leading-[38px] font-bold">
                Timeless insights for business and life.
              </h1>
              {/* hero-para-1 */}
              <p className="mb-6 text-center md:text-left text-white text-xl leading-[30px] font-medium tracking-[.24px]">
                Every week, I sit down with someone in the Top 1% of their field — from NYT bestselling authors to Oscar winners — to decode what they've mastered. Listen as I uncover the tactics, routines, and habits that will propel you to the top of your field.
              </p>
              {/* collection-list-wrapper-2 w-dyn-list */}
              <div className="mb-2 flex flex-wrap items-center justify-center md:items-start md:justify-start">
                {/* hero-card-1 w-inline-block kurang transition*/}
                <a href="/" className="relative flex w-[388px] p-3 justify-start flex-wrap items-center border border-solid border-[hsla(0,0%,100%,.06)] rounded-xl bg-[#141414] no-underline cursor-pointer">
                  {/* hero-card-wrp-1 */}
                  <div className="w-[100px] h-20 mr-4 rounded-md bg-img-hero-1 bg-center bg-[length:115%] bg-no-repeat"></div>
                  {/* hero-card-wrp-2 */}
                  <div className="flex-1">
                    {/* hero-card-txt-1 */}
                    <div className="text-[#f90] text-[10px] leading-[14px] font-extrabold tracking-[1.6px]">LATEST EPISODE</div>
                    {/* hero-card-wrp-3 */}
                    <div className="relative flex justify-start items-end">
                      {/* hero-card-txt-2 */}
                      <div className="font-sohne-buch text-white text-sm leading-5 tracking-[0.36px]">
                        Playbook: Brian Scudamore – Founder of 1-800-GOT-JUNK? and Author of WTF?!
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              {/* hero-btn-wrp-1 */}
              <div className="flex flex-wrap w-full md:w-[388px] mb-3 md:justify-between justify-center items-center">
                {/* hero-btn-1 w-button kurang transition dan border-image*/}
                <a href="/" className="relative md:mx-0 md:mr-3 mb-2 md:mb-0 flex h-11 justify-center items-center bg-[rgb(20,20,20)] font-sohemono text-white text-sm leading-5 tracking-[0.14px] pb-[2px] px-5 border border-solid border-[rgba(255,255,255,0.06)] rounded-lg no-underline cursor-pointer w-full md:w-[38%]">Start Here</a>
                <a href="/" className="relative md:mx-0 flex h-11 justify-center items-center bg-[rgb(20,20,20)] font-sohemono text-white text-sm leading-5 tracking-[0.14px] pb-[2px] px-5 border border-solid border-[rgba(255,255,255,0.06)] rounded-lg no-underline cursor-pointer w-full md:w-[58%]">Listen to the Podcast</a>
              </div>
            </div>
          </div>
          {/* hero-wrp-3 */}
          <div className="relative flex w-full md:w-1/2 md:-mt-20 mt-14 -mb-[60px] justify-center md:justify-between items-center object-fill">
            <img src="https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f479acca51c91168e689008_card-portrait-tiny.png" loading="lazy" sizes="(max-width: 479px) 70vw, (max-width: 767px) 55vw, (max-width: 991px) 54vw, (max-width: 1919px) 45vw, 700px" srcSet="https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f479acca51c91168e689008_card-portrait-tiny-p-500.png 500w, https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f479acca51c91168e689008_card-portrait-tiny-p-800.png 800w, https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f479acca51c91168e689008_card-portrait-tiny.png 1000w" alt="" className="w-[76%]  md:w-full" />
            {/* hero-img-overlay */}
            <div className="absolute left-0 top-0 right-0 bottom-0 block w-full h-full flex-col justify-center items-center auto-cols-fr grid-cols-2 grid-flow-row bg-gradient-to-t from-[#050505,5%] to-[rgba(5,5,5,0),20%]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero