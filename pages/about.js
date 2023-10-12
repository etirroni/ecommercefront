import Box from "@/components/Box";
import Center from "@/components/Center";
import Header from "@/components/Header";
import Title from "@/components/Title";

export default function AboutPage(){
    return(
        <>
        <Header/>
        <Center>
            <Box>
                <Title>About Us!</Title>
                <h2>This full stack e-commerce platform is developed with Next.js, MongoDB, Firebase and Stripe. 
                    I've built a user-friendly 'Admin Panel' to streamline this site's management, 
                    it communicates with MongoDB database using REST API commands,
                    meaning that i can efficiently add, update, and organize products and categories. 
                    The Admin Panel acts as the control center for this website, making it easy for me to handle product updates and category 
                    management
                    This project optimizes the use of Firebase for image storage, providing high accessibility through easily shareable links. 
                    This architecture allows for direct integration of images with specific products, enhancing user interaction.
                    Note that the products featured on this platform are not real; its purely a demonstration site with no physical
                    items for sale. This is one of the first "e-commerce" projects ive made so the goal is to create a user-friendly experience 
                    while.
                    </h2>
            </Box>           
        </Center>
        </>
    )
}