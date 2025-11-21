import { useContext } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { DarkModeContext } from "@/Contexts/NightLightContext";

// Import business images
import realEstateImg from "@/assets/images/our-business/real-estate-buildings-in-modern-city-akg75n64dxflm7dk.jpg";
import hospitalityImg from "@/assets/images/our-business/pexels-marketingtuig-87223.jpg";
import constructionImg from "@/assets/images/our-business/ai-generative-3d-house-with-keys-real-estate-concept-photo.jpg";
import developmentImg from "@/assets/images/our-business/realestate2_1024x1024.webp";
import propertyImg from "@/assets/images/our-business/1569230267.jpg";
import investmentImg from "@/assets/images/our-business/successful-real-estate-transaction-realtor-and-buyer-shaking-hands-generative-ai-photo.jpg";
import managementImg from "@/assets/images/our-business/1726166535537.jpeg";

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

// Image container component with consistent sizing and text overlay
const ImageContainer = ({ src, alt, title, description }) => (
  <div className="w-full h-full min-h-[250px] relative group overflow-hidden rounded-xl">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2ZmZiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNjY2MiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBub3QgZm91bmQ8L3RleHQ+PC9zdmc+'
        }}
      />
    </div>
    
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
    
    {/* Content */}
    <div className="relative h-full flex flex-col justify-end p-4 text-white">
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-sm opacity-90">{description}</p>
    </div>
  </div>
);

const items = [
  {
    title: "Real Estate",
    description: "Premium properties and luxury living spaces",
    header: <ImageContainer src={realEstateImg} alt="Real Estate" />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Hospitality",
    description: "World-class hotels and resorts",
    header: <ImageContainer src={hospitalityImg} alt="Hospitality" />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Construction",
    description: "Quality construction and development",
    header: <ImageContainer src={constructionImg} alt="Construction" />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Property Development",
    description: "Innovative real estate solutions",
    header: <ImageContainer src={developmentImg} alt="Property Development" />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Property Management",
    description: "Professional property care and maintenance",
    header: <ImageContainer src={managementImg} alt="Property Management" />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Investment",
    description: "Smart real estate investments",
    header: <ImageContainer src={investmentImg} alt="Investment" />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Residential Projects",
    description: "Beautiful homes for modern living",
    header: <ImageContainer src={propertyImg} alt="Residential Projects" />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

export const BentoGridSection = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`py-12 w-full ${darkMode ? 'bg-[#0a0a0a]' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <BentoGrid className="w-full">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={null}
            description={null}
            header={
              <ImageContainer 
                src={item.header.props.src} 
                alt={item.header.props.alt}
                title={item.title}
                description={item.description}
              />
            }
            icon={null}
            className={`${i === 3 || i === 6 ? "md:col-span-2" : ""} bg-transparent border-0 shadow-none hover:shadow-none`}
          />
        ))}
        </BentoGrid>
      </div>
    </div>
  );
};

export default BentoGridSection;
