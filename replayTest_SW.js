console.log('Loading ServiceWorker.');

self.addEventListener('install', function (event) {
  console.log('Installing ServiceWorker.');
  return self.skipWaiting();
})

self.addEventListener('activate', function (event) {
  console.log('Activating ServiceWorker.');
  return self.clients.claim();
})

self.addEventListener('fetch', function (event) {
  console.log('Fetch event triggered.');
  var head = {};
  for (var hdr of event.request.headers.entries()) {
    head[hdr[0]] = hdr[1];
  }
  var req = {};
  req.method = event.request.method;
  req.url = event.request.url;
  req.mode = event.request.mode;
  req.credentials = event.request.credentials;
  req.referrerPolicy = event.request.referrerPolicy;
  req.redirect = event.request.redirect;
  req.referrer = event.request.referrer;
  req.headers = head;
  self.clients.matchAll().then((clients) => {
    clients.map((client) => {
      return client.postMessage({type: 'req', req: req});
    })
  });
  console.log(event.request);
  console.log(event.request.headers);
})

self.addEventListener('message', function (event) {
  console.log('SW Received Message: ');
  console.log(event.data);
  if (event.data.type === 'not_direct') {
    self.clients.matchAll().then((clients) => {
      clients.map((client) => {
        return client.postMessage({type: 'ack', m: 'Acking ' + event.data.m});
      })
    });
  }
})