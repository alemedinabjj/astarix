import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">
                Astarix
              </p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">
                Criamos sua landingpage{' '}
                <span className="text-primary font-weight-medium">
                  para seu negócio.
                </span>
              </h1>
              <p className="text-muted mb-4 pb-2">
                Com as tecnologias mais modernas, e melhores praticas de SEO para ser encontrado no Google.
                Consulte nossos planos e escolha o que melhor se encaixa no seu negócio.
                Com alta performance e responsividade, seu site poderá ser acessado em qualquer dispositivo.

              </p>
              <a href="https://wa.me/5511991207155?text=Ol%C3%A1,%20tenho%20interesse%20em%20contratar%20o%20seu%20servi%C3%A7o"
               target="_blank"
               rel='noreferrer'
              className="btn btn-warning">
                Solicite um orçamento{' '}
                <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0 d-flex justify-content-end">
              <Image
                width={500}
                height={500}
                src="/assets/Hero.svg"
                alt="imagem 1"
                className="img-fluid mx-auto d-block"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Hero
