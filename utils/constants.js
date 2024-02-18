import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export const infoData = [
  {
    icons: <User2 size={20} />,
    text: "Gaurav Jagwani",
  },
  {
    icons: <PhoneCall size={20} />,
    text: "+91 9323489560",
  },
  {
    icons: <MailIcon size={20} />,
    text: "gauravjagwani8@gmail.com",
  },
  {
    icons: <Calendar size={20} />,
    text: "Born on 31st Mar, 2000",
  },

  {
    icons: <GraduationCap size={20} />,
    text: "Bachelors in Engineering",
  },
  {
    icons: <HomeIcon size={20} />,
    text: "India",
  },
];

export const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Mumbai University",
        qualification: "Bachelor of Engineering",
        years: "2018-2022",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Deloitte USI",
        role: "Analyst",
        years: "2023 - Present",
      },
    ],
  },
];
