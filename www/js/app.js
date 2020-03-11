var $$ = Dom7;

var app = new Framework7({
  root: '#app', // App root element


  name: 'My App', // App name
  theme: getCookie('app-theme', 'ios'), /* Automatic theme detection */
  /* Enable panel left visibility breakpoint */
	panel: {
		leftBreakpoint: 960,
	},
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
			walmartAPI: 'https://carlofontanos.com/demo/walmart-api.php'

    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});


/* Set color theme, comment out these lines to prevent overridings to your current theme */
app.root.addClass(getCookie('app-theme-color', 'color-theme-blue')); /* Color */
app.root.addClass(getCookie('app-theme-bg-color', 'theme-light')); /* Background */

/* Init/Create left panel view */
var mainView = app.views.create('.view-left', {
	url: '/'
});

/* Init/Create main view */
var mainView = app.views.create('.view-main', {
	url: '/',
	pushState: true,
	pushStateSeparator: '#!',
	preloadPreviousPage: false /* Do not auto load previous view page */
});

/* Change Theme and save selection */
$$('.change-device-theme').on('click', function (e) {
  e.preventDefault();
  console.log($$(this).attr('device'))
	setCookie('app-theme', $$(this).attr('device'), 90);
	window.location.reload();	
});
