import { Button } from "./ui/button";

interface CategoryCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isSelected: boolean;
  onSelect: () => void;
}

const CategoryCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  isSelected,
  onSelect,
}: CategoryCardProps) => {
  return (
    <div className="flex flex-col gap-4">
      <img 
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-full object-cover"
      />
      <div className="text-center">
        <h6 className="text-lg font-montserrat">{title}</h6>
      </div>
    </div>
  );
};

export default CategoryCard;