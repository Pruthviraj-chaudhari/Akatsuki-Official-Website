import { ContainerScroll } from "./ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div>
           
            <h1 className="text-4xl font-semibold text-black dark:text-white md:pb-8">
              <span className="text-2xl md:text-4xl font-bold">Connect with Us</span><br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Akatsuki <span className="text-red-500">Connect</span>
              </span>
            </h1>
          </div>
        }
      >
        <picture>
          <source
            media="(min-width: 900px)"
            srcSet="/connect1.png"
          />
          <img
            src="ipad.png"
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </picture>
      </ContainerScroll>
    </div>
  );
}
