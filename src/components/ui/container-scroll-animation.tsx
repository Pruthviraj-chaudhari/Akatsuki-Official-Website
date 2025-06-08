import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import { NavLink } from 'react-router-dom';



interface DeviceBreakpoints {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const useDeviceDetection = (): DeviceBreakpoints => {
  const [breakpoints, setBreakpoints] = useState<DeviceBreakpoints>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
  });

  useEffect(() => {
    const updateBreakpoints = () => {
      const width = window.innerWidth;
      setBreakpoints({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
      });
    };

    updateBreakpoints();
    const debouncedUpdate = debounce(updateBreakpoints, 100);
    window.addEventListener('resize', debouncedUpdate);
    
    return () => window.removeEventListener('resize', debouncedUpdate);
  }, []);

  return breakpoints;
};

const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};


export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
 const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const { isMobile, isTablet } = useDeviceDetection();

  const getScaleDimensions = (): [number, number] => {
    if (isMobile) return [0.6, 0.95];
    if (isTablet) return [0.8, 0.98];
    return [1.05, 1];
  };

  const getRotateRange = (): [number, number] => {
    if (isMobile) return [25, 0];
    if (isTablet) return [22, 0];
    return [20, 0];
  };

  const getTranslateRange = (): [number, number] => {
    if (isMobile) return [0, -60];
    if (isTablet) return [0, -80];
    return [0, -100];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], getRotateRange());
  const scale = useTransform(scrollYProgress, [0, 1], getScaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], getTranslateRange());

  return (
    <>
      <div
        className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
        ref={containerRef}
      >
        <div
          className="py-10 md:py-40 w-full relative items-center flex flex-col justify-center"
          style={{
            perspective: '1000px',
          }}
        >
          <Header translate={translate} titleComponent={titleComponent} />
          <Card rotate={rotate} translate={translate} scale={scale}>
            {children}
          </Card>
          <div className=" w-full flex flex-col items-center justify-center mt-20">
            <img
              className=" mx-auto h-40"
              src="https://akatsuki.vercel.app/_next/image?url=%2Fimg%2Fmembers_sm%2Fitachi_profile.png&w=640&q=100"
              alt=""
            />
            <NavLink to={'https://akatsuki-connect.vercel.app/'}>
              <button className="text-white bg-red-500 w-[200px] flex justify-center  font-semibold py-3 px-6 rounded-md text-sm ">
                Join Now
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className=" h-full w-full  overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4 ">
        {children}
      </div>
    </motion.div>
  );
};
