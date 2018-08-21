import React from 'react'
import { createSelector } from 'reselect'
import { FormattedMessage } from 'react-intl'
import kochin from '../../styles/public/image/kochin.png'
import neymark from '../../styles/public/image/neymark.png'
import filatov from '../../styles/public/image/filatov.png'
import tokar from '../../styles/public/image/tokar.png'
import mukhanov from '../../styles/public/image/mukhanov.png'
import bausch from '../../styles/public/image/bausch.jpg'
import schwartz from '../../styles/public/image/schwartz.jpg'
import schlatter from '../../styles/public/image/schlatter.jpg'
import wulf from '../../styles/public/image/wulf.jpeg'
import worrall from '../../styles/public/image/worrall.jpg'
import marangoni from '../../styles/public/image/marangoni.jpg'
import rodriguez from '../../styles/public/image/rodriguez.jpg'
import acosta from '../../styles/public/image/acosta.jpg'
import vyatkin from '../../styles/public/image/vyatkin.png'
import antonov from '../../styles/public/image/antonov.jpg'
import plavnik from '../../styles/public/image/plavnik.jpg'
import ho from '../../styles/public/image/ho.png'
import lee from '../../styles/public/image/lee.jpg'
import young from '../../styles/public/image/young.jpg'
import costache from '../../styles/public/image/costache.png'
import yasar from '../../styles/public/image/yasar.png'
import frausto from '../../styles/public/image/frausto.png'
import charles from '../../styles/public/image/charles.png'

const teamCards = [
  {
    image: neymark,
    name: 'Alexander Neymark',
    position: <FormattedMessage id="founder" />,
    descripton: <FormattedMessage id="neymark2" />,
    linkedin: 'https://www.linkedin.com/in/neymark/',
  },
  {
    image: kochin,
    name: 'Dmitry Kochin',
    position: <FormattedMessage id="founderPhd" />,
    descripton: <FormattedMessage id="kochin2" />,
    linkedin: 'https://www.linkedin.com/in/kochin/',
  },
  {
    image: filatov,
    name: 'Anton Filatov',
    position: <FormattedMessage id="head" />,
    descripton: <FormattedMessage id="anton" />,
    linkedin: 'https://www.linkedin.com/in/antonfilatov/',
  },
  {
    image: mukhanov,
    name: 'Sergey Mukhanov',
    position: <FormattedMessage id="headOfProduct" />,
    descripton: <FormattedMessage id="mukharov" />,
    linkedin: 'https://www.linkedin.com/in/mukhanov/',
  },
  {
    image: marangoni,
    name: 'Nicola Marangoni',
    position: <FormattedMessage id="javaExpert" />,
    descripton: <FormattedMessage id="nicola" />,
    linkedin: 'https://www.linkedin.com/in/nicola-marangoni-80141a/',
  },
  {
    image: rodriguez,
    name: 'Hendry Rodriguez',
    position: <FormattedMessage id="developer" />,
    descripton: <FormattedMessage id="javaDev" />,
    linkedin: 'https://www.linkedin.com/in/hendry-rodriguez-842493b1/',
  },
  {
    image: acosta,
    name: 'Rodrigo Acosta',
    position: <FormattedMessage id="developer" />,
    descripton: <FormattedMessage id="blockDeveloper" />,
    linkedin: 'https://www.linkedin.com/in/acosta-rodrigo/',
  },
  {
    image: vyatkin,
    name: 'Ivan Vyatkin',
    position: <FormattedMessage id="developer" />,
    descripton: <FormattedMessage id="mgimo" />,
    linkedin: 'https://www.linkedin.com/in/ivanvyatkin/',
  },
]

const adviserCards = [
  {
    image: bausch,
    name: 'Alex Bausch',
    position: <FormattedMessage id="advisorCo" />,
    descripton: <FormattedMessage id="bauch" />,
    linkedin: 'https://www.linkedin.com/in/alexbausch/',
  },
  {
    image: charles,
    name: 'Colin Charles',
    position: 'Advisor, Databases, Community & Developer Relations',
    descripton: `
      Colin was on the founding team of MariaDB, having to growth hack 
      its user-base from constant evangelism almost singlehandedly. 
      He was also at MySQL. He is knowledgable about data stores, 
      and strategises about community evangelism and developer relations. 
    `,
    linkedin: 'https://www.linkedin.com/in/colincharles',
  },
  {
    image: young,
    name: 'Khelin Young',
    position: 'Advisor',
    descripton: `Khelin has over 15 years of experience in the financial industry,
    from stock investing to real estate financing, and ultimately launching and managing
     his own privately held multi-million-dollar hedge fund that exclusively focuses on
      the crypto currency industry. He formerly co-founded and served as the Vice President
       of a $20-Million international import/export company. Khelin's multi-facet skills
        in sales, marketing, financial forecasting, product development & design have 
        always resulted in companies' exponential growth on a national and international level.`,
    linkedin: 'https://www.linkedin.com/in/khelin-young-1ab5a298/',
  },
]

export const teamSelector = createSelector(() => ({ teamCards, adviserCards }))
