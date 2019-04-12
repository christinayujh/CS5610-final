export class Comment {
  _id: String;
  name: String;
  description: String;

  constructor(_id, description) {
    this._id = _id;
    this.description = description;
  }

}
