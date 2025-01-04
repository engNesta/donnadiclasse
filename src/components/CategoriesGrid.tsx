import CategoryCard from "./CategoryCard";

interface CategoriesGridProps {
  selectedCategory: string | null;
  onCategorySelect: (category: string) => void;
}

const CategoriesGrid = ({ selectedCategory, onCategorySelect }: CategoriesGridProps) => {
  const categories = [
    {
      id: 'clothes',
      title: 'Kläder',
      description: 'Upptäck vår exklusiva klädkollektion',
      image: '/Products/introPiece1.jpg',
    },
    {
      id: 'bags',
      title: 'Väskor',
      description: 'Eleganta väskor för varje tillfälle',
      image: '/Products/Bags/Bag 1.jpg',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          title={category.title}
          description={category.description}
          imageSrc={category.image}
          imageAlt={`${category.title} collection`}
          isSelected={selectedCategory === category.id}
          onSelect={() => onCategorySelect(category.id)}
        />
      ))}
    </div>
  );
};

export default CategoriesGrid;