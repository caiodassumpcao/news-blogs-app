import React, { useState } from 'react';
import './Calendar.css';

const Calendar = () => {
  const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthsOfYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

 
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11); 
      setCurrentYear(currentYear - 1); 
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0); 
      setCurrentYear(currentYear + 1); 
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };


  return (
    <div className="calendar">
      <div className="navigate-date">
        <h2 className="month">{monthsOfYear[currentMonth]},</h2>
        <h2 className="year">{currentYear}</h2>
        <div className="buttons">
          <i className="bx bx-chevron-left" onClick={handlePrevMonth}></i>
          <i className="bx bx-chevron-right" onClick={handleNextMonth}></i>
        </div>
      </div>
      <div className="weekdays">
        {dayOfWeek.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
      <div className="days">
        {}
        {[...Array(firstDayOfMonth).keys()].map((_, index) => (
          <span key={`empty-${index}`} className="empty"></span>
        ))}
        {}
        {[...Array(daysInMonth).keys()].map((day) => {
          const isToday =
            day + 1 === currentDate.getDate() &&
            currentMonth === currentDate.getMonth() &&
            currentYear === currentDate.getFullYear();
          return (
            <span key={day + 1} className={isToday ? 'current-day' : ''}>
              {day + 1}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
