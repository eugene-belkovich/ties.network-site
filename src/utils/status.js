const { getConfig } = require('./aws.config')

const { baseUri } = getConfig()

const contractStatusString = '{"currentBonus":10,"totalEthInvested":"7.254722242569983249846e+21","totalSupply":5.92512780893333e+25,"totalBtcInvested":"1234.246484","blockNumber":4438189,"timestamp":1509092412876,"isOpen":false,"tokenPrice":"807947510343411","contractAddress":"0x5070832E17e2042754ccD86F28B9d21FcB0E1567","endTimestamp":1509019200000,"ethRate":297.049,"btcRate":5743.52}'

export const getContractStatus = () => // fetch(`${baseUri}/contract/status`)
Promise.resolve()
.then(res => JSON.parse(contractStatusString))
