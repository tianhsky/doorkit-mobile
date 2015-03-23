(function(window, undefined) {
    window.app = {
        goBack: function(e) {
            history.back();
            throw "Back button clicked";
        },
        initialize: function() {
            this.bindEvents();
        },
        bindEvents: function() {
            document.addEventListener('deviceready', this.onDeviceReady, false);
        },
        onDeviceReady: function() {
            document.addEventListener("backbutton", app.goBack, false);
        }

    }
})(window, undefined);

// init
app.initialize();