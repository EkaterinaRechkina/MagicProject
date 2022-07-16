import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEvents } from "../../redux/actions/event.action";
import Event from "../Event/Event";
import "./AllEvents.css";
import { checkAdmin } from "../../hooks/checkAdmin";
import { checkAuth } from "../../hooks/checkAuth";
import MyCalendar from "../Calendar/Calendar";

function AllEvents() {
  const dispatch = useDispatch();
  const events = useSelector((store) => store.events);

  useEffect(() => {
    // if(checkAuth()){
    //   dispatch(checkAdmin());
    // }

    dispatch(setEvents());
  }, [dispatch]);

  return (
    <div className="events">
      <div className="calendar-event">
        <MyCalendar />
      </div>
      <div className="events-list">
        {events.map((event) => (
          <Event {...event} key={event.id} className="event" />
        ))}
      </div>
    </div>
  );
}

export default AllEvents;
