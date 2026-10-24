import React from "react";
import { 
  BarChart3, 
  FileText, 
  Search, 
  Users, 
  Video, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink, 
  Mail, 
  MapPin, 
  Calendar, 
  Briefcase, 
  GraduationCap, 
  Award, 
  TrendingUp,
  Download,
  Share2,
  Sparkles,
  Layers,
  ChevronRight,
  Sun,
  Moon,
  Menu,
  X
} from "lucide-react";

interface IconRendererProps {
  name: string;
  className?: string;
  size?: number;
}

export function IconRenderer({ name, className = "w-5 h-5", size = 20 }: IconRendererProps) {
  switch (name.toLowerCase()) {
    case "barchart3":
    case "barchart":
    case "chart":
      return <BarChart3 className={className} size={size} />;
    case "filetext":
    case "file":
    case "content":
      return <FileText className={className} size={size} />;
    case "search":
    case "seo":
      return <Search className={className} size={size} />;
    case "users":
    case "team":
      return <Users className={className} size={size} />;
    case "video":
    case "media":
      return <Video className={className} size={size} />;
    case "cpu":
    case "ai":
      return <Cpu className={className} size={size} />;
    case "briefcase":
      return <Briefcase className={className} size={size} />;
    case "graduationcap":
      return <GraduationCap className={className} size={size} />;
    case "award":
      return <Award className={className} size={size} />;
    case "trendingup":
      return <TrendingUp className={className} size={size} />;
    case "download":
      return <Download className={className} size={size} />;
    case "mail":
      return <Mail className={className} size={size} />;
    case "mappin":
      return <MapPin className={className} size={size} />;
    case "calendar":
      return <Calendar className={className} size={size} />;
    case "sparkles":
      return <Sparkles className={className} size={size} />;
    case "layers":
      return <Layers className={className} size={size} />;
    default:
      return <ArrowRight className={className} size={size} />;
  }
}
