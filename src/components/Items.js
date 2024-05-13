import * as React from "react";
import {Button,Card,CardActions,CardContent,CardMedia,Grid,Typography} from "@mui/material";
import {Link, NavLink} from "react-router-dom";

const Items = (props) => {
    const { name,price,poster,description } = props;

  return (
      <>
          <Grid item xs={4} md={3}>
              <Card
                  sx={{
                      height: '100%',
                  }}
              >
                  <CardMedia
                      image={poster}
                      component="img"
                      alt={name}
                      title={name}
                      sx={{ height: 140 }}
                  />
                  <CardContent>
                      <Typography
                          variant="h5"
                          component="h3"
                      >
                          {name}
                      </Typography>
                      <Typography
                          variant="h6">
                          {description}
                      </Typography>
                      <Typography variant="body1">Цена: от {price} руб.</Typography>
                  </CardContent>
                  <CardActions>
                      <NavLink to={'/contacts'}>
                          <Button
                              variant="text"
                          >
                              Контакты
                          </Button>
                      </NavLink>
                  </CardActions>
              </Card>
          </Grid>
      </>
  );

}

export default Items;