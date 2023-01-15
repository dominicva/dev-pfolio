import githubIcon from '../assets/icons_github-fill.svg';
import feMentorIcon from '../assets/icons_frontendmentor.svg';
import linkedinIcon from '../assets/icons_linkedin.svg';
import twitterIcon from '../assets/icons_twitter-fill.svg';

function Header() {
  return (
    <header className="App-header">
      <p className="logo">adamkeyes</p>
      <ul className="icons">
        <li className="icons github">
          <img src={githubIcon} alt="GitHub icon" />
        </li>
        <li className="icons github">
          <img src={feMentorIcon} alt="Frontend mentor icon" />
        </li>
        <li className="icons github">
          <img src={linkedinIcon} alt="LinkedIn icon" />
        </li>
        <li className="icons github">
          <img src={twitterIcon} alt="Twitter icon" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
