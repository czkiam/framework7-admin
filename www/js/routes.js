
var routes = [
  {
		path: '/',
		componentUrl: './pages/home.html',
	},
  
  {
		path: '/widgets/',
		componentUrl: './pages/widgets.html',
	},
	{
		path: '/mailbox/',
		componentUrl: './pages/mailbox.html',
	},
	{
		path: '/mailbox-single/:itemId/',
		componentUrl: './pages/mailbox-single.html',
	},
	{
		path: '/chat/',
		componentUrl: './pages/chat/index.html',
		tabs: [
			{
				path: '/',
				id: 'messages',
				componentUrl: './pages/chat/messages.html',
			},
			{
				path: '/contacts',
				id: 'contacts',
				componentUrl: './pages/chat/contacts.html',
			},
			{
				path: '/calls',
				id: 'calls',
				componentUrl: './pages/chat/calls.html',
			},
			{
				path: '/settings',
				id: 'settings',
				componentUrl: './pages/chat/settings.html',
			},
		],
	},
	{
		path: '/messages-single/:itemId/',
		componentUrl: './pages/chat/messages-single.html',
	},
	{
		path: '/profile/',
		componentUrl: './pages/profile.html',
	},
	{
		path: '/ecommerce/',
		componentUrl: './pages/ecommerce.html',
	},
	{
		path: '/ecommerce/:itemId',
		componentUrl: './pages/ecommerce-single.html',
	},
	{
		path: '/page/',
		componentUrl: './pages/page.html',
	},
	{
		path: '/form/',
		componentUrl: './pages/form.html',
	},

  {
    path: '/left-page-1/',
    componentUrl: './pages/left-page-1.html',
  },
  {
    path: '/left-page-2/',
    componentUrl: './pages/left-page-2.html',
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    componentUrl: './pages/dynamic-route.html',
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            componentUrl: './pages/request-and-load.html',
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
