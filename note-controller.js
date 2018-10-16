(function(exports) {
  function NoteController(list = new NoteList, viewClass = NoteListView) {
    this.list = list;
    this.list.addNote('Favourite movie: Star Wars');
    this.view = new viewClass(this.list);
  }

  NoteController.prototype.insertHtml = function(){
      // console.log(document.getElementById('app'));
      var app = document.getElementById('app');
      app.innerHTML = this.view.htmlStringify();
  };

  exports.NoteController = NoteController;
})(this)
