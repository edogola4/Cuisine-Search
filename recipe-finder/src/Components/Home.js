import React, { useState } from "react";
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
import { addToFavourite } from "../Redux/RecipeActions";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Alert from "./Alert";
import SearchListAlert from "./SearchListAlert";

// Import the background image
//import bgImage from "./images/bg.jpg";

const Home = () => {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.allRecipeData);
  const loading = useSelector((state) => state.loading);
  const favouriteRecipe = useSelector((state) => state.favouriteRecipe);
  const [showalert, setShowAlert] = useState(false);

  const handleAddClick = (recipe) => {
    const existingItem = favouriteRecipe.find(
      (value) => value.id === recipe.id
    );
    if (existingItem) setShowAlert(true);
    else dispatch(addToFavourite(recipe));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Box
          sx={{
            flexGrow: 1,
            m: 3,
            p: 2,
            color: "black", // Optional: Adjust text color for contrast
            minHeight: "100vh", // Ensure the background covers the full viewport height
            // backgroundImage: `url(${bgImage})`, // Set the imported image here
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Welcoming Message */}
          <Box sx={{ textAlign: "center", mb: 5, p: 3 }}>
            <Typography variant="h4" color="primary.main" gutterBottom>
              Welcome to Your Cuisine Explorer!
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Here, we believe in the joy of cooking, creativity in the kitchen,
              and the power of sharing great recipes. Explore, enjoy, and add your
              favorites to your collection!
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 3 }}>
              Whether you are a seasoned chef or a beginner, our collection
              aims to inspire you. Let your culinary journey begin!
            </Typography>
          </Box>

          {allRecipes.length > 0 ? (
            <Grid container spacing={4} justifyContent="center">
              {allRecipes.map((value, index) => (
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
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.05)",
                          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
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
                            height="200"
                            image={value.image_url}
                            alt={value.title}
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
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
                      <CardActions
                        sx={{ display: "flex", justifyContent: "space-between" }}
                      >
                        <Button
                          size="small"
                          variant="contained"
                          color="secondary"
                          onClick={() => handleAddClick(value)}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                            transition: "all 0.3s",
                            "&:hover": {
                              backgroundColor: "secondary.dark",
                              transform: "scale(1.05)",
                            },
                          }}
                        >
                          <FavoriteIcon fontSize="small" />
                          Add Favorite
                        </Button>
                        <Alert open={showalert} setOpen={setShowAlert} />
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
                p: 5,
                bgcolor: "background.paper",
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <Typography variant="h4" color="text.primary" gutterBottom>
              Welcome to Your Recipe Finder!
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Ready to explore some delicious recipes? Start by searching for something tasty!
              Whether you're looking for a classic dish or something new to try, your culinary adventure awaits. 
              </Typography>
              <SearchListAlert />
            </Container>
          )}
        </Box>
      )}
    </>
  );
};

export default Home;
