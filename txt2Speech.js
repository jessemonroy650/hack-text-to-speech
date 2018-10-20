var txt2SpeechPlugin = {
    version : '0.7.0',

    talk : function (text) {
        .speak('hello, world!', function () {
            alert('success');
        }, function (reason) {
            alert(reason);
        });
 
    }
}

