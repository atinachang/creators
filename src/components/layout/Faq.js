import { Link } from "react-router-dom";

const Faq = ({ app }) => {
  return (
    <div className="wrapper about">
      <h2>FAQ</h2>
      <div className="segment">
        <h5>
          What is <em>{app}?</em>
        </h5>
        <p>
          {app} is by the community, for the community. {app} is a low-barrier a
          resource to find creatives in Toronto to connect with, create
          opportunities with, and repeat.
        </p>
        <h5>
          Who is <em>{app}</em> for?
        </h5>
        <p>If you're a creative in any field, {app} is for you!</p>
        <h5>How do I join?</h5>
        <p>
          Any user can submit a profile (either yourself or someone else) by
          clicking <Link to="/create">contribute</Link> in tne menu!
        </p>
        <h5>Do I need to create an account?</h5>
        <p>
          Absolutely not! {app} was created so you don't have to deal with{" "}
          <em>another</em> website log in, and can be accessed as easily as a
          Google Spreadsheet.
        </p>
        <h5>What if my job isn't listed?</h5>
        <p>
          We're always looking to improve! If you don't see an option for what
          you do, fill out our{" "}
          <a
            href="https://airtable.com/shrctqxUiGalpF6aj"
            target="_blank"
            rel="noopener noreferrer">
            Make a Suggestion
          </a>{" "}
          form!
        </p>
        <h5>What if I need to change/remove my profile?</h5>
        <p>
          Currently, since users don't create an account to add their profile,
          our team has to change this manually. If you need to change details on
          your profile or would like it removed, please click{" "}
          <a
            href="https://airtable.com/shrMBiEcoxxYz4RBJ"
            target="_blank"
            rel="noopener noreferrer">
            here
          </a>
        </p>
      </div>
    </div>
    // <>
    // 	{/* <h4>{app} is for the community, by the community. </h4> */}
    // 	<div className="ui inverted segment">
    // 		<h4>Wecreate.to is a community-driven directory made with love. It is solely run by the developer, AC. This directory is not made possible without the countless efforts of the pioneers before who wanted a place to share talent and resources.</h4>
    // 	</div>
    // 	<div className="about">
    // 		<div className="ui inverted segment">
    // 	<h4>Why make this database?</h4>
    // 	</div>
    // 	<p>As a creative  community, we are constantly asking each other, "Do you know a _______ who can do _______?" </p>
    // 	<p>{app} is designed to help you with that.</p>
    // 	<p></p>
    // 	</div>
    // 	<div className="about">
    // 		<div className="ui inverted segment">
    // 		<h4>Who is this for?</h4>
    // 		</div>
    // 		<p>{app} is for everyone. Whether you are a creative or someone looking to hire. </p>
    // 		<p></p>
    // 	</div>
    // 	<div className="about">
    // 		<div className="ui inverted segment">
    // 		<h4>Do I have to live in Toronto to contribute?</h4>
    // 		</div>
    // 		<p>While you don't have to live in Toronto, to be a part of this database, it would be ...</p>
    // 		<p></p>
    // 	</div>
    // 	<div className="about">
    // 		<div className="ui inverted segment">
    // 		</div>
    // 		<p>{app} would not exist without community leaders who previously created similar spaces where people can be seen and recognized for their work
    // 		{/* , such as this directory <a href="https://docs.google.com/spreadsheets/d/1V3-cP1aXDjyMcpnke0gB92SXcxkbBrVhKo8LxJum62c/edit?usp=sharing">here</a>  */}
    // 		</p>
    // 		<p>It's important to note that a job cannot be guaranteed from this platform. Rather, it provides opportunities to povide work to others in areas of need.</p>
    // 	</div>

    // </>
    // <Fragment>
    //   <h3>Coming Soon ☺️</h3>
    // </Fragment>
  );
};

export default Faq;
