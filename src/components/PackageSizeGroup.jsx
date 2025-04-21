import { PackageSizeCard } from './PackageSizeCard'; // ✅

export const PackageSizeGroup = ({ selectedSize, setSelectedSize }) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 p-10 min-h-screen">
      <PackageSizeCard
        size="S"
        dimensions="165 mm x 215 mm x 85 mm"
        label="Paquete pequeño"
        sizeClass="w-20 h-20"
        isSelected={selectedSize === "S"}
        onSelect={setSelectedSize}
      />
      <PackageSizeCard
        size="M"
        dimensions="215 mm x 265 mm x 85 mm"
        label="Paquete mediano"
        sizeClass="w-28 h-28"
        isSelected={selectedSize === "M"}
        onSelect={setSelectedSize}
      />
      <PackageSizeCard
        size="L"
        dimensions="435 mm x 375 mm x 85 mm"
        label="Paquete grande"
        sizeClass="w-36 h-36"
        isSelected={selectedSize === "L"}
        onSelect={setSelectedSize}
      />
      <PackageSizeCard
        size="XL"
        dimensions="640 mm x 765 mm x 85 mm"
        label="Paquete extra grande"
        sizeClass="w-40 h-40"
        isSelected={selectedSize === "XL"}
        onSelect={setSelectedSize}
      />
    </div>
  );
};