import React from 'react'

const CardIcon = ({ icon, title, desc }) => {
  return (
    // {/* link-card-1 w-inline-block */}
    <a href="/" className="relative flex lg:w-[32%] lg:mb-0 md:w-[46%] sm:w-full mb-5 py-[30px] px-[50px] flex-col justify-start items-center border-none rounded-2xl bg-white no-underline cursor-pointer">
      {/* categories-icon-wrp */}
      <div className="relative flex w-11 h-11 mx-auto mb-4 justify-center items-center rounded-[50%] bg-black">
        {/* tags-icon-2 */}
        <img src={icon} loading="lazy" alt="" className="w-[18px] rounded-none border-0 max-w-full align-middle inline-block" />
      </div>
      {/* card-txt-1 */}
      <div className="mb-1 text-base font-extrabold text-center tracking-[.96px] uppercase text-black">
        {title}
      </div>
      {/* categories-txt-2 */}
      <div className="w-[90%] mx-auto text-[15px] leading-5 text-center tracking-[.32px] text-black">
        {desc}
      </div>
    </a>
  )
}

export default CardIcon