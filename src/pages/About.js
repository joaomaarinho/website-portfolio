import React from "react";
import Tech from "../components/Animation/tech";
import Toggle from '../components/ToggleAnimation/toggle';

import classes from "../styles/Pages Styles/about.module.scss";

function About() {
  return (
    <div>
      <div className={classes.about}>
        <div className={classes.about__intro}>Hey,</div>
        <div className={classes.about__intro}>I'm João Marinho,</div>
        <div className={classes.about__tech}>web developer</div>
        <div className={classes.about__tech}>UX / UI designer</div>
        {/* <div>game developer</div> */}
      </div>
      <div className={classes.toggle}>
        <Toggle />
      </div>
      <div>instagram post</div>
      <div>
        I am a jr developer and UX UI designer based in Brazil (: and an
        aspiring game developer :) contact me if you`re interested in my work
        you can also check all the projects I`ve developed so far
      </div>
      <div>
        <div>some of my primaty skills</div>
        <div className={classes.animation}>
          <Tech />
        </div>
      </div>
    </div>
  );
}

export default About;
