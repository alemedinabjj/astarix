import React from 'react'
import { Container, Row, Col } from 'reactstrap'
const About = () => {
  return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                Quem <span className="text-warning">Somos</span>
              </h3>
              <p className="text-muted">
                A <span className="text-warning">Astarix</span> é uma empresa
                que atua no mercado de desenvolvimento web desde 2021.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">
              <span className="text-warning">Astarix</span>
              {/* Descrição da astarix */} é uma empresa que atua no
              mercado de desenvolvimento web desde 2021.
            </h2>
          </Col>
          <Col md={{ size: 7, offset: 1 }}>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">
                  Missão
                </h6>
                <p className="text-muted font-weight-light">
                  Nossa missão é oferecer soluções de qualidade para nossos
                  clientes, com o objetivo de atender suas necessidades e
                  superar suas expectativas.
                </p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Visão</h6>
                <p className="text-muted font-weight-light">
                  Nossa visão é ser uma empresa referência no mercado de
                  desenvolvimento web, com foco em soluções de qualidade e
                  atendimento personalizado.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default About
