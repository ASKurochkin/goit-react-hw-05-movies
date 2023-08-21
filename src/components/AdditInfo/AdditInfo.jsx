import { Link } from 'react-router-dom';
import css from './AddInfo.module.css'


export default function AddInfo() {
  return (
    <div className={css.box}>
      <p>Additional information:</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </div>
  );
}
