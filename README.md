# Anti-Fraud Drug Traceability MVP

[![Hackathon Ready](https://img.shields.io/badge/Hackathon-MVP-blue?style=for-the-badge)](https://hedera.com)

A **hackathon-ready MVP** that tracks drug batches from **Manufacturer → Distributor → Pharmacy** using **Hedera Hashgraph DLT**, verifies authenticity, detects fraud, and visualizes the **chain of custody** in real-time. Designed for **low-resource environments**, this solution prevents fake drugs and enhances patient safety.

---

## 🌟 Key Features Explained

### 1. Batch Creation
**What it does:**  
Generates 10 demo drug batches, each with a **unique NFT/QR code**, batch ID, drug name, manufacturer, and expiry date.  

**Why it matters:**  
- Ensures every batch is uniquely identifiable.  
- Lays the foundation for **immutable tracking** on Hedera DLT.  
- Demonstrates the system’s capability to handle multiple products for the hackathon demo.  

**How it works:**  
- `scripts/seedBatches.js` generates sample batches.  
- Each batch is stored in a JSON file for frontend and backend access.  
- NFT or QR codes simulate **tamper-proof identifiers** on Hedera.

---

### 2. Transfer Simulation
**What it does:**  
Simulates moving batches from **Manufacturer → Distributor → Pharmacy** using a dashboard interface. Every transfer is logged immutably on **Hedera DLT**.  

**Why it matters:**  
- Demonstrates **operational traceability**.  
- Highlights **immutable ledger capabilities** of Hedera: no batch can be altered or lost.  
- Shows real-world logistics processes in a **hackathon-friendly, visual way**.  

**How it works:**  
- Dashboard buttons trigger transfer events.  
- Backend logs each transfer using Hedera SDK (simulated NFT ownership transfer).  
- Chain-of-custody updates dynamically on the frontend table.

---

### 3. Verification & Fraud Detection
**What it does:**  
Allows pharmacies to **scan QR codes** to verify batch authenticity.  
Duplicate or reused codes trigger **fraud alerts** instantly.  

**Why it matters:**  
- Directly addresses the problem of **fake drugs** in low-resource environments.  

- Demonstrates **smart contract logic enforcing rules** on Hedera.  

**How it works:**  
- QR code scans (or button simulation) call backend verification logic.  
- Backend checks batch metadata and status.  
- Fraudulent reuse updates status to red (“Fraud”) in the dashboard and logs event immutably.

---

### 4. Chain of Custody Dashboard
**What it does:**  
Interactive table showing each batch’s **history of handlers**, timestamps, and status.  
Clicking a batch opens a modal with **full transfer details**.  

**Why it matters:**  
  
- Highlights transparency and accountability for each batch.  
- Makes operational impact **tangible and measurable**.

**How it works:**  
- React/Next.js table and modal components dynamically display batch data.  
- Status colors:  
  - Green = Verified  
  - Red = Fraud  
  - White = Pending  
- Token flow animations (optional) show microtransaction or NFT transfer events visually.

---

### 5. Offline Simulation
**What it does:**  
Pharmacies can scan batches **offline**, then sync the data later with Hedera.  

**Why it matters:**  
- Ensures usability in **low-resource environments** where internet is intermittent.  
 

**How it works:**  
- QR codes store batch ID locally.  
- Verification simulates local check first; backend syncs later to Hedera ledger.

---

### 6. Token Flow Animation

**What it does:**  
Animated visualization of batch transfers or microtransaction flow.  

  

**How it works:**  
- Frontend animation triggers on batch transfer events.  
- Uses a React component (`TokenFlow.js`) to simulate token movement between handlers.

---

## 🚀 Tech Stack

| Layer          | Technology / Library                         |
|----------------|---------------------------------------------|
| Blockchain/DLT | Hedera Hashgraph (Smart Contracts, NFT, HCS) |
| Backend        | Node.js, Express, Hedera SDK, dotenv        |
| Frontend       | React, Next.js, Axios, QR Code library      |
| Styling        | CSS (dashboard.css)                          |

---

## 💻 Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/WilsonNdiko/anti-fraud-drug-traceability.git
cd anti-fraud-drug-traceability
