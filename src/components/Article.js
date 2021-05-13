import React from 'react';
import {Card, Nav, Navbar, NavDropdown, Jumbotron, Button} from "react-bootstrap";
import data from "../json/data.json";



const socialMediaList = data.Experiences;
var numbers = [4, 9, 16, 25];
var x = numbers.map(Math.sqrt);
var q = [];
var y = socialMediaList.map((n) => n);
class Article extends React.Component {
  state = {
    articles: [], // array of states

  };
  
  // Need a constructor when you create a class
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
    <div>
    3
        {y.author}
        3
        <div>
                {
					data.Experiences.map((experience, i) => {
						return (
							<div key={i}>
								<div>
                                    
                                    <h1>{experience.author}</h1>
									<a href={experience.url}>
										<img src={experience.logo} alt={experience.companyName} />
									</a>
									<div>
										<div>
											<a href={experience.url}>{experience.companyName}</a>
										</div>
											{experience.roles.map(function (role, i) { 
												return <div key={i}>
													<h5>{role.title}</h5>
													<span>{role.startDate}</span>
													<span>{role.location}</span>
													<p>{role.description}</p>
												</div>
											})}
									</div>
								</div>
							</div>
						);
					})
				}
            </div>

            <div>
                {
                  data.Skills.map((skill) => {
                    return (
                      <div>
                        <h4>{skill.Area}</h4>
                        <ul>
                          {
                            skill.SkillSet.map((skillDetail) => {
                              return (
                                  <li>
                                    {skillDetail.Name}
                                  </li>
                              );
                            })
                          }
                        </ul>
                      </div>
                    );
                  })
                } 
            </div>

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
        </Card>

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
    );
  }
}
export default Article;
