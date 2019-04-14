export class House {
  _id: String;
  name: String;
  price: String;
  url: String;
  owner: String;
  buyer: String;
  description: String;

  constructor(_id, name, price, url, owner, buyer, description) {
    this._id = _id;
    this.name = name;
    this.price = price;
    this.url = url;
    this.owner = owner;
    this.buyer = buyer;
    this.description = description;
  }

}
