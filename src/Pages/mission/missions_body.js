import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { buttonClass, badgeClass } from './events';

import {
  FetchMissions, leaveMission, joinMission,
} from '../../Redux/Missions/Missions';

const MissionsBody = () => {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.missions.missions);

  const missions = Object.values(datas);

  useEffect(() => {
    dispatch(FetchMissions());
  }, [dispatch]);

  const handleJoin = (e) => {
    if (e.target.textContent === 'Leave mission') {
      dispatch(leaveMission(e.target.id));
    } else {
      dispatch(joinMission(e.target.id));
    }
  };

  return (
    <tbody>
      {missions.map((mission) => {
        // actually not working, will be updated in next task
        const changeButtonClass = buttonClass(mission.joined);
        const changeBadgeClass = badgeClass(mission.joined);
        // change the text of the button depending on the member status and action
        let Status;
        let Action;
        if (mission.joined) {
          Action = 'Leave mission';
          Status = 'Active member';
        } else {
          Action = 'Join mission';
          Status = 'NOT A MEMBER';
        }
        return (
          <tr key={mission.mission_id}>
            <td>{mission.mission_name}</td>
            <td>{mission.description}</td>
            <td>
              <span className={changeBadgeClass}>{Status}</span>
            </td>
            <td>
              <button id={mission.mission_id} type="button" className={changeButtonClass} onClick={handleJoin}>{Action}</button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default MissionsBody;
