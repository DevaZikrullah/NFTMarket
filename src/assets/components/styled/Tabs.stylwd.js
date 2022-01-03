import { useState } from "react";
import styled from "styled-components";
import Colors from "../../Colors";

const TabsE1=styled.div`
    width: 100%;
`;

const Title=styled.span`
    padding:0.5rem ;
    cursor: pointer;
    position: relative;
    ${p=>p.active?'':`color:${Colors.Gray};`}
`;

const Content=styled.div`
`;

const TitelsContainer=styled.span`
    display: flex;
    justify-content: space-around;
    margin: 0 1.5rem;
    padding: 0 1rem;
`;

export default function Tabs() {
    return (
        <TabsE1>
            <TitelsContainer>
                <Title active>Featured</Title>
                <Title>Collection</Title>
                <Title>Arist</Title>
                <Title>Tag</Title>
            </TitelsContainer>
            <Content>Content</Content>
        </TabsE1>
    );
}
