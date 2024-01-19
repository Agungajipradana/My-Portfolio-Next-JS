import { CardTechStackProps } from "@/types";
import Image from "next/image";

const CardTechStack = ({ imageSrc, title, imageWidth, imageHeight }: CardTechStackProps) => {
  return (
    <div className="w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 ">
      <Image src={imageSrc} width={1000} height={500} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default CardTechStack;
