(function () {
    "use strict";

    Stacks.addController("s-popover", {
        show: function () {
            this.element.setAttribute("aria-hidden", "false");
        },
        hide: function () {
            this.element.setAttribute("aria-hidden", "true");
        },
        toggle: function () {
            this.element.setAttribute("aria-hidden", this.element.getAttribute("aria-hidden") === "false" ? "true" : "false");
        }
    });

})();

