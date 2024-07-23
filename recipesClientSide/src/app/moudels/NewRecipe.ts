import { RecipeE } from './Recipe';
import { ProductE } from './Product';
import { NewCategoriesE } from './NewCategories';
import { CategoriesValueE } from './CategoriesValue';

export class NewRecipeE
{
  public  NRecipe:RecipeE=new RecipeE()
  public   NListIng:Array<ListOfProduct>=new Array<ListOfProduct>()
  public   NListCat:Array<CategoriesValueE>=new Array<CategoriesValueE>()
}

export class ListOfProduct{
  public product:ProductE=new ProductE();
  public amount:number;
  public  IsNew:boolean;
  public isRemoved: boolean= false;
  public id:number;
}