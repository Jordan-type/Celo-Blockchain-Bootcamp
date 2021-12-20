# USSD x Celo ContractKit

## Introduction

## What is USSD?

USSD – unstructured supplementary service data. It sounds complicated and a bit technical, especially if we spice it up with blockchain. But for this tutorial, we will focus on two key points.

When you dial a number it starts with a * and ends with a # then you are using a USSD.
Currently, USSD is the best available communication technology to deliver financial services to low-income users thus the best options for financial inclusion.

## What is MongoDB?

MongoDB is a general purpose, document-based, distributed database with the scalability and flexibility built for modern application developers and the cloud era.

## Why Use MongoDB Atlas in a blockchain application

[Its flexible schema makes it easy to store complex objects such as transactions. It provides enterprise-grade security. It has graph chain capabilities with $graphLookup to help efficiently query the blockchain.](https://www.mongodb.com/databases/blockchain-database#:~:text=Using%20MongoDB%20Atlas%20in%20a%20blockchain&text=Its%20flexible%20schema%20makes%20it,help%20efficiently%20query%20the%20blockchain.)

## What is Celo ContractKit?

ContractKit is a library to help developers and validators interact with the Celo blockchain It is well suited to developers looking for an easy way to integrate Celo Smart Contracts within their applications.

ContractKit supports the following functionality:

- Connect to a node
- Access web3 object to interact with node's JSON RPC API
- Send Transaction with Celo's extra fields: (feeCurrency, gatewayFeeRecipient, and gatewayFee)
- Simple interface to interact with CELO and cUSD
- Simple interface to interact with Celo Core contracts
- Local sign transactions
- Utilities
- Query on-chain identifier for a phone number

Requirements for Building USSD App Using Celo ContracKit

1. [Node.js v12.x.x]()
2. [Yarn]() or [Npm]() package manager
3. Ngrok `npm install ngrok -g`
4. [MongoDB]()

if you already have the above tools installed we can get started to creating our ussd application

## Method 1 - starting from scratch

step 1 intialize Node.js application
`yarn init` or `npm init`

ContractKit Installation requirements **Note: you will need node.js v12.x.**

[Contract Kit](https://docs.celo.org/developer-guide/contractkit/setup)

To install, run the following command depending on your package manager
`npm install @celo/contractkit` or `yarn add @celo/contractkit`

[](https://africastalking.com/)
[](https://simulator.africastalking.com:1517/)

## Method 2 - `git clone` using starter code
