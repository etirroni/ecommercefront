import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductsGrid from "@/components/ProductsGrid";
import Select from "@/components/Select";
import Title from "@/components/Title";
import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
import { useState } from "react";
import styled from "styled-components";

const ColumnsWrapper = styled.div`
    display:grid;
    grid-template-columns: 0.5fr 1.5fr;
    gap: 20px;
    margin-top:40px;
    background-color:transparent;
`;
const AllProductsWrapper = styled.div`
    background: linear-gradient(to top right, #A3E1DC, #FFF);
    padding: 30px;    
    border-radius:10px;
    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.3); 
`;
const Box = styled.div`
    border-radius: 10px;
    padding:30px;
    background: linear-gradient(to bottom , #A3E1DC, #e7e7e7);
    text-shadow: 1px 1px 2px #000;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); 
`;


export default function ProductsPage({products,categories, category:assignedCategory, properties:assignedProperty}) {
    const [category, setCategory] = useState(assignedCategory || "")
    const [productProperties, setProductProperties] = useState(assignedProperty || "")
    console.log("category : ", category)

    const filteredProducts = category
    ? products.filter(product => product.category === category)
    : products 

    function setProductProp(propName, value) {
        setProductProperties((prev) => {
          const newProductProps = { ...prev , [propName]: value,
            }
        console.log("New Product Props: ",newProductProps)
          return newProductProps;
        });
      }
    
    const propertiesToFill = []
    if(categories.length > 0 && category){
        
        console.log("IN PROPERTIES TO FILL: ", productProperties, " defName: ")
        let catInfo = categories.find(({_id}) =>_id === category)
        propertiesToFill.push(...catInfo.properties)
        while(catInfo?.parent?._id){
            const parentCat = categories.find(({_id}) =>_id === catInfo?.parent?._id)
            propertiesToFill.push(...parentCat.properties)
            catInfo = parentCat
        }
    }

    

    return(
        <>
        <Header/>
        <Center>
        <ColumnsWrapper>
        <Box>
            <Title>Filter search:</Title>
            <p>Select Category: </p>
            <Select value={category} onChange={ev => setCategory(ev.target.value)}>
                    <option key="default" value="">All</option>
                    {categories.length > 0 && categories.filter(c => !c.parent).map(c =>(
                        <option key={c._id} value={c._id}>{c.name}</option>
                        ))
                    }
            </Select>
            {categories.length > 0 && propertiesToFill.map(p =>(
                <div key={p.name}>
                    <div>{p.name}</div>
                    <Select
                        value={productProperties[p.name]}
                        onChange={ev => setProductProp(p.name, ev.target.value)}
                        key={productProperties[p.name]}
                    >     
                        <option value="" disabled selected>
                       Current value: {productProperties[0]?.[p.name] }
                        </option>                     
                        {p.values.map((v) => (
                            <option key={v} value={v}>
                                {v}
                            </option>
                        ))}
                    </Select>
                    
                </div>
            ))}
        </Box>
        <Box>
            <Title>All products</Title>
            <ProductsGrid products={filteredProducts}/>  
        </Box>
        </ColumnsWrapper>
        </Center>
        </>
    )
}

export async function getServerSideProps() {
    await mongooseConnect()
    const products = await Product.find({}, null, {sort:{'_id':-1}})
    const categories = await Category.find({},null,{sort:{'_id':-1}})
    return{
        props:{
            products:JSON.parse(JSON.stringify(products)),
            categories:JSON.parse(JSON.stringify(categories))
        }
    }
        
}