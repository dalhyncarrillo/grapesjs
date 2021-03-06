module.exports = require('./PropertyView').extend({

  templateInput() {
    const pfx = this.pfx;
    const ppfx = this.ppfx;
    return `
      <div class="${ppfx}field ${ppfx}select">
        <span id="${pfx}input-holder"></span>
        <div class="${ppfx}sel-arrow">
          <div class="${ppfx}d-s-arrow"></div>
        </div>
      </div>
    `;
  },

  init() {
    const model = this.model;
    this.list = model.get('list') || model.get('options') || [];
  },

  onRender() {
    var pfx  = this.pfx;
    const options = this.list;

    if (!this.$input) {
      let optionsStr = '';

      options.forEach(option => {
        let name = option.name || option.value;
        let style = option.style ? option.style.replace(/"/g,'&quot;') : '';
        let styleAttr = style ? `style="${style}"` : '';
        let value = option.value.replace(/"/g,'&quot;');
        optionsStr += `<option value="${value}" ${styleAttr}>${name}</option>`;
      });

      this.$input = $(`<select>${optionsStr}</select>`);
      this.input = this.$input.get(0);
      this.$el.find(`#${pfx}input-holder`).html(this.$input);
    }
  },

});
