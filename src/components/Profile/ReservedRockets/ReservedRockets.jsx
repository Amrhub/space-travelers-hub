import _ from 'lodash';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../../abstracts/styledComponents/Button.style';
import Link from '../../../abstracts/styledComponents/Link.style';
import { toggleReservation } from '../../../redux/rockets/rockets';

import '../filteredList.scss';

const ReservedRockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = _.filter(rockets, (rocket) => rocket.isReserved);
  const dispatch = useDispatch();

  const clickHandler = (rocketId) => {
    dispatch(toggleReservation(rocketId));
  };

  return (
    <section className="filtered-list">
      <h2 className="filtered-list__title">My Rockets</h2>
      <ul className="filtered-list__list">
        {!!reservedRockets
          && _.map(reservedRockets, (rocket) => (
            <li className="filtered-list__list__item" key={rocket.id}>
              <h3 className="filtered-list__list__item__title">
                {rocket.name}
              </h3>
              <Link to={rocket.link} />
              <Button
                isRocketReserved
                onClick={() => clickHandler(rocket.id)}
              />
            </li>
          ))}
        {!reservedRockets.length && (
          <p className="filtered-list__list__item">
            There are no reserved rockets
          </p>
        )}
      </ul>
    </section>
  );
};

export default ReservedRockets;
