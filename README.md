# WIP Implementation of [NEP-246](https://github.com/near/NEPs/issues/246) for NEAR Protocol

## What's Done ✅
- Approvals, Metadata, Enumeration extensions
- Transfers
- Resolvers & Receivers

## What's Pending 🚧
- Unit & Integration Tests
- Burn Functionality

# Near-EAC:EAC Marketplace

## 🏆 DevsHouse'24 Hackathon – Rank 4
This project was developed as part of **DevsHouse'24 Hackathon at VIT Chennai**, where it secured **4th place**. The hackathon challenged participants to build solutions that enhance transparency and trust in decentralized ecosystems. GreenLedger addresses this challenge by providing a **Cryptography-based Energy Attribute Certificate (EAC) marketplace**, ensuring secure, verifiable, and automated renewable energy tracking and trading.

## 🛠 Problem Statement
With increasing global emphasis on sustainable energy, businesses need a **trustworthy and transparent** system for tracking, selling, and redeeming **Energy Attribute Certificates (EACs)**. Traditional systems suffer from inefficiencies, lack of automation, and reliance on centralized authorities. This project leverages **Cryptography and IoT** to create a **secure, decentralized EAC marketplace**, ensuring data integrity and seamless energy trading.

## 🚀 What GreenLedger Does
- **Registers renewable energy companies** and allows them to **issue I-REC certificates (NFT NEP-171)** based on energy generation.
- **Integrates IoT-based tracking** with **Fiware Context Broker & Spark Service** for real-time, automated energy verification.
- **Enables decentralized trading** of I-REC certificates through an order book-style exchange using **NEAR Protocol smart contracts**.
- **Lays groundwork** for future expansion, including **multi-token standards (ERC-1155, ERC-1888)** and **decentralized identities (DIDs) for automated certification**.

## Requirements 🛠️
- **Node.js** v16.14.0
- **PostgreSQL** 12+

### Database Setup
Create a database with the name **`near_eac`** and set the user/password as **`postgres/postgres`**.

## 🚀 Running the Project
### 1️⃣ Install Dependencies
```sh
npm install
```

### 2️⃣ Backend Setup
Copy the example environment file and configure the necessary fields:
```sh
cp .env.example .env 
```

### 3️⃣ Running in Production Mode
```sh
npm run build
npm run start:prod
```

### 4️⃣ Running in Development Mode
```sh
npm run start:debug
```

### 🔗 API Access
The API will be available on **port 3030**.
