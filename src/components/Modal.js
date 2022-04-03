import React from 'react'
import { ModalContext } from '../context';

const Modal = () => {
  const { setModal } = React.useContext(ModalContext);
  return (
    // modal-main-1
    <div className="flex fixed left-0 right-0 top-0 bottom-0 z-[200] w-full h-full flex-col justify-center items-center bg-[rgb(18,18,18,.98)] ">
      {/* modal-close-bg */}
      <div className="absolute left-10 right-0 top-20 bottom-0 w-full h-full" onClick={() => setModal(false)}></div>
      {/* modal-1 */}
      <div className="relative z-[1] w-[400px] py-[30px] border border-solid border-[#262626] rounded-2xl bg-[#171717]">
        {/* search-modal-wrp-1 */}
        <div className="px-[30px]">
          {/* modal-txt-1 */}
          <div className="w-[85%] mx-auto mb-5 font-sohemono-buch text-white text-sm leading-[23px] text-center tracking-[0.16px]">
            Quickly find episodes, articles, and pages across the website.
          </div>
          {/* modal-search-1 w-form */}
          <form className="relative mb-0">
            {/* search-field-main w-input kurang transition */}
            <input type="search" className="h-[60px] mb-3 pr-5 pl-[60px] bg-transparent bg-icon-search bg-[length:20px] font-sohemono-buch tracking-[0.12px] border-[1.5px] border-solid border-[rgb(38,38,38)] rounded-[30px] bg-input-search bg-no-repeat block w-full py-2 px-3 text-sm align-middle text-[#333]" autocomplete="off" autofocus="true" maxlength="256" name="query" placeholder="Search…" id="search-field" required="" />
            {/* search-btn-1 w-button kurang transition */}
            <input type="submit" value="Search" className="w-full h-[60px] bg-[rgb(33,33,33)] font-sohemono text-white tracking-[0.16px] border border-solid border-[rgb(43,43,43)] rounded-[30px]" />
          </form>
        </div>
        {/* search-modal-wrp-2 */}
        <div className="mt-7 pt-7 px-[30px] border-t border-solid border-[#212121]">\
          {/* modal-grid-1 */}
          <div className="flex relative w-full justify-between auto-cols-fr grid-cols-3 grid-flow-row">
            {/* modal-wrp-1 kurang transition */}
            <div className="w-full h-full text-[#ccc]">
              {/* modal-icon-link w-inline-block kurang transition */}
              <a href="/" className="relative flex w-[60px] h-[60px] mb-[15px] mx-auto justify-center items-center border border-solid border-[#212121] no-underline cursor-pointer rounded-full">
                <img src="https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f48e96eee96f56ecaa77e0b_popular-white.svg" loading="lazy" alt="" className="w-[23px]" />
              </a>
              {/* modal-txt-2 */}
              <div className="w-[85%] mx-auto font-sohemono-buch text-xs leading-[22px] text-center tracking-[0.56px]">Popular</div>
            </div>
            <div className="w-full h-full text-[#ccc]">
              {/* modal-icon-link w-inline-block kurang transition */}
              <a href="/" className="relative flex w-[60px] h-[60px] mb-[15px] mx-auto justify-center items-center border border-solid border-[#212121] no-underline cursor-pointer rounded-full">
                <img src="https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f54b4db31df4cefcc660906_latest-posts-white.svg" loading="lazy" alt="" className="w-[23px]" />
              </a>
              {/* modal-txt-2 */}
              <div className="w-[85%] mx-auto font-sohemono-buch text-xs leading-[22px] text-center tracking-[0.56px]">Recent</div>
            </div>
            <div className="w-full h-full text-[#ccc]">
              {/* modal-icon-link w-inline-block kurang transition */}
              <a href="/" className="relative flex w-[60px] h-[60px] mb-[15px] mx-auto justify-center items-center border border-solid border-[#212121] no-underline cursor-pointer rounded-full">
                <img src="https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f5776bf1f735a4480fcc81f_topics-and-tags-white.svg" loading="lazy" alt="" className="w-[23px]" />
              </a>
              {/* modal-txt-2 */}
              <div className="w-[85%] mx-auto font-sohemono-buch text-xs leading-[22px] text-center tracking-[0.56px]">Browse All</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal