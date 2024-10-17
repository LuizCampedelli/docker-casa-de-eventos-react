import { useState, useEffect, useMemo } from 'react'
import { Container, Title, Slogan, Eventos, EventosLista } from './homepage.styles'
import axios from 'axios'

import Cabecalho from '../../components/Cabecalho/cabecalho'
import Rodape from '../../components/Rodape/rodape'

function Homepage() {

    const [eventos, setEventos] = useState([]);
    const [filtroTitulo, setFiltroTitulo] = useState('');

    useEffect(() => {
      const listarEventos = async () => {
        try {
          // Ajuste o caminho para '/events.json'
          const response = await axios.get('/eventos.json');
          console.log('Dados recebidos:', response.data);  // Verifique os dados no console
          if (response.data && Array.isArray(response.data.eventos)) {
            setEventos(response.data.eventos);  // Atualiza o estado com os eventos
          } else {
            console.error('Formato de dados incorreto:', response.data);
          }
        } catch (error) {
          console.error('Erro ao buscar eventos', error);
        }
      };

      listarEventos();
    }, []);


    const eventosFiltrados = useMemo(() => {
        return eventos.filter( evento =>
            evento.titulo.toLowerCase().includes(filtroTitulo.toLowerCase())
        );
    }, [eventos, filtroTitulo]);

    const handleInputChange = (e) => {
        setFiltroTitulo(e.target.value);
    }

    return (
        <>
            <Cabecalho />
            <Container>
                <Title>Bem vindo a Casa de eventos!</Title>
                <Slogan>Essa é a casa de festas que realiza sonhos.</Slogan>
                <input
                    type="text"
                    placeholder="Procure por eventos"
                    value={filtroTitulo}
                    onChange={handleInputChange}
                />
                <Eventos>
                <EventosLista>
                  {eventosFiltrados.length > 0 ? (
                    eventosFiltrados.map((evento, index) => (
                      <div key={index}>
                        <h2>{evento.titulo}</h2>
                        <p>Data: {evento.data}</p>
                        <p>Horário: {evento.horario}</p>
                        <img src={evento.url_da_imagem} alt={evento.titulo} style={{ width: '300px', height: '200px' }} />
                      </div>
                    ))
                  ) : (
                    <p>Nenhum evento encontrado</p>
                  )}
                </EventosLista>
                </Eventos>
            </Container>
            <Rodape />
        </>
    )
}

export default Homepage
