const C='horarios-v1';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html','icon-192.png','icon-512.png'])));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{const q=e.request,u=new URL(q.url);if(q.method!='GET')return;
 const put=n=>{const cp=n.clone();caches.open(C).then(c=>c.put(q,cp));return n};
 if(u.origin==location.origin)e.respondWith(fetch(q).then(put).catch(()=>caches.match(q)));
 else if(u.hostname=='cdnjs.cloudflare.com'||u.hostname.startsWith('fonts.g'))e.respondWith(caches.match(q).then(r=>r||fetch(q).then(put)));});
