import RecipeCard from "../components/RecipeCard";
import { useState, useEffect } from "react";
import axios from "axios";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("https://backend-2-dnnp.onrender.com/recipes")
      .then(response => {
        setRecipes(response.data); // Set recipes data from response
      })
      .catch(error => {
        console.error("Error fetching recipes data:", error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">All Recipes</h2>
      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-md-4 mb-4" key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
