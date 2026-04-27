import { timelineItems } from "../data";
import TimelineItem from "./TimelineItem";

const TimelineSection = () => {
  return (
    <div className="relative">
      <div className="absolute left-0 hidden h-full w-px bg-outline-variant/30 md:left-1/2 md:block md:-translate-x-1/2" />

      {timelineItems.map((item) => (
        <TimelineItem key={`${item.title}-${item.year}`} item={item} />
      ))}
    </div>
  );
};

export default TimelineSection;