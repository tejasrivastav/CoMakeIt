
module webapp.route {

    export class Router {
        static $inject = [
            '$stateProvider',
            '$urlRouterProvider'
        ];
        constructor(
            private $stateProvider,
            private $urlRouterProvider
        ){

            $urlRouterProvider.otherwise("/companyInfo");

            var baseState = {
                name: "base",
                url: "",
                abstract: true,
                templateUrl: "/public/partials/baseComponent.html"
            }

            var companyInfoState = {
                name: "companyInfo",
                parent: "base",
                url: "/companyInfo",
                templateUrl: "/public/partials/companyInfo.html"
            } 

            var companySettingsState = {
                name: "companySettings",
                parent: "base",
                url: "/companySettings",
                templateUrl: "/public/partials/companySettings.html"
            }

            var companyUsersState = {
                name: "companyUsers",
                parent: "base",
                url: "/companyUsers",
                templateUrl: "/public/partials/companyUsers.html"
            }

            var RouteNotFound = {
                name: "404",
                url: "/404",
                templateUrl: "/public/partials/404.html"
            }

            $stateProvider
            .state(baseState)
            .state(companyInfoState)
            .state(companySettingsState)
            .state(companyUsersState)
            .state(RouteNotFound);
        }
 
   }
}