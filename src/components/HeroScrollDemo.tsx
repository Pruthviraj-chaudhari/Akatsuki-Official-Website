import { NavLink } from "react-router-dom";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Connect with Us <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Akatsuki Connect
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`/connect1.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
          <NavLink>
        <button className="absolute text-white top-50 left-[700px] w-[200px] flex justify-center  font-semibold py-3 px-6 rounded-md text-sm ">
        Join Now
        </button>   
      </NavLink>
      </ContainerScroll>
    
    </div>
  );
}
