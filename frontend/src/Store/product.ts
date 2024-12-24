import { create } from "zustand";

interface Product {
  _id: string;
  name: string;
  image: string;
  price: string;
}

interface ProductStore {
  products: Product[];
  setProducts: (products: Product[]) => void;
  createProduct: (
    newProduct: Product
  ) => Promise<{ success: boolean; message: string }>;
  fetchProducts: () => Promise<void>;
  deleteProduct: (
    pId: string
  ) => Promise<{ success: boolean; message: string }>;
  updateProduct: (
    pid: string,
    updateProduct: Product
  ) => Promise<{ success: boolean; message: string }>;
}

interface CreateProductResponse {
  success: boolean;
  message: string;
}

interface DeleteProductResponse {
  success: boolean;
  message: string;
}
interface UpdateProductResponse {
  success: boolean;
  message: string;
}
export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products: Product[]) => set({ products }),
  createProduct: async (
    newProduct: Product
  ): Promise<CreateProductResponse> => {
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      return { success: false, message: "Please fill all fields" };
    }
    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    const data = await res.json();
    set((state) => ({ products: [...state.products, data.data] }));
    return { success: true, message: "Product created successfully" };
  },
  fetchProducts: async (): Promise<void> => {
    try {
      const res = await fetch("/api/products");
      if (!res.ok) {
        console.error("Failed to fetch products");
        return;
      }

      const data = await res.json();
      set({ products: data.data });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
  //delete function
  deleteProduct: async (pId: string): Promise<DeleteProductResponse> => {
    try {
      const res = await fetch(`/api/products/${pId}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        return { success: false, message: "Failed to delete product" };
      }
      set((state) => ({
        products: state.products.filter((product) => product._id !== pId),
      }));
      return { success: true, message: "Product deleted successfully" };
    } catch (error) {
      console.error("Error deleting product:", error);
      return { success: false, message: "Failed to delete product" };
    }
  },
  //update function
  updateProduct: async (
    pid: string,
    updateProduct: Product
  ): Promise<UpdateProductResponse> => {
    try {
      const res = await fetch(`/api/products/${pid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateProduct),
      });
      if (!res.ok) {
        return { success: false, message: "Failed to update product" };
      }
      const data = await res.json();
      set((state) => ({
        products: state.products.map((product) =>
          product._id === pid ? data.data : product
        ),
      }));
      return { success: true, message: "Product updated successfully" };
    } catch (error) {
      console.error("Error updating product:", error);
      return { success: false, message: "Failed to update product" };
    }
  },
}));
