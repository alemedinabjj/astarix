import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Image from 'next/image'

const FeatureBox = props => {
  return (
    <>
      {props.features.map((feature, key) =>
        feature.id % 2 !== 0 ? (
          <Row
            key={key}
            className={
              feature.id === 1
                ? 'align-items-center'
                : 'align-items-center mt-5'
            }
          >
            <Col md={5}>
              <div>
                <Image
                  width={400}
                  height={400}
                  src={feature.img}
                  alt={feature.alt}
                  className="img-fluid d-block mx-auto"
                />
              </div>
            </Col>
            <Col md={{ size: 6, offset: 1 }}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className={feature.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">
                  {feature.title}
                </h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
                <a href={feature.link} className="f-16 text-warning">
                  Leia mais <span className="right-icon ml-2">&#8594;</span>
                </a>
              </div>
            </Col>
          </Row>
        ) : (
          <Row key={key} className="align-items-center mt-5">
            <Col md={6}>
              <div className="mb-4">
                <div className="my-4">
                  <i className="mdi mdi-account-group"></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">
                  {feature.title}
                </h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
                <a href={feature.link} className="f-16 text-warning">
                  Leia mais <span className="right-icon ml-2">&#8594;</span>
                </a>
              </div>
            </Col>
            <Col md={{ size: 5, offset: 1 }} className="mt-5 mt-sm-0">
              <div>
                <Image
                  width={400}
                  height={400}
                  src={feature.img}
                  alt={feature.alt}
                  className="img-fluid d-block mx-auto"
                />
              </div>
            </Col>
          </Row>
        )
      )}
    </>
  )
}
const Feature = () => {
  const features = [
    {
      id: 1,
      img: '/assets/Responsividade.svg',
      title: 'Responsividade para todos os dispositivos',
      alt: 'Mulher negra, sentada na frente de uma imagem de um celular',
      desc: 'Com a metodologia mobile first, seu site ser?? responsivo para todos os dispositivos.',
      link: '/'
    },
    {
      id: 2,
      img: '/assets/Performance.svg',
      title: 'Alta performance',
      alt: 'Imagem de uma webpage',
      desc: 'Com metodos de otimiza????o de imagens e de c??digo, seu site ser?? r??pido e eficiente.',
      link: '/'
    },
    {
      id: 3,
      img: '/assets/SEO.svg',
      title: 'SEO',
      alt: 'Imagem de uma webpage',
      desc: 'Melhores pr??ticas de SEO para que seu site seja encontrado no Google.',
      link: '/'
    }
  ]
  return (
    <section className="section" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                <span className="text-warning">Features</span>
              </h3>
              <p className="text-muted">
                Lorem Ipsum has been the industrys standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book
              </p>
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
      </Container>
    </section>
  )
}
export default Feature
