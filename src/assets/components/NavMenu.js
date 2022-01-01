import styled from "styled-components";
import {FiHome} from 'react-icons/fi';
import {AiOutlineUser} from 'react-icons/ai';
import {BiStore} from 'react-icons/bi';
import Colors from "../Colors";
import {useLocation,useNavigate} from "react-router-dom";

const NavMenuE1 = styled.nav`
    display: flex;
    background-color: rgba(255, 255 ,255, 0.01);
    position: absolute;
    bottom: 0;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 10%;
    backdrop-filter: blur(50px);
`;

const Link = styled.a`

    //Change body color
    font-size: 1.7rem;
    ${p => p.active? `color:${Colors.Primary};`:''}
    position: relative;
    cursor: pointer;

    // Under Dot
    ::before {
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
    }
`;

export default function NavMenu() {
        const nav=useNavigate();
        const {pathname}=useLocation();
    return(
        <NavMenuE1>
            <Link
                active={pathname==='/'}
                onClick={() => {
                    nav("/");
                }}
            >
                <FiHome />
            </Link>
            <Link 
                active={pathname==='/store'}
                onClick={() => {
                    nav("/store");
            }}
            >
                <BiStore />
            </Link>
            <Link>
                <AiOutlineUser />
            </Link>
        </NavMenuE1>
    )
}