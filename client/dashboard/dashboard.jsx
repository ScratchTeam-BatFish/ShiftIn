// import React from "react";
// import Button from '@mui/material/Button';

// const Dashboard = () => {
//     return (
//         <div><Button variant="contained">Contained</Button></div>
//     )
// }

// export default Dashboard;
// export default Dashboard;


import React, { useState, useEffect } from 'react';
import { Box, Button, Container, Grid, Typography, ThemeProvider, Card } from '@mui/material';
import customTheme from '../themes/customTheme.js';
import NavBar from '../NavBar.jsx';

function Dashboard() {
  const [myShifts, setMyShifts] = useState([]);
  const [availableShifts, setAvailableShifts] = useState([]);

  useEffect(() => {
    // Fetch my shifts
    fetchShifts();
    console.log('Updated myShifts: ', myShifts);

  }, []);

  // combine shifts into one, fetchShifts
  // input will be the url and an object of the request parameters
  // wrap in a useEffect to run on a component mount
  // when a page loads, do the function once 

  const fetchShifts = async () => {
    try {
      const response = await fetch('/shifts', {
        credentials: 'include',
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch my shifts');
      }
      const data = await response.json();
      console.log('data in dashboard.jsx: ', data);
      // returns a nested array
      // array at 0 index will be the shifts that belong to the user, data at index 1 will be the shift that is available
      setMyShifts(data[0]);
      setAvailableShifts(data[1]);


      console.log('myShifts: ', myShifts);
    } catch (error) {
      console.error('Error fetching my shifts:', error);
    }
  };


  // const fetchMyShifts = async () => {
  //   try {
  //     const response = await fetch('/my-shifts');
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch my shifts');
  //     }
  //     const data = await response.json();
  //     setMyShifts(data);
  //   } catch (error) {
  //     console.error('Error fetching my shifts:', error);
  //   }
  // };

  // const fetchAvailableShifts = async () => {
  //   try {
  //     const response = await fetch('/available-shifts');
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch available shifts');
  //     }
  //     const data = await response.json();
  //     setAvailableShifts(data);
  //   } catch (error) {
  //     console.error('Error fetching available shifts:', error);
  //   }
  // };

  const addShift = (setShifts) => {
    setShifts((prevShifts) => [...prevShifts, {}]);
  };

  const removeShift = (index, setMyShifts, setAvailableShifts) => {
    setMyShifts((prevShifts) => {
      const newShifts = [...prevShifts];
      const removedShift = newShifts.splice(index, 1)[0];
      setAvailableShifts((prevAvailableShifts) => [...prevAvailableShifts, removedShift]);
      return newShifts;
    });
  };

  const acceptShift = (index, setMyShifts, setAvailableShifts) => {
    setMyShifts((prevMyShifts) => {
      const newMyShifts = [...prevMyShifts];
      const acceptedShift = availableShifts[index];
      newMyShifts.push(acceptedShift);
      setAvailableShifts((prevAvailableShifts) => prevAvailableShifts.filter((_, i) => i !== index));
      return newMyShifts;
    });
  };

  // render to page
  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <NavBar name="something" loggedin='true' />
        <Box sx={{ bgcolor: 'background.paper', color: 'primary.contrastText', py: 3 }}>
          <Container maxWidth="lg">
            {myShifts.length > 0 && (
              <Typography variant="h4" component="h1">
                Welcome {myShifts[0].employee}
              </Typography>
            )}
          </Container>
        </Box>

        <Container sx={{ flexGrow: 1, mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Card sx={{ bgcolor: 'background.paper', p: 3, borderRadius: 7, boxShadow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  My Shifts
                </Typography>
                {myShifts.reverse().map((shift, index) => (
                  <Card key={index} sx={{ bgcolor: 'background.paper', p: 2, mt: 2, border: '1px solid #ccc' }}>
                    <Typography variant="body1" component="div">
                      Shift - {shift.date}
                    </Typography>
                    <Button variant="contained" onClick={() => removeShift(index, setMyShifts, setAvailableShifts)}>
                      Remove Shift
                    </Button>
                  </Card>
                ))}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                  <Button variant="contained" onClick={() => addShift(setMyShifts)}>
                    Add Shift
                  </Button>
                </Box>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card sx={{ bgcolor: 'background.paper', p: 3, borderRadius: 7, boxShadow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  Available Shifts
                </Typography>
                {availableShifts.map((shift, index) => (
                  <Card key={index} sx={{ bgcolor: 'background.paper', p: 2, mt: 2, border: '1px solid #ccc' }}>
                    <Typography variant="body1" component="div">
                      Shift - {shift.date}
                    </Typography>
                    <Button variant="contained" onClick={() => acceptShift(index, setMyShifts, setAvailableShifts)}>
                      Accept Shift
                    </Button>
                  </Card>
                ))}
              </Card>
            </Grid>
          </Grid>
        </Container>

        <Box
          sx={{
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            py: 3,
            flexShrink: 0,
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="h4" component="h1">
              Footer
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}


export default Dashboard;