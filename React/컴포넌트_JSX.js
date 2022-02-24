
import './App.css';

function App() {
  const name="fubao";
  const naver={
    name:"네이버",
    url:"https://naver.com"
  }
  return (
    <div className="App">
      <h1 
        style={{
          color:"#f0f",
          backgroundColor:"green",
        }}>
        Welcome, {name}.
      </h1>
      <a href={naver.url}>{naver.name}</a>
    </div>
  );
}

export default App;
