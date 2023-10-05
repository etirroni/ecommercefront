import Head from "next/head"

import Header from "@/components/Header"
import Featured from "@/components/Featured";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";

export default function HomePage({featuredProduct, newProducts}) {
  console.log({newProducts})
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Featured product={featuredProduct}/>
      <NewProducts products={newProducts}/>
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId ='651ea5610a32727880287af5'
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId)
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10})
  return{
    props:{
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
     
      newProducts: JSON.parse(JSON.stringify(newProducts)),
     
    }
  }
}