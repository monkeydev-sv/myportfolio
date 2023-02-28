import React from "react";
import "./main.css";
import { MdReadMore } from "react-icons/md";

function Main() {
  return (
    <div>
      <div>
        <div>
          <div>
            <div className="section">
              <div className="columns">
                <div className="column">
                  <div className="text">
                    We are a design-driven IT company that understands the
                    importance of having a strong digital presence. We have
                    solutions that not only look good and are easy to use, but
                    also give you maximum business benefit in your digital
                    transformation. Become a leader in your industry and
                    challenge the status quo with our help. Your journey to
                    success can begin today!
                  </div>
                  <div className="read">
                    
                    <button className="button">Our Services</button>
                  </div>
                </div>

                <div className="column">
                  <div className="text">
                    Do you really want to succeed with your product development?
                    Then you've come to the right place! Our projects are always
                    based on your business and impact goals. When we then apply
                    our other areas of expertise such as gamification or service
                    design, we can develop innovative solutions that meet your
                    business needs.
                  </div>
                  <div className="read">
                    <button className="button">Book a meeting</button>
                  </div>
                </div>
              </div>
              <div className="section">
                <div className="art">Recently published articles</div>
                <div className="columns">
                  <div className="column">
                    <img src="https://holmdeveloper.se/images/1.png" />
                    <div className="bold">Web</div>
                  </div>

                  <div className="column">
                    <img src="https://holmdeveloper.se/images/2.png" />
                    <div className="bold">Program</div>
                  </div>
                  <div className="column">
                    <img src="https://holmdeveloper.se/images/7.png" />
                    <div className="bold">Games</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
