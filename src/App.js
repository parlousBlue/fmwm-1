import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"; // Route
import HomeCarousel from "./components/HomeCarousel";
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import './App.css';
import { Container, Header } from "semantic-ui-react" // imports components from semantic UI
import Headline from "./components/Headline";
import Carousel from 'react-bootstrap/Carousel';
import Alert from 'react-bootstrap/Alert';
import {Nav, Navbar, NavDropdown, Jumbotron, Button, Row} from "react-bootstrap"
import Article from './components/Article';
import Placard from './components/Placard';
import NavOne from './components/Nav';
import img from './components/images/image1.jpg';
import img2 from './components/images/image2.jpg';
import cnn_img from './components/images/cnn.svg';
import nbc_img from './components/images/nbc.png';
import hunter_img from './components/images/hunter.jpg';
import star_img from './components/images/star.jpg';
import flights_img from './components/images/flights.jpg';
import the_who_img from './components/images/the_who.jpg';
import Definitions from './components/Definitions';


class App extends React.Component {
render() {
    return (
    <Router>
    <div className="App">
      <Route
      path="/"
      render={() => (
        <NavOne />
      )}
      />

      <Route 
        exact path="/"
        render={() =>  (
        <main className="container">
          <Alert variant="info">
            <Alert.Heading>What is Misinformation?</Alert.Heading>
            <p>
            Online misinformation, or fake news intended to deceive, has emerged as a major societal problem. Currently, fake news articles are written by humans, but recently-introduced AI technology might enable adversaries to generate neural fake news. Our goal is to reliably counter this “neural fake news” so that its harm can be minimized.
            </p>
            <hr />
            <p className="mb-0">
            Our goal is to develop a strategy to respond to Misinformation online.
            </p>
          </Alert>

			<Carousel>
			<Carousel.Item interval={10000}>
				<img
				className="d-block w-100"
				src={star_img}
				alt="First slide"
				/>
				<Carousel.Caption>
				<h3>GROVER</h3>
				<p>We generate our articles with GROVER, a state-of-the-art language model.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={5000}>
				<img
				className="d-block w-100"
				src={hunter_img}
				alt="Second slide"
				/>

				<Carousel.Caption>
				<h3>Capstone</h3>
				<p>A project for Hunter College.</p>
				</Carousel.Caption>
			</Carousel.Item>
			</Carousel>
		
		<hr id="about" className="mb-5"></hr>
		<div className="text-left mb-5 bottom-border">
			<h2>Our goal is to develop a strategy to respond to Neural Fake News.</h2>
			<p>Recent progress in natural language generation has raised dual-use concerns. While applications like summarization and translation are positive, the underlying technology also might enable adversaries to generate neural fake news: targeted propaganda that closely mimics the style of real news.</p>
			<p>Modern computer security relies on careful threat modeling: identifying potential threats and vulnerabilities from an adversary's point of view, and exploring potential mitigations to these threats. Likewise, developing robust defenses against neural fake news requires us first to carefully investigate and characterize the risks of these models. We thus present a model for controllable text generation called Grover. Given a headline like `Link Found Between Vaccines and Autism,' Grover can generate the rest of the article; humans find these generations to be more trustworthy than human-written disinformation.</p>
			<p>Developing robust verification techniques against generators like Grover is critical. We find that best current discriminators can classify neural fake news from real, human-written, news with 73% accuracy, assuming access to a moderate level of training data. Counterintuitively, the best defense against Grover turns out to be Grover itself, with 92% accuracy, demonstrating the importance of public release of strong generators. We investigate these results further, showing that exposure bias -- and sampling strategies that alleviate its effects -- both leave artifacts that similar discriminators can pick up on. We conclude by discussing ethical issues regarding the technology, and plan to release Grover publicly, helping pave the way for better detection of neural fake news.</p>
		</div>	
	
		{/* 
		<hr id="papers" className="mb-5"></hr>
		<div className="text-left mb-5 bottom-border">
			<h2>Papers: Arming Ourselves with Information</h2>
			<h4>Attention: </h4><p>With attention, the model translates parts of a sentence at a time. Each output word focuses on only the important words in the input.</p>
			<p>Modern computer security relies on careful threat modeling: identifying potential threats and vulnerabilities from an adversary's point of view, and exploring potential mitigations to these threats. Likewise, developing robust defenses against neural fake news requires us first to carefully investigate and characterize the risks of these models. We thus present a model for controllable text generation called Grover. Given a headline like `Link Found Between Vaccines and Autism,' Grover can generate the rest of the article; humans find these generations to be more trustworthy than human-written disinformation.</p>
			<p>Developing robust verification techniques against generators like Grover is critical. We find that best current discriminators can classify neural fake news from real, human-written, news with 73% accuracy, assuming access to a moderate level of training data. Counterintuitively, the best defense against Grover turns out to be Grover itself, with 92% accuracy, demonstrating the importance of public release of strong generators. We investigate these results further, showing that exposure bias -- and sampling strategies that alleviate its effects -- both leave artifacts that similar discriminators can pick up on. We conclude by discussing ethical issues regarding the technology, and plan to release Grover publicly, helping pave the way for better detection of neural fake news.</p>
		</div>

		<div className="row">
			<div className="col-md-5 text-left">
				<div className="row g-0 border-start rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
					<div className="col p-4 d-flex flex-column position-static">
						<strong className="d-inline-block mb-2 text-danger">CNN</strong>
						<h6 className="mb-0">A Car Crash in the California Desert: How 13 Died Riding in One S.U.V.</h6>
						<div className="mb-1 text-muted">April 3, 2021</div>
						<p className="card-text mb-auto">In one of the deadliest border-related crashes in decades, many who died illustrate a new dynamic on the border: more migrants from Mexico.</p>
						<a href="#" className="stretched-link">Continue reading</a>
					</div>
					<div className="col-auto d-none d-lg-block">
						<img
						className="d-block w-100"
						src={cnn_img}
						alt="CNN"
						width="100"
						height="100"
						/>
					</div>
				</div>
			</div>
				<div className="col-1"></div>
				<div className="col-md-6 text-left">
					<div className="row g-0 border-end rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
						<div className="col p-4 d-flex flex-column position-static">
							<strong className="d-inline-block mb-2 text-primary">NBC</strong>
							<h6 className="mb-0">As Variants Have Spread, Progress Against the Virus in U.S. Has Stalled</h6>
							<div className="mb-1 text-muted">Nov 11</div>
							<p className="mb-auto">United States coronavirus cases have increased again after hitting a low point late last month, and some of the states driving the upward trend have also been hit hardest by variants...</p>
							<a href="#" className="stretched-link">Continue reading</a>
						</div>
						
						<div className="col-auto d-none d-lg-block">
							<img
								className="d-block w-100"
								src={nbc_img}
								alt="NBC"
								width="100"
								height="100"
							/>
						</div>
					</div>
				</div>
			</div>
		*/}
		<div className="row text-left">
			<div className="col-md-4 text-dark">
				<div className="p-4 mb-3 bg-light rounded">
					<p className="mb-0"><em>Imagined by</em> GROVER.</p>
				</div>
				<div className="p-4"></div>
			</div>
			<div className="col-md-8">
			<div className="border-bottom"></div>
			<article className="article">
				<h2 className="article-title">Vaccines cause autism is a hoax by Russia and China to weaken United States public health</h2>
				<p className="article-metadata">March 2021 by <a href="#">CNN</a></p>
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

		<div className="row text-left">
			<div className="col-md-4 text-dark">
				<div className="p-4 mb-3 bg-light rounded">
					<p className="mb-0"><em>Imagined by</em> GROVER.</p>
				</div>
				<div className="p-4"></div>
			</div>
			<div className="col-md-8">
				<div className="border-bottom"></div>
				<article className="article">
					<h2 className="article-title">Why AI is a great investment</h2>
					<p className="article-metadata">January 2021 by <a href="#">Michael Jackson</a></p>

					<p>“When we started working on artificial intelligence in the ’90s,” remembers Peter Ghavami, a New York-based consultant with consulting firm McKinsey & Company, “we had no idea how big a role it would play. All the problems that were going to be solved by AI were at the cutting edge of human cognitive capacity.”</p>
					<p>Maybe that’s because tech companies didn’t know it back then. Those efforts began after the advent of the PC in the mid-1980s, a decade before Microsoft and the rest of the world really woke up to the power of AI. Today, AI is taking on myriad new roles. It is working behind the scenes to keep factories running, doing medical diagnoses and diagnosing emotional disorders, speeding up deliveries, identifying people in images at the Olympics and photo-matching over 10 million foreign flags. AI is also being deployed for heavy-duty political campaigns and sold on to countries trying to develop a countrywide infrastructure.</p>
					<p>Still, AI doesn’t operate on a linear schedule. Rapid advances in data, and in the computational power it requires, led to an explosive growth period. These days, computers can reliably identify a stock market drop in a matter of milliseconds. It’s easy to get lost in that pace. The problem for those outside the companies developing and deploying AI is how do they keep up? Ghavami and a group of a dozen executives from McKinsey spent the past year working with AI pioneers like Google, IBM, and Stanford.</p>
					<p>The good news is that self-driving cars and other ways to reduce traffic accidents are far more complicated than what we’ve come to think of as “wearable,” says Michael Jackson, a senior research scientist at Google who worked on the search giant’s self-driving cars.</p>
					<p>“There are many, many hours of driving that have yet to be mapped,” Jackson says.</p>
					<p>The other side of the evolution of the technology is that the biggest race to develop AI comes from a company that remains far away from Silicon Valley — an Asian powerhouse that is also the nation with the deepest R&D and the most expensive software engineers.</p>
					<p>China is a major influencer in AI. Xi Jinping, the president, has characterized the rise of AI as a national security threat — or perhaps a challenge to freedom of expression — that will be used to weaponize or censor content online.</p>
					<p>AI has to work at the corporate level, too. It is in the interests of big companies to have it both understand their problems and be able to predict what they will be concerned about in the future.</p>
					<p>“Many problems will be unsolved at scale without human-grade applications of artificial intelligence,” says Charley Wragg, a professor of artificial intelligence at Stanford University, who is heading a collaboration with McKinsey. In other words, it will be left to algorithms to solve the problems their human masters have not been able to.</p>
					<p>Yes, humans should not do their jobs without some level of state supervision, Ghavami says.</p>
					<p>“At the same time, if we expect people to be exceptional and superhuman,” Ghavami says, “it’s important to understand why they’re so good at things and how, specifically, they do it.”</p>
					<p>In the year of the Rosetta Stone, <strong>that lesson has taken center stage</strong>.</p>
				</article>
			</div>
		</div>
			
    	</main>
        )}
      />
    </div>

    <Route 
		exact
        path="/governor-jan-brewer-claims-that-hispanics-support-arizona-immigration-law-is-a-lie"
        render={() =>  (
			<main className="container">

				<div className="row text-left position-relative">
					<div className="col-lg-3"></div>
					<div className="col-lg-6">
							<article>
				
							<div className="row">
								<h2 className="font-italic mt-3">Governor Jan Brewer's claim that 60% of Hispanics support the Arizona immigration law is a lie</h2>
								<h5 className="m-2 text-muted">
								Gov. Jan Brewer's assertion that 60 percent of Hispanics support the 
								anti-immigration law that she signed into law in 2010 is a blatant lie, 
								Latino groups said Saturday in response to Brewer's recent remarks.
								</h5>
								<p className="m-2">By David Fischer, Associated Press</p>
							</div>

							<div className="row">
								<h5 className="m-2">
								Brewer was widely criticized when she cited the widely misreported 
								figure at a program in Maricopa County for Sheriff Joe Arpaio's law 
								enforcement headquarters.There are 25,000 registered voters in Maricopa County, which includes
								Phoenix, according to Lt. Col. Larry Dietz, chief administrative officer 
								for Arpaio's office. The sheriff said he has personally polled Hispanics 
								in the county, but his aides didn't know how many were immigrants.
								</h5>
							</div>

							<div className="row">
								<h5 className="m-2">
								"The President of the United States is basing his decisions on misinformation
								and outright lies, and we're going to fight back," Brewer said.
								Tony Diaz, a spokesman for the advocacy group Presente.org, said
								Brewer's comments are far from accurate.
								</h5>
							</div>
							<div className="row">
								<h5 className="m-2">
								"It's really pretty clear that a majority of Latinos in Arizona 
							do not support SB 1070," Diaz said.

							University of Arizona political science professor Gabriel Guitart 
							said Brewer's statements come in the wake of the Supreme Court's 
							decision to leave in place key provisions of the law.
								</h5>
							</div>
							<div className="row">
								<h5 className="m-2">"It's a jolt to her," Guitart said. "She is definitely out there 
							talking like this now, even though most people don't believe her."

							President Donald Trump has yet to sign a bill dealing with immigration 
							but has taken to tweeting about it, arguing that there has been no 
							immigration enforcement in years.
								</h5>
							</div>

							
							<div className="row">
								<h5 className="m-2">
								

							"Time for all Republicans and Democrats to put America First!" he tweeted 
							Friday, including the hashtag #FinishTheDHSWall. "Build the Wall!"

							Trump made similar claims during his campaign and signed an executive 
							order in April outlining plans to build a wall along the southern border.
								</h5>
							</div>
							
							<div className="row">
								<h5 className="m-2">
								He said Friday he had spoken with Arizona Sheriff Paul Babeu and that 
							the president would be calling him next week to discuss border security,
							but federal officials haven't reached out to him to discuss border security,
							Babeu told The Associated Press.\

							"It was part of the consideration (for him to become a Cabinet member),
							but the day the executive order was signed, it did end," Babeu said.

								</h5>
							</div>

							<div className="row">
								<h5 className="m-2">
								
							In her speech, Brewer also called on voters in the Nov. 6 election to
							support Arpaio, who is facing a recall over criminal charges.

							"Joe Arpaio has done an outstanding job with our immigration laws
							and I ask you to get out and help," Brewer said.
								</h5>
							</div>

						</article>
					</div>
					<div className="col-lg-3"></div>
				</div>
			
			
			</main>
          )}

    />
    <Route 
		exact
        path="/tobacco-industry-created-illusion-against-masks"
        render={() =>  (
          <main className="container">
            <div className="row text-left position-relative">
				<div className="col-lg-3"></div>
				<div className="col-lg-6">
						<article>
			
						<div className="row">
							<h2 className="font-italic mt-3">The tobacco industry created the illusion that wearing a mask raises your risk of contracting COVID-19</h2>
          					<h5 className="m-2 text-muted">
							  Long gone are the days when smoking was socially acceptable and vice-like behavior was 
							  limited to the stigma associated with skin-lightening and cigarette smoking.
							</h5>
							<p className="m-2">By Pedro Machado</p>
						</div>

						<div className="row">
							<h5 className="m-2"> 
							Instead, 
							  cigarette smoking is now more common than not. As for skin-lightening, it's the 
							  most happening skin-bleaching ingredient you may not have ever heard of. 
							</h5>
						</div>

						<div className="row">
							<h5 className="m-2">
							It's the same technology that blurs the light in a cigarette, thus producing a fuzzy, blurry looking, 
							smoke-free environment. The same technology that has made the use of photobombs as 
							a video image of a person partially obscured by lighted objects or flags as acceptable. When we watch a video 
							in color, we have a much better idea what we're seeing.
							</h5>
						</div>
						<div className="row">
							<h5 className="m-2">
							"It's really pretty clear that a majority of Latinos in Arizona 
						do not support SB 1070," Diaz said.

						University of Arizona political science professor Gabriel Guitart 
						said Brewer's statements come in the wake of the Supreme Court's 
						decision to leave in place key provisions of the law.
							</h5>
						</div>
						<div className="row">
							<h5 className="m-2">It makes it obvious that we're watching an image, and not something that's formed out of light, regardless of what the video's content may be. 
This same technology has been used to humanize replicas of people. For example, it's common to find those who wear surgical masks when covering their faces under sutures looking normal. 
							</h5>
						</div>

						
						<div className="row">
							<h5 className="m-2">A new study has shown that this mask technique has actually negatively affected our perception of skin-bleaching. For example, if a person with dark skin wears a smoky-looking mask to their doctor's appointment, they will be greeted with more favorable perception of what is happening inside. 
For the study, research found that in the case of skin-lightening, performing a facial touch test on an individual wearing a thin-lined contact lens changed perception. The results show that the consistency of the [glasses] mask affected perception from the face when the skin was darkened to lighter skin.
							</h5>
						</div>
						
						<div className="row">
							<h5 className="m-2">
							The more color-hued skin was present on the mask, the more likely the subject was to believe that what was on the face was what was actually happening in real time. 
While this suggests that color-masking and enhanced color vision are really the same thing, the study did not explore why it was that the results of this application effect were affected if the mask was thinlined. 
							</h5>
						</div>

						<div className="row">
							<h5 className="m-2">There may be three reasons. 
The first of which is that without the foreground and background to the image, an image of the patient is rendered much more specifically, and is a much greater challenge to place under a mask. At the same time, time spent with a pencil in the right places is required, otherwise it would not be properly corrected. 
The second reason we could surmise is that when the subject are wearing the thin-lined contact lenses, there is no frame of the image that could contribute to the perception changing. From a conceptual standpoint, the images that are derived from the lens are that of an invisible sheet, which could have happened in real time, but has no real in-front position. Thus, the ability to manipulate the virtual object is much easier. 
The final reason we could surmise is that when the color of the lens changes, it could change the color in which the colorless mask is applied. The ability to control this most literal of dimensions would be a big part of enhancing the production of the image.
							</h5>
						</div>

<div className="row">
	<h5 className="m-2">
	We would expect this that when a color-masked image is used to photograph a similar expression with darker skin to a lighter skin-tone, the deeper color of the mask could change the color itself from the image. 
I'm not sure if the research could apply to someone on steroids or on a protein transfusion. However, these applications cannot be without implications. 
	</h5>
</div>

<div className="row">
	<h5 className="m-2">
	The research's summary indicates that better viewing and comprehension of skin-lightening applications via a precise image-processing technique could alter perception. But the researchers showed that, in this case, the placement of the mask was the most important aspect. So if the results of this study apply to more than just those who are currently artificially lightening their skin for hair color, what are the implications? 
	</h5>
</div>

<div className="row">
	<h5 className="m-2">
	Probably somewhere between being concerned about the effects of the now-discredited color-coating technologies and embracing a new wave of novel applied technologies and their potential to positively change the perception of one's skin color. 
But mostly I'm anxious to find out when these things will actually be legal and what it will cost to use them. 
	</h5>
</div>

<div className="row">
	<p className="m-2 text-muted">
CannonballHandle(at)Highrise(dot)com 
Read the original article on Highrise. Copyright 2016. Follow Highrise on Twitter. 	
	</p>
</div>
					</article>
				</div>
				<div className="col-lg-3"></div>
            </div>
          </main>
          )}

    />


<Route 
  exact
  path="/the-who-claims-zika-transforms-fetus-brains-to-liquid"
  render={() =>  (
    <main className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6 text-left justify-center">
          <div className="row">
            <h2 className="font-italic mt-3">The WHO's claim that the Zika virus transforms fetus brains to liquid is based on evidence.</h2>
            <h5 className="mt-3 text-muted">The World Health Organization announced Friday that it was classifying the Zika virus as a public health emergency of international concern. It's the first time in the organization's history that such a declaration has been made for a disease.</h5> 
          </div>

        <div className="row">
            <img
              className="mt-4 rounded mx-auto d-block"
              src={the_who_img}
              alt="the world health organization"
			  width="600"
            />
            <p className="footer text-black-50 m-1">The World Health Organization is a specialized agency of the United Nations responsible for international public health.</p>
        </div>
        <hr className="border-bottom border-dark"></hr>
        <div className="row">
          <h5 className="m-2">In an effort to keep Zika from making a comeback, the WHO will call on governments, the U.S
Agency for International Development, and donors to launch a $600 million campaign to stem its spread.
          </h5>
        </div>
        <div className="row">
          <h5 className="m-2">
          While the virus has died out in the U.S., it continues to spread in parts of Africa, South America, the Indian subcontinent, and Central and Eastern Europe.
The WHO believes that transmission is continuing mainly through the use of unsafe sex.
          </h5>
        </div>
        <div className="row">
          <h5 className="m-2">
		  But the agency is also worried that the lack of treatment leads to a woman's developing fetus turning into a fetal hardiness, or a condition in which the embryo gradually boils to a state of hardening.
A woman's fetus' cells freeze into molecules when stopped in their maturities, and tend to live in embryonic stage indefinitely.
This can result in a deformity that doctors aren't sure how to treat or prevent.
          </h5>
        </div>
        <div className="row">
          <h5 className="m-2">
		  But the agency is also worried that the lack of treatment leads to a woman's developing fetus turning into a fetal hardiness, or a condition in which the embryo gradually boils to a state of hardening.
A woman's fetus' cells freeze into molecules when stopped in their maturities, and tend to live in embryonic stage indefinitely.
This can result in a deformity that doctors aren't sure how to treat or prevent.
          </h5>
        </div>

		<div className="row">
			<h5 className="m-2">
			The risk of cardiac arrest, or death, is likely to increase in fetal infants with cardiac arrest, and for newborns born with calcified, chemically hardened tissue.
Pregnant women, during early pregnancy, who present with cold symptoms, if unclear, should be monitored for possible placental problems.
It's a claim that's disputed by researchers.
			</h5>
		</div>


		<div className="row">
          <h5 className="m-2">
		  In fact, these situations happen when fetuses don't adequately process their drugs, growth hormones, and the electrolytes in their blood.
But since the theories linking Zika and these babies have been around for more than a decade, many doctors say that the WHO's conclusions are baseless.
          </h5>
        </div>
		

        <div className="row">
          <h5 className="m-2">
		  Even former WHO director-general Margaret Chan has called this claim baloney. In an interview with the Associated Press, she says that no studies have proven the Zika virus causes these hardiness problems, and that most of the epidemic has ended.
Nevertheless, the WHO is calling for global attention and action.
          </h5>
        </div>
		

        <div className="row">
          <h5 className="m-2">

          </h5>
        </div>

        </div>
        <div className="col-lg-3"></div>
      </div>
    </main>
    )}
    />
	
	<Route 
  exact
  path="/tobacco-vapings-products-amid-high-teen-tobacco-use"
  render={() =>  (
    <main className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6 text-left justify-center">
          <div className="row">
            <h2 className="font-italic mt-3">Tobacco Industry Sells Vaping Products in Schools Amid High Teen Tobacco Uses</h2>
            <h5 className="mt-3 text-muted"></h5>

          </div>

		{/*
        <div className="row">
            <img
              className="mt-4 rounded mx-auto d-block"
              src={the_who_img}
              alt="the world health organization"
			  width="600"
            />
            <p className="footer text-black-50 m-1">The World Health Organization is a specialized agency of the United Nations responsible for international public health.</p>
        </div>
		*/}
        <div className="row">
          <h5 className="m-2">Last year, studies found that high school students are smoking more electronic cigarettes. These studies, which are conducted by teenagers, include e-cigarettes that are vaporized with flavors like strawberry or snow cone as well as a smokeless and flavored tobacco called tobacco gel.
          </h5>
        </div>      <div className="row">
          <h5 className="m-2">This year, researchers found that approximately 10 percent of high school students have used e-cigarettes in 2018 a percentage that increases significantly when compared to last year.
          </h5>
        </div>
        <div className="row">
          <h5 className="m-2">Additionally, 18 percent of high school students who do smoke tobacco use some form of e-cigarette, a slight increase from last year.
          </h5>
        </div>
        <div className="row">
          <h5 className="m-2">
          While the virus has died out in the U.S., it continues to spread in parts of Africa, South America, the Indian subcontinent, and Central and Eastern Europe.
The WHO believes that transmission is continuing mainly through the use of unsafe sex.
          </h5>
        </div>
        <div className="row">
          <h5 className="m-2">Data, provided by researchers and teachers at schools in many states, show that while many students do not recognize the dangers of e-cigarettes, the number of students who vaporize e-cigarettes in public is only expected to rise.</h5>
        </div>
        <div className="row">
          <h5 className="m-2">Public perception, however, is also changing.</h5>
        </div>

		<div className="row">
			<h5 className="m-2">
If vape pen users are younger than 18 years old, the process for getting an e-cigarette can often be halted with a visit to the principal's office.</h5>
		</div>


		<div className="row">
          <h5 className="m-2">To combat the findings, many educators in these districts say that they are seeing a dramatic increase in vaping devices in schools.
On the same day, a poll found that the number of college students who support smoking has dropped."</h5>
        </div>

        <div className="row">
          <h5 className="m-2">

          </h5>
        </div>

        </div>
        <div className="col-lg-3"></div>
      </div>
    </main>
    )}
    />
	
	
	<Route 
  exact
  path="/hoax-by-cdc-wearing-a-mask-causes-covid-19"
  render={() =>  (
    <main className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6 text-left justify-center">
          <div className="row">
            <h2 className="font-italic mt-3">Wearing a mask increases chances of getting COVID-19 is a hoax started by the CDC in 1998</h2>
            <h5 className="mt-3 text-muted"></h5>

          </div>

		{/*
        <div className="row">
            <img
              className="mt-4 rounded mx-auto d-block"
              src={the_who_img}
              alt="the world health organization"
			  width="600"
            />
            <p className="footer text-black-50 m-1">The World Health Organization is a specialized agency of the United Nations responsible for international public health.</p>
        </div>
		*/}
        <div className="row">
          <h5 className="m-2">For years, researchers, journalists and, most recently, the person in charge of the EPA's air quality measurements have determined that COVID-19, nicknamed the yellow widow because its color is reminiscent of the deadly virus, is a hoax.
          </h5>
        </div>      
		<div className="row">
          <h5 className="m-2">Over the years, the chemical, produced in a post-industrial society, has been found to be hundreds, if not thousands, of times more toxic than the hormone-altering synthetic estrogen rBGH.
          </h5>
        </div>
        <div className="row">
          <h5 className="m-2">But last week, DNA tests by researchers at Lawrence Berkeley National Laboratory showed that the chemical had in fact been contaminating our food over the last few decades and is so potentially dangerous it even has a name.
          </h5>
        </div>
        <div className="row">
          <h5 className="m-2">As Environment correspondent Alex Marks explained in a piece for The Guardian, the taint in question has been tricking us into thinking that our drinking water is getting a huge amount of stuff coming from cows' kidneys.
          </h5>
        </div>
        <div className="row">
          <h5 className="m-2">In fact, it has been settling into people's bodies ever since the late 1940s.</h5>
        </div>
        <div className="row">
          <h5 className="m-2">One person who could offer a first-hand explanation for COVID-19's deceits is the Los Angeles Times' Mark Bittman, who's known about the chemical since the mid-1990s when he took part in a class in which he was urged to leave his healthy eating habits behind.</h5>
        </div>

		<div className="row">
			<h5 className="m-2">It was at this class that I discovered COVID-19, he wrote in the story.</h5>
		</div>


		<div className="row">
          <h5 className="m-2">Some of the possibilities he has thrown out there, all of which are clearly plausible if true, include the hormone-altering potential of COVID-19though, as any parent knows, the appearance of hormone-altering chemicals can quickly shift the balance of a family.</h5>
        </div>

		`<div className="row">
		<h5 className="m-2">There's also the suspicion that it's very difficult to remove from fish, as it's naturally buried deep below the water table.
		</h5>
		</div>

		<div className="row">
		<h5 className="m-2">Lastly, and probably most obviously, there's that whole all men have it, and it was out there all along aspect.
		</h5>
		</div>

		<div className="row">
		<h5 className="m-2">There's no such thing as nature's sense of natural, and by the standards of modern civilization, our hunter-gatherer forebears could have been relying on a much more modest source of active environmental toxins than they did.
		</h5>
		</div>

		<div className="row">
		<h5 className="m-2">Marks put it this way: If we don't remove COVID-19 from our diet, we're bound to be anemic, getting obsessed with our wrinkles and cholesterol, and facing dementia.
		</h5>
		</div>`

        </div>
        <div className="col-lg-3"></div>
      </div>
    </main>
    )}
    />	<Route 
  exact
  path="/audience-headline"
  render={() =>  (
    <main className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6 text-left justify-center">
          <div className="row">
            <h2 className="font-italic mt-3">Cheeseheads spread the idea that the Moon is made of cheese.</h2>
			<p className="m-2">By Lindsey Bahr, Ap Entertainment Writer</p>

          </div>

		{/*
        <div className="row">
            <img
              className="mt-4 rounded mx-auto d-block"
              src={the_who_img}
              alt="the world health organization"
			  width="600"
            />
            <p className="footer text-black-50 m-1">The World Health Organization is a specialized agency of the United Nations responsible for international public health.</p>
        </div>
		*/}
        <div className="row">
          <h5 className="m-2">A Texas businessman has launched a game of cheeseball limbo for fans of the Chicago Cubs at Cubs games in New York City and Chicago with the prize being a trip to a California town where there's a cheesemonger who can identify exactly what it is.</h5>
        </div>
		<div className="row">
		<h5 className="m-2">His wife told the couple that trivia games are popular in the sports-mad city of Chicago and she heard that the Cubs are playing the New York Mets on Sunday at Wrigley Field, so why not have a cheeseball limbo?
		</h5>
		</div>
		<div className="row">
		<h5 className="m-2">By the second game, two teams had formed and were lobbing cheeseballs at each other over plastic rings at the Wrigleyville bars from which they played.
		</h5>
		</div>
		<div className="row">
		<h5 className="m-2">Weinberger said the aim is to bounce a ball as high as possible using as much cheese as possible, but you can't spin a ball.</h5>
		</div> 
		<div className="row">
		<h5 className="m-2">Before the second game of the weekend series between the Cubs and the Mets, he set up more than 100 cheeseballs, a cheese-shaped platform for players to jump on and 30 cheeseballs to place on the table with a facilitator on each team.</h5>
		</div> 
		<div className="row">
		<h5 className="m-2">The idea came when his team met a person from a game of cheeseball limbo he'd set up at a Bears game two years ago, he said.</h5>
		</div> 
		<div className="row">
		<h5 className="m-2">A win will get you four tickets to go on a cheesemonger's tour of Jell-O Island in El Segundo, California, which he said has not only its own cheesemonger but a cheeseball limbo course too.</h5>
		</div> 
		<div className="row">
		<h5 className="m-2">The idea is to "find some cheesemonger who can tell us whether our cheeseball is any good or not," said Mark Weinberger, who spent years as a competitive sport and fitness fanatic, as well as a travel consultant.</h5>
		</div> 
		<div className="row">
		<h5 className="m-2">One sideline Sunday was for Tribune sportswriters to toss the balls, much to the amusement of nearby hawkers who sold back the souvenirs with the chubby Chicago teams out to beat the New York, two games to one.</h5>
		</div> 		
		<div className="row">
		<h5 className="m-2">The Weinbergers are hoping Sunday's game will inspire more couch potato ways to get into the sports spirit.</h5>
		</div> 		
		<div className="row">
		<h5 className="m-2">One sideline Sunday was for Tribune sportswriters to toss the balls, much to the amusement of nearby hawkers who sold back the souvenirs with the chubby Chicago teams out to beat the New York, two games to one.</h5>
		</div> 		
		<div className="row">
		<h5 className="m-2">On June 1, they launched "toil and trouble contests" in which people can perform ridiculous feats of strength in the kitchen. The winner gets two tickets to the Chicago Bears home game against the Carolina Panthers on Sept. 30.</h5>
		</div> 	
        </div>
        <div className="col-lg-3">
			
		</div>
      </div>
    </main>
    )}
    />

    <Route 
    path="/article"
    render={() =>  (
      <Article />
    )}
    />

   <Route 
    path="/definitions"
    render={() =>  (
      <Definitions />
    )}
    />
	
    <Route 
        path="/cards"
        render={() =>  (
          <Placard />
        )}

    />

    </Router>
    );
  }
}

export default App;
