import { BookHeart, Contact, FileSearch, HandPlatter, LayoutList } from "lucide-react";
import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";



export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Horizon Technologies",
    image: user2,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },

];

export const features = [
  {
    icon: <LayoutList />,
    text: "Restaurant Listings",
    description:
      "Detailed profiles for each restaurant, including menus, reviews, and contact information. ",
  },
  {
    icon: <FileSearch/>,
    text: "Search Functionality",
    description:
      "Users can search for restaurants by location, cuisine, or dietary preferences.",
  },
  {
    icon: <HandPlatter />,
    text: "Search Functionality",
    description:
      "A dedicated section for restaurants to list surplus food available for donation.",
  },
  {
    icon: <Contact/>,
    text: "User Accounts",
    description:
      "Allow users to create profiles to track donations and favorite restaurants.",
  },
  {
    icon: <BookHeart/>,
    text: "Community Engagement",
    description:
      "Forums and blogs to discuss food-related topics and share experiences which includes interactive chatting system as well.",
  },

];

export const checklistItems = [
  {
    title: "For Restuarants",
    description:
      "Increased visibility and customer engagement, potential partnerships for food donation.",
  },
  {
    title: "For Donors",
    description:
      "A streamlined process to donate food, contributing to community welfare. ",
  },
  {
    title: "For the Community",
    description:
      "Reduction of food waste and support for those in need, fostering a culture of sharing",
  },
];


export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Facebook" },
  { href: "#", text: "Instagram" },
];
