import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import nft1 from '../../assets/images/nft1.png';
import nft2 from '../../assets/images/nft2.png';
import nft3 from '../../assets/images/nft3.png';
import nft4 from '../../assets/images/nft4.png';
import Colors from "../Colors";
import img from './styled/img.styled';

const items=[
    {id:1,tittle:'NFT1',SubTittle:'tyler',image:nft1},
    {id:2,tittle:'NFT1',SubTittle:'tyler',image:nft2},
    {id:3,tittle:'NFT1',SubTittle:'tyler',image:nft3},
    {id:4,tittle:'NFT1',SubTittle:'tyler',image:nft4},
]

const FeaturedTab1=styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    position: relative;
    overflow: hidden;
    height: 400px;
`;

const ItemE1=styled.div`
    backround-color: ${Colors.CardBackground};
    padding: 0.4rem;
    border-radius: 12px;
    display: flex;
    cursor: pointer;
    flex-direction: column;

`;

const Tittle=styled.span`
    font-size: 1.1rem;
    margin-top: 0.5rem;
`;

const SubTittle=styled.span`
    color:${Colors.Gray};
    font-size: 1rem;
`;

const ShowMore=styled.span`
    text-align: center;
    position: absolute;
    cursor: pointer;
    left: 0;
    bottom: 0;
    height: 25%;
    width: 100%;
    font-weight: 100;
    padding: 1rem;
    background: rgba(255,255,255,0.32);
    border: 1px solid ${Colors.GraylBorder};
    backdrop-filter: blur(17px);
    border-radius: 12px;
`;

const BottomFade=styled.span`
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 25%;
    background-image: linear-gradient(rgba (255,255,255,0),${Colors.Background});
`;

export default function FeaturedTab() {
        const nav=useNavigate();
    return (
        <FeaturedTab1>
            {items.map(item=>{
                return (
                <item onClick={() => {
                    nav("/product")
                }}>
                    <img src={item.image}/>
                    <Tittle>{item.tittle}</Tittle>
                    <SubTittle>{item.SubTittle}</SubTittle>
                </item>
                );
            })}
            <BottomFade />
            <ShowMore>
                <BiChevronDown />Show More
            </ShowMore>
        </FeaturedTab1>
    )
    
}