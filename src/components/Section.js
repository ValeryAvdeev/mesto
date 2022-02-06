class Section  {
  constructor({ items, renderer }, selector) {
    this._items = items;
    this._renderer = renderer;
    this._selector = document.querySelector(selector);
    // this.userId = userId;
  }

  renderSection() {
    this._items.forEach((item) => {
      // console.log(item.owner._id)
      // item.userId = this.userId;
      const element = this._renderer(item);
      this.addItem(element);
    });
  }

  addItem(element) {
    this._selector.prepend(element);
  }
}
export default Section;