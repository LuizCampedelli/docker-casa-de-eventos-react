import styled from "styled-components";

const LogoContainer = styled.div`
    width: 250px;
`
const LogoImage = styled.img`
    height: 120px;
`
function Logo() {
    return (
            <LogoContainer>
                <LogoImage src="./images/logo.svg" alt="Logomarca da casa de eventos" />
            </LogoContainer>
    )
}

export default Logo