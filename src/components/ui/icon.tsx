import { icons } from "lucide-react";

interface IconProps {
  name: string;
  fallback?: string;
  size?: number;
  className?: string;
  color?: string;
}

const Icon = ({ name, fallback = "CircleAlert", size = 24, className = "", color }: IconProps) => {
  const LucideIcon = icons[name as keyof typeof icons] || icons[fallback as keyof typeof icons];

  if (!LucideIcon) {
    return null;
  }

  return <LucideIcon size={size} className={className} color={color} />;
};

export default Icon;
