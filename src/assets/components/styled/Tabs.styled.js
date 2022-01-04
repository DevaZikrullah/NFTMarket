import { useState } from "react";
import styled from "styled-components";
import Colors from "../../Colors";

const i = [
    {id:1,title:'Featured',Content:<div>Tab1</div>},
    {id:2,title:'Collection',Content:<div>Tab2</div>},
    {id:3,title:'Arist',Content:<div>Tab3</div>},
    {id:4,title:'Tag',Content:<div>Tab4</div>},

];

const TabsE1=styled.div`
    width: 100%;
`;

const Title=styled.span`
    padding:0.5rem ;
    cursor: pointer;
    position: relative;
    ${p=>p.active?'':`color:${Colors.Gray};`}
    ${p=>p.active?'':`font-weight:500;`}

    ::after {
        ${p => !p.active ? "display:none;": ""}
        content: "";
        position: absolute;
        left : 0;
        bottom: 0;
        width: 0.3rem;
        border-radius:50%;
        margin-left: 50%;
        transform: translateX(-50%);
        height: 0.3rem;
        background-color: ${Colors.Primary};
`;

const Content=styled.div`
        margin: 0 0.5rem;
        margin-top: 1rem;
`;

const TitelsContainer=styled.span`
    display: flex;
    justify-content: space-around;
    margin: 0 1.5rem;
    padding: 0 1rem;
`;

export default function Tabs() {

    const [CurrentTab, SetCurrentTab] = useState(i[0]);

    return (
        <TabsE1>
            <TitelsContainer>
                {i.map(tabs=>{
                    return <Title active = {CurrentTab.id===tabs.id}>{tabs.title}</Title>;
                })}
            </TitelsContainer>
            <Content>Content</Content>
        </TabsE1>
    );
}
