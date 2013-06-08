requirejs.config({
    "baseUrl": "scripts",
    "paths": {
      "app": "app"
    },
    "shim": {
    	"jquery-ui.min": ["jquery"],
    	"jquery.nanoscroller.min": ["jquery"],
        "jquery.slimscroll.min": ["jquery-ui.min"],
        "message": ["jquery.nanoscroller.min","jquery.slimscroll.min"]
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);