import { createSelector } from 'reselect'
import cointelegraph from '../../styles/public/image/cointelegraph.png'
import merkle from '../../styles/public/image/merkle.png'
import coinspecker from '../../styles/public/image/coinspecker.png'
import coinfox from '../../styles/public/image/coinfox.png'
import newsbtc from '../../styles/public/image/newsbtc.png'

const partnersMedia = [
  {
    image: cointelegraph,
    name: 'COINTELEGRAPH',
    title: 'Ties.Network Promises the Enhanced LinkedIn of Crypto-Community',
    text: `If you need to find country-specific investors for a Blockchain project,
     but couldn't find them on LinkedIn, this platform is ready to help. `,
    link: 'https://cointelegraph.com/news/tiesnetwork-promises-the-enhanced-linkedin-of-crypto-community',
    date: '01.09.2017',
  },
  {
    image: merkle,
    name: 'THE MERKLE',
    title: 'Ties.Network Announces Token Generation Event (TGE) ',
    text: `We need confirmed experts in crypto-investment. People who’ve already
     made a number of correct investment decisions and can help others do the same. `,
    link: 'https://themerkle.com/ties-network-announces-token-generation-event-tge/',
    date: '25.08.2017',
  },
  {
    image: coinfox,
    name: 'COINFOX',
    title: 'How do you know who to trust in the world of ICOs and cryptocurrencies' +
    ' - Ties.Network offers one possible solution ',
    text: `We need confirmed experts in crypto-investment. People who’ve already
     made a number of correct investment decisions and can help others do the same. `,
    link: 'http://www.coinfox.info/news/7587-how-do-you-know-who-to-trust-in-the-world-of-icos-and-cryptocurrencies-ties-network-offers-one-possible-solution',
    date: '08.09.2017',
  },
  {
    image: newsbtc,
    name: 'NewsBTC',
    title: 'To gain traction for their proposed solution Ties.Network, now launched' +
    'their "Testnet" to demonstrate the viability of the concept',
    text: `Ties.DB hopes to leverage the rising tide of more Ethereum based blockchain products coming onto the
    market. The aim is that Ties.DB will allow decentralized applications to store data in a quickly searchable way.`,
    link: 'http://www.newsbtc.com/2017/09/14/ties-network-helps-find-secure-partners-make-deals/',
    date: '14.09.2017',
  },
]

export const partnersMediaSelector = createSelector(() => ({ partnersMedia }))
