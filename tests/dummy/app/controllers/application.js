import Ember from 'ember';

export default Ember.Controller.extend({
  basicSelectListOptions: [
    Ember.Object.create({label: 'Red', value: '#ff0000'}),
    Ember.Object.create({label: 'Green', value: '#00ff00'}),
    Ember.Object.create({label: 'Blue', value: '#0000ff'})
  ],
  selectedValue: null
});
