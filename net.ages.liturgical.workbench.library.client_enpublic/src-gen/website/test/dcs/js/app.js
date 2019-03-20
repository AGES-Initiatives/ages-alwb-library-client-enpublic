requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      "jquery": "jquery-2.0.3",
      "jqueryMenu": "jquery.dropdown",
      "bootstrap": "bootstrap/js/bootstrap",
      "ui_bootstrap_tpls": "ui_bootstrap_tpls",
      "angular_app": "../app/angular_app",
      "angular": "angular"
    },
    "shim": {
    		"angular": { exports:"angular"},
        "jqueryMenu":["jquery"],
        "bootstrap": ["jquery"],
        "ui_bootstrap_tpls": ["angular"],
        "alwb": ["jquery", "jqueryMenu", "bootstrap"],
        "dcs": ["alwb"],
        "angular_app":["angular"]
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);
