# Veridex

[![Chat with us on Discord](https://img.shields.io/badge/chat-Discord-blueViolet.svg)](https://discord.gg/JqheZms)
[![CircleCI](https://circleci.com/gh/VeriSafe/veridex-launchpad.svg?style=svg)](https://circleci.com/gh/VeriSafe/veridex-launchpad)
[![dependencies Status](https://david-dm.org/verisafe/veridex-launchpad/status.svg)](https://david-dm.org/verisafe/veridex-launchpad)
[![devDependencies Status](https://david-dm.org/verisafe/veridex-launchpadveridex-launchpad/dev-status.svg)](https://david-dm.org/verisafe/veridex-launchpad?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/VeriSafe/veridex-launchpad/badge.svg?branch=development)](https://coveralls.io/github/VeriSafe/veridex-launchpad?branch=development)

_WORK IN PROGRESS_

This project derives from VeriDex and it has a goal to be Launchpad to do decentralized initial offers. The code here will try to be on sync with the VeriDex on the common parts, but with the additional features proposed on the TODO and required by launchpad, tests will be include following 0x style.

This source code will be used to offer decentralized exchange offers by VeriSafe.

This repo ships with an ERC20 trading interface simplified to do decentralized offers with the proposed features:

-   Simple buy button for traders with ETH
-   Admin interface for issuer address's
-   Transparently show all the trades

Support this project with the following actions:

-   Add VSF as a pair
-   Lets us know you are using this project
-   Add a Powered by 0x and VeriSafe

With your help, we can be self-sustainable and complete the long list of TODO's. If you want a feature that is not present on the TODO list, please open an issue requesting a feature request.

## Deployed Launchpads

List of deployed launchpads using this source code:

If you are using the source code of this fork, please let me know! Help the project adding VSF as a pair on your fork!

## Usage

Clone this repository and install its dependencies:

```
git clone git@github.com:VeriSafe/veridex-launchpad.git
cd veridex-launchpad
yarn
```

## TODO

This is a detailed list of planned features to add to this Launchpad (includes VeriDex backend) on long term:

-   [x] List IEO Trades
-   [x] Add troll box using ChatBro
-   [x] Fully configuration of orderbook and sell and buy cards
-   [x] Support multiple wallets, like Portis, Torus, etc please see list of planned wallets below
-   [x] Add mobile support
-   [x] Support to transfer tokens
-   [x] List descriptions for each ieo
-   [ ] Admin interface for the issuer address's
-   [ ] KYC verification of buyers if requested by project
-   [ ] Limit trades to allowed countries for each pair according to KYC
-   [ ] Force KYC onChain using a customized 0x Forwarder smart contract that will use KYC smart contracts
        to validate issuers and buyers
-   [ ] List Market Trades
-   [ ] List Markets stats
-   [ ] Click on buy to auto-fill
-   [ ] Adding graphs like Trading View
-   [ ] Create a customized front page
-   [ ] Report data to the most known crypto data aggregators
-   [ ] List last prices for each token
-   [ ] Theme switcher
-   [ ] List IEO details on the front page - Main funding goal, project details, current funding

## Planned Wallets Support

-   [x] [Metamask](https://metamask.io/)
-   [ ] [Torus](https://docs.tor.us/developers/getting-started)
-   [x] [Portis](https://developers.portis.io/)
-   [x] [Fortmatic](https://developers.fortmatic.com/)
-   [ ] [WalletConnect](https://docs.walletconnect.org/)

### Using VeriDex relayer

```
REACT_APP_RELAYER_URL='https://veridex.herokuapp.com/v2' yarn start
```

[VeriDEX OPEN API SPEC](https://verisafe.github.io/veridex-api-spec/)

This relayer has additional endpoints to enable market view data with stats and candles. We will be adding as an opt-in option use these features in your frontend. That way you can use a Standard Relayer without any issues.

## Environment variables

You can create a `.env` file to set environment variables and configure the behavior of the dApp. Start by copying the example file (`cp .env.example .env`) and modify the ones you want. Some things you can configure are:

-   `REACT_APP_RELAYER_URL`: The URL of the relayer used by the dApp. Defaults to `http://localhost:3001/api/v2`

Check `.env.example` for the full list.

### Using custom themes

If you want to add your own theme for the app, please read the [THEMES.md](THEMES.md) file

### Using custom Config on the DEX

If you want to config the app and markets, please read the [CONFIG.md](CONFIG.md) file
