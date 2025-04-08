import React from "react";

export const Articles = () => {
  return (
    <div className="Articles_articles__Wcz2C">
      <div className="DarkThemeSwitch_cover__hn_xc"></div>
      <div className="container">
        <div className="Articles_heading__zNRl8">
          <p>
            <span
              className="FadeInUp_container___uxva"
              data-fill="false"
              style={{
                transform: "translate(0px, 0px)",
                opacity: 1,
              }}
            >
              Latest articles
            </span>
          </p>
          <span
            className="FadeInUp_container___uxva"
            data-fill="false"
            style={{
              transform: "translate(0px, 0px)",
              opacity: 1,
            }}
          >
            <div
              className="Magnetic_magnetic__LncOy"
              data-fill="false"
              style={{ transform: "translate(0px, 0px)" }}
            >
              <div
                className="Button_button__JJiqJ Button_white__MQaf2"
                data-direction="forwards"
              >
                <a className="Button_inner__fnyH6" href="/blog">
                  <span className="Button_border__hirH2"></span>
                  <span className="Button_text__IZaCD">
                    <span className="Button_textInner__JTTHe">
                      View our blog
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 17.1 15.17"
                      className="Button_buttonArrow__0W9XI"
                    >
                      <path
                        d="m17.1,7.58s-.01-.04-.01-.06c.01-.22-.06-.45-.24-.61L9.23.19c-.31-.27-.78-.24-1.06.07-.27.31-.24.78.07,1.06l6.26,5.52H.75c-.41,0-.75.34-.75.75s.34.75.75.75h13.74l-6.26,5.52c-.31.27-.34.75-.07,1.06.15.17.35.25.56.25.18,0,.35-.06.5-.19l7.62-6.72c.18-.16.25-.39.24-.61,0-.02.01-.04.01-.06Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </span>
        </div>

        <div className="AnimatedGrid_grid__otAMD">
          <div className="Articles_articlesList__CXW8a">
            {articles.map((article, i) => (
              <a
                key={i}
                data-animation="grid-item"
                href={article.link}
                style={{
                  transform: "translate(0px, 0px)",
                  opacity: 1,
                }}
              >
                <article className="Articles_article__3ZS4Y">
                  <figure className="Articles_image__Cvgsi">
                    <span className="Image_image__RAAdZ Image_fill__EiIzS">
                      <img
                        src={article.image}
                        srcSet={article.srcSet}
                        sizes="293px"
                        alt=""
                        fetchpriority="low"
                        width={article.width}
                        height={article.height}
                        className="lazyautosizes lazyloaded"
                      />
                    </span>
                  </figure>
                  <div className="Articles_text__HhO2L">
                    <p className="Articles_filterNames__mCWt8">
                      {article.category}
                    </p>
                    <h3 className="Articles_title__h86PB">{article.title}</h3>
                  </div>
                </article>
              </a>
            ))}

            <div className="Articles_mobileButton__Df7CF">
              <div className="Magnetic_magnetic__LncOy" data-fill="false">
                <div
                  className="Button_button__JJiqJ Button_white__MQaf2"
                  data-direction="forwards"
                >
                  <a className="Button_inner__fnyH6" href="/blog">
                    <span className="Button_border__hirH2"></span>
                    <span className="Button_text__IZaCD">
                      <span className="Button_textInner__JTTHe">
                        View our blog
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 17.1 15.17"
                        className="Button_buttonArrow__0W9XI"
                      >
                        <path
                          d="m17.1,7.58s-.01-.04-.01-.06c.01-.22-.06-.45-.24-.61L9.23.19c-.31-.27-.78-.24-1.06.07-.27.31-.24.78.07,1.06l6.26,5.52H.75c-.41,0-.75.34-.75.75s.34.75.75.75h13.74l-6.26,5.52c-.31.27-.34.75-.07,1.06.15.17.35.25.56.25.18,0,.35-.06.5-.19l7.62-6.72c.18-.16.25-.39.24-.61,0-.02.01-.04.01-.06Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sample data (you'll want to fetch or import this)
const articles = [
    {
      link: "/blog/time-for-a-rebrand-start-with-our-brand-pulse-audit-tool",
      image:
        "https://kota-content.b-cdn.net/app/uploads/2025/01/brand-pulse-audit.png",
      srcSet:
        "https://kota-content.b-cdn.net/app/uploads/2025/01/brand-pulse-audit.png 1400w, https://kota-content.b-cdn.net/app/uploads/2025/01/brand-pulse-audit-500x281.png 500w, https://kota-content.b-cdn.net/app/uploads/2025/01/brand-pulse-audit-768x432.png 768w",
      width: 1400,
      height: 787,
      category: "Expertise",
      title: "Time for a rebrand? Start with our Brand Pulse Audit tool",
    },
    {
      link: "/blog/brand-design-trends-for-2025",
      image:
        "https://kota-content.b-cdn.net/app/uploads/2024/12/design-trends-2025.png",
      srcSet:
        "https://kota-content.b-cdn.net/app/uploads/2024/12/design-trends-2025.png 1400w, https://kota-content.b-cdn.net/app/uploads/2024/12/design-trends-2025-500x281.png 500w, https://kota-content.b-cdn.net/app/uploads/2024/12/design-trends-2025-768x432.png 768w",
      width: 1400,
      height: 787,
      category: "Inspiration",
      title: "Branding inspiration: brand design trends for 2025",
    },
    {
      link: "/blog/creative-agency-website-trends-2025",
      image:
        "https://kota-content.b-cdn.net/app/uploads/2025/01/agency-web-trends.png",
      srcSet:
        "https://kota-content.b-cdn.net/app/uploads/2025/01/agency-web-trends.png 1400w, https://kota-content.b-cdn.net/app/uploads/2025/01/agency-web-trends-500x281.png 500w, https://kota-content.b-cdn.net/app/uploads/2025/01/agency-web-trends-768x432.png 768w",
      width: 1400,
      height: 787,
      category: "Design",
      title: "Creative agency website trends we’re loving in 2025",
    },
    {
      link: "/blog/ux-principles-for-better-conversion",
      image:
        "https://kota-content.b-cdn.net/app/uploads/2025/02/ux-conversion.png",
      srcSet:
        "https://kota-content.b-cdn.net/app/uploads/2025/02/ux-conversion.png 1400w, https://kota-content.b-cdn.net/app/uploads/2025/02/ux-conversion-500x281.png 500w, https://kota-content.b-cdn.net/app/uploads/2025/02/ux-conversion-768x432.png 768w",
      width: 1400,
      height: 787,
      category: "UX",
      title: "Essential UX principles that drive better conversions",
    },
    {
      link: "/blog/how-to-build-a-memorable-brand-story",
      image:
        "https://kota-content.b-cdn.net/app/uploads/2025/03/brand-storytelling.png",
      srcSet:
        "https://kota-content.b-cdn.net/app/uploads/2025/03/brand-storytelling.png 1400w, https://kota-content.b-cdn.net/app/uploads/2025/03/brand-storytelling-500x281.png 500w, https://kota-content.b-cdn.net/app/uploads/2025/03/brand-storytelling-768x432.png 768w",
      width: 1400,
      height: 787,
      category: "Strategy",
      title: "How to build a brand story that truly connects",
    },
    {
      link: "/blog/seo-tips-for-modern-brands",
      image:
        "https://kota-content.b-cdn.net/app/uploads/2025/02/seo-tips.png",
      srcSet:
        "https://kota-content.b-cdn.net/app/uploads/2025/02/seo-tips.png 1400w, https://kota-content.b-cdn.net/app/uploads/2025/02/seo-tips-500x281.png 500w, https://kota-content.b-cdn.net/app/uploads/2025/02/seo-tips-768x432.png 768w",
      width: 1400,
      height: 787,
      category: "Marketing",
      title: "Modern SEO tips every brand should know in 2025",
    },
  ];
  

