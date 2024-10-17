import { Container, Title } from './contato.styles'

import Cabecalho from '../../components/Cabecalho/cabecalho'
import Rodape from '../../components/Rodape/rodape'
function Contato () {
    // AQUI ENTRARIAM AS FUNÇÕES JAVASCRIPT, HOOKS, ETC...
    return (
        // AQUI EU COLOCO TUDO QUE EU QUER EXIBIR NA TELA
        <>
            <Cabecalho />
            <Container>
                <Title>Página de Contato</Title>
            </Container>
            <Rodape />
        </>  
    )
}

export default Contato