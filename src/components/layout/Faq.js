import { useState } from "react";
import { Link } from "react-router-dom";

const Faq = ({ app }) => {
  const [show, setShow] = useState(false);

  const showParagraph = () => {
    setShow(!show);
  };

  console.log(show);
  // console.log("show", show);
  // console.log("hide", hide);
  return (
    <div className="wrapper about">
      <h2>FAQ</h2>
      <div className="segment">
        <h5>
          What is <em>{app}?</em>
        </h5>
        <p>
          {app} is for the community, by the community. {app} is a low-barrier
          resource to find creatives in Toronto to connect with, create
          opportunities with, and repeat. The idea of {app} wouldn't be possible
          without community pioneers who wanted a central location for people to
          share information for other creatives, such as{" "}
          <a
            href="https://docs.google.com/spreadsheets/d/1eFXRj3_wtAcy7H-YxaVb54Wf0P7YDbrnjYPBzV617Ao/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
            this spreadsheet
          </a>
          ,{" "}
          <a
            href="https://www.instagram.com/stories/highlights/17996621236206157/"
            target="_blank"
            rel="noopener noreferrer">
            this instagram compilation
          </a>{" "}
          and{" "}
          <a
            href="https://www.exposuretoronto.com/directorypage1"
            target="_blank"
            rel="noopener noreferrer">
            this directory
          </a>
        </p>
        <h5>
          Who is <em>{app}</em> for?{" "}
          {/* <button onClick={() => showParagraph()}>+</button>{" "} */}
        </h5>

        <p>If you're a creative in any field in Toronto, {app} is for you!</p>

        <h5>
          How do I join?
          {/* <button onClick={() => showParagraph()}>+</button>{" "} */}
        </h5>

        <p>
          Any user can submit a profile (either yourself or someone else) by
          clicking <Link to="/create">here</Link> or <em>CONTRIBUTE </em> in the
          menu!
        </p>

        <h5>Can I add other people?</h5>
        <p>
          Absolutely! You can add as many people as you want to our directory!
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
            Suggestion
          </a>{" "}
          form!
        </p>
        <h5>Your form options are confusing!</h5>
        <p>
          We try our best to organize the category options based on Information
          Architecture & Linking Hierarchy. Feel free to send us a suggestion{" "}
          <a href="https://airtable.com/shrctqxUiGalpF6aj">here</a> on how to
          make this flow better for users! . You can also find a breakdown of
          the information (as it currently stands){" "}
          <a
            href="../assets/wecreate.pdf"
            target="_blank"
            rel="noopener noreferrer">
            here
          </a>
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
        <h5>Why do you need so much of my information?</h5>
        <p>
          {app} strives to be a resource where people who are searching can
          easily find out the information they need to hire someone. We only ask
          for public information (ie, anything that you can find on an already
          existing social media account or website).
          <br />
          The only information that is <strong>required</strong> from a profile
          is a preferred name, username, and email.
        </p>
        <h5>How do I report someone on your site?</h5>
        <p>
          If you don't feel comfortable with someone you see on our website, or
          feel like they are a danger to others, you can anonymously fill out
          our{" "}
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Report a Bug
          </a>{" "}
          form
        </p>
      </div>
    </div>
  );
};

export default Faq;
