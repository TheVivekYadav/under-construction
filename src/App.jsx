import { Construction } from 'lucide-react';

const App = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f8fafc',
        color: '#222',
        fontFamily: 'sans-serif',
      }}
    >
      <Construction size={72} color="#f59e42" strokeWidth={2.5} />
      <h1 style={{ marginTop: 24, fontSize: 32 }}>Page Under Construction</h1>
      <p style={{ marginTop: 12, fontSize: 18, color: '#666' }}>
        We&apos;re working hard to bring you this page. Please check back soon!
      </p>
    </div>
  );
};

export default App;
