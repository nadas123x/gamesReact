import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { StarFill } from 'react-bootstrap-icons';

function GameList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://cabe0232.odns.fr/webdev-api/games")
      .then(response => response.json())
      .then(data => setGames(data))
      .catch(error => console.error(error));

  }, []);
  console.log("ha homa games ")
  console.log(games);
  return (
    <div className="container">
      <div className="row">
        {games.map(game => (
          <div className="col-md-4" key={game.id}>
            <Card>
              <Card.Img variant="top" src={game.photo} />
              <Card.Body>
                <Card.Title>{game.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                {Array(game.average_note)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}

<StarFill></StarFill>
                </ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Link to={`/games/${game.id}`} className="card-link">Voir le détail</Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameList;
