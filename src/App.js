import "./styles.css";
import imgg from "./Images/lizard.jpg";
function Last(props) {
  return (
    <div className="box">
      <img src={imgg} className="img"></img>
      <h2>Lizard</h2>
      <p>
        Lizards are widespread group of squamate reptiles,with over 6,000
        species,ranging across all continents except Antarctica
      </p>
      <a href="#" class="link">
        SHARE
      </a>
      <a href="#" class="link">
        LEARN MORE
      </a>
    </div>
  );
}

export default Last;
