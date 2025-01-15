"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { CardProduct } from "@/app/components/product/card-product";
import { IntersectionSearch } from "./intersection-search";
import { CarouselProductLoading } from "@/app/components/product/card-product.loading";
import { useApp } from "@/app/contexts/app.context";

export function GridSearch() {
  const { searchProducts, setQueries } = useApp();
  const searchParams = useSearchParams();

  useEffect(() => {
    const queries = Object.fromEntries(
      searchParams
        .toString()
        .split("&")
        .map((item) => {
          const [key, value] = item.split("=");
          return [key, value];
        })
    );

    setQueries((prev: Product.ParametersSearch) => ({
      ...prev,
      ...queries,
    }));
  }, [searchParams.toString()]);

  return (
    <section className="grid grid-cols-5 gap-5 max-w-[1250px] mx-auto">
      {searchProducts && searchProducts.length > 0 ? searchProducts.map((product) => <CardProduct key={product.id} product={product} />) : Array.from({ length: 23 }).map((_, index) => <CarouselProductLoading key={index} isLastItem={true} />)}
      <IntersectionSearch />
    </section>
  );
}
