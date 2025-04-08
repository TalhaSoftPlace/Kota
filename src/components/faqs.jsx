"use client";

import React, { useState } from 'react';

export const FaqsList = () => {
  const [open, setOpen] = useState(null);

  const toggleAnswer = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="FaqsList_faqsList__3yyiS">
      <div className="DarkThemeSwitch_cover__hn_xc"></div>
      <div className="container">
        <div className="FaqsList_heading__kirHR">
          <p>
            <span className="FadeInUp_container___uxva" data-fill="false" style={{ transform: 'translate(0px, 0px)', opacity: 1 }}>
              FAQ's
            </span>
          </p>
        </div>
        <div className="FaqsList_faq__US_6Y">
          <span className="FadeInUp_container___uxva" data-fill="false" style={{ transform: 'translate(0px, 0px)', opacity: 1 }}>
            <label className="FaqsList_question__6fKon">
              <span className="FaqsList_icon__54ODy">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                  <path fill="#fff" d="M17.5 40V22.5H0v-5h17.5V0h5v17.5H40v5H22.5V40h-5z"></path>
                </svg>
              </span>
              How much does web design and development typically cost?
              <input type="checkbox" onClick={() => toggleAnswer(0)} />
            </label>
            {open === 0 && (
              <div className="FaqsList_answer__XAnT2 prose">
                <div>
                  <p>
                    The majority of our projects sit between £30k and £150k, but project costs will depend on the final scope of work and vary from project to project. We generally have a minimum project size of £25k and prefer to agree a fixed cost with agreed milestone payments.
                  </p>
                </div>
              </div>
            )}
          </span>
        </div>

        <div className="FaqsList_faq__US_6Y">
          <span className="FadeInUp_container___uxva" data-fill="false" style={{ transform: 'translate(0px, 0px)', opacity: 1 }}>
            <label className="FaqsList_question__6fKon">
              <span className="FaqsList_icon__54ODy">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                  <path fill="#fff" d="M17.5 40V22.5H0v-5h17.5V0h5v17.5H40v5H22.5V40h-5z"></path>
                </svg>
              </span>
              How long does a project usually take?
              <input type="checkbox" onClick={() => toggleAnswer(1)} />
            </label>
            {open === 1 && (
              <div className="FaqsList_answer__XAnT2 prose">
                <div>
                  <p>
                    A web design and build project can last around 12-14 weeks, whereas brand-into-website-and-marketing can take 6 months or more. There are always ways to consider business objectives (such as phased launches) so even if your timescales don’t work with this, it’s always worth reaching out. Expect clear milestones and a timeline that respects your urgency, without ever skimping on the quality that makes your site distinctly you.
                  </p>
                </div>
              </div>
            )}
          </span>
        </div>

        <div className="FaqsList_faq__US_6Y">
          <span className="FadeInUp_container___uxva" data-fill="false" style={{ transform: 'translate(0px, 0px)', opacity: 1 }}>
            <label className="FaqsList_question__6fKon">
              <span className="FaqsList_icon__54ODy">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                  <path fill="#fff" d="M17.5 40V22.5H0v-5h17.5V0h5v17.5H40v5H22.5V40h-5z"></path>
                </svg>
              </span>
              Can your creative agency accommodate tight deadlines?
              <input type="checkbox" onClick={() => toggleAnswer(2)} />
            </label>
            {open === 2 && (
              <div className="FaqsList_answer__XAnT2 prose">
                <div>
                  <p>
                    Sure thing! We’re ready to mobilise our design and development teams, prioritising the essentials to turn your dream site from a fast-approaching deadline into a reality. Flexibility and focus are our middle names, ensuring your project crosses the finish line.
                  </p>
                </div>
              </div>
            )}
          </span>
        </div>

        <div className="FaqsList_faq__US_6Y">
          <span className="FadeInUp_container___uxva" data-fill="false" style={{ transform: 'translate(0px, 0px)', opacity: 1 }}>
            <label className="FaqsList_question__6fKon">
              <span className="FaqsList_icon__54ODy">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                  <path fill="#fff" d="M17.5 40V22.5H0v-5h17.5V0h5v17.5H40v5H22.5V40h-5z"></path>
                </svg>
              </span>
              What ongoing support and maintenance do you offer post-launch?
              <input type="checkbox" onClick={() => toggleAnswer(3)} />
            </label>
            {open === 3 && (
              <div className="FaqsList_answer__XAnT2 prose">
                <div>
                  <p>
                    SiteCare is a huge part of what we offer here at KOTA. Think of us as the guardians of your digital home, offering a suite of post-launch support and maintenance services to ensure your website continues to thrive. From regular updates to performance tuning, we’re on hand to keep your site smooth, secure, and evolving along with your brand. You can read more about SiteCare{' '}
                    <a className="notion-link-token notion-focusable-token notion-enable-hover" tabindex="0" href="https://kota.co.uk/blog/sitecare-management-website-maintenance" rel="noopener noreferrer">
                      here
                    </a>
                    .
                  </p>
                </div>
              </div>
            )}
          </span>
        </div>

        <div className="FaqsList_faq__US_6Y">
          <span className="FadeInUp_container___uxva" data-fill="false" style={{ transform: 'translate(0px, 0px)', opacity: 1 }}>
            <label className="FaqsList_question__6fKon">
              <span className="FaqsList_icon__54ODy">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                  <path fill="#fff" d="M17.5 40V22.5H0v-5h17.5V0h5v17.5H40v5H22.5V40h-5z"></path>
                </svg>
              </span>
              How do you handle revisions and feedback during the design process?
              <input type="checkbox" onClick={() => toggleAnswer(4)} />
            </label>
            {open === 4 && (
              <div className="FaqsList_answer__XAnT2 prose">
                <div>
                  <p>
                    Your feedback is the secret sauce in our design process. We welcome your thoughts, tweaks, and “aha” moments, incorporating them into each iteration to ensure the end product is nothing short of perfection. Our process is built on collaboration, making sure your voice is heard loud and clear at every turn.
                  </p>
                </div>
              </div>
            )}
          </span>
        </div>

        <div className="FaqsList_faq__US_6Y">
          <span className="FadeInUp_container___uxva" data-fill="false" style={{ transform: 'translate(0px, 0px)', opacity: 1 }}>
            <label className="FaqsList_question__6fKon">
              <span className="FaqsList_icon__54ODy">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                  <path fill="#fff" d="M17.5 40V22.5H0v-5h17.5V0h5v17.5H40v5H22.5V40h-5z"></path>
                </svg>
              </span>
              Are there additional costs for digital marketing services integrated into web projects?
              <input type="checkbox" onClick={() => toggleAnswer(5)} />
            </label>
            {open === 5 && (
              <div className="FaqsList_answer__XAnT2 prose">
                <div>
                  <p>
                    Integrating our digital marketing services into your web project is like adding rocket fuel to your online presence. We offer clear, upfront pricing for any add-on services, ensuring you know exactly what to expect—no surprises. Whether part of a package deal or a la carte, we tailor our digital marketing solutions to fit your budget and goals. Get in touch to find out more!
                  </p>
                </div>
              </div>
            )}
          </span>
        </div>
      </div>
    </section>
  );
};