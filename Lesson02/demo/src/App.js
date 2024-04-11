// import logo from './logo.png';
import './App.css';
import Class_PhamVuDuyAnh from './components/Class_PhamVuDuyAnh';
import Func_JSX_PhamVuDuyAnh from './components/Func_JSX_PhamVuDuyAnh';
function App() {
  return (
    <section className="App">
        <h1>Demo JSX</h1>
        {/* function component demo  */}
        <Func_JSX_PhamVuDuyAnh />
        <Func_JSX_PhamVuDuyAnh fullName="Pham Vu Duy Anh" age="20" />

        <Class_PhamVuDuyAnh />
        <hr/>
        <Class_PhamVuDuyAnh info="Hoc ReactJS" time="11" />
    </section>
  );
}

export default App;
