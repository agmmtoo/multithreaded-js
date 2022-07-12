let counter = 0;

self.oninstall = (event) => console.log('service worker install');

self.onactivate = e => {
	console.log('service worker activate');
	e.waitUntil(self.clients.claim());
};

self.onfetch = e => {
	console.log('fetch', e.request.url);

	if (e.request.url.endsWith('/data.json')) {
		counter++;
		e.respondWith(
			new Response(JSON.stringify({counter}), {
				headers: {
					'Content-Type': 'application/json'
				}
			})
		);
		return;
	}

	// fallback to normal HTTP request
	e.respondWith(fetch(e.request));
}
