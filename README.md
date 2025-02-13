# CoinFi Documentation

Welcome to the CoinFi Documentation repository – your central hub for guides, API references, developer resources, and product documentation. Our docs leverage the Mintlify framework to deliver a fast, reliable, and beautifully designed experience.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Development](#development)
- [Publishing Changes](#publishing-changes)
- [Troubleshooting](#troubleshooting)
- [Repository Structure](#repository-structure)

## Introduction

Explore the CoinFi ecosystem powered by cutting‐edge quantum‐resistant blockchain technology and secure digital asset management tools. Whether you're a developer, analyst, or end user, our documentation is designed to empower you with the insights and technical knowledge required for the future of digital finance.

## Getting Started

To start exploring the docs, simply clone this repository and navigate through the source files. Each guide is structured to facilitate an effortless onboarding experience.

## Development

Preview documentation changes locally by installing the [Mintlify CLI](https://www.npmjs.com/package/mintlify). Use the commands below to install or update the CLI:

```bash
npm i -g mintlify
npm update -g mintlify
```

Then, run these commands at the root of the repository (where `mint.json` is located):

```bash
mintlyfy upgrade
mintlify dev
```

## Publishing Changes

Your documentation updates are automatically deployed to production when merged to the default branch. For manual deployment or further deployment-related details, refer to our deployment guidelines in the admin dashboard.

## Troubleshooting

- **Development Server Issues:** If `mintlify dev` isn't running, try executing `mintlify install` to reinstall dependencies.
- **404 Errors:** Ensure you are operating in the correct folder (a folder containing `mint.json`).
- **Network Timeout:** Verify your internet connection, check your firewall/proxy settings, and confirm you're running the latest version of Mintlify.

## Repository Structure

- **src/** – Primary documentation pages (e.g., introduction.mdx, product guides)
- **api-reference/** – API endpoint documentation
- **coinfi-explorer.mdx & coinfi-wallet.mdx** – Product-specific guides
- Configuration files such as `mint.json` and `docs.json` set up themes, navigation, and logos.

For additional assistance, please refer to the [Quick Start Guide](/arpc/arpc-introduction/arpc-getting-started) or contact our developer support.

Enjoy exploring CoinFi Documentation!
