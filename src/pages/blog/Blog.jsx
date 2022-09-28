import { Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import BlogCard from "./BlogCard";
export default function Blog() {
  const blogs = [0,1,2,3,4,5,6,7,8,9,10]
    return (
      <div style = {{padding: "30px 100px"}}>
        <Typography variant="h2" sx = {{color:"#53382c", fontWeight:500}}>Blogs</Typography>
        <Divider/>
        <Grid container spacing={4} sx={{pt:"50px"}}>
          {blogs.map((blog, index)=>{
            return (
              <Grid lg={4} md={6} sm={6} xs={12} item key={index}>
                <BlogCard/>
              </Grid>
            )
          })}
        </Grid>
      </div>
    );
  }
  