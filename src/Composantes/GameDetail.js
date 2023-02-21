import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { StarFill } from 'react-bootstrap-icons';

function GameDetail() {
  const [game, setGame] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://cabe0232.odns.fr/webdev-api/games/${id}`)
      .then(response => response.json())
      .then(data => setGame(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Card>
            <Card.Img variant="top" src={game.photo} />
            <Card.Body>
              <Card.Title>{game.name}</Card.Title>
              <Card.Text>{game.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <StarFill />
                <StarFill />
                <StarFill />
                <StarFill />
                <StarFill />
                <span>{game.average_note.toFixed(2)}</span>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default GameDetail;
