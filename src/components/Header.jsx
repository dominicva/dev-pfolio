import githubIcon from '../assets/icons_github-fill.svg';
import feMentorIcon from '../assets/icons_frontendmentor.svg';
import linkedinIcon from '../assets/icons_linkedin.svg';
import twitterIcon from '../assets/icons_twitter-fill.svg';

function Header() {
  return (
    <header className="App-header">
      <p className="logo">domvana</p>
      <ul className="icons">
        <li className="icons github">
          <a
            href="https://github.com/dominicva"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="GitHub icon" />
          </a>
        </li>
        <li className="icons github">
          <a
            href="https://github.com/dominicva"
            target="_blank"
            rel="noreferrer"
          >
            <img src={feMentorIcon} alt="Frontend mentor icon" />
          </a>
        </li>
        <li className="icons github">
          <a
            href="https://github.com/dominicva"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </a>
        </li>
        <li className="icons github">
          <a
            href="https://github.com/dominicva"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
