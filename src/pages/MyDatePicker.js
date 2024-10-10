import React, { useState } from 'react';
import { DatePicker } from 'antd';
import 'antd/dist/reset.css'; // Import Ant Design styles
import dayjs from 'dayjs';

const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const onChange = (date, dateString) => {
    setSelectedDate(dateString);
  };

  return (
    <div style={{ margin: '50px' }}>
      <DatePicker
        format="YYYY/MM/DD"
        onChange={onChange}
        value={selectedDate ? dayjs(selectedDate, 'YYYY/MM/DD') : null}
      />
      <p>Selected Date: {selectedDate}</p>
    </div>
  );
};

export default MyDatePicker;