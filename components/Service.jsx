import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Service = () => {
  const services = [
    { title : "Landing Pages de Captura de Leads", desc : "As páginas de captura de leads são um dos tipos mais comuns de landing pages. Nelas, uma mensagem de marketing é mostrada sobre sua promoção e um endereço de email é necessário para receber a oferta. E-books, white papers, guias e webinars são recursos populares usados em landing pages de captura de leads." },
    { title : "Landing pages Click-through", desc : "Uma landing page de clique (click-through) fornece informações detalhadas sobre uma oferta para persuadir o visitante a 'clicar' para ser levado a uma página de transação ou conversão. Esses tipos de landing pages geralmente servem como intermediários entre um anúncio e sua loja virtual, permitindo que os usuários se familiarizem com um serviço ou recursos sem que sejam solicitados a fazer uma compra imediatamente." },
    { title : "Landing pages de agradecimento", desc : `Todos nós sabemos que dizer 'obrigado' mostra boas maneiras, mas quando se trata de uma landing page de agradecimento, um simples 'obrigado' também pode beneficiar seus esforços de nutrição de leads. 
    Assim que um cliente preencher um formulário ou fizer uma compra, agradeça-o e, em seguida, sugira ofertas, produtos e serviços adicionais ao seu visitante. Isso pode ajudar a aumentar o valor médio do pedido e a fidelidade do cliente.` },
    { title : "E muito mais...", desc : "Entre em contato por e-mail ou whatsapp para conferir ainda mais serviços." },

  ]
  
  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Serviços</span></h3>
              <p className="text-muted">
                Criamos desde sua landingpage comercial até seu site institucional,
                com foco em performance e usabilidade.
                Com o objetivo de gerar mais leads e conversões para seu negócio.
                E também desenvolvemos sistemas web e mobile.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          {
            services.map((service, key) =>
              <Col key={key} lg={4} md={6}>
                <div>
                  <div className="mb-5">
                      <i className={service.icon}></i>
                  </div>
                  <h5 className="text-dark font-weight-normal pt-1 mb-4">{service.title}</h5>
                  <p className="text-muted mb-4">{service.desc}</p>
                </div>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  );
}
export default Service;