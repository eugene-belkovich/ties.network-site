const { getConfig } = require('./aws.config')

const { baseUri } = getConfig()

export const subscribe = email =>
    fetch(`${baseUri}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
    .then(res => res.json())
