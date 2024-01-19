export interface AppShellProps {
  children: React.ReactNode;
}

export interface ContactProps {
  show: boolean;
  message: string;
}

export interface DarkModeContextTypeProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Project {
  imageSrc: string;
  imageWidth?: number;
  imageHeight?: number;
  title: string;
  description: string;
  techUsed: Array<{ icon: string; name: string }>;
  livePreviewLink: string;
  viewCodeLink: string;
}

export interface CardProjectProps {
  project: Project;
  isDarkMode: boolean;
}

export interface ShowMoreButtonProps {
  onClick: () => void;
}

export interface ButtonProjectProps {
  onClick: () => void;
  title: string;
  imageSrc: string;
}

export interface CardTechStackProps {
  imageSrc: string;
  imageWidth?: number;
  imageHeight?: number;
  title: string;
}
