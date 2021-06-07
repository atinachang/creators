import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import LazyLoad from "react-lazy-load";

const ThankYou = (props) => {
  let history = useHistory();
  const goBack = () => {
    history.push("/");
  };

  const cards = () => {
    const { profiles } = props;

    const random = profiles[Math.floor(Math.random() * profiles.length)];
    const { name, photo, field, id, live } = random;
    const txt = field.join(", ");

    if (live === true) {
      return (
        <Link to={`/profile/${id}`}>
          <div className="single-card">
            <LazyLoad>
              <div className="image">
                <img src={photo} alt={name} />
              </div>
            </LazyLoad>
            <div className="single-content">
              <h5>{name}</h5>
              <h6>{txt}</h6>
            </div>
          </div>
        </Link>
      );
    }
  };

  if (props === undefined || props.profiles === undefined) {
    return <Loader />;
  } else {
    return (
      <div className="thank-you">
        <h2>Thank you for your submission! </h2>
        <br />
        <h5>Your post will be moderated within 24-48 hours.</h5>
        <h6>
          In the meantime, stay a while and check out your fellow community
          members!{" "}
        </h6>
        <Fragment>
          <strong>What does it mean to be moderated?</strong>
          <p>
            We moderate submissions to make sure this database is as resourceful
            as possible.
            <br />
            We don't care about clout, we just want to make sure you're not a
            robot.
          </p>
        </Fragment>
        <button onClick={() => goBack()}>Go Back</button>

        {cards()}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    profiles: state.firestore.ordered.profiles,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "profiles" }])
)(ThankYou);
