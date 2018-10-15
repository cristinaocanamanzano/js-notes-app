function testNoteListViewTakesNoteList() {
    var list = new NoteList;
    var view = new NoteListView(list);
    assert.isTrue(view.list === list);
} 

testNoteListViewTakesNoteList();

function testNoteListViewHasHTMLStringify() {
    var list = new NoteList
    list.addNote("1st Note")
    list.addNote("2nd Note")
    var view = new NoteListView(list)
    var htmlString = "<ul><li><div>1st Note</div></li><li><div>2nd Note</div></li></ul>"
    console.log(view.htmlStringify())
    assert.isTrue(view.htmlStringify() === htmlString)
}

testNoteListViewHasHTMLStringify();

function testHTMLStringifyWorksForNoNotes() {
    var list = new NoteList
    var view = new NoteListView(list)
    var htmlString = "<ul></ul>"
    console.log(view.htmlStringify())
    assert.isTrue(view.htmlStringify() === htmlString)
}

testHTMLStringifyWorksForNoNotes();