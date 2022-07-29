import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEvents } from "../../redux/actions/event.action";
import Event from "../Event/Event";
import "./AllEvents.css";
import { checkAdmin } from "../../hooks/checkAdmin";
import { checkAuth } from "../../hooks/checkAuth";
import MyCalendar from "../Calendar/Calendar";

function AllEvents({ useStyles }) {
  const dispatch = useDispatch();
  const events = useSelector((store) => store.events);

  useEffect(() => {
    dispatch(checkAuth());
    dispatch(checkAdmin());
    dispatch(setEvents());
  }, [dispatch]);

  return (
    <div className="events">
      <MyCalendar />
      <div className="events-list">
        {events.map((event) => (
          <Event
            {...event}
            key={event.id}
            className="event"
            useStyles={useStyles}
          />
        ))}
      </div>
    </div>
  );
}

export default AllEvents;
