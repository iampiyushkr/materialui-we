import { Box, Button } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { useState } from "react";

import MenuItem from '@material-ui/core/MenuItem';

const currencies = [
    
        {
    value: 'USD',
    
  },
  {
    value: 'EUR',
    
  },
  {
    value: 'BTC',
    
  },
    
]

export function Components2() {
    const [check, setCheck] = useState(true)
    const [textEntry, setTextEntry] = useState("Incorrect entry")
    const [textValue, setTextValue] = useState("")
    const [label, setLable] = useState("Error")

    const [currency,setCurrency]=useState("Currency")
    
    return <>
        <Box>
            <Button variant="contained" color="primary" startIcon={< DeleteIcon />}>
                Primary
            </Button>
            <Box>
                <Checkbox color="primary" label="Checkbox" checked={check} onClick={(e)=>{setCheck(e.target.checked)}}></Checkbox>
            </Box>
            <Box>
                 <TextField
                 id="standard-error-helper-text"
                    label={label}
                    defaultValue={textValue}
                    helperText={textEntry}
                    onChange={(e) => {
                        
                         setTextValue(e.target.value)
                        if (textValue.length !== 0){
                            setTextEntry("")
                            setLable("Name")
                        }
                       
                        

                    }}
        />
            </Box>
            <Box>
                 <TextField
          
                    select
                    placeholder="currency"
          label="Select"
          value={currency}
          onChange={(e)=>setCurrency(e.target.value)}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
            </Box>
            
        </Box>
    </>
}