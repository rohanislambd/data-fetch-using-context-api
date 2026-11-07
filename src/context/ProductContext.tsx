"use client"

import { createContext, useEffect, useState } from "react";

// product type 
type Product = {
    productName: string,
    email:string, 
    id:number
}

type ProductContextType = {
  products: Product[];
  loading: boolean;
};

export const ProductContext = createContext<ProductContextType| undefined>(undefined)


// provider  
export function ProductProvider({children}:{children:React.ReactNode}){
   const [products , setProduct] = useState<Product[]>([])
   const [loading, setLoading] = useState(true)

//fetch 
    useEffect(()=>{
       const fetchProduct = async () =>{
         try{
            const res = await fetch("http://localhost:9000/data");
            const data = await res.json();
            setProduct(data)
         }catch(error){
            console.log("falied to fatch product", error);
         }finally{
            setLoading(false)
         }
       }
       fetchProduct();
    }, [])

    const contextValue  = {
        products,
        loading
    }

    return (
        <ProductContext.Provider value={contextValue }>
            {children}
        </ProductContext.Provider>
    )


}