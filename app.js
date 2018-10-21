var app = {
    version : '1.0.0',
    targetEvent : 'click',

    // https://www.w3schools.com/jsref/obj_keyboardevent.asp
    input2Speech : function (event) {
        var x = document.getElementById('theText').value;
        //console.log("theText => ", x);
        if (event.keyCode == 13) {
            //console.log("theText => ", x);
            document.getElementById('feedback').innerHTML = x;
            txt2SpeechPlugin.talk(x);
        }
    },
    //
    hook : function () {
        //console.log("called hook() ");
        document.getElementById('exitApp').addEventListener(app.targetEvent,
            function () { navigator.app.exitApp(); },
            false);
        document.getElementById('playOther').addEventListener(app.targetEvent,
            function () { txt2SpeechPlugin.talk(2); },
            false);
        //
        document.getElementById('theText').addEventListener('keyup',
            app.input2Speech,
            false);
        //console.log("called hook() done ");
    },
    //
    onDOMContentLoaded : function () {
        document.getElementById('navCodeName').innerHTML = navigator.appCodeName;
        document.getElementById('navName').innerHTML     = navigator.appName;
        document.getElementById('navVersion').innerHTML  = navigator.appVersion;
        document.getElementById('navPlatform').innerHTML = navigator.platform;
        document.getElementById('appVersion').innerHTML  = app.version;
        //
        app.hook();
        document.getElementById('status').innerHTML = 'is webbrowser';
    },
    //
    onDeviceReady : function () {
        app.targetEvent = 'touchend';
        document.getElementById('status').innerHTML = 'is Cordova';
        // - https://videlais.com/2014/08/21/lessons-learned-from-detecting-apache-cordova/
        document.getElementById('isCordovaApp').innerHTML = (typeof window.cordova !== "undefined");
        //
        //
        //
        txt2SpeechPlugin.talk(1);

    }
}
