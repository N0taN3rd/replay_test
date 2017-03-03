console.log('Loading ServiceWorker.');
var version = '{{ 1.1 }}';

self.addEventListener('install', function (event) {
  console.log('Installing ServiceWorker.');
  event.waitUntil(self.skipWaiting())
});

self.addEventListener('activate', function (event) {
  console.log('Activating ServiceWorker.');
  console.log('[ServiceWorker] Claiming clients for version', version);
  event.waitUntil(self.clients.claim());
});

function sendToClients (message) {
  return function (clients) {
    clients.map(function (client) {
      return client.postMessage(message);
    });
  }
}

self.addEventListener('fetch', function (event) {
  console.log('[ServiceWorker] Fetch event triggered');
  var req = {}, cloned = event.request.clone(), head = {};
  console.log('[ServiceWorker] URL:', cloned.url, 'Method:', cloned.method, ' Mode: ', cloned.mode);
  console.log('[ServiceWorker] Referrer: ', cloned.referrer, ' ReferrerPolicy: ', cloned.referrerPolicy);
  console.log('[ServiceWorker] Credentials: ', cloned.credentials, ' Redirect: ', cloned.redirect);
  for (var hdr of cloned.headers.entries()) {
    head[hdr[0]] = hdr[1];
    console.log('[ServiceWorker] ', hdr[0], ':', hdr[1]);
  }
  req.method = cloned.method;
  req.url = cloned.url;
  req.mode = cloned.mode;
  req.credentials = cloned.credentials;
  req.referrerPolicy = cloned.referrerPolicy;
  req.redirect = cloned.redirect;
  req.referrer = cloned.referrer;
  req.headers = head;
  self.clients.matchAll()
    .then(sendToClients({type: 'req', req: req}))
    .catch(function (error) {
      console.error('[ServiceWorker] An error occurred sending the request to our page')
      console.error('[ServiceWorker] ', error)
    });
});

self.addEventListener('message', function (event) {
  console.log('[ServiceWorker] Received Message: ', event.data);
  if (event.data.type === 'not_direct') {
    self.clients.matchAll()
      .then(sendToClients({type: 'ack', m: 'Acking ' + event.data.m}))
      .catch(function (error) {
        console.error('[ServiceWorker] An error occurred while replying to a message')
        console.error('[ServiceWorker] ', error)
      });
  } else {
    try {
      event.ports[0].postMessage(event.data.m + " SW Says 'Hello back!'");
    } catch (error) {
      console.error('[ServiceWorker] An error occurred while replying to a direct message')
      console.error('[ServiceWorker] ', error)
    }
  }
});