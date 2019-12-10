import { Item } from "./Item";

export class FacsimilieCollection {

  constructor (num: number) {
    this.imageURL = "https://www.google.com";
    this.title = "test title";
    this.thumbNail = "sjdkfa"
    this.avgPrice = 30;
    this.avgShippingPrice = 15;
    this.FacsimilieList = new Array();

    for (let i =0; i<num; i++) {
      this.FacsimilieList.push(new Item());
    }
  }

  //metadata
  imageURL: string;
  title: string;
  thumbNail: string;
  avgPrice: number;
  avgShippingPrice: number;

  //list of items which match this title
  FacsimilieList: Item[];
}
