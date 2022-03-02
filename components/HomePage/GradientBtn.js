import Link from 'next/link'
import Image from 'next/image'

function GradientBtn({ urlLink, btnName, leftArrow, rightArrow, btnCss }) {
  return (
    <>
      <Link href={urlLink}>
        <a
          className={` order-2   flex    items-center justify-center  gap-[1.25rem] !whitespace-nowrap rounded-full  bg-gradient-to-r        from-[#FC4D6D] to-[#FDA02F]  font-monts font-bold capitalize  text-white  md:relative md:inset-0 md:bottom-auto md:mx-0  md:w-auto ${btnCss}
           ${
             leftArrow
               ? 'self-end from-[#FDA02F]   to-[#FC4D6D] px-[3.875rem] py-[17px]  font-extrabold    md:rounded-bl-none  md:rounded-tr-none md:rounded-tl-full md:rounded-br-full '
               : ' '
           }   
          
          ${
            rightArrow
              ? 'self-baseline from-[#FC4D6D]  to-[#FDA02F]  px-[3.875rem]  py-[17px] md:rounded-tl-none md:rounded-br-none  md:rounded-bl-full  md:rounded-tr-full  '
              : ''
          } 
        `}
        >
          <div className=" order-2">{btnName}</div>
          <div
            className={`  ${
              rightArrow ? ' order-2 hidden  md:flex' : 'hidden'
            }`}
          >
            <Image
              src={'/Images/GradientBtn/right-arrow.svg'}
              height={18}
              width={20}
            />
          </div>
          <div
            className={`${leftArrow ? 'order-1 hidden  md:flex' : 'hidden'}`}
          >
            <Image
              src={'/Images/GradientBtn/left-arrow.svg'}
              height={24}
              width={26}
            />
          </div>
        </a>
      </Link>
    </>
  )
}

export default GradientBtn
