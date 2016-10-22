var webapp;
(function (webapp) {
    var route;
    (function (route) {
        var Router = (function () {
            function Router($stateProvider, $urlRouterProvider) {
                this.$stateProvider = $stateProvider;
                this.$urlRouterProvider = $urlRouterProvider;
                $urlRouterProvider.otherwise("/404");
                var baseState = {
                    name: "base",
                    url: "",
                    abstract: true,
                    templateUrl: "/public/partials/baseComponent.html"
                };
                var companyInfoState = {
                    name: "companyInfo",
                    parent: "base",
                    url: "/companyInfo",
                    templateUrl: "/public/partials/companyInfo.html"
                };
                var companySettingsState = {
                    name: "companySettings",
                    parent: "base",
                    url: "/companySettings",
                    templateUrl: "/public/partials/companySettings.html"
                };
                var companyUsersState = {
                    name: "companyUsers",
                    parent: "base",
                    url: "/companyUsers",
                    templateUrl: "/public/partials/companyUsers.html"
                };
                var RouteNotFound = {
                    name: "404",
                    url: "/404",
                    templateUrl: "/public/partials/404.html"
                };
                $stateProvider
                    .state(baseState)
                    .state(companyInfoState)
                    .state(companySettingsState)
                    .state(companyUsersState)
                    .state(RouteNotFound);
            }
            Router.$inject = [
                '$stateProvider',
                '$urlRouterProvider'
            ];
            return Router;
        })();
        route.Router = Router;
    })(route = webapp.route || (webapp.route = {}));
})(webapp || (webapp = {}));
/// <reference path="./typings/main.d.ts" />
/// <reference path="./route.ts" />
var webapp;
(function (webapp) {
    function bootstrap() {
        var app = angular.module("coMakeIt-assignment", [
            'ngMaterial',
            'ngAnimate',
            'ui.router',
            'anim-in-out'
        ]);
        loadConfig(app);
    }
    webapp.bootstrap = bootstrap;
    function loadConfig(app) {
        app.config(webapp.route.Router);
    }
})(webapp || (webapp = {}));
webapp.bootstrap();
