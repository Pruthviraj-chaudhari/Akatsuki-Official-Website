import React, { useState } from "react";
import { eventDetails } from "@/data/eventDetails";
import { EventData } from "@/types/Event";
import { cn } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";

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

  const flattenedRounds = event.schedule.flatMap((day) =>
    day.rounds.map((round) => ({
      day: day.day,
      ...round,
    }))
  );

  return (
    <div className={cn("w-full", className)}>
      <div className="relative max-w-6xl mx-auto px-4 md:px-0">
        {/* Timeline line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-400 to-red-300 hidden md:block" />

        {flattenedRounds.map((round, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`mb-12 flex flex-col md:flex-row items-center ${
                isLeft ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Card */}
              <div className="w-full md:w-1/2 px-6">
                <div className="bg-white border border-red-300 rounded-lg shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transform transition duration-300">
                  <h3 className="text-lg font-bold text-red-600">{round.day}</h3>
                  <h4 className="text-xl font-semibold text-gray-800">
                    {round.title}
                  </h4>
                  <p className="text-gray-600 mt-2">{round.description}</p>

                  <button
                    className="mt-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-md"
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
              <div className="hidden md:flex w-1/12 justify-center">
                <div className="w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-lg mt-2" />
              </div>

              <div className="hidden md:block w-1/2" />
            </div>
          );
        })}
      </div>

      {/* MODAL */}
      <Dialog.Root open={!!selectedTask} onOpenChange={() => setSelectedTask(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 animate-fade-in" />

          <Dialog.Content className="fixed z-50 top-1/2 left-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl p-6 border border-gray-200 animate-scale-in">
            <Dialog.Title className="text-2xl font-bold text-red-600 mb-5">
              {selectedTask?.title}
            </Dialog.Title>

            <ul className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
              {selectedTask?.tasks.length ? (
                selectedTask.tasks.map((task, idx) => (
                  <li
                    key={idx}
                    className="border border-red-300 rounded-lg p-4 bg-gray-100 shadow-sm"
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
              <Dialog.Close asChild>
                <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white text-base font-semibold px-5 py-3 rounded-lg shadow-md">
                  Close
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default ScheduleTimeline;
