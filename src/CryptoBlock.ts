import { SHA256 } from "crypto-js";

export default class CryptoBlock {
    index: number
    timestamp: Date
    data: any
    previousHash: string
    hash: string
    nonce: number

    constructor(index: number, timestamp: Date, data: any, previousHash: string = '') {
        this.index = index
        this.timestamp = timestamp
        this.data = data
        this.previousHash = previousHash
        this.hash = this.computeHash()
        this.nonce = 0
    }

    computeHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString()
    }

    workProof(difficulty: number) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
            this.nonce++
            this.hash = this.computeHash()
        }
    }
}