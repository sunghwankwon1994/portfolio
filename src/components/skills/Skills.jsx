import "./skills.scss";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <h1>Skill</h1>
      <img src="assets/html5-logo-31816.png" alt="" className="pic-group" />
      <div>
        <img src="assets/react-logo.png" alt="" className="pic-single" />
        <img src="assets/nodeJs.png" alt="" className="pic-single" />
        <img src="assets/sass.png" alt="" className="pic-single" />
      </div>
      <div>
        <img src="assets/redux.png" alt="" className="pic-single" />
        <img src="assets/mongodb.png" alt="" className="pic-single" />
      </div>
    </div>
  );
}
