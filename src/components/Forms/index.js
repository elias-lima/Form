import React from 'react';

import {
  Container,
  Header,
  Panel,
  Column,
  FormDoc,
  Document,
  Section,
} from './styles';

const Forms = () => {
  return (
    <Container>
      <Header>
        <h1>CONSERVATÓRIO DOS REGISTOS COMERCIAL E DE BENS MÓVEIS</h1>
        <div>
          <h2>Pedido de registo de compra e venda</h2>
        </div>
      </Header>

      <Panel>
        <Column>
          <Document>
            <FormDoc>
              <div>
                <span>
                  <p className="paragrafo">
                    <label>Nome:</label>
                    <input type="text" className="nome"></input>
                    <label>Idade:</label>
                    <input type="number" min="0" max="100" className="T-pequeno"></input>
                  </p>
                </span>
                <span>
                  <p className="paragrafo">
                    <label>Data de nsacimento:</label>
                    <input type="data" className="T-pequeno"></input>
                    <label>Nacionalidade:</label>
                    <input type="text" className="T-pequeno"></input>
                    <label>Sexo:</label>
                    <select className="T-pequeno">
                      <option>Masculino</option>
                      <option>Femenino</option>
                      <option>Outros</option>
                    </select>
                  </p>
                </span >
                <span>
                  <p className="paragrafo">
                    <label>Estado civil:</label>
                    <select className="T-pequeno">
                      <option>Solteiro/a</option>
                      <option>Casado/a</option>
                      <option>Devorciado/a</option>
                    </select>
                    <label>Nome do cônjuge:</label>
                    <input type="text" className="nome"></input>
                  </p>
                </span>
                <span>
                  <p className="paragrafo">
                    Regime de bens: <input type="checkbox" className="box" />
                    Reg. da com. de adquiridos: <input type="checkbox" className="box" />
                    Reg. da com. geral de bens: <input type="checkbox" className="box" />
                  </p>
                </span>
              </div>
            </FormDoc>
          </Document>

        </Column>

        <Column>

          <FormSection />
          <FormSection />
          <FormSection />
        </Column>
      </Panel>
    </Container>
  );
}

const FormSection = () => (
  <Section>
    <h4>Preencha o formulário</h4>

    <div>
      <span>
        <p className="title">Conservatório dos registos comercial e de bens móveis</p>
        <p className="description">
          Pedido de registo de empresário comercial -Pessoa Singular- 
        </p>
      </span>
      <span>
        <p className="title">Conservatório dos registos comercial e de bens móveis</p>
        <p className="description">Pedido de registo de compra e venda</p>
      </span>
    </div>

    <a href="#">Saiba mais</a>
  </Section>
)

export default Forms;