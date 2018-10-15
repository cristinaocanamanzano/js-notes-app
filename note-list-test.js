function testNoteListHasGetNotesMethod() {
    var list = new NoteList();
    assert.isTrue(Array.isArray(list.getNotes()) && list.getNotes().length === 0);
};

testNoteListHasGetNotesMethod();

function testNoteListCanAddNotes() {
    var list = new NoteList();
    list.addNote("Favourite drink: seltzer")
    console.log(list.getNotes()[0].textReader())
    assert.isTrue(list.getNotes()[0].textReader() === "Favourite drink: seltzer")
};

testNoteListCanAddNotes();