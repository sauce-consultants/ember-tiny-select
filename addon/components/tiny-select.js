import Ember from 'ember';
import layout from '../templates/components/tiny-select';
export default Ember.Component.extend({
  layout: layout,
  options: [],
  prompt: null,
  optionValuePath: 'value',
  optionLabelPath: 'label',

  init: function () {
    this._super(...arguments);
    if (!this.get('content')) {
      this.set('content', []);
    }
  },

  actions: {
    change: function() {
      let selectedIndex = this.$('select')[0].selectedIndex;
      let options = this.get('options');

      // decrement index by 1 if we have a prompt
      let hasPrompt = !!this.get('prompt');
      let optionIndex = hasPrompt ? selectedIndex - 1 : selectedIndex;
      let _selection = options[optionIndex];

      this.sendAction('willChangeAction', _selection);
      if (this.get('optionValuePath')) {
        this.set('selection', _selection[this.get('optionValuePath')]);
      } else {
        this.set('selection', _selection);
      }

      this.sendAction('didChangeAction', _selection);
    }
  }
});
