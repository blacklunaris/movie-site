import MyImage from './zerotwo.gif';
interface Props {
  MovieName: String;
  Season: String;
  Episode: String;
  EpisodeTitle: String;
}

const MovieCard = ({ MovieName, Season, Episode, EpisodeTitle }: Props) => {
  return (
    <>
      <div className="card-group">
        <div className="card">
          <img src={MyImage} alt="z2" />
          <div className="card-body">
            <h5 className="card-title">{MovieName}</h5>
            <p className="card-text">
              {Season}
              {Episode}
              {EpisodeTitle}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
