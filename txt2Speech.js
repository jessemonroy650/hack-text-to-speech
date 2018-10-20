var txt2SpeechPlugin = {
    version : '0.9.0',

    talk : function (theText) {
        //
        document.getElementById('status').innerHTML = 'talk() called:' + theText;
        if (theText == 1) {
            TTS.speak('hello, world!',
            function () {},
            function (reason) {
                alert(reason);
            });
        } else if (theText == 2) {
            TTS.speak({
                text: 'hello, world!',
                locale: 'en-GB',
                rate: 0.65
            },
            function () {},
            function (reason) {
                alert(reason);
            });
        } else {
            TTS.speak({
                text: theText,
                locale: 'en-US',
                rate: 0.65
            },
            function () {},
            function (reason) {
                alert(reason);
            });
        }
    }
}

