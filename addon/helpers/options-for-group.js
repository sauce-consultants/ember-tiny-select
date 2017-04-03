import Ember from "ember";

export default Ember.Helper.helper(function([options, group, optionGroupKey]) {
  return content.filterBy(optionGroupKey, group);
});
