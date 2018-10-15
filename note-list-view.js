(function(exports) {
    function NoteListView(input) {
        this.list = input;
    }

    NoteListView.prototype.htmlStringify = function () {
        var notesArray = this.list.getNotes();
        var htmlString = "<ul>"
        for (var i = 0; i < notesArray.length; i++) {
            htmlString += "<li><div>" + notesArray[i].textReader() + "</div></li>"
        }
        htmlString += "</ul>"
        return htmlString

    }

    exports.NoteListView = NoteListView
})(this)