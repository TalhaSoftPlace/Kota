import React from "react";

const partnerLogos = [
  "https://kota-content.b-cdn.net/app/uploads/2023/10/Jamie-oliver.svg",
  "https://kota-content.b-cdn.net/app/uploads/2023/10/comptoir-libanais-1.svg",
  "https://kota-content.b-cdn.net/app/uploads/2023/10/british-red-cross.svg",
  "https://kota-content.b-cdn.net/app/uploads/2023/10/sym.svg",
  "https://kota-content.b-cdn.net/app/uploads/2023/10/penguin.svg",
  "https://kota-content.b-cdn.net/app/uploads/2023/10/raw.svg",
  "https://kota-content.b-cdn.net/app/uploads/2023/10/penhaligons.svg",
  "https://kota-content.b-cdn.net/app/uploads/2023/10/stoli.svg",
  "https://kota-content.b-cdn.net/app/uploads/2023/10/bounce.svg",
  "https://kota-content.b-cdn.net/app/uploads/2023/10/tangerine.svg",
  "https://kota-content.b-cdn.net/app/uploads/2023/10/tribepad.svg",
  "https://kota-content.b-cdn.net/app/uploads/2023/10/matchroom.svg",
  "https://kota-content.b-cdn.net/app/uploads/2023/10/diageo.svg",
  "https://kota-content.b-cdn.net/app/uploads/2023/10/sonovate.svg",
  "https://kota-content.b-cdn.net/app/uploads/2023/10/saatchi.svg",
];

export const PartnersSection = () => {
  return (
    <div className="Partners_partners__jBo8y">
      <div className="DarkThemeSwitch_cover__hn_xc"></div>
      <div className="container">
        <div className="Partners_headingInner__vdhDe">
          <h2 className="Partners_heading__AOTNV">
            <div className="LargeHeading_headingOuter__i9qcd">
              <span className="Partners_heading__AOTNV">
                <div className="split-line" style={{ display: "block", textAlign: "start", position: "relative" }}>
                  <div style={{ position: "relative", display: "inline-block" }} className="split-word">
                    {"Our".split("").map((char, i) => (
                      <div key={i} className="split-char" style={{ position: "relative", display: "inline-block", transform: "translate(0px, 0px)", opacity: 1 }}>
                        {char}
                      </div>
                    ))}
                  </div>
                </div>
              </span>
              <span className="Partners_heading__AOTNV Partners_bottom__5DSXe">
                <div className="split-line" style={{ display: "block", textAlign: "start", position: "relative" }}>
                  <div style={{ position: "relative", display: "inline-block" }} className="split-word">
                    {"Partners".split("").map((char, i) => (
                      <div key={i} className="split-char" style={{ position: "relative", display: "inline-block", transform: "translate(0px, 0px)", opacity: 1 }}>
                        {char}
                      </div>
                    ))}
                  </div>
                </div>
              </span>
            </div>
          </h2>
          <div className="Partners_arrowWrapper__Xq8Wc">
            <span className="FadeInRotate_container__QE9u9" data-fill="false" data-direction="counterclockwise" style={{ transform: "translate(0px, 0px)", opacity: 1 }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111.42 110.66">
                <polygon
                  points="13.65 102.66 109.53 6.67 103.87 1.02 8 97 8 0 0 0 0 110.66 111.42 110.66 111.42 102.66 13.65 102.66"
                  fill="#fff"
                ></polygon>
              </svg>
            </span>
          </div>
        </div>

        <div className="Partners_logos__7QiB4">
          <div className="AnimatedLogoGrid_grid__3n0at">
            <div className="Partners_logosInner__Aoq5_">
              {partnerLogos.map((src, i) => (
                <div
                  key={i}
                  className="Partners_logo__eDI8e"
                  data-animation="grid-item"
                  style={{ transform: "translate(0px, 0px)", opacity: 1 }}
                >
                  <img src={src} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

