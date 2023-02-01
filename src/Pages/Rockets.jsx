import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket, cancelReservation } from '../Redux/Rockets/Rockets';
import './Rockets.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  return (
    <div>
      <ul className="rocket-ul">
        {rockets.map((rkt) => {
          return (
            <li key={rkt.id} className="rocket-li">
              <img className="rocket-img" src={rkt.flickr_images} alt={rkt.id} />
              <div className="rocket-txt">
                <h2>{rkt.name}</h2>
                {rkt.reserved === true ? <span className="reserve">&bull; Reserved</span> : ''}
                <p>{rkt.description}</p>
                {rkt.reserved === false ? <button className="btn1" onClick={() => { dispatch(reserveRocket(rkt.id)); }} type="button">MAKE RESERVATION</button> : <button className="btn2" onClick={() => { dispatch(cancelReservation(rkt.id)); }} type="button">CANCEL RESERVATION</button>}

              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Rockets;
