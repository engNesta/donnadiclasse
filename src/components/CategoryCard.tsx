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
  const handleClick = () => {
    onSelect();
    // Find the products grid and scroll to it
    const productsGrid = document.querySelector('[data-products-grid]');
    if (productsGrid) {
      productsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Button 
        onClick={handleClick}
        className={`w-full py-8 text-lg font-montserrat transition-all duration-300 ${
          isSelected 
            ? 'bg-italian-red text-white hover:bg-italian-red/90' 
            : 'bg-white text-rich-black hover:bg-gray-100'
        }`}
      >
        {title}
      </Button>
    </div>
  );
};

export default CategoryCard;