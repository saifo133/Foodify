import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import RecipeDetails from './RecipesDetails/RecipesDetails';
import {Routes , Route} from 'react-router-dom';
import Recipes from './Recipes/Recipes';
import SuggestRecipesDetails from './SuggestRecipesDetails/SuggestRecipesDetails';
import { SuggestRecipesInformation } from './RecipesData/RecipesData';
import { DefaulteRecipesInformation } from './RecipesData/RecipesData';
import Suggest from './Suggest/Suggest';
import { FavoriteProvider } from './FavoriteRecipes/FavoriteContext';
import CreateRecipes from './CreateRecipePage/CreateRecipePage';
import MyRecipesPage from './MyRecipesPage/MyRecipesPage'; // Import the new component
import MyRecipeDetails from './MyRecipesDetails/MyRecipesDetails';
import FavoritePage from './FavoriteRecipes/FavoriteRecipes';
import AboutPage from './AboutPage/AboutPage';

function App() {
  return (
    <>
      <Navbar/>
      <FavoriteProvider>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/suggest" element={<Suggest />} />
          <Route
            path="/suggest/RecipesDetails/:id"
            element={<SuggestRecipesDetails recipes={SuggestRecipesInformation} />}
          />
          <Route path="/recipes/recipesDetails/:id" element={<RecipeDetails recipes={DefaulteRecipesInformation} />} />
          <Route path='/recipes' element={<Recipes/>} />
          <Route path='/favorite' element={<FavoritePage />} />
          <Route path='/create-recipes' element={<CreateRecipes/>} />
          <Route path='/my-recipes' element={<MyRecipesPage/>} />
          <Route path='/my-recipes/details/:id' element={<MyRecipeDetails/>} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </FavoriteProvider>
      <Footer/>
    </>
  );
}

export default App;