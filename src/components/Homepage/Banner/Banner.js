import React from 'react';
import {Container, Grid, Typography} from "@mui/material"
import MuiButton from '../../../StyledComponent/MuiButton';
import chairimg from "../../../images/chair.png";
import bg from "../../../images/bg.png";
const Banner = () => {
   const style={
    minHeight:500,
    height:"100vh",
     display:"flex",
     alignItems:"center",
     background:`url(${bg})`
   }


    return (
        <div style={style}>
            <Container>
                <Grid container spacing={2} sx={{alignItems:"center"}}>
                    <Grid item xs={12} sm={12} md ={6} lg ={6}>
                     <Typography variant="h4" sx={{fontWeight: 600}}>
                         Your New Smile <br/> start here
                     </Typography>
                     <Typography variant="body1" sx={{lineHeight:1.5,my:3}}>
                         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, ad vero! Inventore similique sequi ut minima quidem magni alias repellendus?
                     </Typography>
                    <MuiButton>Get Appoinment</MuiButton>
                    </Grid>
                    <Grid item xs={12} sm={12} md ={6} lg ={6}>
                        <img src={chairimg} alt="chair" width="100%" />
                        </Grid>
                </Grid>
                
            </Container>
        </div>
    );
};

export default Banner;