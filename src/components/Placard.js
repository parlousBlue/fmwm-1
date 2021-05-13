import React from 'react';
import {Card, Nav, Navbar, NavDropdown, Jumbotron, Button} from "react-bootstrap";
import data from "../json/data.json";
import img from './images/image1.jpg';
import img2 from './images/image2.jpg';
import cnn_img from './images/cnn.svg';
import nbc_img from './images/nbc.png';
import hunter_img from './images/hunter.jpg';
import star_img from './images/star.jpg';
import analysis_img from './images/analysis.jpg';
import flights_img from './images/flights.jpg';
import the_who_img from './images/the_who.jpg';
import tenpm_img from './images/10pm.jpg';
import sway_img from './images/sway.jpg';
import { Container } from 'semantic-ui-react';

class Placard extends React.Component {
  state = {
    articles: [], // array of states

  };
  
  // Need a constructor when you create a class
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="container">

        <div className="row border-bottom border-dark justify-content-md-center text-left">
          <div className="col-md-4">
            <div className="row g-0 rounded overflow-hidden flex-md-row position-relative">
                  <a href="https://arxiv.org/pdf/1905.12616.pdf" className="stretched-link"></a>
              <div className="col-auto ">
              <img
                  className="d-block w-100 m-0"
                  src={tenpm_img}
                  alt="10pm"
                  width="50"
                  height="50"
                />
              </div>
              <div className="col position-static">
                <p className="mb-0">Defending Against Neural Fake News</p>
                <p className="mb-auto text-muted">Recent progress in natural language generation has raised dual-use concerns.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4"><div className="row g-0 rounded overflow-hidden flex-md-row position-relative">
                  <a href="https://arxiv.org/pdf/1909.05858.pdf" className="stretched-link"></a>
              <div className="col-auto ">
              <img
                  className="d-block w-100 m-0"
                  src={sway_img}
                  alt="10pm"
                  width="50"
                  height="50"
                />
              </div>
              <div className="col position-static">
                <p className="mb-0">CTRL: A Conditional Transformer Language Model for Controllable Generation</p>
               </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row g-0 rounded overflow-hidden flex-md-row position-relative">
              <a href="hoax-by-cdc-wearing-a-mask-causes-covid-19" className="stretched-link"></a>
              <div className="col-auto ">
              <img
                  className="d-block w-100 m-0"
                  src={tenpm_img}
                  alt="10pm"
                  width="50"
                  height="50"
                />
              </div>
              <div className="col position-static">
                <strong className="d-inline-block mb-0 text-success">Generated</strong>
                <p className="mb-auto text-muted">Wearing a mask increases chances of getting COVID-19 is a hoax started by the CDC in 1998.</p>
              </div>
            </div>          
          </div>
          
        </div>

        <div className="row border-bottom border-dark ">
        <div className="col-md-8 text-left ">
            <div className="row g-0 border-start rounded overflow-hidden flex-md-row mb-auto position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                    <a href="governor-jan-brewer-claims-that-hispanics-support-arizona-immigration-law-is-a-lie" className="stretched-link"></a>
                <strong className="d-inline-block mb-2 text-success">Generated</strong>
                <h6 className="mb-0">Governor Jan Brewer's claim that 60% of Hispanics support the Arizona immigration law is a lie</h6>
                {/*<div className="mb-1 text-muted">April 3, 2021</div>*/}
                <p className="card-text mb-auto text-muted">Gov. Jan Brewer's assertion that 60 percent of Hispanics support the anti-immigration law that she signed into law in 2010 is a blatant lie, Latino groups said Saturday in response to Brewer's recent remarks.</p>
              </div>
              <div className="col-auto d-none d-lg-block mt-4">
                <img
                  className="d-block w-400  rounded mx-auto d-block"
                  src={analysis_img}
                  alt="CNN"
                  width="400"
                />
                <p className="text-muted footer"> Man in Arizona at Voter booth during Arizona gubernatorial elections</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-left">
            <div className="row g-0 rounded overflow-hidden flex-md-row mb-4  position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <div className="row g-0 border-bottom overflow-hidden flex-md-row mb-4 ">
                  <strong className="d-inline-block mb-2 text-success">Generated</strong>
                  <h6 className="mb-0">The tobacco industry created the illusion that wearing a mask raises your risk of contracting COVID-19</h6>
                  <div className="mb-auto text-muted"></div>
                  
                  <a href="tobacco-industry-created-illusion-against-masks" className="stretched-link"></a>
                  <p className="mb-3 text-muted">
                  Long gone are the days when smoking was socially acceptable and vice-like behavior was limited to the stigma associated with skin-lightening and cigarette smoking. 
                  Instead, cigarette smoking is now more common than not.
                  </p>

                </div>

                {/*
                <div className="row">
                      <a href="tobacco-industry-created-illusion-against-masks" className="stretched-link"></a>
                  <h6 className="mb-0">The Jobs Boom That Went Bust</h6>
                  <p className="mb-3 text-muted">
                    April's anemic job creation was so out of line with what other indicators have suggested that it will take some time to unravel the mystery.
                  </p>
                </div>
                 */}

              </div>
            </div>
          </div>
        </div>

        <div className="border-bottom mb-1"> </div>
        <div className="row border-bottom border-dark ">
          <div className="col-md-4 text-left">
            <div className="row g-0 rounded overflow-hidden flex-md-row mb-4  position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <div className="row g-0 border-bottom overflow-hidden mb-4 ">
                  <a href="https://rowanzellers.com/grover/" className="stretched-link"></a>
                    <strong className="d-inline-block mb-2 text-info">Definitions</strong>
                    <h6 className="mb-0">What is Grover? And what was it used for?</h6>
                    <div className="mb-auto text-muted"></div>
                    <p className="mb-3 text-muted">Grover is a state-of-the-art model for detecting neural fake news which is also a strong disinformation generator.</p>
                    <p className="mb-3 text-muted">This model was trained by a team of reseachers at the University of Washington and released in 2019.</p>
                </div>

                <div className="row">
                    <h6 className="mb-0">What is a Model?</h6>
                    <p className="mb-3 text-muted">
                    A language model is a statistical tool to predict words. Language models try to find patterns in the human language which makes it challenging for modelers to use. They are used to predict the spoken word in an audio recording, the next word in a sentence, and which email is spam.
                    </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 text-left ">
            <div className="row g-0 border-start rounded overflow-hidden flex-md-row mb-auto position-relative">
              <div className="row p-4 d-flex flex-column position-static">     
                    <a href="the-who-claims-zika-transforms-fetus-brains-to-liquid" className="stretched-link"></a>
                <strong className="d-inline-block mb-2 text-success">Generated</strong>
                <h6 className="mb-0">The WHO's claim that the Zika virus transforms fetus brains to liquid is based on evidence.</h6>
                <div className="mb-1 text-muted"></div>
                <p className="card-text mb-auto text-muted">The World Health Organization announced Friday that it was classifying the Zika virus as a public health emergency of international concern. It's the first time in the organization's history that such a declaration has been made for a disease.</p>
            </div>
                <div className="col"></div>
                <div className="col">
                 
                    <div className="">
                        <img
                            className="d-block w-500 mb-4 rounded mx-auto d-block"
                            src={the_who_img}
                            alt="plane"
                            width="500"
                        />
                        <div class="img-overlay">
                            <h5 class="px-sm-4 text-white text-left">The World Health Organization</h5>
                        </div>
                    </div>
                </div>
                <div className="col"></div>

            </div>
          </div>
        </div>    

        <div className="col-md-12 text-left">
        <div className="row g-0 rounded overflow-hidden flex-md-row mb-4 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
                <div className="row g-0 border-bottom border-dark overflow-hidden flex-md-row mb-4 ">
                      <a href="https://arxiv.org/pdf/1910.13461.pdf" className="stretched-link"></a>
                  <strong className="d-inline-block mb-2 text-info">Definitions</strong>

                  <div className="mb-auto text-muted"></div>
                  <h6 className="mb-2">BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation, Translation, and Comprehension</h6>
                  <p className="mb-3 text-muted">We used BART to “reconstruct” the original headline and reword it. BART "reconstructs" the text or instead it randomly picks a word from a list of relevant words to fill in the blanks of the template. We then pose this as a question to CTRL, a question answering model.</p>

                </div>
              </div>
              <div className="col p-4 d-flex flex-column position-static">
                <div className="row g-0 border-bottom border-dark overflow-hidden flex-md-row mb-4 ">
                      <a href="tobacco-vapings-products-amid-high-teen-tobacco-use" className="stretched-link"></a>
                  <strong className="d-inline-block mb-2 text-success">Generated</strong>
                  <h6 className="mb-1">Tobacco Industry Sells Vaping Products in Schools Amid High Teen Tobacco Uses</h6>
                  <div className="mb-auto text-muted"></div>
                  <p className="mb-3 text-muted">Last year, studies found that high school students are smoking more electronic cigarettes. These studies, which are conducted by teenagers, include e-cigarettes that are vaporized with flavors like strawberry or snow cone as well as a smokeless and flavored tobacco called tobacco gel.</p>
                  <p className="mb-3 text-muted">This year, researchers found that approximately 10 percent of high school students have used e-cigarettes in 2018 a percentage that increases significantly when compared to last year.</p>
                </div>
              </div>
            </div>
          </div>
          
                  
    </main>
    
      
    );
  }
}
export default Placard;
