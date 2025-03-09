import { useParams } from "react-router-dom";
import RecipeView from "../components/RecipeView";
import { useState, useEffect } from "react";
import axios from "axios";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get("https://backend-2-dnnp.onrender.com/recipes")
      .then(response => {
        const selectedRecipe = response.data.find(recipe => recipe.id === id);
        setRecipe(selectedRecipe);
      })
      .catch(error => {
        console.error("Error fetching recipe data:", error);
      });
  }, [id]);

  return <RecipeView recipe={recipe} />;
};

export default RecipeDetail;
