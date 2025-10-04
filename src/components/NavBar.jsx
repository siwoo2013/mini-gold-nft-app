export default function NavBar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: 10, borderTop: '1px solid #ccc' }}>
      {['Home', 'Event', 'Invest', 'Service', 'MY'].map((tab) => (
        <button key={tab}>{tab}</button>
      ))}
    </nav>
  )
}