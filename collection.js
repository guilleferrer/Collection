/**
 * Collection is a collection of items
 * 
 * This class is used to store the items. The main advantage is that you don't
 * need to use the jquery search over the dom over and over, you just use it
 * once and then you store it in a Collection for a later use.
 * 
 */

var Collection = function() {
  var $_holder = {};
  this.Item = 'Item';

  return {

    hasItem : function($_id) {
      for ( var i in $_holder) {
        if (i == $_id) {
          return true;
        }
      }

      return false;
    },

    getItem : function($_id) {
      if (!$_holder[$_id]) {
        var _item = eval(' new ' + this.Item + '($_id)');
        this.addItem(_item);
      }
      return $_holder[$_id];
    },

    addItem : function($_item) {
      $_holder[$_item.getId()] = $_item;
    },

    getAll : function() {
      return $_holder;
    },

    getClass : function($_className) {
      var ret = {};
      for ( var i in $_holder) {
        task = this.getItem(i);
        if (task.getContainer().hasClass($_className)) {
          ret[task.getId()] = task;
        }
      }
      return ret;
    } }; // end return
}; // end Collection
