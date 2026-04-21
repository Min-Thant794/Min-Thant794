export type ResumeContactItem = {
  icon: string;
  value: string;
};

export type ResumeExperienceItem = {
  title: string;
  period: string;
  company: string;
  points: string[];
  isCurrent?: boolean;
};

export type ResumeProjectItem = {
  title: string;
  description: string;
  tags: string[];
};

export type ResumeSkillGroup = {
  title: string;
  items: string[];
};

export type ResumeEducationItem = {
  title: string;
  organization: string;
  meta: string;
};

export type ResumeLanguageItem = {
  name: string;
  level: string;
};