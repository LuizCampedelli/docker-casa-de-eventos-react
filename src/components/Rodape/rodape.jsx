import styled from "styled-components";

const RodapeContainer = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: left;
    align-items: center;
    background-color: #1F0049;
    color: #FFFFFF;
`

const RodapeText = styled.p`
    padding: 0 15px;
`

function Rodape() {
    return (
        <RodapeContainer>
            <RodapeText>Copyright © 2024 - Site desenvolvido por turma 1025.</RodapeText>
        </RodapeContainer>
    )
}
export default Rodape