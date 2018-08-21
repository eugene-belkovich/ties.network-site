import React from 'react'

import { Block, Slider } from '../index'
import Card from './partners-card.component'

import krtoken from '../../../styles/public/svg/krtoken_logo.svg'
import krowdMentor from '../../../styles/public/image/krowd-mentor.png'
import canya from '../../../styles/public/image/canya.png'
import blocklancer from '../../../styles/public/image/blocklancer.jpg'
import hoqu from '../../../styles/public/image/hoqu.png'
import wishknish from '../../../styles/public/image/wishknish.png'
import './partners.style.css'

const PartnersData = [
  {
    image: canya,
    link: 'https://canya.io/index.html',
    title: 'CanYa',
  },
  {
    image: krtoken,
    link: 'http://www.krtoken.com/',
    title: 'KrToken',
  },
  {
    image: blocklancer,
    link: 'https://blocklancer.net/',
    title: 'blocklancer',
  },
  {
    image: wishknish,
    link: 'https://wishknish.com/',
    title: 'WishKnish',
  },
  {
    image: hoqu,
    link: 'https://hoqu.io',
    title: 'HOQU',
  },
]


export const Partners = () => (
  <Block
    style={{ background: '#E9E9E9' }}
    title="Partners"
  >
    <Slider>
      {PartnersData.map(partner => <Card {...partner} />)}
    </Slider>
  </Block>
)
