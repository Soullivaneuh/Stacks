(function () {
    "use strict";

    var revealableControllers = ["s-popover"];

    Stacks.addController("s-revealer", {

        forEachTarget: function (f) {
            document.querySelectorAll(this.data.get("target")).forEach(f);
        },

        getRevealableController: function (el) {
            var result = null;
            for (var i = 0; i < revealableControllers.length; i++) {
                result = this.application.getControllerForElementAndIdentifier(el, revealableControllers[i]);
                if (result) {
                    break;
                }
            }
            return result;
        },

        callRemote: function(methodName) {
            var that = this;
            this.forEachTarget(function (e) {
                var c = that.getRevealableController(e);
                if (c) {
                    c[methodName]();
                }
            });
        },

        show: function(evt) {
            evt.preventDefault();
            this.callRemote("show");
        },

        hide: function(evt) {
            evt.preventDefault();
            this.callRemote("hide");
        },

        toggle: function(evt) {
            evt.preventDefault();
            this.callRemote("toggle");
        },


    });

})();
