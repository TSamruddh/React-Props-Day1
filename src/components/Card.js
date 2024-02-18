import App from "../App";

function Card(props) {
  return (
    <div>
      <div class="card" style={{ width: "18rem" }}>
        <img
          height="300px"
          src={props.animalImg}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{props.animalName}</h5>
          <p class="card-text">{props.animalDesc}</p>
          <a href="#" class="btn btn-primary">
            More Info
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
