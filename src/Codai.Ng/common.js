/// <reference path="_all.js" />

angular.module('$codaiNg.config', []).value('$codaiNgConfig', {});
angular.module('$codaiNg.filters', ['$codaiNg.config']);
angular.module('$codaiNg.directives', ['$codaiNg.config']);
angular.module('$codaiNg', ['$codaiNg.filters', '$codaiNg.directives', '$codaiNg.config']);