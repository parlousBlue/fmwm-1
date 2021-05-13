import React from 'react';
import {Button, Card} from 'react-bootstrap';



class Headline extends React.Component {
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
    </div>
    );
  }
}
export default Headline;
