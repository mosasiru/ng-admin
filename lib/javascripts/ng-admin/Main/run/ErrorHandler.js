'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = errorHandler;
function errorHandler($rootScope, $state, $translate, notification) {
    $rootScope.$on("$stateChangeError", function handleError(event, toState, toParams, fromState, fromParams, error) {
        if (error.status == 404) {
            $state.go('ma-404');
            event.preventDefault();
        } else {
            $translate('STATE_CHANGE_ERROR', { message: error.message }).then(function (text) {
                return notification.log(text, { addnCls: 'humane-flatty-error' });
            });
            throw error;
        }
    });
}

errorHandler.$inject = ['$rootScope', '$state', '$translate', 'notification'];
module.exports = exports['default'];
//# sourceMappingURL=ErrorHandler.js.map