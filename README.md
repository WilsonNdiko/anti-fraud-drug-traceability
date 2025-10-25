# Anti-Fraud Drug Traceability MVP

[![Hackathon Ready](https://img.shields.io/badge/Hackathon-MVP-blue?style=for-the-badge)](https://hedera.com)

A **hackathon-ready MVP** that tracks drug batches from **Manufacturer → Distributor → Pharmacy** using **Hedera Hashgraph DLT**, verifies authenticity, detects fraud, and visualizes the **chain of custody** in real-time. Designed for **low-resource environments**, this solution prevents fake drugs and enhances patient safety.

---

## 🌟 Key Features

- **Batch Creation:** Generate 10 demo drug batches with metadata (Batch ID, Drug Name, Manufacturer, Expiry Date) and unique NFT/QR codes.
- **Transfer Simulation:** Move batches across handlers; every action logged immutably on **Hedera DLT**.
- **Verification & Fraud Detection:** Scan QR/NFT at pharmacy; smart contract validates authenticity. Duplicate scans trigger instant fraud alerts.
- **Chain of Custody Dashboard:** Visualize full batch history with handler info, timestamps, and fraud attempts.
- **Offline Simulation:** Scan batches offline; sync logs to Hedera later.
- **Token Flow Animation:** Optional microtransaction animation for transfer events for visual “wow” factor.

---

## 🎯 Tech Stack

| Layer          | Technology / Library                         |
|----------------|---------------------------------------------|
| Blockchain/DLT | Hedera Hashgraph (Smart Contracts, NFT, HCS) |
| Backend        | Node.js, Express, Hedera SDK, dotenv        |
| Frontend       | React, Next.js, Axios, QR Code library      |
| Styling        | CSS (dashboard.css)                          |

---

## 🚀 Demo Flow

1. Seed **10 simulated batches** using the `seedBatches.js` script.
2. **Transfer batches**: Manufacturer → Distributor → Pharmacy via dashboard buttons.
3. **Pharmacy scan**: Smart contract validates authenticity.  
   - ✅ Valid → Marked green (“Verified”)  
   - ❌ Duplicate → Marked red (“Fraud”), alert logged immutably
4. Click batch ID → Open **Chain of Custody modal** showing all handlers, timestamps, and fraud attempts.
5. Optional: Observe **animated token flow** showing successful transfers and rejected events.

---

## 💻 Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/anti-fraud-drug-traceability.git
cd anti-fraud-drug-traceability
