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
    <div 
      className="flex flex-col gap-4 cursor-pointer transition-all duration-300 hover:scale-[1.02]"
      onClick={handleClick}
    >
      <img 
        src={imageSrc}
        alt={imageAlt}
        className={`w-full h-full object-cover transition-all duration-300 ${
          isSelected ? 'scale-[1.02]' : ''
        }`}
      />
      <div className="text-center">
        <h6 className="text-lg font-montserrat">{title}</h6>
      </div>
    </div>
  );
};

export default CategoryCard;