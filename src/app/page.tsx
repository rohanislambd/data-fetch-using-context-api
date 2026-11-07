"use client"

import { ProductContext } from "@/context/ProductContext";
import Image from "next/image";
import { useContext } from "react";

export default function Home() {

 const context = useContext(ProductContext)

 if(!context){
  throw new Error("ProductProvider is missing");
 }
 const {products, loading} = context;

  
  return (
    <div>
       <h3>{products.length}</h3>
    </div>
  );
}
