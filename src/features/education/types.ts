export type TimelineItemType = {
  year: string;
  label: string;
  title: string;
  description: string;
  badges?: string[];
  side: "left" | "right";
  dotColor: "primary" | "tertiary";
  highlight?: string;
};