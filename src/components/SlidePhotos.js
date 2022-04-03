import React from 'react'
import CardIcon from './CardIcon'

const SlidePhotos = ({ dataSlide, dataCardIcon }) => {
  return (
    // home-section-3
    <div className="relative w-full px-[50px] border-t border-[#1c1c1c] bg-[#0d0d0d]">
      {/* home-section-wrp-1 */}
      <div className="w-full h-full max-w-[1560px] mx-auto py-10 justify-between items-start">
        {/* slider-desktop w-slider */}
        <div className="w-full h-auto mb-5 pb-10 bg-transparent">
          {/* slider-mask-1 w-slider-mask */}
          <div className="w-[90%] max-w-[1400px] mx-auto relative block overflow-hidden z-[1] left-0 right-0 h-full whitespace-nowrap">
            {/* w-slide */}
            <div className="relative inline-block align-top w-full h-full whitespace-normal text-left">
              {/* slide-wrp-1 */}
              <div className="relative flex flex-wrap w-full h-auto justify-between">
                {/* slide-collection-wrp */}
                {
                  dataSlide.map(data => (
                  <div key={data.id} className="lg:w-[32%] lg:mb-0 md:w-[46%] sm:w-full mb-5 h-auto flex-col justify-between">
                    {/* slider-collection-wrapper w-dyn-list */}
                    <div className="h-full">
                      {/* slider-collection-list w-dyn-items */}
                      <div className="flex w-full h-full justify-between auto-cols-fr grid-cols-3 grid-flow-row">
                        {/* slider-collection-item w-dyn-item */}
                        <div className="flex w-full h-auto flex-col justify-between">
                          {/* cms-card-1 w-inline-block */}
                          <a href="/" className="relative flex w-full flex-col flex-1 border-none rounded-2xl bg-transparent no-underline cursor-pointer max-w-full">
                            {/* cms-card-img-1 */}
                            <div className="relative overflow-visible w-full h-[24vh] clear-none rounded-t-2xl bg-center bg-cover bg-no-repeat object-fill" style={{ backgroundImage: `url(${data.img})` }}>
                              {/* new-episode-badge */}
                              <div className="relative top-3 w-[92px] mx-auto pt-[6px] pb-1 justify-center items-center border border-solid border-[rgba(0,0,0,.06)] rounded-[4px] bg-[rgba(0,0,0,.44)] text-center">
                                {/* new-episode-txt-1 */}
                                <div className="text-white text-[10px] leading-[10px] font-bold text-center tracking-[1px]">
                                  NEW EPISODE
                                </div>
                              </div>
                              {/* listen-now-1 */}
                              <div className="absolute left-0 top-auto right-0 bottom-3 flex w-[126px] h-9 mx-auto flex-row justify-center items-center border border-solid border-[rgba(0,0,0,.06)] rounded-[20px] bg-[rgba(0,0,0,.44)] text-white no-underline">
                                {/* listen-now-icon-1 */}
                                <img src="https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f4e5dd05ef4437b8d583390_volume-white.svg" loading="lazy" alt="" className="w-[18px] mr-[6px] border-0 max-w-full align-middle inline-block" aria-hidden="true" />
                                {/* listen-now-txt */}
                                <div className="mt-[3px] text-sm leading-[14px] font-bold tracking-[.48px]">Listen Now</div>
                              </div>
                            </div>
                            {/* cms-card-wrp-1 */}
                            <div className="relative flex w-full p-[30px] flex-col justify-between items-start flex-1 rounded-b-2xl bg-white">
                              {/* cms-card-wrp-2 */}
                              <div className="relative w-full mb-3">
                                {/* cms-card-hd-1 */}
                                <h2 className="relative block mb-[10px] text-black text-xl leading-7 font-bold tracking-[.24px] no-underline">
                                  {data.title}
                                </h2>
                                {/* cms-card-para-1 */}
                                <p className="mb-2 font-sohne-buch text-black text-base leading-[26px] tracking-normal no-underline">
                                  {data.desc}
                                </p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        {/* links-grid-1 */}
        <div className="flex flex-wrap w-[90%] max-w-[1400px] -mt-3 mx-auto justify-between auto-cols-fr grid-cols-3 grid-flow-row">
          {
            dataCardIcon.map(data => (
              <CardIcon key={data.id} title={data.title} icon={data.icon} desc={data.desc} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SlidePhotos