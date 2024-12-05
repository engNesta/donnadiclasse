import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

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
    <Card className="bg-[#FEF6E4] shadow-lg transition-all duration-500 ease-in-out transform hover:scale-[1.02]">
      <CardHeader>
        <CardTitle className="text-2xl font-playfair">{title}</CardTitle>
        <CardDescription className="w-full whitespace-nowrap overflow-hidden text-ellipsis">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <img 
          src={imageSrc}
          alt={imageAlt}
          className="h-48 w-full object-cover rounded-md mb-4"
        />
      </CardContent>
      <CardFooter>
        <Button 
          className={`w-full transition-all duration-500 ease-in-out ${isSelected ? 'bg-italian-red text-white' : 'bg-white text-italian-red'}`}
          onClick={onSelect}
        >
          Utforska {title}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CategoryCard;