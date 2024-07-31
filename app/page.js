import Image from 'next/image';
import Link from 'next/link';
import bluecup from '../public/Images/bluecup.png';
import greencup from '../public/Images/greencup.png';
import purplecup from '../public/Images/purplecup.png';
import yelowcup from '../public/Images/yellowcup.png';
import blackcup from '../public/Images/blackcup.png';
import whitecup from '../public/Images/whitecup.png';
import redcup from '../public/Images/redcup.png';
import pinkcup from '../public/Images/pinkcup.png';

import child1 from '../public/Images/child1.png';
import child2 from '../public/Images/child2.png';
import child3 from '../public/Images/child3.png';

import normalimg1 from '../public/Images/normalimg1.png';
import opecimg1 from '../public/Images/opecimg1.png';
import opecimg2 from '../public/Images/opecimg2.png';
import opecimg3 from '../public/Images/opecimg3.png';

import edgeimg1 from '../public/Images/edgeimg1.png';
import edgeimg2 from '../public/Images/edgeimg2.png';
import edgeimg3 from '../public/Images/edgeimg3.png';

import edgeimg4 from '../public/Images/edgeimg4.png';
import edgeimg5 from '../public/Images/edgeimg5.png';
import edgeimg6 from '../public/Images/edgeimg6.png';

import Framepaper from '../public/Images/Framepaper.png';
import Framechild1 from '../public/Images/Framechild1.png';
import Framechild2 from '../public/Images/Framechild2.png';

// desktop images
import desktop1 from '../public/Images/desktop1.png';
import desktop2 from '../public/Images/desktop2.png';
import desktop3 from '../public/Images/desktop3.png';
import desktop4 from '../public/Images/desktop4.png';

// g flex
import desktopg1 from '../public/Images/desktopg1.png';
import desktopg2 from '../public/Images/desktopg2.png';
import desktopg3 from '../public/Images/desktopg3.png';
import desktopg4 from '../public/Images/desktopg4.png';
import desktopg5 from '../public/Images/desktopg5.png';

// h flex
import desktoph1 from '../public/Images/desktoph1.png';
import desktoph2 from '../public/Images/desktoph2.png';
import desktoph3 from '../public/Images/desktoph3.png';
import desktoph4 from '../public/Images/desktoph4.png';
import desktoph5 from '../public/Images/desktoph5.png';

export default function Home() {
  return (
    <main className='max-w-full overflow-x-hidden'>
      <section className='h-[44px] px-[10px] bg-[var(--green-main)] flex justify-between items-center text-[white]'>
        <p className='w-[321px] h-[32px] text-center text-[14px] leading-[15.96px] lg:mx-auto lg:w-[700px] lg:flex lg:items-center lg:justify-center'>
          Want a 30-40 minute break? Grab a FREE 12-page coloring book
        </p>

        <svg
          className='w-[24px] h-[24px]'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            opacity='0.4'
            d='M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z'
            fill='white'
          />
          <path
            d='M13.0604 11.9999L15.3604 9.69986C15.6504 9.40986 15.6504 8.92986 15.3604 8.63986C15.0704 8.34986 14.5904 8.34986 14.3004 8.63986L12.0004 10.9399L9.70035 8.63986C9.41035 8.34986 8.93035 8.34986 8.64035 8.63986C8.35035 8.92986 8.35035 9.40986 8.64035 9.69986L10.9404 11.9999L8.64035 14.2999C8.35035 14.5899 8.35035 15.0699 8.64035 15.3599C8.79035 15.5099 8.98035 15.5799 9.17035 15.5799C9.36035 15.5799 9.55035 15.5099 9.70035 15.3599L12.0004 13.0599L14.3004 15.3599C14.4504 15.5099 14.6404 15.5799 14.8304 15.5799C15.0204 15.5799 15.2104 15.5099 15.3604 15.3599C15.6504 15.0699 15.6504 14.5899 15.3604 14.2999L13.0604 11.9999Z'
            fill='white'
          />
        </svg>
      </section>

      <section className='h-[816px] bg-[var(--baige-main)] relative overflow-hidden'>
        <header className='h-[60px] w-full px-[16px] flex items-center justify-between lg:px-[70px] lg:h-[110px] border '>
          <div className='hidden w-[352px] h-full lg:flex items-center justify-between'>
            <Link href='' className='text-[18px] leading-[27px]'>
              Home
            </Link>
            <Link href='' className='text-[18px] leading-[27px]'>
              Cups
            </Link>
            <Link href='' className='text-[18px] leading-[27px]'>
              Books
            </Link>
            <Link href='' className='text-[18px] leading-[27px]'>
              Blogs
            </Link>
            <Link href='' className='text-[18px] leading-[27px]'>
              Our story
            </Link>
          </div>

          <h2 className='h-[41px] text-[36px] leading-[41.04px] lg:text-[60px] lg:leading-[68.4px] lg:h-full'>
            cupkin
          </h2>

          <div className='lg:flex lg:w-[350px] lg:justify-between lg:h-[full]'>
            <form className='hidden h-[65px] w-[230px] lg:flex items-center justify-around'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  opacity='0.4'
                  d='M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z'
                  fill='#606066'
                />
                <path
                  d='M21.2996 22.0001C21.1196 22.0001 20.9396 21.9301 20.8096 21.8001L18.9496 19.9401C18.6796 19.6701 18.6796 19.2301 18.9496 18.9501C19.2196 18.6801 19.6596 18.6801 19.9396 18.9501L21.7996 20.8101C22.0696 21.0801 22.0696 21.5201 21.7996 21.8001C21.6596 21.9301 21.4796 22.0001 21.2996 22.0001Z'
                  fill='#606066'
                />
              </svg>

              <input type='text' placeholder='search' className='w-[75%]' />
            </form>

            <span className='w-[98px] flex items-center justify-between'>
              <svg
                width='44'
                height='44'
                viewBox='0 0 44 44'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  opacity='0.1'
                  width='44'
                  height='44'
                  rx='10'
                  fill='#FE6D73'
                />
                <path
                  d='M26.25 32.5C27.2165 32.5 28 31.7165 28 30.75C28 29.7835 27.2165 29 26.25 29C25.2835 29 24.5 29.7835 24.5 30.75C24.5 31.7165 25.2835 32.5 26.25 32.5Z'
                  fill='#FE6D73'
                />
                <path
                  d='M18.25 32.5C19.2165 32.5 20 31.7165 20 30.75C20 29.7835 19.2165 29 18.25 29C17.2835 29 16.5 29.7835 16.5 30.75C16.5 31.7165 17.2835 32.5 18.25 32.5Z'
                  fill='#FE6D73'
                />
                <path
                  opacity='0.4'
                  d='M14.84 13.94L14.64 16.39C14.6 16.86 14.97 17.25 15.44 17.25H30.75C31.17 17.25 31.52 16.93 31.55 16.51C31.68 14.74 30.33 13.3 28.56 13.3H16.29C16.19 12.86 15.99 12.44 15.68 12.09C15.19 11.56 14.49 11.25 13.77 11.25H12C11.59 11.25 11.25 11.59 11.25 12C11.25 12.41 11.59 12.75 12 12.75H13.74C14.05 12.75 14.34 12.88 14.55 13.1C14.76 13.33 14.86 13.63 14.84 13.94Z'
                  fill='#FE6D73'
                />
                <path
                  d='M30.5101 18.75H15.1701C14.7501 18.75 14.4101 19.07 14.3701 19.48L14.0101 23.83C13.8701 25.53 15.2101 27 16.9201 27H28.0401C29.5401 27 30.8601 25.77 30.9701 24.27L31.3001 19.6C31.3401 19.14 30.9801 18.75 30.5101 18.75Z'
                  fill='#FE6D73'
                />
              </svg>

              <svg
                width='44'
                height='44'
                viewBox='0 0 44 44'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  width='44'
                  height='44'
                  rx='10'
                  fill='#17C3B2'
                  fill-opacity='0.1'
                />
                <path
                  opacity='0.4'
                  d='M27.5352 18.8101C29.17 18.8101 30.4952 17.4849 30.4952 15.8501C30.4952 14.2154 29.17 12.8901 27.5352 12.8901C25.9004 12.8901 24.5752 14.2154 24.5752 15.8501C24.5752 17.4849 25.9004 18.8101 27.5352 18.8101Z'
                  fill='#17C3B2'
                />
                <path
                  d='M16.4551 18.8101C18.0899 18.8101 19.4151 17.4849 19.4151 15.8501C19.4151 14.2154 18.0899 12.8901 16.4551 12.8901C14.8204 12.8901 13.4951 14.2154 13.4951 15.8501C13.4951 17.4849 14.8204 18.8101 16.4551 18.8101Z'
                  fill='#17C3B2'
                />
                <path
                  d='M27.5352 31.1099C29.17 31.1099 30.4952 29.7847 30.4952 28.1499C30.4952 26.5152 29.17 25.1899 27.5352 25.1899C25.9004 25.1899 24.5752 26.5152 24.5752 28.1499C24.5752 29.7847 25.9004 31.1099 27.5352 31.1099Z'
                  fill='#17C3B2'
                />
                <path
                  opacity='0.4'
                  d='M16.4551 31.1099C18.0899 31.1099 19.4151 29.7847 19.4151 28.1499C19.4151 26.5152 18.0899 25.1899 16.4551 25.1899C14.8204 25.1899 13.4951 26.5152 13.4951 28.1499C13.4951 29.7847 14.8204 31.1099 16.4551 31.1099Z'
                  fill='#17C3B2'
                />
              </svg>
            </span>
          </div>
        </header>

        <div className='mt-[115px] mx-auto w-[343px] min-w-[343px] h-[312px] text-center lg:w-[985px]'>
          <h1 className='w-full text-[var(--green-main)] text-[64px] leading-[96px] h-[96px] lg:w-full lg:text-[144px] lg:text-center'>
            Hello.
          </h1>

          <h4 className='h-[216px] text-[36px] leading-[54px] w-full lg:text-center lg:mt-[20px]'>
            We make modern products for the everyday parent. (Psst, That’s you)
          </h4>
        </div>

        {/* cup images  */}
        <div className='h-[190.35px] w-full absolute bottom-0 flex items-center justify-between'>
          <Image
            src={greencup}
            alt='cupkin image'
            className='h-[170.35px] lg:[300] lg:w-auto w-[80px] hidden lg:block '
          />
          <Image
            src={bluecup}
            alt='cupkin image'
            className='h-[170.35px] lg:[300] lg:w-auto w-[80px] hidden lg:block '
          />
          <Image
            src={pinkcup}
            alt='cupkin image'
            className='h-[170.35px] lg:[300] lg:w-auto w-[80px]'
          />
          <Image
            src={purplecup}
            alt='cupkin image'
            className='h-[170.35px] lg:[300] lg:w-auto w-[80px]'
          />
          <Image
            src={redcup}
            alt='cupkin image'
            className='h-[170.35px] lg:[300] lg:w-auto w-[80px]'
          />
          <Image
            src={yelowcup}
            alt='cupkin image'
            className='h-[170.35px] lg:[300] lg:w-auto w-[80px]'
          />
          <Image
            src={whitecup}
            alt='cupkin image'
            className='h-[170.35px] lg:[300] lg:w-auto w-[80px] hidden lg:block '
          />
          <Image
            src={blackcup}
            alt='cupkin image'
            className='h-[170.35px] lg:[300] lg:w-auto w-[80px] hidden lg:block '
          />
        </div>
      </section>

      <section className='overflow-hidden'>
        <h2 className='w-full h-[54px] text-center text-[36px] leading-[54px] my-[35px] lg:text-[48px]'>
          Our products
        </h2>

        <div className='flex flex-col items-center justify-between lg:flex-row lg:justify-around'>
          {/* child image 1 */}
          <span className='relative w-[343px] h-[381.11px] mb-[25px] '>
            <Image
              className='rounded-2xl object-cover w-full h-full'
              src={child1}
              alt='cupkin image'
            />

            <div className='absolute z-10 top-[250px] left-[100px] flex items-center'>
              <svg
                className='w-[39px] h-[39px]'
                width='39'
                height='39'
                viewBox='0 0 39 39'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  x='0.5'
                  y='0.5'
                  width='38'
                  height='38'
                  rx='19'
                  stroke='#17C3B2'
                />
                <circle cx='19.5' cy='19.5' r='9.5' fill='#17C3B2' />
              </svg>

              <span className='flex items-center ml-2'>
                <svg
                  width='6'
                  height='11'
                  viewBox='0 0 6 11'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M0.804168 6.23715C0.371801 5.84082 0.371801 5.15918 0.804168 4.76285L6 -2.62268e-07L6 11L0.804168 6.23715Z'
                    fill='white'
                  />
                </svg>

                <div className='w-[91px] h-[41px] bg-white text-black text-[14px] leading-[21px] flex items-center justify-center rounded-[8px]'>
                  Kids Cups
                </div>
              </span>
            </div>

            <button className='w-[135px] h-[42px] flex items-center justify-between z-10 absolute top-[85%] left-[190px] text-white bg-[var(--green-main)] rounded-[8px] pt-[6px] pr-[6px] pb-[6px] pl-[16px]'>
              Shop now
              <svg
                width='30'
                height='30'
                viewBox='0 0 30 30'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  width='30'
                  height='30'
                  rx='5'
                  fill='white'
                  fill-opacity='0.2'
                />
                <path
                  d='M18.1875 22.875C18.9124 22.875 19.5 22.2874 19.5 21.5625C19.5 20.8376 18.9124 20.25 18.1875 20.25C17.4626 20.25 16.875 20.8376 16.875 21.5625C16.875 22.2874 17.4626 22.875 18.1875 22.875Z'
                  fill='white'
                />
                <path
                  d='M12.1875 22.875C12.9124 22.875 13.5 22.2874 13.5 21.5625C13.5 20.8376 12.9124 20.25 12.1875 20.25C11.4626 20.25 10.875 20.8376 10.875 21.5625C10.875 22.2874 11.4626 22.875 12.1875 22.875Z'
                  fill='white'
                />
                <path
                  opacity='0.4'
                  d='M9.63 8.955L9.48 10.7925C9.45 11.145 9.7275 11.4375 10.08 11.4375H21.5625C21.8775 11.4375 22.14 11.1975 22.1625 10.8825C22.26 9.555 21.2475 8.475 19.92 8.475H10.7175C10.6425 8.145 10.4925 7.83 10.26 7.5675C9.89249 7.17 9.3675 6.9375 8.8275 6.9375H7.5C7.1925 6.9375 6.9375 7.1925 6.9375 7.5C6.9375 7.8075 7.1925 8.0625 7.5 8.0625H8.805C9.0375 8.0625 9.255 8.16 9.4125 8.325C9.57 8.4975 9.645 8.7225 9.63 8.955Z'
                  fill='white'
                />
                <path
                  d='M21.3825 12.5625H9.87754C9.56254 12.5625 9.30754 12.8025 9.27754 13.11L9.00754 16.3725C8.90254 17.6475 9.90754 18.75 11.19 18.75H19.53C20.655 18.75 21.645 17.8275 21.7275 16.7025L21.975 13.2C22.005 12.855 21.735 12.5625 21.3825 12.5625Z'
                  fill='white'
                />
              </svg>
            </button>
          </span>

          {/* child image 2 */}
          <span className='relative w-[343px] h-[381.11px] mb-[25px] '>
            <Image
              className='rounded-2xl object-cover w-full h-full'
              src={child2}
              alt='cupkin image'
            />

            <div className='absolute z-10 top-[178px] left-[49px] flex flex-col items-center'>
              <svg
                className='w-[39px] h-[39px]'
                width='39'
                height='39'
                viewBox='0 0 39 39'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  x='0.5'
                  y='0.5'
                  width='38'
                  height='38'
                  rx='19'
                  stroke='#17C3B2'
                />
                <circle cx='19.5' cy='19.5' r='9.5' fill='#17C3B2' />
              </svg>

              <span className='flex flex-col items-center mt-2'>
                <svg
                  width='11'
                  height='6'
                  viewBox='0 0 11 6'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4.76285 0.804168C5.15918 0.371801 5.84082 0.371801 6.23715 0.804168L11 6L0 6L4.76285 0.804168Z'
                    fill='white'
                  />
                </svg>

                <div className='w-[91px] h-[41px] bg-white text-black text-[14px] leading-[21px] flex items-center justify-center rounded-[8px]'>
                  Sticker books
                </div>
              </span>
            </div>

            <button className='w-[135px] h-[42px] flex items-center justify-between z-10 absolute top-[85%] left-[190px] text-white bg-[var(--green-main)] rounded-[8px] pt-[6px] pr-[6px] pb-[6px] pl-[16px]'>
              Shop now
              <svg
                width='30'
                height='30'
                viewBox='0 0 30 30'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  width='30'
                  height='30'
                  rx='5'
                  fill='white'
                  fill-opacity='0.2'
                />
                <path
                  d='M18.1875 22.875C18.9124 22.875 19.5 22.2874 19.5 21.5625C19.5 20.8376 18.9124 20.25 18.1875 20.25C17.4626 20.25 16.875 20.8376 16.875 21.5625C16.875 22.2874 17.4626 22.875 18.1875 22.875Z'
                  fill='white'
                />
                <path
                  d='M12.1875 22.875C12.9124 22.875 13.5 22.2874 13.5 21.5625C13.5 20.8376 12.9124 20.25 12.1875 20.25C11.4626 20.25 10.875 20.8376 10.875 21.5625C10.875 22.2874 11.4626 22.875 12.1875 22.875Z'
                  fill='white'
                />
                <path
                  opacity='0.4'
                  d='M9.63 8.955L9.48 10.7925C9.45 11.145 9.7275 11.4375 10.08 11.4375H21.5625C21.8775 11.4375 22.14 11.1975 22.1625 10.8825C22.26 9.555 21.2475 8.475 19.92 8.475H10.7175C10.6425 8.145 10.4925 7.83 10.26 7.5675C9.89249 7.17 9.3675 6.9375 8.8275 6.9375H7.5C7.1925 6.9375 6.9375 7.1925 6.9375 7.5C6.9375 7.8075 7.1925 8.0625 7.5 8.0625H8.805C9.0375 8.0625 9.255 8.16 9.4125 8.325C9.57 8.4975 9.645 8.7225 9.63 8.955Z'
                  fill='white'
                />
                <path
                  d='M21.3825 12.5625H9.87754C9.56254 12.5625 9.30754 12.8025 9.27754 13.11L9.00754 16.3725C8.90254 17.6475 9.90754 18.75 11.19 18.75H19.53C20.655 18.75 21.645 17.8275 21.7275 16.7025L21.975 13.2C22.005 12.855 21.735 12.5625 21.3825 12.5625Z'
                  fill='white'
                />
              </svg>
            </button>
          </span>

          {/* child image 3 */}
          <span className='relative w-[343px] h-[381.11px] mb-[25px] '>
            <Image
              className='rounded-2xl object-cover w-full h-full'
              src={child3}
              alt='cupkin image'
            />

            <div className='absolute z-10 top-[170px] left-[145px] flex flex-col-reverse items-center'>
              <svg
                className='w-[39px] h-[39px]'
                width='39'
                height='39'
                viewBox='0 0 39 39'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  x='0.5'
                  y='0.5'
                  width='38'
                  height='38'
                  rx='19'
                  stroke='#17C3B2'
                />
                <circle cx='19.5' cy='19.5' r='9.5' fill='#17C3B2' />
              </svg>

              <span className='flex flex-col-reverse items-center mt-2'>
                <svg
                  width='11'
                  height='6'
                  viewBox='0 0 11 6'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6.23715 5.19583C5.84082 5.6282 5.15918 5.6282 4.76285 5.19583L5.24537e-07 -9.61651e-07L11 0L6.23715 5.19583Z'
                    fill='white'
                  />
                </svg>

                <div className='w-[91px] h-[41px] bg-white text-black text-[14px] leading-[21px] flex items-center justify-center rounded-[8px]'>
                  Experiences
                </div>
              </span>
            </div>

            <button className='w-[135px] h-[42px] flex items-center justify-between z-10 absolute top-[85%] left-[190px] text-white bg-[var(--blue-main)] rounded-[8px] pt-[6px] pr-[6px] pb-[6px] pl-[16px]'>
              Book now
              <svg
                width='30'
                height='30'
                viewBox='0 0 30 30'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  width='30'
                  height='30'
                  rx='5'
                  fill='white'
                  fill-opacity='0.2'
                />
                <path
                  d='M18.1875 22.875C18.9124 22.875 19.5 22.2874 19.5 21.5625C19.5 20.8376 18.9124 20.25 18.1875 20.25C17.4626 20.25 16.875 20.8376 16.875 21.5625C16.875 22.2874 17.4626 22.875 18.1875 22.875Z'
                  fill='white'
                />
                <path
                  d='M12.1875 22.875C12.9124 22.875 13.5 22.2874 13.5 21.5625C13.5 20.8376 12.9124 20.25 12.1875 20.25C11.4626 20.25 10.875 20.8376 10.875 21.5625C10.875 22.2874 11.4626 22.875 12.1875 22.875Z'
                  fill='white'
                />
                <path
                  opacity='0.4'
                  d='M9.63 8.955L9.48 10.7925C9.45 11.145 9.7275 11.4375 10.08 11.4375H21.5625C21.8775 11.4375 22.14 11.1975 22.1625 10.8825C22.26 9.555 21.2475 8.475 19.92 8.475H10.7175C10.6425 8.145 10.4925 7.83 10.26 7.5675C9.89249 7.17 9.3675 6.9375 8.8275 6.9375H7.5C7.1925 6.9375 6.9375 7.1925 6.9375 7.5C6.9375 7.8075 7.1925 8.0625 7.5 8.0625H8.805C9.0375 8.0625 9.255 8.16 9.4125 8.325C9.57 8.4975 9.645 8.7225 9.63 8.955Z'
                  fill='white'
                />
                <path
                  d='M21.3825 12.5625H9.87754C9.56254 12.5625 9.30754 12.8025 9.27754 13.11L9.00754 16.3725C8.90254 17.6475 9.90754 18.75 11.19 18.75H19.53C20.655 18.75 21.645 17.8275 21.7275 16.7025L21.975 13.2C22.005 12.855 21.735 12.5625 21.3825 12.5625Z'
                  fill='white'
                />
              </svg>
            </button>
          </span>
        </div>
      </section>

      <section className='bg-[#17c3b210] py-[30px] lg:px-[96px]'>
        <h2 className='h-[162px] w-[343px] text-[36px] leading-[54px] text-center mx-auto lg:w-full'>
          We were simply trying to scratch our own itch
        </h2>

        <div className='hidden lg:flex justify-between items-center'>
          <Image
            src={Framechild1}
            alt='cupkin image'
            className='w-[256px] h-[256px]'
          />

          <div className='lg:relative overflow-hidden'>
            <svg
              width='709'
              height='725'
              viewBox='0 0 709 725'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='hidden lg:block mx-auto'
            >
              <g opacity='0.3' clip-path='url(#clip0_6_12602)'>
                <path
                  d='M707.718 62.7323L663.667 723.911L664.233 723.948L708.284 62.7697L707.718 62.7323Z'
                  fill='#17C3B2'
                />
                <path
                  d='M664.346 724.222H663.211V723.928L707.486 62.4922H708.62V62.7863L664.346 724.222ZM663.801 723.612L708.007 63.0125L663.801 723.612Z'
                  fill='#17C3B2'
                />
                <path
                  d='M678.876 60.7998L634.824 721.978L635.39 722.016L679.442 60.8373L678.876 60.7998Z'
                  fill='#17C3B2'
                />
                <path
                  d='M635.503 722.3H634.368V722.006L678.62 60.5693H679.755V60.8634L635.503 722.3ZM634.981 721.712L679.165 61.1123L634.981 721.712Z'
                  fill='#17C3B2'
                />
                <path
                  d='M650.031 58.8897L605.979 720.068L606.546 720.106L650.597 58.9272L650.031 58.8897Z'
                  fill='#17C3B2'
                />
                <path
                  d='M606.66 720.467H605.525V720.196L649.777 58.7368H650.912V59.0083L606.66 720.467ZM606.138 719.879L630.533 355.373L606.138 719.879Z'
                  fill='#17C3B2'
                />
                <path
                  d='M621.21 56.9812L577.158 718.16L577.724 718.197L621.776 57.0186L621.21 56.9812Z'
                  fill='#17C3B2'
                />
                <path
                  d='M577.839 718.476H576.704V718.205L620.979 56.7456H622.113V57.0171L577.839 718.476ZM577.294 717.865L603.164 331.234L577.294 717.865Z'
                  fill='#17C3B2'
                />
                <path
                  d='M592.367 55.0487L548.315 716.227L548.882 716.265L592.933 55.0862L592.367 55.0487Z'
                  fill='#17C3B2'
                />
                <path
                  d='M548.996 716.553L547.861 716.485L547.884 716.214L592.159 54.7549L593.271 54.8228V55.1169L548.996 716.553Z'
                  fill='#17C3B2'
                />
                <path
                  d='M563.522 53.1384L519.471 714.317L520.037 714.354L564.088 53.1759L563.522 53.1384Z'
                  fill='#17C3B2'
                />
                <path
                  d='M520.176 714.63L519.041 714.562L519.064 714.291L563.316 52.832L564.45 52.9225L564.428 53.194L520.176 714.63Z'
                  fill='#17C3B2'
                />
                <path
                  d='M534.678 51.2287L490.627 712.407L491.193 712.444L535.244 51.2661L534.678 51.2287Z'
                  fill='#17C3B2'
                />
                <path
                  d='M491.332 712.73L490.197 712.639L490.22 712.368L534.472 50.9316L535.607 50.9995L535.584 51.271L491.332 712.73Z'
                  fill='#17C3B2'
                />
                <path
                  d='M505.858 49.2974L461.807 710.476L462.373 710.513L506.424 49.3349L505.858 49.2974Z'
                  fill='#17C3B2'
                />
                <path
                  d='M462.489 710.807L461.377 710.739V710.445L505.629 49.0088L506.763 49.0767V49.3708L462.489 710.807Z'
                  fill='#17C3B2'
                />
                <path
                  d='M477.037 47.3873L432.985 708.566L433.551 708.603L477.603 47.4248L477.037 47.3873Z'
                  fill='#17C3B2'
                />
                <path
                  d='M433.669 708.884L432.534 708.816L432.557 708.522L476.809 47.0854L477.943 47.1533L477.921 47.4474L433.669 708.884Z'
                  fill='#17C3B2'
                />
                <path
                  d='M448.192 45.4777L404.141 706.656L404.707 706.693L448.758 45.5152L448.192 45.4777Z'
                  fill='#17C3B2'
                />
                <path
                  d='M404.825 706.893H403.69V706.599L447.942 45.1626H449.077V45.4567L404.825 706.893ZM448.487 45.7056L423.388 420.958L448.487 45.7056Z'
                  fill='#17C3B2'
                />
                <path
                  d='M419.349 43.5449L375.298 704.723L375.864 704.761L419.915 43.5824L419.349 43.5449Z'
                  fill='#17C3B2'
                />
                <path
                  d='M375.982 705.038H374.848V704.631L419.1 43.1719H420.234V43.4434L375.982 705.038ZM375.46 704.45L419.667 43.8506L375.46 704.45Z'
                  fill='#17C3B2'
                />
                <path
                  d='M390.528 41.6363L346.477 702.815L347.043 702.852L391.094 41.6737L390.528 41.6363Z'
                  fill='#17C3B2'
                />
                <path
                  d='M347.14 703.137H346.005V702.866L390.279 41.4297H391.391V41.769L347.14 703.137ZM346.618 702.526L390.824 41.9274L346.618 702.526Z'
                  fill='#17C3B2'
                />
                <path
                  d='M361.684 39.7263L317.633 700.905L318.199 700.942L362.25 39.7638L361.684 39.7263Z'
                  fill='#17C3B2'
                />
                <path
                  d='M318.318 701.215H317.184V700.92L361.458 39.5068H362.593V39.8009L318.318 701.215ZM317.774 700.604L361.957 40.0046L317.774 700.604Z'
                  fill='#17C3B2'
                />
                <path
                  d='M332.841 37.7937L288.79 698.972L289.356 699.01L333.407 37.8312L332.841 37.7937Z'
                  fill='#17C3B2'
                />
                <path
                  d='M289.385 699.291H288.25V698.997L332.502 37.561H333.637V37.8551L289.385 699.291ZM288.863 698.703L333.069 38.104L288.863 698.703Z'
                  fill='#17C3B2'
                />
                <path
                  d='M303.997 35.8836L259.945 697.062L260.511 697.099L304.563 35.921L303.997 35.8836Z'
                  fill='#17C3B2'
                />
                <path
                  d='M260.632 697.368H259.521V697.097L303.795 35.5703H304.907V35.8418L260.632 697.368ZM260.11 696.78L285.073 322.184L260.11 696.78Z'
                  fill='#17C3B2'
                />
                <path
                  d='M275.175 33.9751L231.124 695.153L231.69 695.191L275.741 34.0126L275.175 33.9751Z'
                  fill='#17C3B2'
                />
                <path
                  d='M231.812 695.581H230.678V695.31L274.93 33.8511H276.064V34.1226L231.812 695.581ZM231.268 694.97L256.389 319.583L231.268 694.97Z'
                  fill='#17C3B2'
                />
                <path
                  d='M246.333 32.0426L202.281 693.221L202.847 693.258L246.899 32.08L246.333 32.0426Z'
                  fill='#17C3B2'
                />
                <path
                  d='M202.968 693.545L201.856 693.477V693.183L246.131 31.7471L247.243 31.8149V32.109L202.968 693.545Z'
                  fill='#17C3B2'
                />
                <path
                  d='M217.488 30.1323L173.437 691.311L174.003 691.348L218.054 30.1698L217.488 30.1323Z'
                  fill='#17C3B2'
                />
                <path
                  d='M174.148 691.622L173.014 691.555L173.036 691.283L217.288 29.8242L218.423 29.9147L218.4 30.1862L174.148 691.622Z'
                  fill='#17C3B2'
                />
                <path
                  d='M188.667 28.2225L144.615 689.401L145.181 689.438L189.233 28.26L188.667 28.2225Z'
                  fill='#17C3B2'
                />
                <path
                  d='M145.305 689.722L144.17 689.632L144.193 689.36L188.445 27.9014L189.579 27.9919L189.556 28.2633L145.305 689.722Z'
                  fill='#17C3B2'
                />
                <path
                  d='M159.846 26.2914L115.795 687.47L116.361 687.507L160.412 26.3289L159.846 26.2914Z'
                  fill='#17C3B2'
                />
                <path
                  d='M116.462 687.799L115.35 687.708V687.437L159.624 26.001L160.736 26.0688V26.3629L116.462 687.799Z'
                  fill='#17C3B2'
                />
                <path
                  d='M131.003 24.3811L86.9512 685.56L87.5173 685.597L131.569 24.4186L131.003 24.3811Z'
                  fill='#17C3B2'
                />
                <path
                  d='M87.6415 685.876H86.5068V685.582L130.781 24.0776H131.916V24.3491L87.6415 685.876ZM131.303 24.6658L106.205 399.94L131.303 24.6658Z'
                  fill='#17C3B2'
                />
                <path
                  d='M102.16 22.4487L58.1084 683.627L58.6745 683.664L102.726 22.4862L102.16 22.4487Z'
                  fill='#17C3B2'
                />
                <path
                  d='M58.7987 683.953H57.6641V683.659L101.939 22.1548H103.073V22.4489L58.7987 683.953ZM102.461 22.7656L78.0653 387.43L102.461 22.7656Z'
                  fill='#17C3B2'
                />
                <path
                  d='M73.315 20.5388L29.2637 681.717L29.8298 681.755L73.8811 20.5763L73.315 20.5388Z'
                  fill='#17C3B2'
                />
                <path
                  d='M29.955 682.007H28.8203V681.736L73.0722 20.2769H74.2069V20.571L29.955 682.007ZM29.4331 681.419L73.6395 20.8198L29.4331 681.419Z'
                  fill='#17C3B2'
                />
                <path
                  d='M44.4937 18.6302L0.442383 679.809L1.00847 679.846L45.0598 18.6677L44.4937 18.6302Z'
                  fill='#17C3B2'
                />
                <path
                  d='M1.17959 680.13H0.0449219L0.0449219 679.745L44.2968 18.3091H45.4315V18.5806L1.17959 680.13ZM0.634969 679.519L44.8414 18.9199L0.634969 679.519Z'
                  fill='#17C3B2'
                />
                <path
                  d='M663.779 724.2L0.567383 680.084L0.612769 679.519L663.824 723.634L663.779 724.2Z'
                  fill='#17C3B2'
                />
                <path
                  d='M664.028 724.494H663.824L0.317383 680.378V679.247H0.589691L664.096 723.363L664.028 724.494ZM0.861999 679.745L92.1572 685.831L0.861999 679.745Z'
                  fill='#17C3B2'
                />
                <path
                  d='M665.707 695.446L2.49609 651.353L2.51879 650.787L665.73 694.88L665.707 695.446Z'
                  fill='#17C3B2'
                />
                <path
                  d='M665.957 695.74H665.662L2.17871 651.624V650.493H2.47373L666.093 694.608L665.957 695.74ZM2.79147 651.081L665.435 695.129L2.79147 651.081Z'
                  fill='#17C3B2'
                />
                <path
                  d='M667.613 666.691L4.40234 622.599L4.44773 622.033L667.659 666.126L667.613 666.691Z'
                  fill='#17C3B2'
                />
                <path
                  d='M667.886 666.986H667.591L4.10742 622.848V621.717H4.40245L667.886 665.854V666.986ZM4.69747 622.327L667.341 666.397L4.69747 622.327Z'
                  fill='#17C3B2'
                />
                <path
                  d='M669.542 637.96L6.33105 593.845L6.37644 593.279L669.588 637.394L669.542 637.96Z'
                  fill='#17C3B2'
                />
                <path
                  d='M669.815 638.254H669.52L6.03613 594.139V593.008H6.30844L669.815 637.123V638.254ZM6.62618 593.573L669.27 637.643L6.62618 593.573Z'
                  fill='#17C3B2'
                />
                <path
                  d='M671.472 609.206L8.26074 565.113L8.30613 564.547L671.517 608.64L671.472 609.206Z'
                  fill='#17C3B2'
                />
                <path
                  d='M671.721 609.613H671.449L7.98828 565.362V564.231H8.26059L671.767 608.346L671.721 609.613ZM8.55561 564.842L671.199 608.912L8.55561 564.864V564.842Z'
                  fill='#17C3B2'
                />
                <path
                  d='M673.401 580.451L10.1895 536.359L10.2121 535.793L673.423 579.886L673.401 580.451Z'
                  fill='#17C3B2'
                />
                <path
                  d='M673.65 580.746H673.378L9.87207 536.608V535.499H10.2578L673.741 579.637L673.65 580.746ZM10.4847 536.087L673.129 580.158L10.4847 536.087Z'
                  fill='#17C3B2'
                />
                <path
                  d='M675.307 551.72L12.0957 507.605L12.1411 507.039L675.352 551.154L675.307 551.72Z'
                  fill='#17C3B2'
                />
                <path
                  d='M675.579 552.014H675.284L11.8008 507.808V506.677H12.0958L675.647 550.793L675.579 552.014ZM12.3908 507.333L103.709 513.419L12.3908 507.333Z'
                  fill='#17C3B2'
                />
                <path
                  d='M677.236 522.966L14.0244 478.873L14.0698 478.308L677.281 522.4L677.236 522.966Z'
                  fill='#17C3B2'
                />
                <path
                  d='M677.44 523.26H677.145L13.6611 479.145V478.013H13.9334L677.44 522.129V523.26ZM585.6 516.473L676.895 522.559L585.6 516.473Z'
                  fill='#17C3B2'
                />
                <path
                  d='M679.164 494.212L15.9531 450.119L15.9985 449.553L679.21 493.646L679.164 494.212Z'
                  fill='#17C3B2'
                />
                <path
                  d='M679.414 494.506H679.142L15.6357 450.368V449.259H15.9081L679.414 493.397V494.506ZM16.2485 449.848L678.892 493.918L16.2485 449.848Z'
                  fill='#17C3B2'
                />
                <path
                  d='M681.093 465.48L17.8818 421.365L17.9045 420.822L681.116 464.915L681.093 465.48Z'
                  fill='#17C3B2'
                />
                <path
                  d='M681.343 465.774H681.071L17.5645 421.659V420.528H17.8369L681.32 464.643L681.343 465.774ZM18.1772 421.116L680.821 465.164L18.1772 421.093V421.116Z'
                  fill='#17C3B2'
                />
                <path
                  d='M683.022 436.726L19.7881 392.633L19.8335 392.068L683.045 436.161L683.022 436.726Z'
                  fill='#17C3B2'
                />
                <path
                  d='M683.272 437.02H682.977L19.4932 392.882V391.751H19.7882L683.272 435.866V437.02ZM20.1059 392.43L682.75 436.5L20.1059 392.43Z'
                  fill='#17C3B2'
                />
                <path
                  d='M684.929 407.972L21.7178 363.879L21.7632 363.313L684.974 407.406L684.929 407.972Z'
                  fill='#17C3B2'
                />
                <path
                  d='M685.201 408.266H684.906L21.4229 364.128V363.02H21.7179L685.201 407.157V408.266ZM22.0129 363.608L684.657 407.678L22.0129 363.608Z'
                  fill='#17C3B2'
                />
                <path
                  d='M686.858 379.24L23.6465 335.125L23.6919 334.582L686.903 378.675L686.858 379.24Z'
                  fill='#17C3B2'
                />
                <path
                  d='M687.108 379.535H686.835L23.3291 335.419V334.288H23.6014L687.108 378.403V379.535ZM23.8737 334.876L115.169 340.939L23.8737 334.876Z'
                  fill='#17C3B2'
                />
                <path
                  d='M688.786 350.486L25.5752 306.394L25.6206 305.828L688.809 349.921L688.786 350.486Z'
                  fill='#17C3B2'
                />
                <path
                  d='M689.036 350.78H688.787L25.2803 306.665V305.534H25.5753L689.059 349.649L689.036 350.78ZM597.197 343.993L688.514 350.079L597.197 343.993Z'
                  fill='#17C3B2'
                />
                <path
                  d='M690.692 321.755L27.5039 277.639L27.5266 277.074L690.738 321.189L690.692 321.755Z'
                  fill='#17C3B2'
                />
                <path
                  d='M691.056 322.049H690.761L27.1865 277.888V276.78H27.4815L691.056 320.918V322.049ZM27.7991 277.368L690.443 321.438L27.7991 277.368Z'
                  fill='#17C3B2'
                />
                <path
                  d='M692.621 293.001L29.4102 248.885L29.4555 248.342L692.667 292.435L692.621 293.001Z'
                  fill='#17C3B2'
                />
                <path
                  d='M692.894 293.294H692.599L29.1152 249.179V248.048H29.4103L692.894 292.163V293.294ZM29.7053 248.636L692.349 292.684L29.7053 248.636Z'
                  fill='#17C3B2'
                />
                <path
                  d='M694.551 264.246L31.3398 220.153L31.3852 219.588L694.596 263.681L694.551 264.246Z'
                  fill='#17C3B2'
                />
                <path
                  d='M694.8 264.54H694.528L31.0215 220.493V219.362H31.2938L694.891 263.477L694.8 264.54ZM31.6341 219.882L694.278 263.952L31.6341 219.882Z'
                  fill='#17C3B2'
                />
                <path
                  d='M696.48 235.515L33.2686 191.4L33.3139 190.834L696.525 234.949L696.48 235.515Z'
                  fill='#17C3B2'
                />
                <path
                  d='M696.729 235.809H696.456L32.9502 191.671V190.54H33.2225L696.706 234.655L696.729 235.809ZM33.563 191.083L696.207 235.153L33.563 191.083Z'
                  fill='#17C3B2'
                />
                <path
                  d='M698.386 206.761L35.1973 162.646L35.22 162.103L698.431 206.195L698.386 206.761Z'
                  fill='#17C3B2'
                />
                <path
                  d='M698.658 207.055H698.363L34.8799 162.917V161.786H35.2203L698.704 205.901L698.658 207.055ZM35.4926 162.396L126.788 168.459L35.4926 162.396Z'
                  fill='#17C3B2'
                />
                <path
                  d='M700.315 178.006L37.1035 133.914L37.1489 133.348L700.36 177.441L700.315 178.006Z'
                  fill='#17C3B2'
                />
                <path
                  d='M700.587 178.3H700.292L36.8086 134.162V133.031H37.1036L700.587 177.147V178.3ZM608.747 171.627L700.042 177.712L608.747 171.627Z'
                  fill='#17C3B2'
                />
                <path
                  d='M702.243 149.275L39.0322 105.159L39.0776 104.594L702.289 148.709L702.243 149.275Z'
                  fill='#17C3B2'
                />
                <path
                  d='M702.402 149.569H702.13L38.7373 105.431V104.3H39.0096L702.516 148.415L702.402 149.569ZM39.3274 104.888L701.971 148.958L39.3274 104.888Z'
                  fill='#17C3B2'
                />
                <path
                  d='M704.172 120.521L40.9609 76.4279L41.0063 75.8623L704.195 119.955L704.172 120.521Z'
                  fill='#17C3B2'
                />
                <path
                  d='M704.422 120.815H704.15L40.6436 76.6771V75.5459H40.9159L704.422 119.661V120.815ZM41.2562 76.1567L703.9 120.204L41.2562 76.1567Z'
                  fill='#17C3B2'
                />
                <path
                  d='M706.102 91.7667L42.8906 47.674L42.9133 47.1084L706.125 91.2011L706.102 91.7667Z'
                  fill='#17C3B2'
                />
                <path
                  d='M706.351 92.0607H706.056L42.5723 47.9227V46.7915H42.8673L706.351 90.9295V92.0607ZM43.185 47.4023L705.829 91.4724L43.185 47.4023Z'
                  fill='#17C3B2'
                />
                <path
                  d='M708.008 63.0349L44.7969 18.9196L44.8423 18.354L708.053 62.4694L708.008 63.0349Z'
                  fill='#17C3B2'
                />
                <path
                  d='M708.28 63.329H707.985L44.502 19.1458V18.0146H44.7968L708.348 62.13L708.28 63.329ZM45.0919 18.6481L707.736 62.7182L45.0919 18.6481Z'
                  fill='#17C3B2'
                />
              </g>
              <defs>
                <clipPath id='clip0_6_12602'>
                  <rect
                    width='708.62'
                    height='723.539'
                    fill='white'
                    transform='translate(0 0.955078)'
                  />
                </clipPath>
              </defs>
            </svg>
            <Image
              src={Framepaper}
              alt='cupkin image'
              className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
            />
            <button className='mx-auto rounded-[8px] h-[42px] w-[201px] items-center justify-between text-white bg-[var(--green-main)] pt-[6px] pr-[6px] pb-[6px] pl-[16px] mt-[30px] flex absolute bottom-[8%] left-1/2 transfor -translate-x-1/2'>
              View more our story
              <svg
                width='30'
                height='30'
                viewBox='0 0 30 30'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  width='30'
                  height='30'
                  rx='5'
                  fill='white'
                  fill-opacity='0.2'
                />
                <path
                  opacity='0.4'
                  d='M18.1425 7.5H11.8575C9.1275 7.5 7.5 9.1275 7.5 11.8575V18.135C7.5 20.8725 9.1275 22.5 11.8575 22.5H18.135C20.865 22.5 22.4925 20.8725 22.4925 18.1425V11.8575C22.5 9.1275 20.8725 7.5 18.1425 7.5Z'
                  fill='white'
                />
                <path
                  d='M19.8975 14.6025L16.68 11.385C16.4625 11.1675 16.1025 11.1675 15.885 11.385C15.6675 11.6025 15.6675 11.9625 15.885 12.18L18.1425 14.4375H10.5C10.1925 14.4375 9.9375 14.6925 9.9375 15C9.9375 15.3075 10.1925 15.5625 10.5 15.5625H18.1425L15.885 17.82C15.6675 18.0375 15.6675 18.3975 15.885 18.615C15.9975 18.7275 16.14 18.78 16.2825 18.78C16.425 18.78 16.5675 18.7275 16.68 18.615L19.8975 15.3975C20.0025 15.2925 20.0625 15.15 20.0625 15C20.0625 14.85 20.0025 14.7075 19.8975 14.6025Z'
                  fill='white'
                />
              </svg>
            </button>
          </div>

          <Image
            src={Framechild2}
            alt='cupkin image'
            className='w-[256px] h-[256px]'
          />
        </div>

        <p className='min-h-[255px] max-w-[333px] leading-[21px] text-[14px] mx-auto mt-[30px] lg:hidden'>
          One day, we looked on Amazon to find cute kids cups for our kiddos,
          but couldn't find anything worth buying. So we decided to make our own
          and use this as an opportunity to show our kids what grit and
          resilience looks like in the real world.
          <span className='h-[20px] w-full block'></span>
          From day 1, everything we did was about showing our girls how you can
          have an impact on people around the world with a mere idea and hard
          work.
          <span className='h-[20px] w-full block'></span>
          To this day, everything we do now and will continue to do tomorrow is
          impact-driven. We don't sacrifice our purpose for profits.
        </p>

        <button className='mx-auto rounded-[8px] h-[42px] w-[201px] flex items-center justify-between text-white bg-[var(--green-main)] pt-[6px] pr-[6px] pb-[6px] pl-[16px] mt-[30px] lg:hidden'>
          View more our story
          <svg
            width='30'
            height='30'
            viewBox='0 0 30 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              width='30'
              height='30'
              rx='5'
              fill='white'
              fill-opacity='0.2'
            />
            <path
              opacity='0.4'
              d='M18.1425 7.5H11.8575C9.1275 7.5 7.5 9.1275 7.5 11.8575V18.135C7.5 20.8725 9.1275 22.5 11.8575 22.5H18.135C20.865 22.5 22.4925 20.8725 22.4925 18.1425V11.8575C22.5 9.1275 20.8725 7.5 18.1425 7.5Z'
              fill='white'
            />
            <path
              d='M19.8975 14.6025L16.68 11.385C16.4625 11.1675 16.1025 11.1675 15.885 11.385C15.6675 11.6025 15.6675 11.9625 15.885 12.18L18.1425 14.4375H10.5C10.1925 14.4375 9.9375 14.6925 9.9375 15C9.9375 15.3075 10.1925 15.5625 10.5 15.5625H18.1425L15.885 17.82C15.6675 18.0375 15.6675 18.3975 15.885 18.615C15.9975 18.7275 16.14 18.78 16.2825 18.78C16.425 18.78 16.5675 18.7275 16.68 18.615L19.8975 15.3975C20.0025 15.2925 20.0625 15.15 20.0625 15C20.0625 14.85 20.0025 14.7075 19.8975 14.6025Z'
              fill='white'
            />
          </svg>
        </button>
      </section>

      <section className='min-h-[379px] w-full py-[30px] relative mt-[10px] lg:min-h-[650px]'>
        <h2 className='mx-auto h-[54px] w-[239px] text-[36px] leading-[54px] text-center my-[30px] lg:my-[80px]'>
          Who we serve
        </h2>

        {/* mobile images, hidden on desktop */}
        <div className='flex justify-between flex-wrap max-w-[265px] mx-auto lg:hidden '>
          <Image
            src={opecimg1}
            alt='cupkin image'
            className='h-[90.94px] w-[121.51px]'
          />
          <Image
            src={normalimg1}
            alt='cupkin image'
            className='h-[90.94px] w-[121.51px]'
          />
          <Image
            src={opecimg2}
            alt='cupkin image'
            className='h-[90.94px] w-[121.51px] mt-[20px]'
          />
          <Image
            src={opecimg3}
            alt='cupkin image'
            className='h-[90.94px] w-[121.51px] mt-[20px]'
          />
        </div>

        <div className='w-[35px] h-[85%] absolute top-0 left-0 flex flex-col justify-between items-center lg:hidden'>
          <Image src={edgeimg1} className='w-full h-[91.53px]' />
          <Image src={edgeimg2} className='w-full h-[91.53px]' />
          <Image src={edgeimg3} className='w-full h-[91.53px]' />
        </div>

        <div className='w-[35px] h-[85%] absolute top-0 right-0 flex flex-col justify-between items-center lg:hidden'>
          <Image src={edgeimg4} className='w-full h-[91.53px]' />
          <Image src={edgeimg5} className='w-full h-[91.53px]' />
          <Image src={edgeimg6} className='w-full h-[91.53px]' />
        </div>

        {/* desktop images all hidden on mobile */}
        <div className='hidden lg:flex lg:justify-between lg:w-[420px] lg:flex-wrap lg:mx-auto'>
          <Image
            src={desktop1}
            alt='cupkin image'
            className='w-auto h-[148.4px] my-[20px]'
          ></Image>
          <Image
            src={desktop2}
            alt='cupkin image'
            className='w-auto h-[148.4px] my-[20px]'
          ></Image>
          <Image
            src={desktop3}
            alt='cupkin image'
            className='w-auto h-[148.4px] my-[20px]'
          ></Image>
          <Image
            src={desktop4}
            alt='cupkin image'
            className='w-auto h-[148.4px] my-[20px]'
          ></Image>
        </div>

        {/* desktop images all hidden on mobile */}
        <div className='hidden justify-between lg:flex min-h-[300px] absolute left-0 top-[10px] w-[25%]'>
          <div className='my-auto flex flex-col justify-between'>
            <Image
              className='w-auto h-[148.4px] my-[20px] mr-[30px]'
              src={desktopg4}
              alt='cupkin image'
            ></Image>
            <Image
              className='w-auto h-[148.4px] my-[20px] mr-[30px]'
              src={desktopg5}
              alt='cupkin image'
            ></Image>
          </div>

          <div className='flex flex-col justify-between'>
            <Image
              className='w-auto h-[148.4px] my-[20px]'
              src={desktopg1}
              alt='cupkin image'
            ></Image>
            <Image
              className='w-auto h-[148.4px] my-[20px]'
              src={desktopg2}
              alt='cupkin image'
            ></Image>
            <Image
              className='w-auto h-[148.4px] my-[20px]'
              src={desktopg3}
              alt='cupkin image'
            ></Image>
          </div>
        </div>

        {/* desktop images all hidden on mobile */}
        <div className='hidden justify-between lg:flex flex-row-reverse min-h-[300px] absolute right-0 top-[10px] w-[25%]'>
          <div className='my-auto flex flex-col justify-between'>
            <Image
              className='w-auto h-[148.4px] my-[20px] ml-[30px]'
              src={desktoph1}
              alt='cupkin image'
            ></Image>
            <Image
              className='w-auto h-[148.4px] my-[20px] ml-[30px]'
              src={desktoph2}
              alt='cupkin image'
            ></Image>
          </div>

          <div className='flex flex-col justify-between'>
            <Image
              className='w-auto h-[148.4px] my-[20px]'
              src={desktoph3}
              alt='cupkin image'
            ></Image>
            <Image
              className='w-auto h-[148.4px] my-[20px]'
              src={desktoph4}
              alt='cupkin image'
            ></Image>
            <Image
              className='w-auto h-[148.4px] my-[20px]'
              src={desktoph5}
              alt='cupkin image'
            ></Image>
          </div>
        </div>
      </section>

      <section className='mt-[30px] bg-[var(--baige-main)] min-h-[323px] flex flex-col justify-between items-center py-[20px]'>
        <h2 className='h-[54px] w-[249px] text-[36px] leading-[54px] text-center lg:w-full lg:mt-[20px]'>
          Join the cupkin family
        </h2>

        <p className='min-h-[42px] max-w-[343px] text-[14px] leading-[21px] text-center lg:min-w-full'>
          Get first dibs on our new products and get behind the scenes updates
          every Friday
        </p>

        <form className='w-[343px] h-[65px] lg:w-[643px] lg:mb-[30px]'>
          <button>
            <svg
              width='24'
              height='25'
              viewBox='0 0 24 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                opacity='0.4'
                d='M17 21H7C4 21 2 19.5 2 16V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V16C22 19.5 20 21 17 21Z'
                fill='#8E8E93'
              />
              <path
                d='M11.9998 13.37C11.1598 13.37 10.3098 13.11 9.65978 12.58L6.52978 10.08C6.20978 9.81997 6.14978 9.34997 6.40978 9.02997C6.66978 8.70997 7.13978 8.64997 7.45978 8.90997L10.5898 11.41C11.3498 12.02 12.6398 12.02 13.3998 11.41L16.5298 8.90997C16.8498 8.64997 17.3298 8.69997 17.5798 9.02997C17.8398 9.34997 17.7898 9.82997 17.4598 10.08L14.3298 12.58C13.6898 13.11 12.8398 13.37 11.9998 13.37Z'
                fill='#292D32'
              />
            </svg>
          </button>

          <input
            type='email'
            placeholder='Email address'
            className='text-[14px] leading-[21px] w-[183px] lg:w-[483px] h-full'
          />

          <button className='rounded-[8px] h-[37px] w-[80px] text-white bg-[var(--green-main)]'>
            Submit
          </button>
        </form>
      </section>

      <footer className='py-[20px]'>
        <h2 className='mt-[20px] w-[210px] mx-auto text-center leading-[41px] text-[36px]'>
          cupkin
        </h2>
        <div className='mt-[30px] mx-auto flex items-center justify-between h-[50px] w-[260px]'>
          {/* youtube */}
          <svg
            width='50'
            height='50'
            viewBox='0 0 50 50'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              width='50'
              height='50'
              rx='10'
              fill='#FE6D73'
              fill-opacity='0.1'
            />
            <path
              d='M36.4985 18.4782C36.2225 17.309 35.4092 16.3882 34.3766 16.0757C32.505 15.5078 25 15.5078 25 15.5078C25 15.5078 17.495 15.5078 15.6234 16.0757C14.5908 16.3882 13.7775 17.309 13.5015 18.4782C13 20.5975 13 25.0192 13 25.0192C13 25.0192 13 29.4408 13.5015 31.5601C13.7775 32.7293 14.5908 33.6118 15.6234 33.9243C17.495 34.4921 25 34.4921 25 34.4921C25 34.4921 32.505 34.4921 34.3766 33.9243C35.4092 33.6118 36.2225 32.7293 36.4985 31.5601C37 29.4408 37 25.0192 37 25.0192C37 25.0192 37 20.5975 36.4985 18.4782ZM22.5454 29.0337V21.0046L28.8181 25.0193L22.5454 29.0337Z'
              fill='#FE6D73'
            />
          </svg>

          {/* twitter */}
          <svg
            width='50'
            height='50'
            viewBox='0 0 50 50'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              width='50'
              height='50'
              rx='10'
              fill='#17C3B2'
              fill-opacity='0.1'
            />
            <path
              d='M34.533 20.1122C34.5482 20.3254 34.5482 20.5387 34.5482 20.7518C34.5482 27.2543 29.599 34.7468 20.5533 34.7468C17.7665 34.7468 15.1777 33.9396 13 32.5387C13.396 32.5843 13.7766 32.5996 14.1878 32.5996C16.4873 32.5996 18.604 31.8229 20.2944 30.4981C18.132 30.4523 16.3198 29.0361 15.6954 27.0869C16 27.1325 16.3045 27.163 16.6244 27.163C17.066 27.163 17.5076 27.1021 17.9188 26.9955C15.665 26.5386 13.9746 24.5589 13.9746 22.1681V22.1072C14.6294 22.4727 15.3909 22.7011 16.1979 22.7315C14.873 21.8483 14.005 20.3407 14.005 18.6351C14.005 17.7214 14.2487 16.8838 14.6751 16.1528C17.0964 19.1376 20.736 21.0868 24.8172 21.3001C24.7411 20.9346 24.6954 20.5539 24.6954 20.1732C24.6954 17.4625 26.8883 15.2544 29.6141 15.2544C31.0304 15.2544 32.3095 15.8483 33.208 16.8077C34.3197 16.5945 35.3857 16.1833 36.3299 15.6199C35.9643 16.762 35.1877 17.7214 34.1674 18.3305C35.1573 18.224 36.1167 17.9498 36.9999 17.5691C36.33 18.5437 35.4924 19.4117 34.533 20.1122Z'
              fill='#17C3B2'
            />
          </svg>

          {/* instagram */}
          <svg
            width='50'
            height='50'
            viewBox='0 0 50 50'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              width='50'
              height='50'
              rx='10'
              fill='#FFCB77'
              fill-opacity='0.1'
            />
            <g clip-path='url(#clip0_1732_4592)'>
              <path
                d='M25.0027 18.8467C21.5974 18.8467 18.8508 21.594 18.8508 25C18.8508 28.406 21.5974 31.1533 25.0027 31.1533C28.4079 31.1533 31.1546 28.406 31.1546 25C31.1546 21.594 28.4079 18.8467 25.0027 18.8467ZM25.0027 29.0004C22.8021 29.0004 21.0031 27.2064 21.0031 25C21.0031 22.7936 22.7968 20.9996 25.0027 20.9996C27.2086 20.9996 29.0022 22.7936 29.0022 25C29.0022 27.2064 27.2032 29.0004 25.0027 29.0004ZM32.8412 18.595C32.8412 19.3929 32.1987 20.0302 31.4062 20.0302C30.6085 20.0302 29.9713 19.3876 29.9713 18.595C29.9713 17.8024 30.6138 17.1598 31.4062 17.1598C32.1987 17.1598 32.8412 17.8024 32.8412 18.595ZM36.9157 20.0517C36.8247 18.1291 36.3856 16.4261 34.9775 15.023C33.5747 13.6199 31.8721 13.1807 29.9499 13.0843C27.9689 12.9719 22.0311 12.9719 20.0501 13.0843C18.1333 13.1754 16.4307 13.6145 15.0225 15.0176C13.6144 16.4207 13.1807 18.1237 13.0843 20.0463C12.9719 22.0278 12.9719 27.9669 13.0843 29.9483C13.1753 31.8709 13.6144 33.5739 15.0225 34.977C16.4307 36.3801 18.1279 36.8193 20.0501 36.9157C22.0311 37.0281 27.9689 37.0281 29.9499 36.9157C31.8721 36.8246 33.5747 36.3855 34.9775 34.977C36.3803 33.5739 36.8193 31.8709 36.9157 29.9483C37.0281 27.9669 37.0281 22.0331 36.9157 20.0517ZM34.3564 32.0744C33.9388 33.1241 33.1303 33.9327 32.0755 34.3558C30.496 34.9824 26.7481 34.8378 25.0027 34.8378C23.2572 34.8378 19.504 34.977 17.9298 34.3558C16.8804 33.9381 16.0719 33.1294 15.649 32.0744C15.0225 30.4946 15.1671 26.7458 15.1671 25C15.1671 23.2542 15.0279 19.5001 15.649 17.9256C16.0666 16.8759 16.8751 16.0673 17.9298 15.6442C19.5093 15.0176 23.2572 15.1622 25.0027 15.1622C26.7481 15.1622 30.5014 15.023 32.0755 15.6442C33.1249 16.0619 33.9334 16.8706 34.3564 17.9256C34.9828 19.5054 34.8383 23.2542 34.8383 25C34.8383 26.7458 34.9828 30.4999 34.3564 32.0744Z'
                fill='#FFCB77'
              />
            </g>
            <defs>
              <clipPath id='clip0_1732_4592'>
                <rect
                  width='24'
                  height='24'
                  fill='white'
                  transform='translate(13 13)'
                />
              </clipPath>
            </defs>
          </svg>

          {/* facebook */}
          <svg
            width='50'
            height='50'
            viewBox='0 0 50 50'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              width='50'
              height='50'
              rx='10'
              fill='#227C9D'
              fill-opacity='0.1'
            />
            <g clip-path='url(#clip0_1732_4595)'>
              <path
                d='M37 15.5714V34.4286C37 35.8482 35.8482 37 34.4286 37H29.8589V27.5071H33.1054L33.5714 23.8857H29.8589V21.5714C29.8589 20.5214 30.1482 19.8089 31.6536 19.8089H33.5714V16.5732C33.2393 16.5304 32.1036 16.4286 30.775 16.4286C28.0107 16.4286 26.1143 18.1161 26.1143 21.2179V23.8911H22.8571V27.5125H26.1196V37H15.5714C14.1518 37 13 35.8482 13 34.4286V15.5714C13 14.1518 14.1518 13 15.5714 13H34.4286C35.8482 13 37 14.1518 37 15.5714Z'
                fill='#227C9D'
              />
            </g>
            <defs>
              <clipPath id='clip0_1732_4595'>
                <rect
                  width='24'
                  height='24'
                  fill='white'
                  transform='translate(13 13)'
                />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className='h-[311px] w-full flex flex-col justify-around items-center'>
          <div className='flex flex-col items-center justify-around w-full h-[260px]'>
            <a
              href=''
              className='w-full h-[15px] text-[14px] leading-[15.96] text-center '
            >
              Contact Us
            </a>

            <a
              href=''
              className='w-full h-[15px] text-[14px] leading-[15.96] text-center '
            >
              Partner with us
            </a>

            <a
              href=''
              className='w-full h-[15px] text-[14px] leading-[15.96] text-center '
            >
              Cupkin Experiences
            </a>

            <a
              href=''
              className='w-full h-[15px] text-[14px] leading-[15.96] text-center '
            >
              Shipping
            </a>

            <a
              href=''
              className='w-full h-[15px] text-[14px] leading-[15.96] text-center '
            >
              Returns
            </a>
          </div>
        </div>

        <div className='mt-[90px] h-[40px] w-full flex justify-between mx-[16px]'>
          <a href='' className='w-[50%] text-center'>
            Privacy policy
          </a>
          <a href='' className='w-[50%] text-center'>
            Terms of service
          </a>
        </div>
      </footer>
    </main>
  );
}
