import { Item } from "./Item";

export class FacsimilieCollection {
  //metadata
  imageURL: string;
  title: string;
  thumbNail: string;
  avgPrice: string;
  avgShippingPrice: string;


  //list of items which match this title
  FacsimilieList: Item[];
}
