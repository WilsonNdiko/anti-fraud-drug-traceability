import React from 'react';

export default function BatchTable({ batches, onTransfer, onScan }) {
  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Batch ID</th>
          <th>Drug</th>
          <th>Manufacturer</th>
          <th>Expiry</th>
          <th>Handler</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {batches.map((batch) => (
          <tr key={batch.batchId} style={{ backgroundColor: batch.status === 'Fraud' ? '#f88' : batch.status === 'Verified' ? '#8f8' : '#fff' }}>
            <td>{batch.batchId}</td>
            <td>{batch.drugName}</td>
            <td>{batch.manufacturer}</td>
            <td>{batch.expiryDate}</td>
            <td>{batch.currentHandler}</td>
            <td>{batch.status}</td>
            <td>
              <button onClick={() => onTransfer(batch.batchId)}>Transfer</button>
              <button onClick={() => onScan(batch.batchId)}>Scan</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
