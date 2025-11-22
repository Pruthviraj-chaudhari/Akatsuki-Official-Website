// import React, { useState } from 'react';
// import { eventDetails } from '@/data/eventDetails';
// import { EventData } from '@/types/Event';
// import { Dialog } from '@headlessui/react';

// interface ScheduleDemoProps {
//   eventId: string;
// }

// const ScheduleDemo: React.FC<ScheduleDemoProps> = ({ eventId }) => {
//   const event: EventData | undefined = eventDetails[eventId];
//   const [selectedTask, setSelectedTask] = useState<{
//     title: string;
//     tasks: { name: string; description: string }[];
//   } | null>(null);

//   if (!event || !event.schedule) {
//     return <div className="text-red-500 text-center mt-10">No schedule found.</div>;
//   }

//   return (
//     <div className="my-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
//       <h2 className="text-3xl font-bold text-center text-red-600 mb-10">Event Schedule</h2>

//       {/* <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">Event Schedule</h2>
//             <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
//             <p className="text-xl text-gray-600">
//               A comprehensive journey through the world of anime
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {event.schedule.map((day, i) => (
//               <div key={i} className="relative">
//                 <div className="bg-white rounded-lg shadow-lg overflow-hidden">

//                   <div className="bg-red-600 text-white p-6">
//                     <div className="flex items-center justify-between mb-4">
//                       <div className="flex items-center space-x-3">

//                         <span className="text-2xl font-bold">{day.day}</span>
//                       </div>
//                     </div>
//                     <h3 className="text-xl font-semibold">Rounds Overview</h3>
//                   </div>

//                   <div className="p-6">
//                     <div className="space-y-4">
//                       {day.rounds.map((round, j) => (
//                         <div key={j} className="border-l-4 border-red-200 pl-4 mb-4">
//                           <div className="flex justify-between items-start mb-1">
//                             <span className="text-sm font-medium text-red-600">{round.title}</span>
//                             <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
//                               {round.tasks?.length || 0} Tasks
//                             </span>
//                           </div>
//                           <p className="text-sm text-gray-800 font-medium mb-2">
//                             {round.description}
//                           </p>
//                           <button
//                             className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition duration-200 shadow-md"
//                             onClick={() =>
//                               setSelectedTask({
//                                 title: `${day.day} — ${round.title}`,
//                                 tasks: round.tasks || [],
//                               })
//                             }
//                           >
//                             View Tasks
//                           </button>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {event.schedule.map((day, i) => (
//           <div key={i} className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
//             <h3 className="text-xl sm:text-2xl font-bold text-red-600 mb-6 pl-4 border-l-4 border-red-500">{day.day}</h3>
//             {day.rounds.map((round, j) => (
//               <div key={j} className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm mb-6">
//                 <h4 className="text-xl font-semibold text-gray-800 mb-2">{round.title}</h4>
//                 <p className="text-gray-600 mb-4">{round.description}</p>
//                 <button
//                   className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white text-base font-semibold px-5 py-3 rounded-lg transition duration-200 shadow-md"
//                   onClick={() =>
//                     setSelectedTask({
//                       title: `${day.day} — ${round.title}`,
//                       tasks: round.tasks || [],
//                     })
//                   }
//                 >
//                   View Tasks
//                 </button>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>

//       {/* Modal for selected tasks */}
//       <Dialog
//         open={selectedTask !== null}
//         onClose={() => setSelectedTask(null)}
//         className="relative z-50"
//       >
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
//         <div className="fixed inset-0 flex items-center justify-center p-4">
//           <Dialog.Panel className="max-w-lg w-full bg-white rounded-xl shadow-xl p-6 border border-gray-200">
//             <Dialog.Title className="text-2xl font-bold text-red-600 mb-5">
//               {selectedTask?.title}
//             </Dialog.Title>
//             <ul className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
//               {selectedTask?.tasks.length ? (
//                 selectedTask.tasks.map((task, idx) => (
//                   <li
//                     key={idx}
//                     className="border border-red-300 rounded-lg p-4 bg-red-50 text-gray-800 shadow-sm"
//                   >
//                     <div className="text-lg font-semibold text-red-700 mb-1">{task.name}</div>
//                     <div className="text-sm">{task.description}</div>
//                   </li>
//                 ))
//               ) : (
//                 <li className="italic text-slate-500">No tasks found.</li>
//               )}
//             </ul>
//             <div className="mt-6 text-right">
//               <button
//                 onClick={() => setSelectedTask(null)}
//                 className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white text-base font-semibold px-5 py-3 rounded-lg transition duration-200 shadow-md"
//               >
//                 Close
//               </button>
//             </div>
//           </Dialog.Panel>
//         </div>
//       </Dialog>
//     </div>
//   );
// };

// export default ScheduleDemo;

// import React, { useState } from 'react';
// import { eventDetails } from '@/data/eventDetails';
// import { EventData } from '@/types/Event';
// import { Dialog, Transition } from '@headlessui/react';
// import { Fragment } from 'react';

// interface ScheduleDemoProps {
//   eventId: string;
// }

// const ScheduleDemo: React.FC<ScheduleDemoProps> = ({ eventId }) => {
//   const event: EventData | undefined = eventDetails[eventId];
//   const [selectedTask, setSelectedTask] = useState<{
//     title: string;
//     tasks: { name: string; description: string }[];
//   } | null>(null);

//   if (!event || !event.schedule) {
//     return (
//       <div className="text-red-500 text-center mt-10">No schedule found for ID: {eventId}</div>
//     );
//   }

//   return (
//     <div className="my-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
//       <h2 className="text-4xl font-bold text-center text-black-900 mb-6"> Event Schedule</h2>

//       {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {event.schedule.flatMap((day, i) =>
//           day.rounds.map((round, j) => (
//             <div
//               key={`${i}-${j}`}
//               className="relative bg-white border border-gray-200 rounded-xl shadow-md p-6 group hover:shadow-xl transition duration-300"
//             >
//               <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
//               <h3 className="text-lg font-bold text-red-600 mb-2">{day.day}</h3>
//               <h4 className="text-xl font-semibold text-gray-800 mb-2">{round.title}</h4>
//               <p className="text-gray-600 mb-4">{round.description}</p>
//               <button
//                 className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white text-base font-semibold px-5 py-3 rounded-lg transition duration-200 shadow-md"
//                 onClick={() =>
//                   setSelectedTask({
//                     title: `${day.day} — ${round.title}`,
//                     tasks: round.tasks || [],
//                   })
//                 }
//               >
//                 View Tasks
//               </button>
//             </div>
//           ))
//         )}
//       </div> */}

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {event.schedule.flatMap((day, i) =>
//           day.rounds.map((round, j) => (
//             <div
//               key={`${i}-${j}`}
//               className="relative group overflow-hidden rounded-lg border border-red-300 shadow-md bg-white/80 backdrop-blur-md p-4 animate-fade-in-up"
//               style={{
//                 animationDelay: `${(i * day.rounds.length + j) * 100}ms`,
//                 animationFillMode: 'both',
//               }}
//             >
//               {/* 🔆 Spotlight hover */}
//               <div
//                 className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300"
//                 style={{
//                   background:
//                     'radial-gradient(circle at center, rgba(255,0,0,0.1), transparent 70%)',
//                   zIndex: 0,
//                 }}
//               />

//               {/* 🚀 Animated badge */}
//               <span className="animate-bounce text-red-500 text-xl absolute top-2 right-2 z-10">
//                 🚀
//               </span>

//               {/* 📋 Card content */}
//               <div className="relative z-10">
//                 <h3 className="text-lg font-bold text-red-600 mb-2">{day.day}</h3>
//                 <h4 className="text-xl font-semibold text-gray-800 mb-2">{round.title}</h4>
//                 <p className="text-gray-600 mb-4">{round.description}</p>

//                 {/* 👀 Hover task preview */}
//                 {round.tasks?.[0] && (
//                   <div className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition mb-2">
//                     Preview: {round.tasks[0].name} — {round.tasks[0].description.slice(0, 40)}...
//                   </div>
//                 )}

//                 {/* 🔘 Button */}
//                 <button
//                   className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white text-base font-semibold px-5 py-3 rounded-lg transition duration-200 shadow-md"
//                   onClick={() =>
//                     setSelectedTask({
//                       title: `${day.day} — ${round.title}`,
//                       tasks: round.tasks || [],
//                     })
//                   }
//                 >
//                   View Tasks
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       <div className="relative group overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-radial from-red-100 via-white to-transparent opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />
//         {/* Your card content */}
//       </div>

//       {/* Modal for selected tasks */}
//       <Transition appear show={!!selectedTask} as={Fragment}>
//         <Dialog as="div" className="relative z-50" onClose={() => setSelectedTask(null)}>
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0 scale-95"
//             enterTo="opacity-100 scale-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100 scale-100"
//             leaveTo="opacity-0 scale-95"
//           >
//             <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
//           </Transition.Child>

//           <div className="fixed inset-0 flex items-center justify-center p-4">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 translate-y-4"
//               enterTo="opacity-100 translate-y-0"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 translate-y-0"
//               leaveTo="opacity-0 translate-y-4"
//             >
//               <Dialog.Panel className="max-w-lg w-full bg-white rounded-xl shadow-xl p-6 border border-gray-200">
//                 <Dialog.Title className="text-2xl font-bold text-red-600 mb-5">
//                   {selectedTask?.title}
//                 </Dialog.Title>
//                 <ul className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
//                   {selectedTask?.tasks.length ? (
//                     selectedTask.tasks.map((task, idx) => (
//                       <li
//                         key={idx}
//                         className="border border-red-300 rounded-lg p-4 bg-red-50 text-gray-800 shadow-sm"
//                       >
//                         <div className="text-lg font-semibold text-red-700 mb-1">{task.name}</div>
//                         <div className="text-sm">{task.description}</div>
//                       </li>
//                     ))
//                   ) : (
//                     <li className="italic text-slate-500">No tasks found.</li>
//                   )}
//                 </ul>
//                 <div className="mt-6 text-right">
//                   <button
//                     onClick={() => setSelectedTask(null)}
//                     className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white text-base font-semibold px-5 py-3 rounded-lg transition duration-200 shadow-md"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </Dialog>
//       </Transition>
//     </div>
//   );
// };

// export default ScheduleDemo;
import React, { useState, Fragment } from "react";
import { eventDetails } from "@/data/eventDetails";
import { EventData } from "@/types/Event";
import { cn } from "@/lib/utils";
import { Dialog, Transition } from "@headlessui/react";

interface ScheduleTimelineProps {
  eventId: string;
  className?: string;
}

const ScheduleTimeline: React.FC<ScheduleTimelineProps> = ({
  eventId,
  className,
}) => {
  const event: EventData | undefined = eventDetails[eventId];
  const [selectedTask, setSelectedTask] = useState<{
    title: string;
    tasks: { name: string; description: string }[];
  } | null>(null);

  if (!event || !event.schedule) {
    return (
      <div className="text-red-500 text-center mt-10">
        No schedule found for ID: {eventId}
      </div>
    );
  }

  // Flatten schedule so each round has a strict index
  const flattenedRounds = event.schedule.flatMap((day) =>
    day.rounds.map((round) => ({
      day: day.day,
      ...round,
    }))
  );

  return (
    <div className={cn("w-full", className)}>
      <div className="relative max-w-6xl mx-auto px-4 md:px-0">
        {/* Vertical timeline line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-400 to-red-300 hidden md:block"></div>

        {flattenedRounds.map((round, index) => {
          const isLeft = index % 2 === 0; // strictly alternate

          return (
            <div
              key={index}
              className={`mb-12 flex flex-col md:flex-row items-center ${
                isLeft ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content Card */}
              <div className="w-full md:w-1/2 px-6 relative">
                <div className="bg-white border border-red-300 rounded-lg shadow-lg p-6 relative z-10 hover:shadow-2xl hover:-translate-y-1 transform transition duration-300">
                  <h3 className="text-lg font-bold text-red-600">{round.day}</h3>
                  <h4 className="text-xl font-semibold text-gray-800">
                    {round.title}
                  </h4>
                  <p className="text-gray-600 mt-2">{round.description}</p>

                  {/* {round.tasks?.length > 0 && (
                    <p className="mt-3 text-xs text-gray-500">
                      First Task: {round.tasks[0].name} —{" "}
                      {round.tasks[0].description.slice(0, 50)}...
                    </p>
                  )} */}

                  <button
                    className="mt-4 text-center bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-md"
                    onClick={() =>
                      setSelectedTask({
                        title: `${round.day} - ${round.title}`,
                        tasks: round.tasks || [],
                      })
                    }
                  >
                    View Details
                  </button>
                </div>
              </div>

              {/* Marker */}
              <div className="hidden md:flex w-0 md:w-1/12 justify-center relative">
                <div className="w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-lg z-10 mt-2"></div>
              </div>

              {/* Opposite empty space */}
              <div className="hidden md:block w-1/2"></div>
            </div>
          );
        })}
      </div>

      {/* Modal for Tasks */}
      <Transition appear show={!!selectedTask} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setSelectedTask(null)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-4"
            >
              <Dialog.Panel className="max-w-lg w-full bg-white rounded-xl shadow-xl p-6 border border-gray-200">
                <Dialog.Title className="text-2xl font-bold text-red-600 mb-5">
                  {selectedTask?.title}
                </Dialog.Title>
                <ul className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
                  {selectedTask?.tasks.length ? (
                    selectedTask.tasks.map((task, idx) => (
                      <li
                        key={idx}
                        className="border border-red-300 rounded-lg p-4 bg-gray-100 text-gray-800 shadow-sm"
                      >
                        <div className="text-lg font-bold text-black mb-1">
                          {task.name}
                        </div>
                        <div className="text-sm">{task.description}</div>
                      </li>
                    ))
                  ) : (
                    <li className="italic text-slate-500">No tasks found.</li>
                  )}
                </ul>
                <div className="mt-6 text-right">
                  <button
                    onClick={() => setSelectedTask(null)}
                    className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white text-base font-semibold px-5 py-3 rounded-lg transition duration-200 shadow-md"
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ScheduleTimeline;
