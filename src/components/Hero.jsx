import heroImg from '../assets/hero.png';

function Hero() {
  return (
    <section className="hero">
      <div className="bg-detail" />
      <div className="hero__text">
        <h1 className="title">
          Nice to meet you! I'm <span className="name">Adam Keyes</span>.
        </h1>
        <p className="bio">
          Based in the UK, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <p className="text-link">CONTACT ME</p>
      </div>
      <div className="image-container">
        <img src={heroImg} alt="Hero" />
      </div>
      <div className="circle"></div>
    </section>
  );
}

export default Hero;
