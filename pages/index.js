import Head from "next/head"

import Header from "@/components/Header"
import Featured from "@/components/Featured";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";

export default function HomePage({product}) {
  console.log(product)
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Featured product={product}/>
      <NewProducts/>
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId ='6517521de5ed969d528b78db'
  await mongooseConnect();
  const product = await Product.findById(featuredProductId)
  return{
    props:{product: JSON.parse(JSON.stringify(product))}
  }
}