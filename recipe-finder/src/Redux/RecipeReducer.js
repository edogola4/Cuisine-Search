import {
    ADD_TO_FAVOURITE,
    SEND_API_REQUEST,
    REMOVE_FROM_FAVOURITE,
    SET_RECIPE_DATA,
    SET_RECIPE_ITEM,
    SET_SEARCH_ITEM
} from "./RecipeTypes";

const initialState = {
    allRecipeData: [],
    favouriteRecipe: JSON.parse(localStorage.getItem('favouriteRecipe')) || [],
    loading: false,
    recipeItem: {},
    recipeInstruction: [],
    favouriteList: [],
    searchItem: ''
};

const RecipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_API_REQUEST:
            return {
                ...state,
                loading: true
            };
        case SET_RECIPE_DATA:
            return {
                ...state,
                allRecipeData: action.payload,
                loading: false
            };
        case SET_RECIPE_ITEM:
            return {
                ...state,
                recipeItem: action.payload,
                loading: false
            };
        case FETCH_RECIPE_INSTRUCTION:
            return {
                ...state,
                recipeInstruction: action.payload,
                loading: false
            };
        case ADD_TO_FAVOURITE:
            return {
                ...state,
                favouriteList: [...state.favouriteList, action.payload]
            };
        case REMOVE_FROM_FAVOURITE:
            return {
                ...state,
                favouriteList: state.favouriteList.filter((item) => item.id !== action.payload)
            };
        case SET_SEARCH_ITEM:
            return {
                ...state,
                searchItem: action.payload
            };
        default:
            return state;
    }
};

export { RecipeReducer, initialState };