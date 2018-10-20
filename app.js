var app = {
    version : '0.8.0',
    targetEvent : 'click',

    //
    hook : function () {
        document.getElementById('exitApp').addEventListener(app.targetEvent,
            function () { navigator.app.exitApp(); },
            false);
        document.getElementById('playOther').addEventListener(app.targetEvent,
            function () { alert("play other works"); },
            false);
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
        //txt2SpeechPlugin.talk();
        TTS.speak('hello, world!', function () {
            alert('success');
        }, function (reason) {
            alert(reason);
        });

    }
}
