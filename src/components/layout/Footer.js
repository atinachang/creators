const Footer = ({ app }) => {
  return (
    <footer>
      <ul className="footer">
        <li className="item">
          <a
            href="https://airtable.com/shrNiOPS9tSgyBblF"
            target="_blank"
            rel="noreferrer">
            Report a Bug
          </a>
        </li>
        <li className="item">
          <a
            href="https://airtable.com/shrctqxUiGalpF6aj"
            target="_blank"
            rel="noreferrer">
            Make a Suggestion
          </a>
        </li>
        <li className="item">
          <a href="mailto:to.wecreate@gmail.com" tabIndex="0">
            Contact
          </a>
        </li>
      </ul>
      <p>
        Create. Connect. Repeat. {app} is a community-driven directory for
        Toronto creatives, made with love.
        {/* It is solely run by the developer,
        AC. This directory is not made possible without the countless efforts of
        the pioneers before who wanted a place to share talent and resources. */}
      </p>
    </footer>
  );
};

export default Footer;
