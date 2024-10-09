import React from "react";
import Slider from "../components/Slider";
import CardSlider from "../components/CardSlider";
import ServiceCards from "../components/ServiceCards";
import AskingQuote from "../components/AskingQuote";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="landing">
        <div className="left-landing">
          <div className="left-banner">
            <h3>
              Your <span className="banner"> audience </span> could be anywhere.
              Does your
              <span className="banner"> website </span> speak their language?
            </h3>
            <p>
              At TransPerfect, we have more than 30 years of experience helping
              organizations connect with their audiences—in any language.{" "}
            </p>
            <div className="d-flex gap-5 banner-btn">
              <button>Get a Quote</button>
              <span>Discover </span>
            </div>
          </div>
        </div>
        <div className="right-landing">
          <img
            alt="background-image"
            loading="lazy"
            src="https://www.transperfect.com/sites/default/files/styles/responsive_image_1200/public/media/image/shutterstock_779499031_0.jpg?itok=hZDoIzt4"
            className="bg-img"
          />
        </div>
        <div className="landing-bottom">
          <div class="card cardWrapper" style={{ width: "18rem" }}>
            <div className="logo-img">
              <img
                src="https://www.transperfect.com/sites/default/files/media/image/Solutions_2.png"
                alt="messages-pic"
                width={"170px"}
              />
            </div>
            <div class="card-body cardBodyWrapper">
              <h2 class="card-title cardTitle-solutions">Solutions</h2>
              <p class="card-text cardText">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="card-link cardLink-solution">
                Discover
              </a>
            </div>
          </div>
          <div class="card cardWrapper" style={{ width: "18rem" }}>
            <div className="logo-img">
              <img
                src="https://www.transperfect.com/sites/default/files/media/image/Tech_2.png"
                alt="technology-pic"
                width={"150px"}
              />
            </div>
            <div class="card-body cardBodyWrapper">
              <h2 class="card-title cardTitle-tech">Technology</h2>
              <p class="card-text cardText">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="card-link cardLink-tech">
                Experience
              </a>
            </div>
          </div>
          <div class="card cardWrapper" style={{ width: "18rem" }}>
            <div className="logo-img">
              <img
                src="https://www.transperfect.com/sites/default/files/media/image/Main_Industries.png"
                alt="internet-pic"
                width={"150px"}
              />
            </div>
            <div class="card-body cardBodyWrapper">
              <h2 class="card-title">Industries</h2>
              <p class="card-text cardText">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="card-link cardLink-net">
                Explore
              </a>
            </div>
          </div>
        </div>

        <div className="help-section">
          <div className="section">
            <div className="leftSection">
              <img
                src="https://www.transperfect.com/sites/default/files/styles/responsive_image_2000/public/media/image/girl-photo.jpg?itok=DFsSIOwN"
                alt="ladypic"
                width={"100%"}
                height={"100%"}
                className="helpPic"
              />

              <div className="logo-help">
                <img
                  src="https://www.transperfect.com/sites/default/files/media/image/Solutions_2.png"
                  alt="helpLogo"
                  width={"180px"}
                />
              </div>
            </div>
            <div className="rightSection">
              <h5>HOW WE HELP</h5>
              <h2>
                <p>
                  Excel in the global marketplace with our translation services
                </p>
              </h2>
              <div className="para-help">
                <p>
                  We enable our clients to reach new markets globally by
                  connecting with their audiences and providing the best
                  possible customer experience—in any language. We’re a partner
                  that can take you from planning to execution through our
                  services, technology, consulting, and industry expertise. Our
                  tailor-made solutions help you reach these new markets
                  quickly, efficiently, effectively, and in a way that maximizes
                  gains for your business. That’s why the world’s top companies
                  turn to us when they want their global goals to become their
                  worldwide achievements.
                </p>
              </div>
              <div className="help-buttons">
                <button className="sol-btn">OUR SOLUTION</button>
                <button className="sol-btn">GET A QUOTE</button>
              </div>
            </div>
          </div>
          <div className="companies-slider">
            <h2>
              <p>Leading organizations around the world trust TransPerfect</p>
            </h2>
            <div className="slider">
              <Slider size={"70%"} />
              <div className="d-flex gap-5 client-btn">
                <button>View Client List</button>
                <button>Explore Client Stories</button>
              </div>
            </div>
            <div className="client-stories">
              <div className="stories">
                <h5>CLIENT STORIES</h5>
                <h2>We're proud of the company we keep</h2>
                <p>
                  Top companies from all over the world come to us when they
                  want to engage with global audiences in new markets. From
                  retail and travel companies to financial services and life
                  sciences organizations, we're the leading choice for
                  professional translations in over 200 languages with more than
                  10,000 native-speaking linguists.
                </p>
              </div>
              <div className="client-stories-card">
                <CardSlider size={"98%"} />
              </div>
            </div>
          </div>
          <div className="services-section">
            <div className="services">
              <h5>industries</h5>
              <h2>
                <p>
                  Our specialized industry experts know your business inside and
                  out
                </p>
              </h2>
            </div>
            <div>
              <ServiceCards />
            </div>
            <div className="asking-quote">
              <AskingQuote />
            </div>
            <div className="footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
