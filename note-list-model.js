(function(exports) {
    function NoteList(newNote = noteFactory) {
        this.notes = [];
        this.newNote = newNote;
    };

    NoteList.prototype.getNotes = function () {
        return this.notes;
    };

    NoteList.prototype.addNote = function (text) {
        this.notes.push(this.newNote(text))
    };

    exports.NoteList = NoteList;
})(this);