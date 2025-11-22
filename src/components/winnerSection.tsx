import React from 'react';
import { Crown, Trophy, Medal } from 'lucide-react';
import { EventData } from '@/types/Event';

interface WinnersSectionProps {
  event: EventData;
}

const rankStyles: Record<
  number,
  {
    icon: JSX.Element;
    border: string;
    bg: string;
    label: string;
  }
> = {
  1: {
    icon: <Crown className="w-6 h-6 text-red-600" />,
    border: 'border-2',
    bg: 'bg-white',
    label: '1st Place',
  },
  2: {
    icon: <Trophy className="w-6 h-6 text-red-600" />,
    border: 'border-2',
    bg: 'bg-white',
    label: '2nd Place',
  },
  3: {
    icon: <Medal className="w-6 h-6 text-red-600" />,
    border: 'border-2',
    bg: 'bg-white',
    label: '3rd Place',
  },
};

const WinnersSection: React.FC<WinnersSectionProps> = ({ event }) => {
  const winners = event.winners || [];
  if (!winners.length) return null;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-wrap justify-center gap-8 ${
            winners.length === 1 ? 'items-center' : 'items-stretch'
          }`}
        >
          {winners.map((winner, index) => {
            const rank = winner.rank;
            const style = rankStyles[rank] || rankStyles[3];
            const isQuiz =
              typeof winner.prize === 'string' &&
              winner.prize.toLowerCase().includes('quiz');

            return (
              <div
                key={index}
                className={`rounded-xl shadow-lg p-6 transition-all hover:shadow-2xl hover:ease-in-out hover:scale-105 hover:border-red-500 duration-300 ${style.bg} ${style.border} w-[320px]`}
              >
                {/* Header Section */}
                <div className="flex items-center justify-between mb-4">
                  {isQuiz ? (
                    <div className="flex items-center gap-2 text-red-600 font-bold text-xl">
                      <Crown className="w-6 h-6 text-red-600" />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-red-600 font-bold text-xl">
                      {style.icon}
                      <span>{style.label}</span>
                    </div>
                  )}

                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {winner.prize}
                  </span>
                </div>

                {/* Team Info */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {winner.teamName}
                </h3>

                {/* Members */}
                {winner.members?.length > 0 && (
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {winner.members.map((member, i) => (
                      <li key={i}>{member}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WinnersSection;
