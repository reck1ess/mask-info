import React from "react";

const CenterIcon = () => (
  <React.Fragment>
    <div className="center-circle">
      <span className="center-icon">📍</span>
    </div>
    <style jsx>
      {`
        .center-circle {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 500px;
          height: 500px;
          border: 1px solid rgba(117, 184, 250, 0.7);
          border-radius: 50%;
          background: rgba(207, 231, 255, 0.25);
          transform: translate(-50%, -50%);
        }
        .center-icon {
          font-size: 20px;
          z-index: 9999;
        }
      `}
    </style>
  </React.Fragment>
);

export default CenterIcon;
