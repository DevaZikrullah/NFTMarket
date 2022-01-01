import styled from "styled-components";
import Colors from "../Colors";
import SearchBar from "./styled/SearchBar.styled";
import Tabs from "./styled/Tabs.stylwd";

const HomePageE1 = styled.div `
    background-color:${Colors.Background};
    flex: 1;
    padding-bottom:10vh;
    overflow: auto;
    overflow-x: hidden;
    min-height: min-content;
    padding-top: 1rem;
    scrollbar-width: 0;
    ::-webkit-scrollbar {
        display:none;
    }
`;

const Title = styled.h1 `
    font-family: 'DM Mono';
    font-weight: normal;
    fonty-size: 1.5rem;
    text-align: center;
    margin-bottom: 2rem;
`;

export default function HomePage() {
    return ( 
        <HomePageE1 >
            <Title > NFT Market </Title>
            <SearchBar /> 
            <Tabs />
        </HomePageE1>
    );
}