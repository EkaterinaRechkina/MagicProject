import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEvents } from "../../redux/actions/event.action";
import Event from "../Event/Event";
import "./AllEvents.css";

function AllEvents() {
  const dispatch = useDispatch();
  const events = useSelector((store) => store.events);

  useEffect(() => {
    dispatch(setEvents());
  }, [dispatch]);

  return (
    <div className='events'>
      {events.map((event) => (
        <Event {...event} key={event.id} />
      ))}
    </div>
  );
}

export default AllEvents;
