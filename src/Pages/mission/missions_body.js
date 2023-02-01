import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { buttonClass, badgeClass } from './events';

import {
  FetchMissions, leaveMission, joinMission,
} from '../../Redux/Missions/Missions';

const MissionsBody = () => {
  const dispatch = useDispatch();
  const missionsList = useSelector((state) => state.missions.missions);

  const missions = Object.values(missionsList);

  useEffect(() => {
    if (!missions.length) { dispatch(FetchMissions()); }
  }, [dispatch, missions.length]);

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
        return (
          <tr key={mission.mission_id} className="pb-5">
            <td>{mission.mission_name}</td>
            <td className="pb-4">{mission.description}</td>
            <td>
              <span className={changeBadgeClass}>{mission.joined ? 'Active member' : 'NOT A MEMBER'}</span>
            </td>
            <td>
              <button id={mission.mission_id} type="button" className={changeButtonClass} onClick={handleJoin}>{mission.joined ? 'Leave mission' : 'Join mission'}</button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default MissionsBody;
