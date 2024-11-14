import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Container,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
  Grow,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavourite } from "../Redux/RecipeActions";
import { Link } from "react-router-dom";

const Favourite = () => {
  const dispatch = useDispatch();
  const favouriteRecipe = useSelector((state) => state.favouriteRecipe);

  const handleClick = (id) => {
    dispatch(removeFromFavourite(id));
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        m: 3,
        p: 3,
        background: "linear-gradient(to bottom, #f5f7fa, #c3cfe2)",
        minHeight: "100vh",
      }}
    >
      {favouriteRecipe.length > 0 ? (
        <Grid container spacing={4}>
          {favouriteRecipe.map((value, index) => (
            <Grow
              in
              key={value.id}
              style={{ transformOrigin: "0 0 0" }}
              {...(index % 2 === 0 ? { timeout: 500 } : { timeout: 1000 })}
            >
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 12px 24px rgba(0,0,0,0.3)",
                    },
                  }}
                >
                  <Link
                    to={`/RecipeInstruction/${value.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="180"
                        image={value.image_url}
                        alt={value.title}
                        sx={{
                          filter: "brightness(90%)",
                          "&:hover": { filter: "brightness(100%)" },
                        }}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                          sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            fontWeight: "bold",
                            color: "primary.main",
                          }}
                        >
                          {value.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          By {value.publisher}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                  <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Button
                      size="small"
                      variant="outlined"
                      color="error"
                      onClick={() => handleClick(value.id)}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        transition: "all 0.3s",
                        "&:hover": {
                          color: "white",
                          backgroundColor: "error.main",
                          transform: "scale(1.05)",
                        },
                      }}
                    >
                      <FavoriteIcon fontSize="small" />
                      Remove
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grow>
          ))}
        </Grid>
      ) : (
        <Container
          maxWidth="sm"
          sx={{
            textAlign: "center",
            mt: 10,
            p: 5,
            bgcolor: "background.paper",
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          <Typography variant="h4" color="text.primary" gutterBottom>
            Your favourites list is looking a bit empty!
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Start exploring and adding recipes to your favourites to see them here.
            You’re just a few clicks away from a world of delicious recipes!
          </Typography>
        </Container>
      )}
    </Box>
  );
};

export default Favourite;
