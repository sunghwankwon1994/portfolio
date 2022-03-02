import { Person, Mail } from "@material-ui/icons";

import "./about.scss";

export default function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={`${process.env.PUBLIC_URL}/assets/intro.jpg`}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>

        <p className="a-sub">
          I am Sunghwan Kwon majored in computer programming at Seneca College
          <br />
          Also, I am studying React and JavaScript to become a front-end
          developer in Toronto and I always enjoy positive and diverse
          challenges for my team's goals.
        </p>
        <div className="my-info">
          <div className="itemContainer">
            <Person className="icon" />
            <h2>Phone Number</h2>
            <span>
              <br />
              +1 647 469 6723
            </span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <h2>Email</h2>
            <a href="sunghwan.ian.kwon@gmail.com">
              <span>sunghwan.ian.kwon@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
