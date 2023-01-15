import Header from './Header';

function Footer() {
  return (
    <>
      <div id="footer-bg" />
      <footer>
        <div>
          <h2>Contact</h2>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <div>
          <form>
            <input type="text" placeholder="NAME" />
            <input type="text" placeholder="EMAIL" />
            <textarea type="textarea" placeholder="MESSAGE" />
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
        <hr />
        <div className="bottom-header">
          <Header />
        </div>
      </footer>
    </>
  );
}

export default Footer;
