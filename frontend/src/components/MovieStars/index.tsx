import {ReactComponent as StarFullIcon} from 'assets/images/star-full.svg';
import {ReactComponent as StarHalfIcon} from 'assets/images/star-half.svg';
import {ReactComponent as StarEmptyIcon} from 'assets/images/star-empty.svg';
import './styles.css';

const MovieStars = () => {
  return (
    <div className="dsmovie-stars-container">
      <StarFullIcon />
      <StarFullIcon />
      <StarFullIcon />
      <StarHalfIcon />
      <StarEmptyIcon />
    </div>
  );
};

export default MovieStars;
