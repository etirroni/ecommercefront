import Link from "next/link";
import styled, {css} from "styled-components";
import{ ButtonStyle } from "@/components/Button";

const StyledLink=styled(Link)
`
    ${ButtonStyle}
    text-decoration:none;
    box-shadow: none;

`;

export default function ButtonLink(props){
    return(
        <StyledLink {...props}/>
    )
}