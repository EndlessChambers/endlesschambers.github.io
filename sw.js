// Lets live.html show notifications (Motors unplugged). Nothing is cached.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('notificationclick',e=>{e.notification.close();
 e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(cs=>{
  for(const c of cs){if(c.url.indexOf('live')>=0&&'focus' in c)return c.focus();}
  return self.clients.openWindow('live.html');}));});
