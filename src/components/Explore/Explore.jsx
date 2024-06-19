import React from "react";
import "./Explore.css";
import explore from '../../assets/explore.jpg'

const Explore = () => {
  return (
    <div id="explore-stories" className="explore">
      <div className="explore-content">
        <div className="explore-title">
          <h1>Explore Island Stories</h1>
          <p>
            Each place, and each smile in Sri Lanka has a story to tell.
            <br />
            We have so much to share with you, so come along to our
            <br />
            island in paradise!
          </p>
        </div>
        <div className="explore-button">EXPLORE MORE</div>
      </div>
    </div>
  );
};

export default Explore;
