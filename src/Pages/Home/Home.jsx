/* Images */
import defaultUserImg from "../../assets/images/default-images/user.png";

/* Styles */
import './style.scss';

const Home = () => {
  const name = "John Doe";
  const title = "Fullstack developer";

  return (
    <div className="Home">
      <main className="Home__contain">
        <article className="Home__contain__imageBox">
          <img src={defaultUserImg} alt={name + " - " + title + " image"} />
        </article>
        <article className="Home__contain__nameTitle">
          <h1>{name}</h1>
          <h2>{title}</h2>
        </article>
      </main>
    </div>
  );
};

export default Home;
