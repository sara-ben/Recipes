import { CategorieE } from './Categorie';
import { CategoriesValueE } from './CategoriesValue';

export class NewCategoriesE
{
  public  NCategory:CategorieE=new CategorieE()
  public   NListVal:Array<ListOfValues>=new Array<ListOfValues>();
  public isRemoved: boolean= false;

}

export class ListOfValues{
  public categoriesValue:CategoriesValueE=new CategoriesValueE();
  public  IsNew:boolean;
}