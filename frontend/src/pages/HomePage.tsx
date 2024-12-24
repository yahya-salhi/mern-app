import VStack from "@/components/ui/VStack";
import { Container } from "../components/ui/Container";
import { Text } from "@/components/ui/Text";
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
        <Text
          className={`text-center mb-8 ${bgColor}`}
          variant="p"
          weight="light"
          size="text-2xl"
        >
          Current Product 📌
        </Text>
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
              <ProductCard key={product._id as string} product={product} />
            ) : null
          )}
        </SimpleGrid>
        {products.length === 0 && (
          <Text
            size="text-xl"
            className="text-center text-zinc-500"
            weight="bold"
          >
            No Product found 😭
            <Link to={"/create"}>
              <Text
                variant="span"
                color="text-sky-400"
                className="hover:underline"
              >
                Create a Product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
}
