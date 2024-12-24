import { BookmarkPlus, BookmarkX } from "lucide-react";
import { Box } from "@/components/ui/Box";
import { HStack } from "./HStack";
import { useProductStore } from "@/Store/product";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/Input";

import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "./Modal";
import VStack from "./VStack";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
}

function ProductCard({ product }: { product: Product }) {
  const { deleteProduct } = useProductStore();
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const { updateProduct } = useProductStore();
  const [productUpdates, setProductUpdates] = useState<ProductUpdates>({
    _id: product._id,
    name: product.name,
    price: product.price.toString(),
    image: product.image,
  });
  interface ProductUpdates {
    _id: string;
    name: string;
    price: string;
    image: string;
  }

  const handleUpdateProduct = async (
    pId: string,
    productUpdates: ProductUpdates
  ): Promise<void> => {
    const { success, message } = await updateProduct(pId, productUpdates);
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
    }
  };

  const handelDeleteProduct = async (pId: string): Promise<void> => {
    const { success, message } = await deleteProduct(pId);
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
    }
  };
  return (
    <Box className="w-64 h-92 shadow-lg rounded-lg overflow-hidden transition-transform duration-300 bg-white hover:translate-y-[-5px] hover:shadow-xl mx-auto">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full  h-40 object-cover"
      />
      {/* Content */}
      <Box className="p-4 flex flex-col justify-between h-40">
        {/* Product Name */}
        <h3 className="text-lg font-bold mb-2 truncate">{product.name}</h3>

        {/* Product Price */}
        <h5 className="font-bold text-xl  mb-4">${product.price}</h5>

        {/* Action Buttons */}
        <HStack gap="gap-4">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-center text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition duration-300"
          >
            <BookmarkPlus className="w-5 h-5" />
          </button>
          <button
            onClick={() => handelDeleteProduct(product._id)}
            className="flex items-center justify-center text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded transition duration-300"
          >
            <BookmarkX className="w-5 h-5" />
          </button>
        </HStack>
      </Box>

      {/* Add my Modal component here */}

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton onClose={() => setIsOpen(false)} />
          <ModalBody>
            <VStack className="flex flex-col space-y-4">
              <Input
                className="border p-2 rounded"
                placeholder="Product Name"
                value={productUpdates.name}
                onChange={(e) =>
                  setProductUpdates({
                    ...productUpdates,
                    name: e.target.value,
                  })
                }
              />
              <Input
                className="border p-2 rounded"
                placeholder="Price"
                type="number"
                value={productUpdates.price}
                onChange={(e) =>
                  setProductUpdates({
                    ...productUpdates,
                    price: e.target.value,
                  })
                }
              />
              <Input
                className="border p-2 rounded"
                placeholder="Image URL"
                value={productUpdates.image}
                onChange={(e) =>
                  setProductUpdates({
                    ...productUpdates,
                    image: e.target.value,
                  })
                }
              />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
              onClick={() => handleUpdateProduct(product._id, productUpdates)}
            >
              Update
            </button>
            <button
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default ProductCard;
