import CryptoBlock from "./CryptoBlock";
import CryptoBlockchain from "./CryptoBlockchain";

const cryptoBlockChain = new CryptoBlockchain()

console.log('cryptoBlockChain mining in progress...')

const firstBlock = new CryptoBlock(1, new Date('2024-02-01'), { sender: 'Maria', recipient: 'Abner', quantity: 50 })
const secondBlock = new CryptoBlock(2, new Date('2024-02-02'), { sender: 'Marcelo Avanzi', recipient: 'Abner2', quantity: 100 })

cryptoBlockChain.addNewBlock(firstBlock)
cryptoBlockChain.addNewBlock(secondBlock)

console.log(JSON.stringify(cryptoBlockChain, null, 4))