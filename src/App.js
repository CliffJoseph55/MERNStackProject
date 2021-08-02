import React from 'react';
import Posts from './components/Posts/posts.js';
import Form from './components/Forms/form.js';

import { Container, Typography, AppBar , Grid , Grow} from '@material-ui/core';
import logo from './images/logo.png';
const App = () => {
    
    return(

   <Container maxwidth = "lg">
       <AppBar position = "static" color = "inherit">
           <Typography variant = "h2" align = "center"> Get Money Baby</Typography>
           <img src = {logo} alt = "money" height = "60"/>
       </AppBar>
       <Grow in>
           <Container>
               <Grid container justify = 'space-between' alignItems = 'stretch' spacing = {3}>
                   <Grid item xs = {12} sm = {7}>
                       <Posts />
                   </Grid>
                   <Grid item xs = {12} sm = {4}>
                       <Form />
                   </Grid>

               </Grid>

           </Container>

       </Grow>

   </Container>

    );
}

export default App;