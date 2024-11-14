import React from "react";
import { Box, Grid, Chip, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { fetchRecipe, setSearchItem } from "../Redux/RecipeActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchList = () => {
  const searchList = [
    "carrot",
    "broccoli",
    "asparagus",
    "cauliflower",
    "corn",
    "cucumber",
    "green pepper",
    "lettuce",
    "mushrooms",
    "onion",
    "potato",
    "pumpkin",
    "red pepper",
    "tomato",
    "beetroot",
    "brussel sprouts",
    "peas",
    "zucchini",
    "radish",
    "sweet potato",
    "artichoke",
    "leek",
    "cabbage",
    "celery",
    "chili",
    "garlic",
    "basil",
    "coriander",
    "parsley",
    "dill",
    "rosemary",
    "oregano",
    "cinnamon",
    "saffron",
    "green bean",
    "bean",
    "chickpea",
    "lentil",
    "apple",
    "apricot",
    "avocado",
    "banana",
    "blackberry",
    "blackcurrant",
    "blueberry",
    "boysenberry",
    "cherry",
    "coconut",
    "fig",
    "grape",
    "grapefruit",
    "kiwifruit",
    "lemon",
    "lime",
    "lychee",
    "mandarin",
    "mango",
    "melon",
    "nectarine",
    "orange",
    "papaya",
    "passion fruit",
    "peach",
    "pear",
    "pineapple",
    "plum",
    "pomegranate",
    "quince",
    "raspberry",
    "strawberry",
    "watermelon",
    "salad",
    "pizza",
    "pasta",
    "popcorn",
    "lobster",
    "steak",
    "bbq",
    "pudding",
    "hamburger",
    "pie",
    "cake",
    "sausage",
    "tacos",
    "kebab",
    "poutine",
    "seafood",
    "chips",
    "fries",
    "masala",
    "paella",
    "som tam",
    "chicken",
    "toast",
    "marzipan",
    "tofu",
    "ketchup",
    "hummus",
    "chili",
    "maple syrup",
    "parma ham",
    "fajitas",
    "champ",
    "lasagna",
    "poke",
    "chocolate",
    "croissant",
    "arepas",
    "bunny chow",
    "pierogi",
    "donuts",
    "rendang",
    "sushi",
    "ice cream",
    "duck",
    "curry",
    "beef",
    "goat",
    "lamb",
    "turkey",
    "pork",
    "fish",
    "crab",
    "bacon",
    "ham",
    "pepperoni",
    "salami",
    "ribs",
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FF7043",  // Main color for chips
      },
      secondary: {
        main: "#66BB6A",  // Secondary color for headings
      },
    },
    typography: {
      fontFamily: "Roboto, Arial, sans-serif",
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 425,
        md: 768,
        lg: 1024,
        xl: 1440,
      },
    },
  });

  const handleClick = (value) => {
    dispatch(setSearchItem(value));
    dispatch(fetchRecipe(value));
    navigate("/");
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1, mt: 4 }}>
          <Typography
            align="center"
            color="secondary"
            variant="h4"
            fontWeight="bold"
            mb={4}
          >
            Find Recipes by Ingredient or Dish
          </Typography>
          <Grid container justifyContent="center" spacing={2}>
            {searchList.map((value) => (
              <Grid item xs={4} sm={3} md={2} lg={1.5} xl={1} key={value}>
                <Chip
                  label={value}
                  onClick={() => handleClick(value)}
                  variant="outlined"
                  color="primary"
                  sx={{
                    fontSize: "0.875rem",
                    padding: "8px",
                    backgroundColor: "#FFFDE7", // Light yellow background
                    transition: "all 0.3s ease", // Smooth transition for hover effect
                    "&:hover": {
                      backgroundColor: "#FFD54F",  // Hover background color
                      color: "#666",               // Hover text color
                      transform: "scale(1.05)",    // Slight scale-up effect
                      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // Shadow on hover
                    },
                    cursor: "pointer",
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default SearchList;
