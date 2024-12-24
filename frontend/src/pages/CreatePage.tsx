import { useState } from "react";
import { Container } from "../components/ui/Container";
import VStack from "@/components/ui/VStack";

import { Box } from "@/components/ui/Box";
import { useTheme } from "@/context/ThemeContext";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import { useProductStore } from "../Store/product";
import { useToast } from "@/hooks/use-toast";

function CreatePage() {
  const { useColorModeValue } = useTheme();
  const bgColor = useColorModeValue("text-black", "text-white");

  const { toast } = useToast();
  const [newProduct, setNewProduct] = useState({
    _id: "",
    name: "",
    price: "",
    image: "",
  });
  const { createProduct } = useProductStore();
  const handelAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: message,
        variant: "default",
      });
      setNewProduct({ _id: "", name: "", price: "", image: "" });
    }
  };

  return (
    <Container className="max-w-sm ">
      <VStack>
        <text className={`text-center mb-8 ${bgColor}`}>
          Create New Product
        </text>
        <Box className={`w-full ${bgColor} p-6 rounded-lg shadow-md`}>
          <VStack>
            <Input
              placeholder="product name"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <Input
              placeholder="Price"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <Input
              placeholder="image url"
              name="image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
            <Button onClick={handelAddProduct}>Add Product</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}

export default CreatePage;
