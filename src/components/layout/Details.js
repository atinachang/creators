import React, { Fragment } from "react";
import ReactTooltip from "react-tooltip";

import { NavLink } from "react-router-dom";
import {
  RiTwitterLine,
  RiInstagramLine,
  RiMailLine,
  RiLinksLine,
} from "react-icons/ri";
import { BsMusicPlayer } from "react-icons/bs";
import LazyLoad from "react-lazy-load";

export const Socials = ({ ...props }) => {
  const { instagram, twitter, email, website, soundcloud } = props.profile;

  const igRender = () => {
    if (!instagram) {
      return null;
    }
    return (
      <a href={instagram} tabIndex="0">
        <RiInstagramLine title="instagram icon" />
        <p className="sr-only">Instagram </p>
      </a>
    );
  };

  const emailRender = () => {
    if (!email) {
      return null;
    }
    return (
      <a href={`mailto: ${email}`} tabIndex="0">
        <RiMailLine title="mail icon" />
        <p className="sr-only">Email </p>
      </a>
    );
  };

  const twitRender = () => {
    if (!twitter) {
      return null;
    }
    return (
      <a href={twitter} tabIndex="0">
        <RiTwitterLine title="twitter icon" />
        <p className="sr-only">Twitter</p>
      </a>
    );
  };

  const webRender = () => {
    if (!website) {
      return null;
    }
    return (
      <a href={website} tabIndex="0">
        <RiLinksLine title="website icon" />
        <p className="sr-only">Website</p>
      </a>
    );
  };

  const scRender = () => {
    if (!soundcloud) {
      return null;
    }
    return (
      <a href={soundcloud} tabIndex="0">
        <BsMusicPlayer title="music icon" />
        <p className="sr-only">Soundcloud</p>
      </a>
    );
  };

  return (
    <Fragment>
      <div className="socials">
        {igRender()}
        {twitRender()}
        {emailRender()}
        {webRender()}
        {scRender()}
      </div>
    </Fragment>
  );
};

export const Info = ({ filter, ...props }) => {
  const { field, genre, title, industry } = props.profile;
  const fieldRender = () => {
    if (field !== 0) {
      const fieldList = field.map((field) => (
        <NavLink to="/search" key={field} tabIndex="0">
          <li className="dark" data-value={field} onClick={filter}>
            {field}
          </li>
        </NavLink>
      ));
      return (
        <div className="fields segment">
          <div>
            <h5>Fields of Work</h5> {""}
            <p data-tip={`Click the tags below to search by Industry`}>
              &#8505;
            </p>
            <ReactTooltip
              place="top"
              type="dark"
              effect="float"
              multiline="true"
            />
          </div>
          <ul>{fieldList}</ul>
        </div>
      );
    } else {
      const fieldList = industry.map((field) => (
        <NavLink to="/search" key={field} tabIndex="0">
          <li className="dark" data-value={field} onClick={filter}>
            {field}
          </li>
        </NavLink>
      ));

      return (
        <div className="segment">
          <h5>Fields of Work</h5>
          <ul>{fieldList}</ul>
        </div>
      );
    }
  };
  const titleRender = () => {
    if (title.length === 0) {
      return null;
    }

    const titleList = title.map((title) => (
      <NavLink to="/search" key={title} tabIndex="0">
        <li className="light" data-value={title} onClick={filter}>
          {title}
        </li>
      </NavLink>
    ));

    return (
      <div className="titles segment">
        <div>
          <h5>Expertise</h5>
          <p data-tip={`Click the tags below to search by Specialty`}>
            &#8505;
          </p>
          <ReactTooltip
            place="top"
            type="dark"
            effect="float"
            multiline="true"
          />
        </div>
        <ul>{titleList}</ul>
      </div>
    );
  };

  const genreRender = () => {
    const genreList = genre.map((title) => (
      <NavLink to="/search" key={title} tabIndex="0">
        <li className="light" data-value={title} onClick={filter}>
          {title}
        </li>
      </NavLink>
    ));
    if (genre.length === 0) {
      return null;
    }

    return (
      <div className="genres segment">
        <div>
          <h5>Genres:</h5>
          <p data-tip={`Click the tags below to search by Music Genre`}>
            &#8505;
          </p>
          <ReactTooltip
            place="top"
            type="dark"
            effect="float"
            multiline="true"
          />
        </div>
        <ul>{genreList}</ul>
      </div>
    );
  };
  return (
    <Fragment>
      {fieldRender()}
      {titleRender()}
      {genreRender()}
    </Fragment>
  );
};

export const Bio = ({ bio }) => {
  const bioRender = () => {
    if (bio.length === 0) {
      return null;
    }

    return (
      <div className={bio ? "bio" : null}>
        <p>{bio}</p>
      </div>
    );
  };
  return <div className={bio ? "segment" : null}>{bioRender()}</div>;
};

export const Pronoun = ({ pronoun }) => {
  const render = () => {
    if (pronoun === undefined || pronoun.length === 0) {
      return null;
    }

    return (
      <Fragment>
        <p>{pronoun}</p>
      </Fragment>
    );
  };
  return <Fragment>{render()}</Fragment>;
};

export const Portfolio = ({ ...props }) => {
  const { workPhoto1, workPhoto2, workPhoto3, name } = props.profile;
  return (
    <LazyLoad>
      <div className={workPhoto1 || workPhoto2 || workPhoto3 ? "work" : null}>
        <img src={workPhoto1} alt={workPhoto1 ? `${name}'s Portfolio` : null} />
        <img src={workPhoto2} alt={workPhoto2 ? `${name}'s Portfolio` : null} />
        <img src={workPhoto3} alt={workPhoto3 ? `${name}'s Portfolio` : null} />
      </div>
    </LazyLoad>
  );
};
