import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import "./Home.css";
import Fade from "react-reveal/Fade";
import Countdown, { zeroPad } from "react-countdown";

import Img37 from "../Imgs/37.jpg";
import Img38 from "../Imgs/38.jpg";
import Img18 from "../Imgs/logo.png";
import Img1002 from "../Imgs/100.png";

import img2707 from "../Imgs/2707.png";
import img98 from "../Imgs/98.png";
import img1074 from "../Imgs/1074.png";
import img3466 from "../Imgs/3466.png";
import img1990 from "../Imgs/1990.png";
import img1806 from "../Imgs/1806.png";
import img4221 from "../Imgs/4221.png";
import img2059 from "../Imgs/2059.png";
import img88 from "../Imgs/88.png";
import img2175 from "../Imgs/2175.png";
import img1511 from "../Imgs/1511.png";
import img1174 from "../Imgs/1174.png";
import img157 from "../Imgs/157.png";
import img3991 from "../Imgs/3991.png";
import img3077 from "../Imgs/3077.png";
import img3211 from "../Imgs/3211.png";
import img3351 from "../Imgs/3351.png";
import img266 from "../Imgs/266.png";
import img100 from "../Imgs/100.png";
import img3504 from "../Imgs/3504.png";
import img4483 from "../Imgs/4483.png";

import h1 from "../Imgs/h1.png";
import h2 from "../Imgs/h2.png";
import h3 from "../Imgs/h3.png";
import h4 from "../Imgs/h4.png";
import h5 from "../Imgs/h5.png";
import h6 from "../Imgs/h6.png";

import h1m from "../Imgs/h1 - Copy.png";
import h2m from "../Imgs/h2 - Copy.png";
import h3m from "../Imgs/h3 - Copy.png";
import h4m from "../Imgs/h4 - Copy.png";
import h5m from "../Imgs/h5 - Copy.png";
import h6m from "../Imgs/h6 - Copy.png";

import nftech from "../Imgs/nftech.png";

export default function Home() {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return (
      <div className="counter row mt-5 mb-5">
        <div className="col-md-3 col-6 my-3">
          <div>
            <div>{days}</div>
            Days
          </div>
        </div>
        <div className="col-md-3 col-6 my-3">
          <div>
            <div>{zeroPad(hours)}</div>
            Hours
          </div>
        </div>
        <div className="col-md-3 col-6 my-3">
          <div>
            <div>{zeroPad(minutes)}</div>
            Minutes
          </div>
        </div>
        <div className="col-md-3 col-6 my-3">
          <div>
            <div>{zeroPad(seconds)}</div>
            Seconds
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="MAIN">
      <div className="header container-fluid bg-white">
        <div className="container">
          <nav class="navbar container-fluid navbar-expand-lg navbar-light">
            <img className="logo" src={Img18} />
            <a
              class="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mob-navbar"
              aria-label="Toggle"
              aria-expanded="false"
            >
              <span class="navbar-toggler-icon"></span>
            </a>
            <div class="centi navbar-collapse collapse" id="mob-navbar">
              <ul class="navbar-nav mb-2 mx-auto mb-lg-0 text-center">
                <li class="nav-item">
                  <a class="nav-link px-3" aria-current="page" href="#AB">
                    ABOUT US
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link px-3" aria-current="page" href="#holders">
                    HOLDER BENEFITS
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link active px-3"
                    aria-current="page"
                    href="#Rd"
                  >
                    ROADMAP
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link active px-3"
                    aria-current="page"
                    href="#TE"
                  >
                    MEET THE TEAM
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link active px-3"
                    aria-current="page"
                    href="#FA"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
              <div class="social-buttons text-center">
                <span class="neo-button px-2">
                  <a href="https://twitter.com/SkersFanClub" target="_blank">
                    <i class="hu fab fa-twitter "></i>
                  </a>
                </span>
                <span class="neo-button px-2">
                  <a
                    href="https://www.instagram.com/skersfanclub/"
                    target="_blank"
                  >
                    <i class="hu fab fa-instagram "></i>
                  </a>
                </span>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <a id="AB"></a>
      <div className="container-fluid sec1">
        <div className="row   m-0">
          <div className="col-md-5 mx-auto text-center skew">
            <h1 className="sker py-3">
              ‘SKERS <br />
              FAN CLUB
            </h1>
            <p className="text-white mt-4 title pb-4">
              The ‘Skers Fan Club is an <b>innovative, exclusive</b>, and
              <b> community driven</b> project founded by current University of
              Nebraska Students. SFC’s goal is to{" "}
              <b>bridge the gap between players and fans</b>, and to{" "}
              <b>provide financial support to the players</b> that bring light
              to the city of Lincoln.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 text-center">
            <div className="p-3">
              <h1 className="mt-5 how">Join Early Access</h1>
              <div class="mjp mb-1">
                <form action="https://docs.google.com/forms/d/e/1FAIpQLSdewIMeli_Jtk6ymgccxiQoilvmUuXAMj25aP9MN0EF2z6dNQ/formResponse">
                  <input
                    type="email "
                    placeholder="Enter Your Email Address"
                    name="entry.937339776"
                  />
                  <button type="submit" className="py-3 ">
                    Join Early Access
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Countdown
          date={new Date("June 22 , 2022 ")}
          renderer={renderer}
          zeroPadTime={5}
        />
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-center d-none">
          <div className="col-md-4">
            <CrossmintPayButton
              collectionTitle="SKERS FAN CLUB"
              collectionDescription="The ‘Skers Fan Club is an innovative, exclusive, and community driven project founded by current University of Nebraska Students. ‘Skers Fan Club exists to bridge the gap between players and fans, as well as providing financial support to the players that bring light to the city of Lincoln."
              collectionPhoto="https://skersfanclub.com/static/media/logo.af2b7ea323d9758c664b.png"
              clientId="4d38b2db-3fc7-4169-9741-867ad5bbf995"
              environment="staging"
              mintConfig={{ type: "erc-721", price: "0.089" }}
            />
          </div>
        </div>
      </div>
      <div className="my-5 container goal text-center">
        <div className="row">
          <div className="col-md-12">
            <h1 className="mt-5 how">Our Goal</h1>
            <ul>
              <li>
                {/* <img src={img100} /> */}
                Help the Nebraska Football athletes monetize their name, image,
                and likeness (NIL)
                <br />
                <img src={img100} />
              </li>
              <li>
                {/* <img src={img100} /> */}
                Bridge the gap between players and fans
                <br />
                <img src={img100} />
              </li>
              <li>
                {/* <img src={img100} /> */}
                Majority of all profits will go directly to the active Nebraska
                Football players.
                {/* <img src={img100} /> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-5 container-fluid holdersbenefitss">
        <div className="container">
          <h1 id="holders" className="mt-4 how1 text-center">
            HOLDER BENEFITS
          </h1>
          <div className="row d-none d-md-flex align-items-center">
            <div className="col-md-4 text-left">
              <div className="hover-up">
                <Fade left>
                  <img className="mb-5 w-100" src={h1} />
                </Fade>
              </div>
              <div className="hover-up">
                <Fade left>
                  <img className="mb-5 w-100" src={h2} />
                </Fade>
              </div>
              <div className="hover-up">
                <Fade left>
                  <img className="mb-5 w-100" src={h3} />
                </Fade>
              </div>
            </div>

            <div className="col-md-4 p-4 text-center">
              <img className="w-100 bntc my-5" src={Img1002}></img>
            </div>

            <div className="col-md-4 text-right">
              <div className="hover-up">
                <Fade right>
                  <img src={h4} className="mb-5 w-100" />
                </Fade>
              </div>
              <div className="hover-up">
                <Fade right>
                  <img className="mb-5 w-100" src={h5} />
                </Fade>
              </div>
              <div className="hover-up">
                <Fade right>
                  <img className="mb-5 w-100" src={h6} />
                </Fade>
              </div>
            </div>
          </div>
          <div className="row text-center d-md-none">
            <div className="col-12">
              <img src={h1m} className="w-75 mb-3" />
              <img src={h2m} className="w-75 mb-3" />
              <img src={h3m} className="w-75 mb-3" />
              {/* <br />
              <img className="w-25 bntc my-5" src={Img18}></img>
              <br /> */}
              <img src={h4m} className="w-75 mb-3" />
              <img src={h5m} className="w-75 mb-3" />
              <img src={h6m} className="w-75 mb-3" />
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5 text-center">
        <h1 id="holders" className="mt-4 how1">
          Bulk Purchase Incentives
        </h1>
        <div className="row my-5">
          <div className="col-md-4">
            <div className="benefit">
              <span>3+ NFTs</span>
              <p className="title m-0">Husker Merch Box</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="benefit">
              <span>5+ NFTs</span>
              <p className="title m-0">Signed Mini Helmet</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="benefit">
              <span>10+ NFTs</span>
              <p className="title m-0">Mystery Box</p>
            </div>
          </div>
        </div>
      </div>

      <div className="cmd">
        <div className="slider" role="toolbar">
          <div role="option">
            <img className="w-100" src={img266}></img>
          </div>
          <div role="option">
            <img className="w-100" src={img2707}></img>
          </div>
          <div role="option">
            <img className="w-100" src={img3991}></img>
          </div>
          <div role="option">
            <img className="w-100" src={img3504}></img>
          </div>
          <div role="option">
            <img className="w-100" src={img98}></img>
          </div>
          <div role="option">
            <img className="w-100" src={img1074}></img>
          </div>
          <div role="option">
            <img className="w-100" src={img3466}></img>
          </div>
          <div role="option">
            <img className="w-100" src={img1990}></img>
          </div>
          <div role="option">
            <img className="w-100" src={img1806}></img>
          </div>
          <div role="option">
            <img className="w-100" src={img4221}></img>
          </div>
          <div role="option">
            <img className="w-100" src={img2059}></img>
          </div>
          <div role="option">
            <img className="w-100" src={img88}></img>
          </div>
          <div role="option">
            <img className="w-100" src={img2175}></img>
          </div>
          <div role="option">
            <img className="w-100" src={img1511}></img>
          </div>
          <div role="option">
            <img className="w-100" src={img1174}></img>
          </div>
          <div role="option">
            <img className="w-100" src={img157}></img>
          </div>
          <div role="option">
            <img className="w-100" src={img4483}></img>
          </div>
          <div role="option">
            <img className="w-100" src={img3077}></img>
          </div>
          <div role="option">
            <img className="w-100" src={img3211}></img>
          </div>
          <div role="option">
            <img className="w-100" src={img3351}></img>
          </div>
        </div>
      </div>

      <a id="Rd"></a>
      <div className="container-fluid ABCD pt-5 pb-1">
        <h1 className="text-center mt-5 RD">ROADMAP</h1>
        <section id="cd-timeline" class="cd-container">
          <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-picture"></div>

            <div class="cd-timeline-content">
              <h1 className="sum">Summer of 2022</h1>

              <ul className="bth">
                <li className="pt-3">Meet & Greet event with SFC athletes</li>
                <li className="pt-3">Q&A video calls with SFC athletes</li>
                <li className="pt-3">Access to signed memorabilia giveaways</li>
                <li className="pt-3">
                  Raffles for merch, NE owned business gift cards, giveaways,
                  etc (More TBA)
                </li>
              </ul>
            </div>
          </div>

          <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-movie"></div>
            <div class="cd-timeline-content">
              <h1 className="sum">FALL 2022</h1>
              <ul className="bth">
                <li className="pt-3">
                  Member-only home game tailgate (1 NFT = 1 entry, Date TBA)
                </li>
                <li className="pt-3">
                  Access to game used memorabilia giveaways
                </li>
                <li className="pt-3">
                  4 tickets raffled away for every home game (1 NFT = 1 entry)
                </li>
                <li className="pt-3">More to come!</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="container py-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
            <p style={{ fontWeight: "900", fontSize: "28px" }} className="m-0">
              Create &amp; Sell NFTs
            </p>
            <p>
              NFTech is a Web 3.0 Development Group allowing integration for all
              types of organizations or individuals. We provide turn-key
              solutions including NFT Design, NFT Generation, Project
              Management, & Blockchain Development.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <img src={nftech} className="w-100 px-5 mb-3" />
            <a
              className="btn btn-purple text-white"
              href="http://www.nftech.group"
              target="_blank"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <a id="TE"></a>
      <div>
        <h1 className="tex1 pt-5 text-center">The Team</h1>
      </div>
      <div id="rs-team" class="rs-team fullwidth-team pt-100 pb-70">
        <div class="container">
          <div class="row mt-5">
            <div class="col-lg-2 col-md-6"></div>
            <div class="col-lg-4 col-md-6">
              <div class="team-item">
                <div class="team-img">
                  <img className="w-100 " src={Img37} />
                  <div class="normal-text">
                    <h4 class="team-name">Robert Khorram</h4>
                    <span class="subtitle">Senior Management Major</span>
                  </div>
                </div>
                <div class="team-content">
                  <div class="share-icons">
                    <a
                      href="https://www.linkedin.com/in/robert-khorram-aa61a61b0/"
                      target="_blank"
                      class="social-icon"
                    >
                      <i class="fab fa-linkedin text-white"></i>
                    </a>
                  </div>
                  <div class="team-details">
                    <h4 class="team-name">
                      <a>Robert Khorram</a>
                    </h4>
                    <span class="postion">Senior Management Major</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="team-item">
                <div class="team-img">
                  <img className="w-100 " src={Img38} />
                  <div class="normal-text">
                    <h4 class="team-name">Zachary Molzer</h4>
                    <span class="subtitle">Senior Management Major</span>
                  </div>
                </div>
                <div class="team-content">
                  <div class="share-icons">
                    <a
                      href="https://www.linkedin.com/in/zach-molzer-1822051b3/"
                      target="_blank"
                      class="social-icon"
                    >
                      <i class="fab fa-linkedin text-white"></i>
                    </a>
                  </div>
                  <div class="team-details">
                    <h4 class="team-name">
                      <a>Zachary Molzer</a>
                    </h4>
                    <span class="postion">Senior Management Major</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-6"></div>
          </div>
        </div>
      </div>
      <a id="FA"></a>
      <div className="text-center dfz">
        {" "}
        <h1 className="faq">FAQs</h1>
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-md-1"></div>
          <div className="col-md-10  ">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What is an NFT?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    A non-fungible token is a non-interchangeable unit of data
                    stored on a ‘blockchain’, a form of digital ledger, that can
                    be sold and traded. Types of NFT data units may be
                    associated with digital files such as photos, videos, and
                    audio.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How do I purchase a ‘Skers Fan Club NFT?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    You can purchase SFC NFTs directly from our website using a
                    credit/debit card.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingfour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsefour"
                    aria-expanded="false"
                    aria-controls="collapsefour"
                  >
                    Are there benefits of purchasing more than 1 NFT?
                  </button>
                </h2>
                <div
                  id="collapsefour"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingfour"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Purchase 3+, you will receive a Husker Merch Box. Purchase
                    5+, you will receive both a Husker Merch Box AND a Signed
                    Mini Helmet. Purchase 10+ you receive the merch box, a
                    signed mini helmet AND a surprise mystery box!
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingfive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsefive"
                    aria-expanded="false"
                    aria-controls="collapsefive"
                  >
                    How much does it cost?
                  </button>
                </h2>
                <div
                  id="collapsefive"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingfive"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">Each NFT will cost $249</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingsix">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsesix"
                    aria-expanded="false"
                    aria-controls="collapsesix"
                  >
                    When will I be able to purchase a ‘Skers Fan Club NFT?
                  </button>
                </h2>
                <div
                  id="collapsesix"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingsix"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">Tuesday June 21st @ 12PM CST</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingseven">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseseven"
                    aria-expanded="false"
                    aria-controls="collapseseven"
                  >
                    Where is the money going?
                  </button>
                </h2>
                <div
                  id="collapseseven"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingseven"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Majority of the profits will be distributed amongst the
                    participating athletes. Our vision at ‘Skers Fan Club is to
                    help athletes monetize their name, image, and likeness and
                    be able to connect with fans like never before. The rest of
                    the proceeds will be used for development and hosting
                    player/fan events.
                  </div>
                </div>
              </div>
              {/* <div class="accordion-item">
                <h2 class="accordion-header" id="headingeight">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseeight"
                    aria-expanded="false"
                    aria-controls="collapseeight"
                  >
                    What do I do once I purchase my NFT?
                  </button>
                </h2>
                <div
                  id="collapseeight"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingeight"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    OpenSea is the most commonly used platform where you can
                    view, buy, and sell your NFTs. Once you’ve purchased SFC
                    NFT(s), head over to http://opensea.io/ and click the wallet
                    icon in the top right corner. At this point, you can connect
                    your Fortmatic wallet to OpenSea. Once you log in and
                    successfully connect your wallet, you will be able view all
                    of your NFTs in that wallet on OpenSea.
                  </div>
                </div>
              </div> */}
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingnine">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsenine"
                    aria-expanded="false"
                    aria-controls="collapsenine"
                  >
                    What is Crossmint ?
                  </button>
                </h2>
                <div
                  id="collapsenine"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingnine"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <a
                      href="https://Crossmint.io"
                      target="_blank"
                      className="px-1 dorse"
                    >
                      <strong>https://Crossmint.io</strong>
                    </a>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingten">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseten"
                    aria-expanded="false"
                    aria-controls="collapseten"
                  >
                    How many NFTs are there?
                  </button>
                </h2>
                <div
                  id="collapseten"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingten"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    There are 5,555 unique ‘Skers Fan Club NFTs.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingeleven">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseeleven"
                    aria-expanded="false"
                    aria-controls="collapseeleven"
                  >
                    Can I choose which NFT I buy?
                  </button>
                </h2>
                <div
                  id="collapseeleven"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingeleven"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    All NFTs are randomly generated. If you choose to purchase
                    from our website the day the sale is live, you will be
                    transferred a random NFT to your Wallet via Crossmint. If
                    you wish to buy a specific NFT, you can head over to the
                    secondary market on OpenSea and find your favorite.
                  </div>
                </div>
              </div>
              {/* <div class="accordion-item">
                <h2 class="accordion-header" id="headingtwelve">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsetwelve"
                    aria-expanded="false"
                    aria-controls="collapsetwelve"
                  >
                    Can I resell my SFC?
                  </button>
                </h2>
                <div
                  id="collapsetwelve"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingtwelve"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Yes. You can resell your NFT on OpenSea. OpenSea is the
                    industry leader for NFT marketplaces.
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
      <div className="container-fluid footer py-2">
        <div className="container">
          <div class="row align-items-center">
            <div className="col-8">
              <h1 className="play m-0">SKERS FAN CLUB</h1>
            </div>
            <div className="col-4 text-right">
              <div class="social-buttons">
                <span class="neo-button">
                  <a href="https://twitter.com/SkersFanClub" target="_blank">
                    <i class="hu fab fa-twitter "></i>
                  </a>
                </span>
                <span class="neo-button px-3">
                  <a
                    href="https://www.instagram.com/skersfanclub/"
                    target="_blank"
                  >
                    <i class="hu fab fa-instagram "></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
