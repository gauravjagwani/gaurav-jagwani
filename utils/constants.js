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

export const projects = [
  {
    title: "CineFlix Movie Recommendation",
    img: "/CineFlix.png",
    link: "https://cineflix-silk.vercel.app/",
    // description: "An AI Powered Movie Recommendation Website",
    description:
      "CineFlix is your one-stop shop for movie and TV show recommendations! Feeling indecisive? Tell us your mood and our AI will suggest the perfect pick. Search for specific titles or browse by genre. Discover the latest on our daily and weekly carousels. Dive deeper with detailed movie/TV show info and cast listings. Powered by TMDB and Gemini AI.",
  },
  {
    title: "BikePulse",
    img: "/BikePulse.png",
    link: "https://bikepulse.vercel.app/",
    description:
      "BikePulse is your one-stop shop for all things cycling! Explore our wide selection of bikes, filtering easily by category to find your ideal match. Whether you're a mountain conqueror or a city cruiser, we have the perfect bike for you. Add your favorites to your cart and get ready to hit the road!",
  },
  {
    title: "Giphy Clone",
    img: "/Giphy_clone.png",
    link: "https://giphy-clone-lyart.vercel.app/",
    description:
      "Unleash your inner meme lord with Giphyfy, the ultimate GIF, sticker, and text playground! Toggle between filters to find the perfect reaction, search for specific gems, or explore curated categories. Dive into detailed GIF pages and share the laughter with friends.",
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
