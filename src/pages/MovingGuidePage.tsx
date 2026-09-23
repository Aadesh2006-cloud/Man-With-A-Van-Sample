import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { useBooking } from '../context/BookingContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { 
  CheckSquare, Square, Printer, RotateCcw, 
  Sparkles, Package, ShieldAlert, ArrowRight, Lightbulb 
} from 'lucide-react';

export const MovingGuidePage: React.FC = () => {
  const { navigateTo } = useRouter();
  const { checklist, toggleChecklistItem, resetChecklist, completedChecklistCount } = useBooking();
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>('all');

  const totalTasks = checklist.length;
  const progressPercent = Math.round((completedChecklistCount / totalTasks) * 100);

  const filteredTasks = checklist.filter((item) => {
    if (selectedTimeframe === 'all') return true;
    return item.timeframe === selectedTimeframe;
  });

  const timeframes = [
    { id: 'all', label: 'All Tasks' },
    { id: '8-weeks', label: '8 Weeks Out' },
    { id: '4-weeks', label: '4 Weeks Out' },
    { id: '2-weeks', label: '2 Weeks Out' },
    { id: 'moving-week', label: 'Moving Week' },
    { id: 'moving-day', label: 'Moving Day' },
    { id: 'post-move', label: 'Post-Move' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 pb-20">
      <Breadcrumbs items={[{ label: 'Moving Checklist & Guide', current: true }]} />

      {/* HEADER & PROGRESS TRACKER */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Relocation Blueprint</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display">
              Interactive Moving Checklist & Packing Guide
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              Stay organized and stress-free. Check off tasks as you complete them. Your progress is saved automatically to your device.
            </p>
          </div>

          {/* Progress Card */}
          <div className="bg-slate-900 text-white rounded-xl p-5 min-w-[280px] space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-300 font-medium">Readiness Progress:</span>
              <span className="font-bold text-amber-400 tabular-nums text-sm">
                {progressPercent}% Done
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
              <div 
                className="bg-amber-500 h-full transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <div className="flex justify-between items-center text-[11px] text-slate-400 pt-1">
              <span>{completedChecklistCount} of {totalTasks} tasks completed</span>
              <button
                onClick={resetChecklist}
                className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                title="Reset checklist progress"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* TIMEFRAME FILTER BUTTONS */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex flex-wrap gap-1.5 p-1 bg-slate-200/80 rounded-xl">
          {timeframes.map((tf) => (
            <button
              key={tf.id}
              onClick={() => setSelectedTimeframe(tf.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedTimeframe === tf.id
                  ? 'bg-white text-slate-950 shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              {tf.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => window.print()}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>Print Checklist</span>
        </button>
      </div>

      {/* CHECKLIST ITEMS LIST */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-3">
        {filteredTasks.length === 0 ? (
          <div className="text-center py-8 text-sm text-slate-500">
            No tasks found for this section.
          </div>
        ) : (
          filteredTasks.map((item) => (
            <div
              key={item.id}
              onClick={() => toggleChecklistItem(item.id)}
              className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all cursor-pointer ${
                item.completed
                  ? 'bg-slate-50/80 border-slate-200 text-slate-400'
                  : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-50/50'
              }`}
            >
              <button
                type="button"
                className="mt-0.5 text-amber-600 focus:outline-none cursor-pointer"
              >
                {item.completed ? (
                  <CheckSquare className="w-5 h-5 text-emerald-600" />
                ) : (
                  <Square className="w-5 h-5 text-slate-300 hover:text-amber-500" />
                )}
              </button>

              <div className="flex-1">
                <p className={`text-xs sm:text-sm font-medium leading-relaxed ${item.completed ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                  {item.task}
                </p>
                <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-400">
                  <span className="uppercase tracking-wider font-semibold text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                    {item.timeframe.replace('-', ' ')}
                  </span>
                  <span>·</span>
                  <span className="capitalize">{item.category}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* PACKING TIPS PRO GUIDE */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 space-y-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Lightbulb className="w-4 h-4" />
            <span>Master Mover Secrets</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display">
            Professional Packing Recommendations
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Follow these simple guidelines to make unpacking in your new home a breeze and prevent damage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-slate-300">
          <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700/60 space-y-2">
            <h4 className="font-bold text-white text-sm">1. Heavy Items in Small Boxes</h4>
            <p className="leading-relaxed text-slate-400">
              Never pack books, canned goods, or dumbbells into large boxes. Use small "Book Boxes" (1.5 cu ft) so the box stays under 40 lbs and doesn’t burst.
            </p>
          </div>

          <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700/60 space-y-2">
            <h4 className="font-bold text-white text-sm">2. Plates Go Vertical Like Vinyl</h4>
            <p className="leading-relaxed text-slate-400">
              Dishes are strongest on their edges. Wrap each ceramic plate with unprinted newsprint or bubble wrap and pack them vertically in dish-pack barrels, never stacked flat.
            </p>
          </div>

          <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700/60 space-y-2">
            <h4 className="font-bold text-white text-sm">3. The Clear "Day 1" Bin</h4>
            <p className="leading-relaxed text-slate-400">
              Pack a clear plastic container with toilet paper, box cutter, hand soap, phone chargers, kettle, instant coffee, pet food, and clean towels. It travels with you in your car.
            </p>
          </div>

          <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700/60 space-y-2">
            <h4 className="font-bold text-white text-sm">4. Label Two Sides + Room Color</h4>
            <p className="leading-relaxed text-slate-400">
              Label boxes on top and at least one side. When boxes are stacked in your new living room, you can immediately identify contents without unstacking them.
            </p>
          </div>

          <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700/60 space-y-2">
            <h4 className="font-bold text-white text-sm">5. Hardware Bagging Rule</h4>
            <p className="leading-relaxed text-slate-400">
              When taking apart bed frames, desks, or dining tables, tape all screws, nuts, and bolts inside a Ziploc bag and tape it securely to the underside of that piece of furniture.
            </p>
          </div>

          <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700/60 space-y-2">
            <h4 className="font-bold text-white text-sm">6. Electronics Wire Photos</h4>
            <p className="leading-relaxed text-slate-400">
              Take clear phone photos of the rear cords plugged into your TV, stereo receiver, and gaming consoles before unplugging. It saves hours when setting up in the new living room.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
