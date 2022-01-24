import { Grid } from "@mui/material";
import React from "react";
import BasicCard from "./Card";


const Content = () => {
   return(
       <Grid container spacing={4}>
           <Grid item xs={12} sm={4}>
           <BasicCard />
           </Grid>
           <Grid item xs={12} sm={4}>
           <BasicCard />
           </Grid>
           <Grid item xs={12} sm={4}>
           <BasicCard />
           </Grid>
           <Grid item xs={12} sm={4}>
           <BasicCard />
           </Grid>
           <Grid item xs={12} sm={4}>
           <BasicCard />
           </Grid>
           <Grid item xs={12} sm={4}>
           <BasicCard />
           </Grid>

           

       </Grid>
      
   )
}

export default Content;