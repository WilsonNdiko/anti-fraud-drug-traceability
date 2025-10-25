# Anti-Fraud Drug Traceability MVP

A hackathon-ready MVP for **verifying drug authenticity** using **Hedera DLT**.  
Tracks drug batches from **manufacturer → distributor → pharmacy**, verifies authenticity, detects fraud, and visualizes chain of custody with real-time dashboards.

---

## **Key Features**

- **Batch Creation:** Generate drug batches with unique NFT/QR codes.
- **Transfer Simulation:** Move batches across handlers; logs on Hedera.
- **Verification & Fraud Detection:** Smart contract validates scans; duplicate scans flagged.
- **Dashboard Visualization:** Interactive table, chain-of-custody modal, token flow animations.
- **Offline Simulation:** Scan batches offline; sync logs to Hedera later.

---

## **Tech Stack**

- **DLT:** Hedera Hashgraph (Smart Contracts + Token Service + Consensus Service)
- **Frontend:** React / Next.js
- **Backend:** Node.js / Express
- **Other:** QR code generation, animation library for token flow

---

## **Setup Instructions**

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/anti-fraud-drug-traceability.git
cd anti-fraud-drug-traceability
