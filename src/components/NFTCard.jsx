export default function NFTCard() {
  return (
    <div style={{ textAlign: 'center', margin: 20, border: '1px solid #ddd', padding: 15, borderRadius: 8 }}>
      <p>보유 NFT: <b>1,467</b> pieces</p>
      <p>당일 수익 NFT: <b>10</b> pieces</p>
      <p>락업 수익 NFT: <b>300</b> pieces</p>
      <p style={{ color: 'red' }}>NFT 1 pieces / 5,000 KRW</p>
    </div>
  )
}