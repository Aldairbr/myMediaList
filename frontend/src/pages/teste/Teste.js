import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import got from '../../assets/got.jpg'
import vikings from '../../assets/vikings.jpg'

const HomeSliderComponent = () => {
  const settings = {
    className: 'slider',
    fade: true,
    dots: true,
    vertical: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 0.01,
    arrows: false
  }

  return (
    <Content>
      <Slider {...settings}>
        <Image src={got} />
        <Image src={vikings} />
      </Slider>
    </Content>
  )
}

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;

  .slider {
    margin: 0px;
    padding: 0px;
  }
`

const Image = styled.img``

export default HomeSliderComponent
