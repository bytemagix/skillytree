import Image from 'next/image'
import GradientBtn from '../../HomePage/GradientBtn'
import CtaButton from '../../Utils/Buttons/CtaButton'

const MobileView = () => {
  return (
    <div className="relative w-full">
      <div className="min-h-[30vh] items-center justify-center px-[5] pt-14">
        <div>
          <div className="flex justify-center">
            <span className="block text-center text-4xl font-[800]">
              Start Your 2022
            </span>
          </div>
          <div className="flex justify-center">
            <span className="text-4xl font-[800]">With A</span> &nbsp;&nbsp;
            <span className="text-4xl font-[800] text-pink">New Skill</span>
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
        <Image
          src="/surprised-happy-girl-mobile.png"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="absolute bottom-[138px] flex w-full justify-center">
        <CtaButton label="Get A Trail" />
      </div>
    </div>
  )
}

const DesktopView = () => {
  return (
    <div className="h-screen w-full">
      <div className="flex h-[30vh] flex-col items-center justify-center text-[36px]  font-[700] leading-[51px]">
        <div>
          <span>TRUSTED BY</span>&nbsp;
          <span className="text-pink">100+</span>&nbsp;
          <span>LEADING UNIVERSITIES</span>
        </div>
        <div>
          <span>AND COMPANIES</span>
        </div>
      </div>
      <div className="relative h-[60vh] w-full">
        <Image
          src="/affiliation_desktop.png"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div>
        <CtaButton label="Register" />
      </div>
    </div>
  )
}

const Affiliation = (props) => {
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

export default Affiliation
