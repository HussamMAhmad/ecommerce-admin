"use client";
import Model from "@/components/ui/model";
import { useStoreModel } from "@/hooks/use-store-model";

export const StoreModel = () => {
  const { isOpen, onClose } = useStoreModel((state) => state);

  return (
    <Model
      isOpen={isOpen}
      onClose={onClose}
      title="Create store"
      description="Add a new store to manage and categories"
    >
      Future Create store form
    </Model>
  );
};
