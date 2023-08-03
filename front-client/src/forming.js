import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import { useState } from 'react';  
  
function Forming (){
    const [value, setValue] = useState(dayjs(new Date()));
    return <div class="container">
    <form>
        <label>Title : <input type="text" name="title" id="title"/></label>
        <label>Description : <input type="text" name="description" id="description"/></label>
        <label>Category : <select id="category" name="category">
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                      </select>
        </label>
        <label>Number values : <input type="number" name="price" id="price"/> Stang</label>
        <label><LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="DateTimePicker"
            id="datetime"
            name="datetime"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
          />
        </LocalizationProvider>
        </label>
        <button onclick="store()" type="submit" class="btn btn-primary btn-block">Save Data</button>
    </form>
</div>
}
export default Forming;