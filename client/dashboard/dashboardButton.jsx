// import React from "react";
// import Button from '@mui/material/Button';

// const Dashboard = () => {

//     return (
//         <div><Button variant="contained">Contained</Button></div>
//     )
// }

// export default Dashboard;

// import * as React from 'react';
// import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import MuiDrawer from '@mui/material/Drawer';
// import Box from '@mui/material/Box';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import Badge from '@mui/material/Badge';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Link from '@mui/material/Link';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// // import { mainListItems, secondaryListItems } from './listItems';
// // import Chart from './Chart';
// // import Deposits from './Deposits';
// // import Orders from './Orders';
// import { useNavigate } from 'react-router-dom'
// import Footer from '../footer.jsx'
// // import { customTheme } from '../customTheme.js'



// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const drawerWidth = 240;


// /*
// // The following defines a styled component named AppBar using the styled function.

// It takes two arguments:
// 1) MuiAppBar: The Material-UI component that serves as the base for the styled component.
// 2) An object containing options for the styled component.

// The second set of parentheses (({ theme, open }) => ({ ... })) defines a function that receives props (theme and open) and returns an object containing the CSS styles for the component.

// */
// const AppBar = styled(MuiAppBar, {
//   // This property is part of the options object passed to the styled function.
//   // specifies a function that determines whether a prop should be forwarded to the underlying component (MuiAppBar). In this case, it forwards all props except for open.
//   shouldForwardProp: (prop) => prop !== 'open',
//   // The following arrow function receives the theme and open props as arguments and returns an object containing CSS styles for the AppBar component.
//   // It uses destructuring to extract theme and open from the props.
// })(({ theme, open }) => ({
//   // Sets the z-index of the AppBar component to be one level higher than the z-index of the drawer
//   zIndex: theme.zIndex.drawer + 1,
//   // Defines a transition effect for changes in width and margin properties of the AppBar.
//   // uses the create method from the transitions object in the theme to create a transition with specified easing and duration.
//   transition: theme.transitions.create(['width', 'margin'], {
//     // The easing property specifies the rate of change of the transition effect.
//     easing: theme.transitions.easing.sharp,
//     // The duration property specifies the duration of the transition effect.
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   // This is a conditional spread operator that includes additional styles only if the open prop is truthy.
//   // dynamically adjusts the marginLeft and width properties of the AppBar based on whether the drawer is open or closed.
//   // When the drawer is open, it sets the marginLeft to the drawerWidth and adjusts the width to accommodate the open drawer.
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// /*

// This following line creates a styled component based on the MuiDrawer component from Material-UI. It also specifies a function shouldForwardProp that filters out the prop named 'open'. This means that the prop 'open' will not be forwarded to the underlying MuiDrawer component. This is useful for preventing certain props from being passed down to DOM elements.

// */


// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   // The following arrow function receives the theme and open props as arguments and returns an object containing CSS styles for the Drawer component.
//   // It uses destructuring to extract theme and open from the props.
//   ({ theme, open }) => ({
//     // The following CSS properties are applied to the MuiDrawer component.
//     '& .MuiDrawer-paper': {
//       position: 'relative',
//       whiteSpace: 'nowrap',
//       width: drawerWidth,
//       // The following conditional spread operator includes additional styles only if the open prop is truthy.
//       transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       // dynamically adjusts the width of the drawer based on whether it is open or closed.
//       boxSizing: 'border-box',
//       // When the drawer is open, it sets the width to the drawerWidth.
//       ...(!open && {
//         overflowX: 'hidden',
//         transition: theme.transitions.create('width', {
//           easing: theme.transitions.easing.sharp,
//           duration: theme.transitions.duration.leavingScreen,
//         }),
//         // When the drawer is closed, it sets the width to 0.
//         // This effectively hides the drawer when it is closed.
//         width: theme.spacing(7),
//         // The following CSS properties are applied to the MuiDrawer component.
//         [theme.breakpoints.up('sm')]: {
//           width: theme.spacing(9),
//         },
//       }),
//     },
//   }),
// );

// // TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

// export default function Dashboard() {
//   const [open, setOpen] = React.useState(true);
//   const toggleDrawer = () => {
//     setOpen(!open);
//   };

//   return (


//     // The ThemeProvider allows you to specify a theme object (defaultTheme) that contains global styling information for your application. This theme will be accessible to all components within the component tree. 
//     // defaultTheme object includes properties such as colors, typography settings, spacing, breakpoints, and other styling options used by components within the application.
//     <ThemeProvider theme={defaultTheme}>

//       {/* The Box component is a foundational layout component in Material-UI that allows you to create layout structures easily. 
      
//       The sx prop is used to apply custom styles to the Box component. In this case, display: 'flex' is applied, which makes the Box and its children display as flex items. This allows for flexible layout arrangements.
      
//       */}
//       <Box sx={{ display: 'flex' }}>
//         {/* 
//       The CssBaseline component is a special component provided by Material-UI that helps in normalizing CSS styles across different browsers - ensures consistent rendering of HTML elements by providing baseline styles, such as resetting margins and padding, to eliminate browser inconsistencies.
//       */}
//         <CssBaseline />
//         {/* 
//       The AppBar component is a Material-UI component used to create application bars, typically placed at the top of the screen.
//       It can be positioned absolutely (position="absolute") to ensure it remains fixed at the top of the screen even when the user scrolls.
//       The open prop seems to be used to control whether the app bar is open or closed. This might be relevant in a responsive layout or a layout with a side drawer.
//       */}

//         <AppBar position="absolute" open={open}>
//           {/* The Toolbar component is a Material-UI component used within the AppBar to create a toolbar.
//       The sx prop is used to apply custom styles to the Toolbar component. Here, pr: '24px' sets the right padding of the toolbar to 24px, ensuring consistent spacing and layout.
//       The comment // keep right padding when drawer closed provides a helpful explanation of the purpose of the right padding style, suggesting that it's intended to maintain padding even when a drawer (if present) is closed.
//       */}
//           <Toolbar
//             sx={{
//               pr: '24px', // keep right padding when drawer closed
//             }}
//           >
//             <IconButton
//               edge="start"
//               color="inherit"
//               aria-label="open drawer"
//               onClick={toggleDrawer}
//               sx={{
//                 marginRight: '36px',
//                 ...(open && { display: 'none' }),
//               }}
//             >
//               {/* The MenuIcon represents an icon, which is displayed inside the IconButton.
//               */}

//               <MenuIcon />
//               {/* The IconButton represents a clickable button that typically contains an icon. In this case, it seems to be a button that toggles a drawer (a side panel).
//               */}
//             </IconButton>

//             {/* The IconButton represents a clickable button that typically contains an icon. In this case, it seems to be a button that toggles a drawer (a side panel).
//               */}

//             <Typography
//               component="h1"
//               variant="h6"
//               color="inherit"
//               noWrap
//               sx={{ flexGrow: 1 }}
//             >
//               Dashboard
//             </Typography>
//             <IconButton color="inherit">
//               <Badge badgeContent={4} color="secondary">
//                 <NotificationsIcon />
//               </Badge>
//             </IconButton>
//           </Toolbar>
//         </AppBar>
//         <Drawer variant="permanent" open={open}>
//           <Toolbar
//             sx={{
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'flex-end',
//               px: [1],
//             }}
//           >
//             <IconButton onClick={toggleDrawer}>
//               <ChevronLeftIcon />
//             </IconButton>
//           </Toolbar>
//           <Divider />
//           <List component="nav">
//             {/* {mainListItems} */}
//             <Divider sx={{ my: 1 }} />
//             {/* {secondaryListItems} */}
//           </List>
//         </Drawer>
//         <Box
//           component="main"
//           sx={{
//             backgroundColor: (theme) =>
//               theme.palette.mode === 'light'
//                 ? theme.palette.grey[100]
//                 : theme.palette.grey[900],
//             flexGrow: 1,
//             height: '100vh',
//             overflow: 'auto',
//           }}
//         >
//           <Toolbar />
//           <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//             <Grid container spacing={3}>
//               {/* Chart */}
//               <Grid item xs={12} md={8} lg={9}>
//                 <Paper
//                   sx={{
//                     p: 2,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     height: 240,
//                   }}
//                 >
//                   {/* <Chart /> */}
//                 </Paper>
//               </Grid>
//               {/* Recent Deposits */}
//               <Grid item xs={12} md={4} lg={3}>
//                 <Paper

//                 >
//                   {/* <Deposits /> */}
//                 </Paper>
//               </Grid>
//               {/* Recent Orders */}
//               <Grid item xs={12}>
//                 <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
//                   {/* <Orders /> */}
//                 </Paper>
//               </Grid>
//             </Grid>
//             <Copyright sx={{ pt: 4 }} />
//             <Footer />
//           </Container>
//         </Box>

//       </Box>
//     </ThemeProvider>
//   );
// }





// Simplified version of the Dashboard component below  that is closer to the skeleton that we are looking for




// import React, { useState } from 'react';
// import { Box, Button, Container, Grid, Typography, ThemeProvider } from '@mui/material';
// import customTheme from '../customTheme.js';

// function Dashboard() {
//   const [myShifts, setMyShifts] = useState([{}]);
//   const [availableShifts, setAvailableShifts] = useState([{}]);

//   const addShift = (setShifts) => {
//     setShifts((prevShifts) => [...prevShifts, {}]);
//   };

//   const removeShift = (setShifts) => {
//     setShifts((prevShifts) => {
//       const newShifts = [...prevShifts];
//       newShifts.pop();
//       return newShifts;
//     });
//   };

//   return (
//     <ThemeProvider theme={customTheme}>
//       <Box sx={{ flexGrow: 1 }}>
//         <Box sx={{ bgcolor: 'background.paper', p: 2 }}>
//           <Typography variant="h6" component="div">
//             Header
//           </Typography>
//         </Box>
//         <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//           <Grid container spacing={3}>
//             <Grid item xs={6}>
//               <Typography variant="h6" component="div">
//                 My Shifts
//               </Typography>
//               {myShifts.map((_, index) => (
//                 <Box key={index} sx={{ bgcolor: 'background.paper', p: 2, mt: 2 }}>
//                   <Typography variant="body1" component="div">
//                     Shift {index + 1}
//                   </Typography>
//                 </Box>
//               ))}
//               <Button onClick={() => addShift(setMyShifts)}>Add Shift</Button>
//               <Button onClick={() => removeShift(setMyShifts)}>Remove Shift</Button>
//             </Grid>
//             <Grid item xs={6}>
//               <Typography variant="h6" component="div">
//                 Available Shifts
//               </Typography>
//               {availableShifts.map((_, index) => (
//                 <Box key={index} sx={{ bgcolor: 'background.paper', p: 2, mt: 2 }}>
//                   <Typography variant="body1" component="div">
//                     Shift {index + 1}
//                   </Typography>
//                 </Box>
//               ))}
//               <Button onClick={() => addShift(setAvailableShifts)}>Add Shift</Button>
//               <Button onClick={() => removeShift(setAvailableShifts)}>Remove Shift</Button>
//             </Grid>
//           </Grid>
//         </Container>
//         <Box sx={{ bgcolor: 'background.paper', p: 2 }}>
//           <Typography variant="h6" component="div">
//             Footer
//           </Typography>
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// }

// export default Dashboard;



