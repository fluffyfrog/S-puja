import { Calendar, Clock } from 'lucide-react';

interface EventCardProps {
  day: string;
  date: string;
  time: string;
  title: string;
  description: string;
}

export function EventCard({ day, date, time, title, description }: EventCardProps) {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-6 shadow-md border-l-4 border-orange-500">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 bg-orange-500 text-white rounded-lg p-3 text-center min-w-[80px]">
          <div className="font-bold">{day}</div>
          <div className="text-sm">{date}</div>
        </div>
        <div className="flex-1">
          <h4 className="text-orange-900 mb-2">{title}</h4>
          <div className="flex items-center gap-2 text-orange-700 mb-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{time}</span>
          </div>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
}
