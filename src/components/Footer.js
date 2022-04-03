import React from 'react'
import { ReactComponent as Logo }  from '../assets/logo.svg'
import { ReactComponent as IconArrowRight } from '../assets/arrowRight.svg'

const Footer = () => {
  return (
    // footer
    <div className="relative w-full">
      {/* footer-wrp-1 */}
      <div className='px-[50px] border-t border-b border-solid border-[#171717] bg-[#121212]'>
        {/* footer-wrp-2 */}
        <div className="flex w-full h-full max-w-[1400px] mx-auto lg:justify-between justify-center flex-wrap">
          {/* footer-wrp-3 */}
          <div className="lg:w-2/5 lg:mb-0 w-full mb-5 h-full pt-[60px] pb-[55px] text-center lg:text-left">
            {/* footer-txt-wrp-1 */}
            <div className="relative">
              {/* class="footer-txt-3" */}
              <div className="mx-auto lg:mx-0 relative z-[1] w-[350px] font-sohemono-buch text-white leading-[26px] tracking-[0.14px]">
                Daniel Scrivner is an entreprenuer and investor focused on building enduring companies and breakthrough products.
              </div>
              {/* footer-link-1 w-inline-block kurang transition*/}
              <a href="/" className="mx-auto lg:mx-0 flex w-[300px] mb-[58px] justify-start items-center border-none text-[#b8b8b8]">
                {/* footer-link-txt-1 */}
                <div className="relative z-[1] mr-[5px] font-sohemono-buch text-sm leading-[26px] tracking-[0.14px]">
                  See what he’s working on now
                </div>
                {/* footer-link-arrow-wrp */}
                <div className="relative left-[2px] top-[2px] flex w-[7px] justify-end items-center text-[#b8b8b8]">
                  {/* footer-icon w-embed */}
                  <div className="relative flex justify-center items-center">
                    <IconArrowRight />
                  </div>
                </div>
              </a>
            </div>
            {/* home-link-footer w-inline-block w--current kurang transition */}
            <a href="/" className="w-48 justify-center items-center border-none text-white max-w-full inline-block bg-transparent text-xl leading-[30px] no-underline font-untitled">
              <Logo />
            </a>
          </div>
          {/* footer-wrp-4 */}
          <div className="flex lg:w-3/5 lg:mb-0 w-full mb-5 h-full pt-[60px] pb-[55px] justify-start items-stretch">
            {/* footer-wrp-5 */}
            <div className="w-1/4 h-full">
              {/* footer-txt-2 */}
              <div className="mb-7 font-sohemono text-white leading-[22px]">Explore</div>
              {/* footer-txt-link-1 kurang transition */}
              <a href="/" className="block mb-7 border-none font-sohemono-buch text-[rgb(184,184,184)] text-sm font-normal tracking-[0.14px] cursor-pointer no-underline">
                Most Popular
              </a>
              <a href="/" className="block mb-7 border-none font-sohemono-buch text-[rgb(184,184,184)] text-sm font-normal tracking-[0.14px] cursor-pointer no-underline">
                Most Recent
              </a>
              <a href="/" className="block mb-7 border-none font-sohemono-buch text-[rgb(184,184,184)] text-sm font-normal tracking-[0.14px] cursor-pointer no-underline">
                {`Topics & Tags`}
              </a>
              <a href="/" className="block mb-7 border-none font-sohemono-buch text-[rgb(184,184,184)] text-sm font-normal tracking-[0.14px] cursor-pointer no-underline">
                Friday Five
              </a>
            </div>
            <div className="w-1/4 h-full">
              {/* footer-txt-2 */}
              <div className="mb-7 font-sohemono text-white leading-[22px]">Outliers</div>
              {/* footer-txt-link-1 kurang transition */}
              <a href="/" className="block mb-7 border-none font-sohemono-buch text-[rgb(184,184,184)] text-sm font-normal tracking-[0.14px] cursor-pointer no-underline">
                Episodes
              </a>
              <a href="/" className="block mb-7 border-none font-sohemono-buch text-[rgb(184,184,184)] text-sm font-normal tracking-[0.14px] cursor-pointer no-underline">
                Subscribe Now
              </a>
              <a href="/" className="block mb-7 border-none font-sohemono-buch text-[rgb(184,184,184)] text-sm font-normal tracking-[0.14px] cursor-pointer no-underline">
                About the Show
              </a>
              <a href="/" className="block mb-7 border-none font-sohemono-buch text-[rgb(184,184,184)] text-sm font-normal tracking-[0.14px] cursor-pointer no-underline">
                Sponsors
              </a>
            </div>
            <div className="w-1/4 h-full">
              {/* footer-txt-2 */}
              <div className="mb-7 font-sohemono text-white leading-[22px]">Articles</div>
              {/* footer-txt-link-1 kurang transition */}
              <a href="/" className="block mb-7 border-none font-sohemono-buch text-[rgb(184,184,184)] text-sm font-normal tracking-[0.14px] cursor-pointer no-underline">
                Show Notes
              </a>
              <a href="/" className="block mb-7 border-none font-sohemono-buch text-[rgb(184,184,184)] text-sm font-normal tracking-[0.14px] cursor-pointer no-underline">
                Transcripts
              </a>
              <a href="/" className="block mb-7 border-none font-sohemono-buch text-[rgb(184,184,184)] text-sm font-normal tracking-[0.14px] cursor-pointer no-underline">
                Essays
              </a>
              <a href="/" className="block mb-7 border-none font-sohemono-buch text-[rgb(184,184,184)] text-sm font-normal tracking-[0.14px] cursor-pointer no-underline">
                Snippets
              </a>
            </div>
            <div className="w-1/4 h-full">
              {/* footer-txt-2 */}
              <div className="mb-7 font-sohemono text-white leading-[22px]">More</div>
              {/* footer-txt-link-1 kurang transition */}
              <a href="/" className="block mb-7 border-none font-sohemono-buch text-[rgb(184,184,184)] text-sm font-normal tracking-[0.14px] cursor-pointer no-underline">
                About Daniel
              </a>
              <a href="/" className="block mb-7 border-none font-sohemono-buch text-[rgb(184,184,184)] text-sm font-normal tracking-[0.14px] cursor-pointer no-underline">
                Business Card
              </a>
              <a href="/" className="block mb-7 border-none font-sohemono-buch text-[rgb(184,184,184)] text-sm font-normal tracking-[0.14px] cursor-pointer no-underline">
                Newsroom
              </a>
              <a href="/" className="block mb-7 border-none font-sohemono-buch text-[rgb(184,184,184)] text-sm font-normal tracking-[0.14px] cursor-pointer no-underline">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* footer-base-1 */}
      <div className="relative w-full h-28 lg:h-14 lg:pb-0 pb-5 px-[50px] bg-[#121212]">
        {/* footer-base-wrp-1 */}
        <div className="flex w-full h-full max-w-[1400px] mx-auto justify-between flex-wrap">
          {/* footer-base-wrp-2 */}
          <div className="flex w-full lg:w-2/5 justify-center lg:justify-start items-center">
            {/* footer-base-txt-1 */}
            <div className="font-sohne-buch text-[rgb(82,82,82)] text-xs leading-[18px] tracking-[0.43px]">
              Copyright © {new Date().getFullYear()} Daniel Scrivner. All rights reserved.
            </div>
          </div>
          {/* footer-base-wrp-3 */}
          <div className="flex w-full lg:w-3/5 justify-center lg:justify-end items-center">
            {/* footer-base-link-1 kurang transition */}
            <a href="/" className="ml-[30px] border-none font-sohne-buch text-[rgb(82,82,82)] text-xs leading-[18px] tracking-[0.43px] cursor-pointer no-underline">{`Privacy & Terms`}</a>
            <a href="/" className="ml-[30px] border-none font-sohne-buch text-[rgb(82,82,82)] text-xs leading-[18px] tracking-[0.43px] cursor-pointer no-underline">Disclosures</a>
            <a href="/" className="ml-[30px] border-none font-sohne-buch text-[rgb(82,82,82)] text-xs leading-[18px] tracking-[0.43px] cursor-pointer no-underline">Sitemap</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer