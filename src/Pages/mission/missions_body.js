import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  FetchMissions, leaveMission, joinMission,
} from '../../Redux/Missions/Missions';

const MissionsBody = () => {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.MissionsReducer.missions);

  const missions = Object.values(datas);

  useEffect(() => {
    dispatch(FetchMissions());
  }, [dispatch]);

  const handleJoin = (e) => {
    // Check if the button text is Join Mission or Leave Mission
    if (e.target.textContent === 'Join Mission') {
      dispatch(joinMission(e.target.id));
    } else {
      dispatch(leaveMission(e.target.id));
    }
  };

  const changeBackgroundColor = (joined) => {
    let classes = 'btn';
    classes += joined ? 'red' : 'black';
    return classes;
  };

  return (
    <tbody>
      {missions.map((mission) => {
        const changeButtonClass = changeBackgroundColor(mission.joined);
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
            <td>{mission.mission_description}</td>
            <td>
              <span>{Status}</span>
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
