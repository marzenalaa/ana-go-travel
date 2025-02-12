import React from "react";
import {
  Headset,
  Compass,
  CircleUserRound,
  CircleDollarSign,
} from "lucide-react";
import {
  FaMosque,
  FaGlobe,
  FaTicket,
  FaHotel,
  FaFileCircleCheck,
  FaUsers,
} from "react-icons/fa6";

import HeroImage from "../../public/assets/images/hero-widget.png";
import MeccaImage from "../../public/assets/images/mecca.png";
import DesertImage from "../../public/assets/images/desert.png";
import AboutImage from "../../public/assets/images/about.png";
import ContactImage from "../../public/assets/images/contact.png";
export const company = {
  name: "Ana Go Travel",
  logo: "/assets/images/logo.png",
  phone: "027446161",
};

export const navigation = [
  {
    name: "Home",
    href: "/",
    page: "/",
  },
  {
    name: "About",
    href: "#about",
    page: "about",
  },
  {
    name: "Services",
    href: "#services",
    page: "services",
  },
  {
    name: "Testimonials",
    href: "testimonials",
    page: "",
  },
  {
    name: "Packages",
    href: "#packages",
    page: "",
  },
  {
    name: "Contact",
    href: "#contact",
    page: "contact",
  },
];

export const heroSection = {
  title: "Ana Go Travel",
  subtitle: "Your travel partner",
  description:
    "We are a travel agency that offers the best services to our customers. We provide a wide range of services including flight booking, hotel reservations, and car rentals. Our team of experts is dedicated to providing you with the best travel experience.",
  href: "#services",
  textButton: "Learn More",
  image: HeroImage,
  mecca: MeccaImage,
  desert: DesertImage,
};

export const aboutSection = {
  title: "Explore the World on Your Terms",
  subtitle: "Your Gateway to Unforgettable Journeys",
  description:
    "At Ana Go Travel, we specialize in seamless and unforgettable journeys, starting with spiritual experiences like Umrah, as well as thrilling adventures and relaxing getaways. With handpicked destinations, exclusive travel deals, and dedicated expert support, we take care of every detail so you can explore the world with confidence and ease.",
  image: AboutImage,
  whyUs: {
    titleWhy: "Why Choose Ana Go Travel?",
    featuresWhy: [
      {
        title: "Exclusive Deals",
        description: "Get the best prices on top destinations",
      },
      {
        title: "Safe & Trustworthy",
        description: "Travel with confidence and security",
      },
      {
        title: "Expert Support",
        description: "Our team is here for you, every step of the way",
      },
      {
        title: "Personalized Journeys",
        description: "Custom travel packages to match your needs",
      },
    ],
  },
  buttonTitle: "More About Us",
  features: [
    {
      icon: React.createElement(Headset, {
        size: 40,
        className: "text-primary",
      }),
      title: "Expert Support",
      description: "Contact support team",
    },
    {
      icon: React.createElement(Compass, {
        size: 40,
        className: "text-primary",
      }),
      title: "Peaceful Places",
      description: "Safe and trustworthy",
    },
    {
      icon: React.createElement(CircleUserRound, {
        size: 40,
        className: "text-primary",
      }),
      title: "Exclusive Agent",
      description: "Leading travel agency",
    },
    {
      icon: React.createElement(CircleDollarSign, {
        size: 40,
        className: "text-primary",
      }),
      title: "Incredible Price",
      description: "Best price guarantee",
    },
  ],
};

export const servicesSection = {
  title: "Tailored Travel Services for Every Journey",
  subtitle: "Seamless Planning, Unforgettable Experiences",
  description:
    "At Ana Go Travel, we make travel effortless with our wide range of services designed to meet your needs. From Hajj & Umrah packages to customized trips, we handle everything —including flights, hotel bookings, and visa appointments— so you can focus on the experience, not the logistics. Whether you seek adventure, relaxation, or a spiritual journey, our expert team is here to guide you every step of the way.",
  services: [
    {
      icon: React.createElement(FaMosque, {
        size: 30,
      }),
      titleService: "Umrah Packages",
      descriptionService:
        "Hassle-free Umrah planning, including flights, hotels, and guided services",
    },
    {
      icon: React.createElement(FaGlobe, {
        size: 30,
      }),
      titleService: "Custom Travel Experiences",
      descriptionService:
        "Personalized trips tailored to your preferences, from leisure to business",
    },
    {
      icon: React.createElement(FaTicket, {
        size: 30,
      }),
      titleService: "Flight Ticket Booking",
      descriptionService:
        "Get the best deals on domestic and international flights",
    },
    {
      icon: React.createElement(FaHotel, {
        size: 30,
      }),
      titleService: "Hotel Reservations",
      descriptionService: "Stay in top-rated hotels at the best prices",
    },
    {
      icon: React.createElement(FaFileCircleCheck, {
        size: 30,
      }),
      titleService: "Visa Appointment Assistance",
      descriptionService: "Smooth visa processing with expert guidance",
    },
    {
      icon: React.createElement(FaUsers, {
        size: 30,
      }),
      titleService: "Group Tours & Excursions",
      descriptionService:
        "Well-organized group trips for families, friends, or corporate teams",
    },
  ],
};

export const contactSection = {
  title: "Contact Us",
  subtitle: "Get in touch with us",
  description:
    "We are here to help you. Contact us for any inquiries or assistance.",
  email: "anagotravel02@gmail.com",
  phone: "027446161",
  address: "Route 04, Oued Foda, Chlef, Algeria",
  image: ContactImage,
};
