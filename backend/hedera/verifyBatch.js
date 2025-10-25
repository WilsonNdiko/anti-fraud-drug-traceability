function verifyBatch(batch, scannedQr) {
    if(batch.qrCode === scannedQr && batch.status !== 'Fraud') {
        batch.status = 'Verified';
        console.log(`Batch ${batch.batchId} verified ✅`);
    } else {
        batch.status = 'Fraud';
        console.log(`Fraud detected on batch ${batch.batchId} ❌`);
    }
    return batch;
}

module.exports = { verifyBatch };
