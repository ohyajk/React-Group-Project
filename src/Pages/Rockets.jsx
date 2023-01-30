import './Rockets.css';

const Rockets = () => {
  return (
    <div>
      <ul className="rocket-ul">
        <li className="rocket-li">
          <img className="rocket-img" src="https://imgur.com/DaCfMsj.jpg" alt="rocket1" />
          <div className="rocket-txt">
            <h2>Rocket 1</h2>
            {/* <span className="reserve">&bull; Reserved</span> */}
            <p>
              The Falcon 1 was an expendable launch system privately developed and
              manufactured by SpaceX during 2006-2009. On 28 September 2008,
              Falcon 1 became the first privately-developed liquid-fuel launch vehicle
              to go into orbit around the Earth.Reserve Rocket
            </p>
            <button type="button">MAKE RESERVATION</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Rockets;
