import Banner from './componentes/Banner';
import CampoTexto from './componentes/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto laberl="Nome"/>
      <CampoTexto laberl="Cargo"/>
      <CampoTexto laberl="Imagem"/>

    </div>
  );
}

export default App;
