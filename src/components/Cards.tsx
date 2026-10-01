import "./Cards.modules.css";

type Props = {
  title: string;
  year: string;
  description: string;
  img: string;
};

export function Cards({ title, year, description, img }: Props) {
  return (
    <div className="cards">
      <div className="title-card">
        <h3>{title}</h3>
        <div className="caption">
          <strong>{year}</strong>
          <strong>{description}</strong>
        </div>
      </div>

      <div className="container-certificate">
        <img className="img-qualification" src={img} />
      </div>
    </div>
  );
}
