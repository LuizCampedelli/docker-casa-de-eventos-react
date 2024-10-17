import styled from "styled-components";

import Logo from "../Logo/logo";
import Menu from "../Menu/menu";

const CabecalhoContainer = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    background-color: #1F0049;
    color: #FFFFFF;
`

function Cabecalho() {
    return (
        <CabecalhoContainer>
            <Logo />
            <Menu />
        </CabecalhoContainer>
    )
}

export default Cabecalho