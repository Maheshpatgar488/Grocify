import React from 'react'
import Heading from './Heading'
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from "react-icons/tb";
import { PiPlant, PiFactory } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    para: "We carefully select high-quality raw materials from trusted suppliers to ensure freshness and consistency.",
    icon: <PiPlant />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    para: "Our modern facilities follow strict production standards to deliver safe and reliable products every time.",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    para: "Every batch goes through multiple quality checks to guarantee it meets our premium standards.",
    icon: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Logistics",
    para: "We ensure efficient packaging and fast delivery to get products to you fresh and on time.",
    icon: <BsTruck />,
  },
];

const Process = () => {
  const renderSteps = steps.map((item) => (
    <div
      key={item.id}
      className="flex flex-col text-center justify-start items-center gap-6 w-full sm:w-1/2 lg:w-1/4 px-3"
    >
      {/* Number & Icon */}
      <div className="flex justify-center items-center gap-4 sm:gap-6">
        <span className="flex justify-center items-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-zinc-800 text-white">
          {React.cloneElement(item.number, { size: 28 })}
        </span>

        <span className="flex justify-center items-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-orange-400 to-orange-500">
          {React.cloneElement(item.icon, { size: 24, color: 'white' })}
        </span>
      </div>

      {/* Title & Paragraph */}
      <div className="mt-4 max-w-[300px]">
        <h4 className="text-zinc-800 text-xl sm:text-2xl font-bold">{item.title}</h4>
        <p className="text-zinc-600 mt-2 text-sm sm:text-base">{item.para}</p>
      </div>
    </div>
  ));

  return (
    <section className="pt-28 md:pt-36 lg:pt-44 pb-20 mt-[25px]">
      {/* Heading */}
      <div className="text-zinc-800 max-w-[1400px] mx-auto px-5 md:px-10 mb-16 text-center lg:mt-15 ">
        <Heading highlight="Our" heading="Process" />
      </div>

      {/* Steps Grid */}
      <div className="flex flex-wrap justify-center items-start gap-x-6 gap-y-12 max-w-[1400px] mx-auto px-5 md:px-10">
        {renderSteps}
      </div>
    </section>
  );
};

export default Process;
