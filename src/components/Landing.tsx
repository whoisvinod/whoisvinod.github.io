import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { config } from "../config";

const Landing = ({ children }: PropsWithChildren) => {
  const nameParts = config.developer.fullName.split(" ");
  const firstName = nameParts[0] || config.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hi! I'm</h2>
            <h1>
              {firstName.toUpperCase()}
              {' '}
              <br />
              {lastName && <span>{lastName.toUpperCase()}</span>}
            </h1>
          </div>
          <div className="landing-info">
            {/* <h3>A</h3> */}
            <h1 className="landing-info-h1">
              <div className="landing-h1-1">Senior Unity Developer</div>
            </h1>
            <h1>
              <div className="landing-h1-info">XR Engineer</div>
            </h1>
            <h1>
              <div className="landing-h1-info">Tech Lead</div>
            </h1>
            <h1>
              <div className="landing-h1-info">Android Developer</div>
            </h1>
          </div>
          {/* Mobile photo - shows only on mobile when 3D character is hidden */}
          <div className="mobile-photo">
            <img src="/images/vinod.png" alt="Vinod Kumar Akula" />
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
