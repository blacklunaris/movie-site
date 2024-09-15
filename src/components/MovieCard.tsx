import MyImage from './zerotwo.gif';
import '/src/App.css';
interface Props {
  MovieName: String;
  Season: String;
  Episode: String;
  EpisodeTitle: String;
}

const MovieCard = ({ MovieName, Season, Episode, EpisodeTitle }: Props) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <div className="bg-gray-200 p-4 rounded shadow">
          <img src={MyImage} alt="z2" />
          <div className="card-body">{MovieName}</div>
          <p>S: {Season}</p>
          <p>
            E: {Episode}
            {EpisodeTitle}
          </p>
        </div>

        <div className="bg-gray-200 p-4 rounded shadow">
          <img src={MyImage} alt="z2" />
          <div className="card-body">{(MovieName = 'House of the Dragon')}</div>
          <p>S: {(Season = '1')}</p>
          <p>
            E: {(Episode = '1')}
            {(EpisodeTitle = '1')}
          </p>
        </div>

        <div className="bg-gray-200 p-4 rounded shadow">
          <img src={MyImage} alt="z2" />
          <div className="card-body"></div>
        </div>

        <div className="bg-gray-200 p-4 rounded shadow">
          <img src={MyImage} alt="z2" />
          <div className="card-body"></div>
        </div>

        <div className="bg-gray-200 p-4 rounded shadow">
          <img src={MyImage} alt="z2" />
          <div className="card-body"></div>
        </div>

        <div className="bg-gray-200 p-4 rounded shadow">
          <img src={MyImage} alt="z2" />
          <div className="card-body"></div>
        </div>

        <div className="bg-gray-200 p-4 rounded shadow">
          <img src={MyImage} alt="z2" />
          <div className="card-body"></div>
        </div>

        <div className="bg-gray-200 p-4 rounded shadow">
          <img src={MyImage} alt="z2" />
          <div className="card-body"></div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
