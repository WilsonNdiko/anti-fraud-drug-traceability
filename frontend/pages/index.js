import React, { useEffect, useState } from 'react';
import BatchTable from '../components/BatchTable';
import batchesData from '../../scripts/batches.json';

export default function Dashboard() {
  const [batches, setBatches] = useState([]);

  useEffect(() => {
    setBatches(batchesData);
  }, []);

  const handleTransfer = (batchId) => {
    setBatches(prev => prev.map(b => b.batchId === batchId ? {...b, currentHandler: nextHandler(b.currentHandler)} : b));
  }

  const handleScan = (batchId) => {
    setBatches(prev => prev.map(b => {
      if(b.batchId === batchId) {
        if(b.status === 'Verified') return {...b, status: 'Fraud'};
        else return {...b, status: 'Verified'};
      }
      return b;
    }));
  }

  const nextHandler = (current) => {
    if(current === 'Manufacturer') return 'Distributor';
    if(current === 'Distributor') return 'Pharmacy';
    return 'Pharmacy';
  }

  return (
    <div>
      <h1>Drug Traceability Dashboard</h1>
      <BatchTable batches={batches} onTransfer={handleTransfer} onScan={handleScan} />
    </div>
  );
}
