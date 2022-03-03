import Image from 'next/image'
import GradientBtn from '../../HomePage/GradientBtn'
import CtaButton from '../../Utils/Buttons/CtaButton'

const MobileView = () => {
  return (
    <div className="relative w-full">
      <div className="min-h-[30vh] items-center justify-center px-[5] pt-14">
        <div>
          <div className="flex justify-center">
            <span className="block text-center text-2xl font-[800]">
              Did you ever start learning
            </span>
          </div>
          <div className="flex justify-center">
            <span className="block text-center text-2xl font-[800]">
              a video course but did not
            </span>
          </div>
          <div className="flex justify-center">
            <span className="text-2xl font-[800] text-pink">
              finish it completely?
            </span>
          </div>
        </div>
        <div className="my-[25px] px-[10%] text-[18px]">
          <span className="block text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim turpis
            penatibus sed id amet hendrerit dictumst mauris, quisque.
          </span>
        </div>
      </div>
      <div className="relative min-h-[70vh]">
        <Image src="/landing_3_mobile.png" layout="fill" objectFit="contain" />
      </div>
      <div className="absolute bottom-[138px] flex w-full justify-center">
        <CtaButton label="Get A Trail" />
      </div>
      <div className="absolute bottom-[230px] left-[50px] h-[94px] w-[112px]">
        <Image src="/calender.png" layout="fill" objectFit="contain" />
      </div>
    </div>
  )
}

const DesktopView = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="flex basis-1/2 items-center">
        <div className="px-[75px]">
          <div>
            <span className="text-[64px] font-[800] leading-[80px]">
              Start Your 2022
            </span>
            <br />
            <span className="text-[64px] font-[800] leading-[80px]">
              With A
            </span>
            &nbsp;&nbsp;
            <span className="text-[64px] font-[800] leading-[80px] text-pink">
              New Skill
            </span>
          </div>
          <div className="my-[25px] text-[18px]">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              turpis penatibus sed id amet hendrerit dictumst mauris, quisque.
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-28  mt-[70px]  flex md:static">
            <GradientBtn
              urlLink={'#'}
              rightArrow={true}
              btnCss="md:text-2xl z-50 inset-x-0 shrink-0  mx-auto !text-lg !px-8 !py-[10px] md:!text:xl md:py-4 md:px-16 "
              btnName="get a trial"
            />
          </div>
        </div>
      </div>
      <div className="relative flex basis-1/2 items-end">
        <div className="relative h-[80vh] w-full">
          <Image
            src="/surprised-happy-girl-desktop.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  )
}

const Landing3 = (props) => {
  return (
    <div className="h-screen w-full">
      <div className="block sm:hidden">
        <MobileView />
      </div>
      <div className="hidden sm:block">
        <DesktopView />
      </div>
    </div>
  )
}

export default Landing3
