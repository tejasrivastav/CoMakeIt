/// <reference path="./typings/main.d.ts" />

/// <reference path="./route.ts" />

module webapp {
    export function bootstrap() {
        var app = angular.module("coMakeIt-assignment",[
            'ngMaterial',
            'ngAnimate',
            'ui.router',
            'anim-in-out'
        ]);

        loadConfig(app);
    }

    function loadConfig(app) {
        app.config(webapp.route.Router);
    }
}
webapp.bootstrap();