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
        className="h-48 w-full object-cover"
      />
      <Button 
        className={`w-full py-2 text-sm transition-all duration-500 ease-in-out ${isSelected ? 'bg-italian-red text-white' : 'bg-white text-italian-red'}`}
        onClick={onSelect}
      >
        Utforska {title}
      </Button>
    </div>
  );
};

export default CategoryCard;