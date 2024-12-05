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
      <div className="space-y-2">
        <h3 className="text-2xl font-playfair">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <img 
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default CategoryCard;