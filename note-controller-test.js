function noteControllerCanBeInstantiated() {
  function MockList() {};
  MockList.prototype.addNote = function () {
    return 'Blabla';
  };

  function MockView(list) {};
  MockView.prototype.htmlStringify = function () {
    return "<ul><li><div>Favourite movie: Star Wars</div></li></ul>"
  };
  var list = new MockList;
  var noteController = new NoteController(list, MockView);
  assert.isTrue(noteController instanceof NoteController);
  assert.isTrue(noteController.list === list);
}

noteControllerCanBeInstantiated();

function innerHTMLofAppContainsCorrectHtml() {
    function MockNote(){}
    MockNote.prototype.textReader = function() {
      return 'blabla'
    };
    var mockNote = new MockNote()
    function MockList() {};
    MockList.prototype.addNote = function () {
      return 'Favourite movie: Star Wars';
    };
    MockList.prototype.getNotes = function() {
      return [mockNote]
    }

    function MockView(list) {};
    MockView.prototype.htmlStringify = function () {
      return "<ul><li><div>Favourite movie: Star Wars</div></li></ul>"
    };

    var list = new MockList;
    var noteController = new NoteController(list, MockView);
    console.log(document)
    console.log(document.getElementById('app'));
    noteController.insertHtml()
    console.log(document)
    console.log(document.getElementById('app'));
    var app = document.getElementById('app')
    assert.isTrue(app.innerHTML === "<ul><li><div>Favourite movie: Star Wars</div></li></ul>")
};

innerHTMLofAppContainsCorrectHtml();
