import { React, CSSProperties } from "react";

const Skills = () => {
  return (
    <div className="outer container" id="skills-section">
      <div className="flex gap-x-1">
        <img
          src="/dots-light.svg"
          alt=""
          className="h-[22px] w-[22px] items-center justify-center justify-self-start"
        />

        <h2 className="text-2xl mb-6 items-center justify-center">Skills</h2>
      </div>
      <div className="scroll" style={{ "--time": "20s" }}>
        <div>
          <span>HTML</span>
          <span>CSS</span>
          <span>Javascript</span>
          <span>ReactJS</span>
          <span>Git</span>
          <span>Figma</span>
          <span>Photoshop</span>
          <span>Lightroom</span>
          <span>Tailwind</span>
        </div>
        <div>
          <span>HTML</span>
          <span>CSS</span>
          <span>Javascript</span>
          <span>ReactJS</span>
          <span>Git</span>
          <span>Figma</span>
          <span>Photoshop</span>
          <span>Lightroom</span>
          <span>Tailwind</span>
        </div>
      </div>
      <div className="scroll" style={{ "--time": "30s" }}>
        <div>
          <span>HTML</span>
          <span>CSS</span>
          <span>Javascript</span>
          <span>ReactJS</span>
          <span>Git</span>
          <span>Figma</span>
          <span>Photoshop</span>
          <span>Lightroom</span>
          <span>Tailwind</span>
        </div>
        <div>
          <span>HTML</span>
          <span>CSS</span>
          <span>Javascript</span>
          <span>ReactJS</span>
          <span>Git</span>
          <span>Figma</span>
          <span>Photoshop</span>
          <span>Lightroom</span>
          <span>Tailwind</span>
        </div>
      </div>
      <div className="scroll" style={{ "--time": "25s" }}>
        <div>
          <span>HTML</span>
          <span>CSS</span>
          <span>Javascript</span>
          <span>ReactJS</span>
          <span>Git</span>
          <span>Figma</span>
          <span>Photoshop</span>
          <span>Lightroom</span>
          <span>Tailwind</span>
        </div>
        <div>
          <span>HTML</span>
          <span>CSS</span>
          <span>Javascript</span>
          <span>ReactJS</span>
          <span>Git</span>
          <span>Figma</span>
          <span>Photoshop</span>
          <span>Lightroom</span>
          <span>Tailwind</span>
        </div>
      </div>
      <div className="scroll" style={{ "--time": "40s" }}>
        <div>
          <span>HTML</span>
          <span>CSS</span>
          <span>Javascript</span>
          <span>ReactJS</span>
          <span>Git</span>
          <span>Figma</span>
          <span>Photoshop</span>
          <span>Lightroom</span>
          <span>Tailwind</span>
        </div>
        <div>
          <span>HTML</span>
          <span>CSS</span>
          <span>Javascript</span>
          <span>ReactJS</span>
          <span>Git</span>
          <span>Figma</span>
          <span>Photoshop</span>
          <span>Lightroom</span>
          <span>Tailwind</span>
        </div>
      </div>
      <div className="scroll imgBox" style={{ "--time": "20s" }}>
        <div>
          <img src="./images/html.png" alt="" />
          <img src="./images/css.png" alt="" />
          <img src="./images/figma.png" alt="" />
          <img src="./images/js.png" alt="" />
          <img src="./images/photoshop.png" alt="" />
          <img src="./images/premierePro.png" alt="" />
          <img src="./images/React.png" alt="" />
          <img src="./images/tailwind.png" alt="" />
        </div>
        <div>
          <img src="./images/html.png" alt="" />
          <img src="./images/css.png" alt="" />
          <img src="./images/figma.png" alt="" />
          <img src="./images/js.png" alt="" />
          <img src="./images/photoshop.png" alt="" />
          <img src="./images/premierePro.png" alt="" />
          <img src="./images/React.png" alt="" />
          <img src="./images/tailwind.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
