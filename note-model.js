(function(exports) {
    function Note(input) {
        this.text = input;
    };

    Note.prototype.textReader = function() {
        return this.text;
    };

    function noteFactory(input) {
        return new Note(input);
    }

    exports.noteFactory = noteFactory;
})(this);