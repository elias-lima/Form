import React from 'react';

import {
  Container,
  Header,
  Panel,
  Column,
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