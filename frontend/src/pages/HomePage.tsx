import VStack from "@/components/ui/VStack";
import { Container } from "../components/ui/Container";

import { useTheme } from "@/context/ThemeContext";
import { Link } from "react-router-dom";
import { SimpleGrid } from "@/components/ui/SimpleGride";
import { useEffect } from "react";
import { useProductStore } from "@/Store/product";
import ProductCard from "@/components/ui/ProductCard";

export default function HomePage() {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  // console.log("products:", products);
  const { useColorModeValue } = useTheme();
  const bgColor = useColorModeValue("text-black", "text-white");
  return (
    <Container>
      <VStack spacing="gap-4">
        <p className={`text-center mb-8 ${bgColor}`}>Product Store 🛒</p>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={0.5}
          width="full"
        >
          {" "}
          {products.map((product) =>
            product._id ? (
              <ProductCard
                key={product._id as string}
                product={{ ...product, price: Number(product.price) }}
              />
            ) : null
          )}
        </SimpleGrid>
        {products.length === 0 && (
          <text className="text-center text-zinc-500 text-xl">
            No Product found 😭
            <Link to={"/create"}>
              <span className="text-sky-400">Create a Product</span>
            </Link>
          </text>
        )}
      </VStack>
    </Container>
  );
}
