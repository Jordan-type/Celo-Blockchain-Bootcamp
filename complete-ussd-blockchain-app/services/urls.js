// short urls

const getTxIdUrl = async (txid) => {
    return await getSentTxidUrl(txid)
} 

const getSentTxidUrl = (txid) => {
    return new Promise(resolve => {
        const sourceURL = `https://alfajores-blockscout.celo-testnet.org/tx/${txid}/token_transfers`
    })
}

module.exports = { getTxIdUrl, }