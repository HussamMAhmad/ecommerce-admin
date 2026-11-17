"use client";
import { useStoreModel } from "@/hooks/use-store-model";
import React, { useEffect } from "react";

function HomePage() {
  const { onOpen, isOpen } = useStoreModel((state) => state);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return <div>Home</div>;
}

export default HomePage;
