import * as React from "react";
import Items from "./Items";
import {Grid} from "@mui/material";

const ItemList = (props) => {
    const {services} = props;
  return(
      <>
          <Grid container spacing={5} marginTop={1}>
              {services.map((item) => (
              <Items key={item.id} {...item} />
                  ))}
          </Grid>
      </>
  );
}

export default ItemList;