import { eventImages } from "@/Data/eventImages ";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  return (
    <div className="w-full">
      <Timeline
        data={eventImages.map(({ name, photos,text }) => ({
          title: name,
          content: (
            <div key={name}>
              {/* Uncomment this section if you want to display text or listItems */}
              {text && (
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                  {text.map((t, index) => (
                    <span key={index}>{t}<br /></span>
                  ))}
                </p>
              )}
              {/* {listItems && (
                <div className="mb-8">
                  {listItems.map((item, index) => (
                    <div key={index} className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                      {item}
                    </div>
                  ))}
                </div>
              )} */}
              <div className="grid grid-cols-2 gap-4">
                {photos.slice(0, 4).map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`${name} template`}
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                ))}
              </div>
            </div>
          ),
        }))}
      />
    </div>
  );
}
