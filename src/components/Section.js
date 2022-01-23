class Section  {
  constructor({ items, renderer}, selector) {
    this._items = items;
    this._renderer = renderer;
    // this._selector = selector;
    this._selector = document.querySelector(selector);
  }

  renderSection() {
    this._items.forEach((item) => {
      const element = this._renderer(item);
      this.addItem(element);
    });
  }

  addItem(element) {
    this._selector.prepend(element);
  }
}
export default Section;