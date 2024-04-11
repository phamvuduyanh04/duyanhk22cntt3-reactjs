import './App.css';
import PVDA_ClassComp from './components/PVDA_ClassComp';
import PVDA_FuncDemo from './components/PVDA_FuncDemo';

function App() {

  // Khai báo biến đối tượng
  const users = {
    userName:"k22cnt3",
    password:"67890a@",
    fistName:"Pham Vu",
    lastName:"Duy Anh"
  }

  // Khai báo đối tượng hàm
  function formatName(user){
    return <h2>Xin chào, {user.fistName} {user.lastName}</h2>;
  }
  return (
    <div className="App">
      {/* Biểu thức jsx  */}
      <div>
          <p> FullName: {users.fistName} {users.lastName}</p>
          {formatName(users)}
      </div>

      {/* Sử dụng functiono component  */}
      <div>
        <PVDA_FuncDemo />
        {/* Sử dung Func_Comp có props  */}
        <PVDA_FuncDemo userName="PVDA" fullName="Pham Vu Duy Anh" age="20" />
      </div>

      {/* Sử dụng class component  */}
      <div>
        {/* dùng không sử dụng props */}
        <PVDA_ClassComp /> 
        {/* Sử dụng props  */}
        <PVDA_ClassComp company="Fit-NTU - K22CNT3" course="ReactJs" />
        <PVDA_ClassComp company="Fit-NTU - K22CNT4" course="ReactJs 1" />
        <PVDA_ClassComp company="Fit-NTU - K22CNT3" course="ReactJs 2" />
        <PVDA_ClassComp company="Fit-NTU - K22CNT6" course="ReactJs 3" />
      </div>
    </div>
  );
}

export default App;
