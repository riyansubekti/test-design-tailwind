import React from 'react'
import { ReactComponent as Logo }  from '../assets/logo.svg'
import { GlobalContext } from '../context';

const Header = () => {
  const { setModal, setMenu, menu } = React.useContext(GlobalContext);
  return (
    <div>
      {/* nav-menu */}
      <div className={`${menu ? '' : 'hidden'} h-auto relative z-10 md:flex w-full md:h-14 mt-[50px] px-4 justify-center items-stretch bg-body transition ease-in-out`}>
        {/* nav-border-2 */}
        <div className="absolute left-0 right-0 top-0 bottom-auto w-full h-[1px] bg-[#0d0d0d]"></div>
        {/* nav-border-3 */}
        <div className="absolute left-0 top-auto right-0 bottom-0 hidden w-full h-[1.5px] bg-[#171717]"></div>
        {/* menu-grid-1 */}
        <div className="flex flex-wrap md:flex-nowrap w-full h-full max-w-[1400px] justify-between auto-cols-fr grid-cols-4 grid-flow-row">
          {/* menu-link-1 kurang transition*/}
          <a href="/" className="relative w-full md:w-1/5 h-full py-[18px] justify-center items-center bg-transparent text-white no-underline cursor-pointer border-none hover:text-[#f90]">
            {/* menu-link-txt-1 */}
            <div className="relative top-[2px] font-sohemono text-sm leading-[18px] text-center tracking-[.28px]">Podcast</div>
          </a>
          <a href="/" className="relative w-full md:w-1/5 h-full py-[18px] justify-center items-center bg-transparent text-white no-underline cursor-pointer border-none hover:text-[#f90]">
            {/* menu-link-txt-1 */}
            <div className="relative top-[2px] font-sohemono text-sm leading-[18px] text-center tracking-[.28px]">Newsletter</div>
          </a>
          <a href="/" className="relative w-full md:w-1/5 h-full py-[18px] justify-center items-center bg-transparent text-white no-underline cursor-pointer border-none hover:text-[#f90]">
            {/* menu-link-txt-1 */}
            <div className="relative top-[2px] font-sohemono text-sm leading-[18px] text-center tracking-[.28px]">{`Topics & Tags`}</div>
          </a>
          <a href="/" className="relative w-full md:w-1/5 h-full py-[18px] justify-center items-center bg-transparent text-white no-underline cursor-pointer border-none hover:text-[#f90]">
            {/* menu-link-txt-1 */}
            <div className="relative top-[2px] font-sohemono text-sm leading-[18px] text-center tracking-[.28px]">More</div>
          </a>
          <a href="/" className="md:hidden relative w-full md:w-1/5 h-full py-[18px] justify-center items-center bg-transparent text-white no-underline cursor-pointer border-none hover:text-[#f90]">
            <div className="flex  h-10 px-[15px] justify-center items-center border border-solid border-[hsla(0,0%,100%,.08)] rounded-md bg-[hsla(0,0%,87.8%,.08)] text-[#e0e0e0] no-underline cursor-pointer">
              {/* btn-txt-1 */}
              <div className="relative text-xs leading-[14px] font-sohemono">
                Subscribe
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* nav-bar */}
      <div className="fixed left-0 right-0 top-0 bottom-auto z-[100] overflow-hidden w-full h-[50px]">
        {/* nav-wrp-1 */}
        <div className="relative z-[1] flex w-full h-[50px] px-4 justify-center items-stretch border-b border-solid border-[#1c1c1c] bg-[hsla(0,0%,9%,.92)]">
          {/* nav-wrp-2 */}
          <div className="absolute left-4 top-0 right-auto bottom-0 flex h-full justify-start items-center">
            {/* search-link-1 */}
            <div className="relative w-[30px] h-[30px] border border-solid border-[hsla(0,0%,100%,.08)] rounded-md bg-[hsla(0,0%,87.8%,.08)] bg-icon-search bg-center bg-[length:14px] bg-no-repeat cursor-pointer" onClick={() => setModal(true)}>
            </div>
          </div>
          {/* home-link-1 kurang transition */}
          <a href="/" className="flex w-[162px] h-full pt-[5px] justify-center items-center border-none text-white max-w-full bg-transparent font-untitled">
            {/* logo-embed */}
            <Logo />
          </a>
          {/* nav-wrp-3 */}
          <div className="hidden absolute left-auto top-0 right-4 bottom-0 md:flex h-full justify-end items-center">
            {/* subscribe-link-1 */}
            <div className="flex  h-[30px] px-[15px] justify-center items-center border border-solid border-[hsla(0,0%,100%,.08)] rounded-md bg-[hsla(0,0%,87.8%,.08)] text-[#e0e0e0] no-underline cursor-pointer">
              {/* btn-txt-1 */}
              <div className="relative text-xs leading-[14px] font-sohemono">
                Subscribe
              </div>
            </div>
            {/* hamburger menu in here */}
          </div>

          <div onClick={() => setMenu(value => !value)} className="md:hidden absolute left-auto top-0 right-4 bottom-0 flex h-full justify-end items-center">
            {/* subscribe-link-1 */}
            <div className="flex  h-[30px] px-[15px] justify-center items-center border border-solid border-[hsla(0,0%,100%,.08)] rounded-md bg-[hsla(0,0%,87.8%,.08)] text-[#e0e0e0] no-underline cursor-pointer">
              {/* hamburger-main */}
              <div className="block relative w-4 h-[14px] cursor-pointer">
                <div className="absolute left-0 right-auto top-0 bottom-auto w-full h-[2px] rounded-[1px] bg-[#e0e0e0]"></div>
                <div className="absolute left-0 right-auto top-0 bottom-0 w-full h-[2px] rounded-[1px] bg-[#e0e0e0] mt-auto mb-auto"></div>
                <div className="absolute left-0 right-auto top-auto bottom-0 w-full h-[2px] rounded-[1px] bg-[#e0e0e0]"></div>
              </div>
            </div>
            {/* hamburger menu in here */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header