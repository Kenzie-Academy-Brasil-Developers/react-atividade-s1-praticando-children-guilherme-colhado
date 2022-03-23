import './App.css';
import CenteredCard from './components/CenteredCard';

function App() {
  const textos = ['Pimba', 'Desnecessauro', 'Pudim amassado']
  return (
    <div className="App">
      <header className="App-header">
        {textos.map((texto,index) => <CenteredCard key={index}><h1>{texto}</h1></CenteredCard>)}
      </header>
    </div>
  );
}

export default App;
