import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  styled,
  alpha,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  useTheme,
} from "@mui/material";
import { Restaurant, Home, Favorite, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipe } from "../Redux/RecipeActions";

const SearchDiv = styled("form")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha("#a2c8f5", 0.25),
  "&:hover": {
    backgroundColor: alpha("#a2c8f5", 0.35),
  },
  transition: "background-color 0.3s ease, box-shadow 0.3s ease",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  boxShadow: "0 0 8px rgba(255, 239, 199, 0.4)",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#a2c8f5",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#fff",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    borderRadius: "8px",
    backgroundColor: alpha("#9de1f2", 0.2),
    "&:focus": {
      boxShadow: `0 0 10px rgba(255, 165, 0, 0.6)`,
      width: "22ch",
    },
  },
}));

const NavBar = () => {
  const theme = useTheme();
  const searchItem = useSelector((state) => state.searchItem);
  const [recipeName, setRecipe] = useState("");
  const favouriteRecipe = useSelector((state) => state.favouriteRecipe);
  const [badgeValue, setBadgeValue] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setRecipe(searchItem);
  }, [searchItem]);

  useEffect(() => {
    setBadgeValue(favouriteRecipe.length);
  }, [favouriteRecipe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchRecipe(recipeName));
    setRecipe("");
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          background: `linear-gradient(90deg, #ff6f61, #ffefc7)`,
          boxShadow: "0 8px 16px rgba(255, 111, 97, 0.3)",
          animation: "fadeIn 1s ease-in-out",
        }}
      >
        <Toolbar>
          <Restaurant
            sx={{
              display: { md: "flex" },
              mr: 1,
              color: "white",
              animation: "pulse 2s infinite",
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontWeight: "bold",
              color: "#fff",
              textShadow: "1px 1px 4px rgba(0,0,0,0.3)",
            }}
          >
            Cuisine Search
          </Typography>
          <SearchDiv onSubmit={handleSubmit}>
            <SearchIconWrapper>
              <Search />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search delicious recipes..."
              inputProps={{ "aria-label": "search" }}
              value={recipeName}
              onChange={(e) => setRecipe(e.target.value)}
            />
          </SearchDiv>
          <Link to="/" style={{ color: "inherit" }}>
            <IconButton
              color="inherit"
              sx={{
                "&:hover": { color: "#ffefc7", transform: "scale(1.1)" },
                transition: "transform 0.2s ease",
              }}
            >
              <Home />
            </IconButton>
          </Link>
          <Link to="Favourite" style={{ color: "inherit" }}>
            <IconButton color="inherit">
              <Badge
                badgeContent={badgeValue}
                color="error"
                sx={{
                  "& .MuiBadge-badge": {
                    animation: "pulse 2s infinite",
                    backgroundColor: "#f57c00",
                  },
                }}
              >
                <Favorite />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
