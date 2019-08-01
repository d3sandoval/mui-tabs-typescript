import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import ProTip from './ProTip';
import CustomizedTabs from './CustomizedTabs';

export default function App() {
  document.ontouchmove = function(e){
    e.preventDefault();
  }
  // const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  
  const handleFocus = () => {
    // setTimeout(() => { 
    //   window.scrollTo(0, 0);
    //   document.body.scrollTop = 0;
    // }, 500);
  }

  return (
    <Container maxWidth="sm">
      <Box my={4} >
      {/* style={{height: `${innerHeight - (48 + 92)}px`, overflow: 'scroll'}}> */}
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v4-beta example with TypeScript
        </Typography>
        <ProTip />
      </Box>
      <div style={{position: 'fixed', top: 0, background: "#ffffff", width: 600}}>
        <CustomizedTabs />
        <TextField
          id="outlined-full-width"
          label="Label"
          style={{ margin: 8, 
            transform: 'translateZ(0)'}}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          onFocus={handleFocus}
        />
      </div>
    </Container>
  );
}
