import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Container, Header } from "semantic-ui-react" // imports components from semantic UI
import Headline from "./components/Headline";
import {Carousel, Nav, Navbar, NavDropdown, Jumbotron, Button} from "react-bootstrap"
import Article from './components/Article';


class App extends React.Component {
  state = {
    articles: [], // array of states

  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const { articles } = this.state

    return (
    <div class="bg-dark">

      {/* The title */}
      <div class="container">
        <header class="header py-3">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <div class="col-1 pt-1"></div>
          <div class="col-8 text-center">
            <a class="header-logo text-white" href="#">Fighting Misinformation With Misinformation</a>
          </div>
          <div class="col-1"></div>
        </div>
        </header>
      </div>

      <div class="mt-2">
<Container>
  <div class="p-4 p-md-5 mt-3 mb-4 text-black rounded bg-light">
    <div class="col-md-6 px-0">
      <h1 class="display-4 fst-italic">The Rise of Fake News</h1>
      <p class="lead my-3">Our project is to raise exposure to the dangers of misinformation by showing it in action.</p>
    </div>
  </div>

  <br></br>

  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active">
        <div class="carousel-caption d-none d-md-block">
          <h3 class="display-4">First Slide</h3>
          <p class="lead">This is a description for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="carousel-caption d-none d-md-block">
          <h3 class="display-4">Second Slide</h3>
          <p class="lead">This is a description for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="carousel-caption d-none d-md-block">
          <h3 class="display-4">Third Slide</h3>
          <p class="lead">This is a description for the third slide.</p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
  </div>

  <br></br>
  <Carousel>
    <Carousel.Item interval ={1000}>
      <img 
        className="d-block w-100"
        src="holder.js/800x400?text=Firstslide&bg=373940"
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label, around ln 60</h3>
          <p>Can add a paragraph here</p>
        </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    
  <br></br>

  <div class="row text-white">
    <div class="col-md-4 text-dark">
        <div class="p-4 mb-3 bg-light rounded">
          <p class="mb-0"><em>Imagined by</em> GROVER.</p>
        </div>
        <div class="p-4">
        </div>
      </div>
      <div class="col-md-8">
        <div class="border-bottom"></div>

        <article class="article">
          <h2 class="article-title">Vaccines cause autism is a hoax by Russia and China to weaken United States public health</h2>
          <p class="article-metadata">March 2021 by <a href="#">CNN</a></p>

          <p>Mom and dad in northern Siberia risk losing their legal standing because the number of vaccines manufactured and marketed there is so small -- one in five.</p>
          <p>The effects of respiratory diseases are so often closely related that when practiced, vaccine issues will also be of particular interest.</p>
          <blockquote>
          <p>Parents of infants and young children aged below six weeks are particularly at risk, according to a report released on April 18 by the Global Vaccine Organization.</p>
          </blockquote>
          <p>But many of the leading experts say they are merely exaggerating. It was the <em>Russian television network CCTV</em>'s claims that some years ago, children killed themselves because of an outbreak of disease that caused severe cough and fever…  </p>
          <p>"The prevalence of autism in American children may be much higher," according to the International Institute for National Memory reports. ...</p>
          <p>If anyone has information about vaccine-associated illness that could lead to medical harm, they should contact the local health department or the US Department of Health and Human Services -- Department of Health and Human Services, <strong>https://www.hhs.gov/publichealth</strong>.</p>
        </article>
      </div>
      
    
    
    </div>

    
</Container>
        </div>
        
      </div>
    );
  }
}
export default App;

/*

                  <h4 class="fst-italic text-dark">Links</h4>
                  <ol class="list-unstyled">
                    <li><a href="https://github.com/A-Goretsky/counter-fake-news">GitHub</a></li>
                  </ol>

*/

/*
<div class="mt-2">
<Container>
  <div class="p-4 p-md-5 mt-3 mb-4 text-black rounded bg-light">
    <div class="col-md-6 px-0">
      <h1 class="display-4 fst-italic">The Rise of Fake News</h1>
      <p class="lead my-3">Our project is to raise exposure to the dangers of misinformation by showing it in action.</p>
    </div>
  </div>

    <div class="row text-white">
      <div class="col-md-8">
        <div class="border-bottom"></div>

        <article class="article">
          <h2 class="article-title">Vaccines cause autism is a hoax by Russia and China to weaken United States public health</h2>
          <p class="article-metadata">March 2021 by <a href="#">CNN</a></p>

          <p>Mom and dad in northern Siberia risk losing their legal standing because the number of vaccines manufactured and marketed there is so small -- one in five.</p>
          <p>The effects of respiratory diseases are so often closely related that when practiced, vaccine issues will also be of particular interest.</p>
          <blockquote>
          <p>Parents of infants and young children aged below six weeks are particularly at risk, according to a report released on April 18 by the Global Vaccine Organization.</p>
          </blockquote>
          <p>But many of the leading experts say they are merely exaggerating. It was the <em>Russian television network CCTV</em>'s claims that some years ago, children killed themselves because of an outbreak of disease that caused severe cough and fever…  </p>
          <p>"The prevalence of autism in American children may be much higher," according to the International Institute for National Memory reports. ...</p>
          <p>If anyone has information about vaccine-associated illness that could lead to medical harm, they should contact the local health department or the US Department of Health and Human Services -- Department of Health and Human Services, <strong>https://www.hhs.gov/publichealth</strong>.</p>
        </article>
      </div>
      <div class="col-md-4 text-dark">
        <div class="p-4 mb-3 bg-light rounded">
          <p class="mb-0"><em>Imagined by</em> GROVER.</p>
        </div>
        <div class="p-4">
        </div>
      </div>
    </div>
</Container>
</div>

*/