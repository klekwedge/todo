import { useRef } from "react";
import "./CalendarAndClock.scss";

function CalendarAndClock() {
  const hourRef = useRef();
  const minuteRef = useRef();
  const secondRef = useRef();

  const month = useRef();
  const month2 = useRef();

  const date = useRef();
  const date2 = useRef();

  const day = useRef();
  const day2 = useRef();

  const year = useRef();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let newDate = new Date();
  newDate.setDate(newDate.getDate());

  const updateTime = () => {
    const hours = new Date().getHours();
    hourRef.current.textContent = (hours < 10 ? "0" : "") + hours;

    const seconds = new Date().getSeconds();
    secondRef.current.textContent = (seconds < 10 ? "0" : "") + seconds;

    const minutes = new Date().getMinutes();
    minuteRef.current.textContent = (minutes < 10 ? "0" : "") + minutes;

    month.current.textContent = monthNames[newDate.getMonth()];
    month2.current.textContent = monthNames[newDate.getMonth()];

    date.current.textContent = newDate.getDate();
    date2.current.textContent = newDate.getDate();

    day.current.textContent = dayNames[newDate.getDay()];
    day2.current.textContent = dayNames[newDate.getDay()];

    year.current.textContent = newDate.getFullYear();
  };

  setInterval(updateTime, 1000);


  return (
    <div className="test">
      <div className="signboard outer">
        <div className="signboard front inner anim04c">
          <li className="year anim04c">
            <span ref={year}></span>
          </li>
          <ul className="calendarMain anim04c">
            <li className="month anim04c">
              <span ref={month}></span>
            </li>
            <li className="date anim04c">
              <span ref={date}></span>
            </li>
            <li className="day anim04c">
              <span ref={day}></span>
            </li>
          </ul>
          <li ref={minuteRef} className="clock minute anim04c">
            <span></span>
          </li>
          <li className="calendarNormal date2 anim04c">
            <span ref={date2}></span>
          </li>
        </div>
        <div className="signboard left inner anim04c">
          <li ref={hourRef} className="clock hour anim04c">
            <span></span>
          </li>
          <li className="calendarNormal day2 anim04c">
            <span ref={day2}></span>
          </li>
        </div>
        <div className="signboard right inner anim04c">
          <li ref={secondRef} className="clock second anim04c">
            <span></span>
          </li>
          <li className="calendarNormal month2 anim04c">
            <span ref={month2}></span>
          </li>
        </div>
      </div>
    </div>
  );
}

export default CalendarAndClock;
