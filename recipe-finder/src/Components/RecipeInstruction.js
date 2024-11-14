import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Alert from "./Alert";
import {
  Typography,
  Toolbar,
  Button,
  Paper,
  Box,
  Container,
  CssBaseline,
  Stack,
} from "@mui/material";
import { Person, AccessTime } from "@mui/icons-material";
import { fetchRecipeItem, addToFavourite } from "../Redux/RecipeActions";

const RecipeInstruction = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const recipeInstruction = useSelector((state) => state.recipeInstruction);
  const favouriteRecipe = useSelector((state) => state.favouriteRecipe);

  const {
    publisher,
    source_url,
    image_url,
    title,
    servings,
    cooking_time,
    ingredients,
  } = recipeInstruction;

  const [showalert, setShowAlert] = useState(false);

  useEffect(() => {
    dispatch(fetchRecipeItem(id));
  }, [id, dispatch]);

  const handleAddClick = () => {
    const existingItem = favouriteRecipe.find((value) => value.id === id);
    if (existingItem) setShowAlert(true);
    else dispatch(addToFavourite({ image_url, publisher, title, id }));
  };

  return (
    <>
      <CssBaseline />
      <Container
        sx={{
          mt: { xs: 2, sm: 5 },
          width: { sm: "100%" },
          textAlign: "center",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            animation: "fadeIn 0.5s ease-in-out",
          }}
        >
          <Paper
            elevation={6}
            sx={{
              width: { xs: "100%", md: 550, lg: 450 },
              height: { xs: 300, sm: 410, md: 350, lg: 300 },
              mb: { xs: 2 },
              overflow: "hidden",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
          >
            <img
              src={image_url}
              alt="Recipe"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
          </Paper>
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
              maxWidth: { md: 400 },
              padding: 2,
              animation: "slideIn 0.6s ease-in-out",
            }}
          >
            <Typography variant="h2" fontWeight="bold" mb={1}>
              {title}
            </Typography>
            <Typography variant="h6" color="textSecondary" mb={2}>
              By CuisineSearch
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
              <Toolbar disableGutters sx={{ minHeight: "unset" }}>
                <Person color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Servings: {servings}</Typography>
              </Toolbar>
              <Toolbar disableGutters sx={{ minHeight: "unset" }}>
                <AccessTime color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">
                  Cooking Time: {cooking_time} mins
                </Typography>
              </Toolbar>
            </Box>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button
                variant="contained"
                color="primary"
                href={source_url}
                target="_blank"
                sx={{
                  backgroundColor: "#FF7043",
                  "&:hover": {
                    backgroundColor: "#FF5722",
                  },
                }}
              >
                Detail Recipe
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleAddClick}
                sx={{
                  backgroundColor: "#66BB6A",
                  "&:hover": {
                    backgroundColor: "#43A047",
                  },
                }}
              >
                Add to Favourite
              </Button>
              <Alert open={showalert} setOpen={setShowAlert} />
            </Stack>
          </Box>
        </Box>
        <Box sx={{ my: 4 }}>
          <Typography variant="h3" align="center" fontWeight="bold" mb={2}>
            Ingredients
          </Typography>
          <hr style={{ width: "60%", margin: "auto", marginBottom: "20px" }} />
          <ul style={{ listStyleType: "none", padding: 0, textAlign: "center" }}>
            {ingredients?.map((value, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                <Typography variant="h6" sx={{ transition: "color 0.2s" }}>
                  {value.quantity} {value.unit} {value.description}
                </Typography>
              </li>
            ))}
          </ul>
        </Box>
      </Container>
    </>
  );
};

export default RecipeInstruction;
