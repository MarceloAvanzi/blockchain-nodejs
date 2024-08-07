import CryptoBlock from "./CryptoBlock"

export default class CryptoBlockchain {
    blockchain: any
    difficulty: number

    constructor() {
        this.blockchain = [this.startFirstBlock()]
        this.difficulty = 4
    }

    startFirstBlock() {
        return new CryptoBlock(0, new Date('2024-02-15T00:00:00'), 'Initial Block in the chain', '0')
    }

    obtainLastBlock() {
        return this.blockchain[this.blockchain.length - 1]
    }

    addNewBlock(newBlock: any) {
        newBlock.previousHash = this.obtainLastBlock().hash
        newBlock.hash = newBlock.computeHash()
        newBlock.workProof(this.difficulty)
        this.blockchain.push(newBlock)
    }

    validateChain() {
        for (let i = 1; i < this.blockchain.length; i++) {
            const currentBlock = this.blockchain[i]
            const previousBlock = this.blockchain[i - 1]

            if (currentBlock.hash !== currentBlock.computeHash()) return false
            if (currentBlock.previousHash !== previousBlock.hash) return false

        }
        return true
    }
}