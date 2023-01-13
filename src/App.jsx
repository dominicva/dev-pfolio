import Header from './components/Header';
import heroImg from './assets/hero.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="hero">
        <div className="bg-detail" />
        <div className="hero__text">
          <h1 className="title">Nice to meet you! I'm Dom van A.</h1>
          <p className="bio">
            Based in the UK, I’m a front-end developer passionate about building
            accessible web apps that users love.
          </p>
          <p className="text-link">CONTACT ME</p>
        </div>
        <div className="image-container">
          <img src={heroImg} alt="Hero" />
        </div>
      </section>
    </div>
  );
}

export default App;
