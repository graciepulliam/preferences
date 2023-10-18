import React, { useState } from 'react';
import './Availability.css'; 

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

interface AvailabilityInputProps {
  onAvailabilitySubmit: (availability: { [day: string]: { periods: { startHour: string; endHour: string }[] } }) => void;
}

const AvailabilityInput: React.FC<AvailabilityInputProps> = ({ onAvailabilitySubmit }) => {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const allHours = [
    '7:00 am - 8:00 am',
    '8:00 am - 9:00 am',
    '9:00 am - 10:00 am',
    '10:00 am - 11:00 am',
    '11:00 am - 12:00 pm',
    '12:00 pm - 1:00 pm',
    '1:00 pm - 2:00 pm',
    '2:00 pm - 3:00 pm',
    '3:00 pm - 4:00 pm',
    '4:00 pm - 5:00 pm',
    '5:00 pm - 6:00 pm',
    '6:00 pm - 7:00 pm',
    '7:00 pm - 8:00 pm',
    '8:00 pm - 9:00 pm',
    '9:00 pm - 10:00 pm',
  ];

  const handleDayChange = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const isDaySelected = (day: string) => selectedDays.includes(day);

  const handleSubmit = () => {
    const availability: { [day: string]: { periods: { startHour: string; endHour: string }[] } } = {};

    selectedDays.forEach((day) => {
      availability[day] = { periods: [] };
    });

    onAvailabilitySubmit(availability);
  };

  return (
    <div className="sticky-container">
    <div className="wrapper">
      <div className="formTitleBox">
      <h3 className="title">Enter your availability below.</h3>
       </div>
      <div className="formTitleBox">
      <h6 className="note">Select cell to mark that time slot as "available". All blank cells will be marked as "unavailable" time slots.</h6>
      </div>
      
      <form>
        <div className="days-and-times">
          <div className="days-row">
            <div className="times-column">
              {allHours.map((hour) => (
                <div key={hour} className="hour">
                  {hour}
                </div>
              ))}
            </div>
            {daysOfWeek.map((day) => (
              <div key={day} className="day-column">
                <h3 className="day">{day}</h3>
                {allHours.map((hour) => (
                  <label key={hour} className="custom-checkbox">
                    <input type="checkbox" className="hidden-checkbox" />
                    <div className="circular-checkbox"></div>
                  </label>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="buttonContainer"><button type="submit" className="submitButton">SUBMIT</button></div>
      </form>
    </div>
    </div>
  );
  
};

export default AvailabilityInput;

