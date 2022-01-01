import { useState } from "react";
import styled from "styled-components";
import Colors from "../../Colors";

const TabsE1=styled.div`
`;

const Title=styled.span`
`;

const Content=styled.div`
`;

const TitelsContainer=styled.span`
`;

export default function Tabs() {
    return (
        <TabsE1>
            <TitelsContainer>
                <Title>Featured</Title>
                <Title>Collection</Title>
                <Title>Arist</Title>
                <Title>Tag</Title>
            </TitelsContainer>
            <Content></Content>
        </TabsE1>
    );
}
