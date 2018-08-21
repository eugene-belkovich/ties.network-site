import React from 'react'
import { Grid, IconButton } from 'material-ui'
import 'font-awesome/css/font-awesome.min.css'
import './social.styles.css'

export const SOCIAL_LINKS = [
  { icon: 'fa-linkedin-square', href: 'https://www.linkedin.com/company-beta/18035770/' },
  { icon: 'fa-telegram', href: 'https://t.me/tiesnetwork' },
  { icon: 'fa-facebook-square', href: 'https://www.facebook.com/tiesdb' },
  { icon: 'fa-github-square', href: 'http://github.com/tiesnetwork' },
  { icon: 'fa-twitter-square', href: 'https://twitter.com/tiesnetwork' },
  { icon: 'fa-reddit-square', href: 'https://www.reddit.com/r/tiesnetwork/' },
  { icon: 'fa-btc', href: 'https://bitcointalk.org/index.php?topic=2071592.0' },
]

const TALK_LINK = 'https://open.kakao.com/o/gFuFx8z'
const BAND_LINK = 'http://band.us/n/aca3U2ZcS6X8e'

export function SocialLinks() {
  return (
    <Grid container className="social-link-container" justify="center" spacing={0}>
      {SOCIAL_LINKS.map(({ icon, href }) => (
        <a key={href} target="_blank" className="social-link" href={href}>
          <IconButton style={{ width: 43 }}>
            <i className={`fa ${icon}`} />
          </IconButton>
        </a>
      ))}
    </Grid>)
}

