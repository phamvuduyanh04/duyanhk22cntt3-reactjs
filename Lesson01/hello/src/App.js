import logo from './logo.png';
import './App.css';
import PVDA from './components/PVDA';

function App() {
  return (
    <section className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>TRƯỜNG ĐẠI HỌC NGUYỄN TRÃI</h2>
      </header>
      <div>
        <PVDA email="bibeogaming234@gmail.com" phone="0796223387"/>
        <PVDA email="bibeogaming234@gmail.com" phone="0563351234"/>
      </div>
    </section>
  );
}

export default App;