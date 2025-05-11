import React from "react";
import {
  Headset,
  Compass,
  CircleUserRound,
  CircleDollarSign,
  Mail,
  ThumbsUp,
  BriefcaseBusiness,
  Target,
  GraduationCap,
  Plane,
  MapPin,
  Phone,
} from "lucide-react";
import {
  FaMosque,
  FaGlobe,
  FaTicket,
  FaHotel,
  FaFileCircleCheck,
  FaUsers,
} from "react-icons/fa6";

import BgImage from "../../public/assets/images/hero-widget.png";
// import MeccaImage from "../../public/assets/images/mecca.png";
// import DesertImage from "../../public/assets/images/desert.png";
import HeroImage from "../../public/assets/images/mecca-desert.png";
import AboutImage from "../../public/assets/images/about.png";
import ContactImage from "../../public/assets/images/contact.png";
import BusinessVisa from "../../public/assets/images/business-visa.svg";
import StudentVisa from "../../public/assets/images/student-visa.svg";
import TouristVisa from "../../public/assets/images/tourist-visa.svg";
import WorkingVisa from "../../public/assets/images/working-visa.svg";
import Facebook from "../../public/assets/icons/facebook.svg";
import Gmail from "../../public/assets/icons/gmail.svg";
import WhatsApp from "../../public/assets/icons/whatsapp.svg";

export const company = {
  name: "Ana Go Travel",
  logo: "/assets/images/logo.png",
  whiteLogo: "/assets/images/white-logo.png",
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
  textButton: "Discover More",
  image: BgImage,
  heroImage: HeroImage,
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

export const commitmentSection = {
  title: "Our Commitments to You",
  subtitle: "Excellence, Trust & Care in Every Journey",
  description:
    "At Ana Go Travel, we believe that every journey begins with trust, and our commitment goes beyond providing exceptional travel services—we strive to ensure your peace of mind and ultimate satisfaction. Whether you're planning a spiritual pilgrimage, a dream vacation, or securing a visa for your next adventure, we promise a seamless, stress-free, and unforgettable experience.",
  commitments: [
    {
      commitmentTitle: "Commitment to Safety",
      commitmentDescription:
        "Your safety is our top priority. We ensure that all our services, from transportation to accommodation, meet the highest standards of hygiene and security.",
      commitmentContent: [
        "All vehicles are regularly sanitized and maintained.",
        "Hotels are selected based on their safety ratings and proximity to key locations.",
        "Our team undergoes regular training to handle emergencies effectively.",
      ],
      bgColor: "#FF9794",
    },
    {
      commitmentTitle: "Commitment to Transparency",
      commitmentDescription:
        "We believe in clear communication and honesty. There are no hidden fees or surprises when you book with us.",
      commitmentContent: [
        "All prices are inclusive of taxes and service charges.",
        "Detailed itineraries are provided upfront so you know exactly what to expect.",
        "Any additional costs will be clearly communicated before confirmation.",
      ],
      bgColor: "#FCEAE1",
    },
    {
      commitmentTitle: "Commitment to Quality Service",
      commitmentDescription:
        "From the moment you contact us to the end of your journey, we strive to deliver an unparalleled level of service.",
      commitmentContent: [
        "24/7 customer support to assist you whenever you need.",
        "Dedicated travel consultants who understand your needs and preferences.",
        "Personalized packages tailored to suit your requirements.",
      ],
      bgColor: "#FCEAE1",
    },
    {
      commitmentTitle: "Commitment to Islamic Values",
      commitmentDescription:
        "As a travel agency specializing in Umrah and Hajj, we uphold Islamic values in everything we do.",
      commitmentContent: [
        "Ensuring that all accommodations are located near the holy sites for convenience and comfort.",
        "Providing halal food options and prayer facilities during your journey.",
        "Respecting cultural and religious traditions at all times.",
      ],
      bgColor: "#FF9794",
    },
    {
      commitmentTitle: "Commitment to Customer Satisfaction",
      commitmentDescription:
        "Your happiness is our ultimate goal. We go the extra mile to ensure that every detail of your trip exceeds your expectations.",
      commitmentContent: [
        "Feedback is collected after every trip to improve our services continuously.",
        "Flexible cancellation policies to give you peace of mind.",
        "A dedicated team to address any concerns or issues promptly.",
      ],
      bgColor: "#FF9794",
    },
  ],
  cta: [
    {
      icon: React.createElement(Mail, {
        size: 20,
        className: "text-primary",
      }),
      title: "Looking for help?",
      link: { text: "Contact us today", href: "#contact", type: "href" },
    },
    {
      icon: React.createElement(ThumbsUp, {
        size: 20,
        className: "text-primary",
      }),
      title: "Keep in Touch.",
      link: {
        text: "Like us on Facebook",
        href: "https://www.facebook.com/anagotravell",
        type: "page",
      },
    },
  ],
};

export const visaSection = {
  title: "Your Gateway to Global Opportunities",
  subtitle: "We Simplify the Visa Application Process for You",
  tagline:
    "Your Passport to Seamless Travel – Expert Visa Services at Your Service!",
  description:
    "At Ana Go Travel, we offer a wide range of visa services tailored to meet your travel needs. Whether you're traveling for business, work, study, or leisure, our expert team is here to assist you every step of the way.",
  visas: [
    {
      visaTitle: "Business Visa",
      visaDescription:
        "Travel for meetings, conferences, or business ventures with a smooth, hassle-free visa process.",
      image: BusinessVisa,
      icon: React.createElement(BriefcaseBusiness, {
        size: 40,
        className: "text-primary",
      }),
    },
    {
      visaTitle: "Working Visa",
      visaDescription:
        "Secure your work visa easily and start your career abroad with professional assistance.",
      image: WorkingVisa,
      icon: React.createElement(Target, {
        size: 40,
        className: "text-primary",
      }),
    },
    {
      visaTitle: "Student Visa",
      visaDescription:
        "Study abroad with confidence. We guide you through visa applications and requirements.",
      image: StudentVisa,
      icon: React.createElement(GraduationCap, {
        size: 40,
        className: "text-primary",
      }),
    },
    {
      visaTitle: "Tourist Visa",
      visaDescription:
        "Explore the world stress-free. Let us handle your tourist visa process smoothly.",
      image: TouristVisa,
      icon: React.createElement(Plane, {
        size: 40,
        className: "text-primary",
      }),
    },
  ],
};

export const offersSection = {
  title: "Exclusive Travel Deals Just for You",
  subtitle: "Unbeatable Offers for Your Next Journey",
  description:
    "At Ana Go Travel, we bring you the best travel deals to make your trips more affordable and stress-free. Whether you're planning a spiritual pilgrimage, a business trip, or a relaxing getaway, our exclusive offers ensure you get the best value without compromising on quality. Explore our latest discounts and start your journey today!",
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

export const footerSection = {
  title:
    "Your Trusted Partner for Seamless Travel and Visa Solutions Worldwide.",
  socialLinks: [
    {
      name: "facebook",
      link: "https://www.facebook.com/anagotravell",
      logo: Facebook,
    },
    { name: "email", link: "mailto:anagotravel02@gmail.com", logo: Gmail },
    { name: "whatsapp", link: "https://wa.me/213657454391", logo: WhatsApp },
  ],
  quickLinks: [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Packages", link: "/packages" },
    { name: "Contact", link: "/contact" },
  ],
  contactInfo: [
    {
      title: "Visit Us:",
      icon: React.createElement(MapPin, {
        size: 20,
        className: "text-primary",
      }),
      content: "Route 04, Oued Foda, Chlef.",
      link: "",
    },
    {
      title: "Call us directly:",
      icon: React.createElement(Phone, {
        size: 20,
        className: "text-primary",
      }),
      content: "027446161",
      link: "tel:027446161",
    },
    {
      title: " Need support:",
      icon: React.createElement(Mail, {
        size: 20,
        className: "text-primary",
      }),
      content: "anagotravel02@gmail.com",
      link: "mailto:anagotravel02@gmail.com",
    },
  ],
};
