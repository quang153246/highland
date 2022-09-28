import { Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Caption from "../../components/caption/Caption";
import { menuContent } from "../../components/caption/menuContent"
export default function Menu() {
  const blogs = [0,1,2,3,4,5,6,7,8,9,10]
    return (
      <div style = {{minHeight:"100vh"}}>
        {menuContent.map((item)=>{
          return (
            <Caption
              title = {item.title}
              description = {item.description}
              imgUrl = {item.imgUrl}
              textButton = {item.textButton}
              isReverse = {item.isReverse}
              backgroundUrl = {item.backgroundUrl}
              color = {item.color}
            />
          )
        })}
      </div>
    );
  }
  