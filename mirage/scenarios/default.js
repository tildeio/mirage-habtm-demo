export default function(server) {
  let yehuda = server.create('user', { name: 'Yehuda' });
  let peter = server.create('user', { name: 'Peter' });
  let godfrey = server.create('user', { name: 'Godfrey' });

  let prod = server.create('app', { name: 'Skylight Production' });
  let staging = server.create('app', { name: 'Skylight Staging' });

  let peterBlog = server.create('app', { name: 'Peter\'s Dreams' });
  let godfreyBlog = server.create('app', { name: 'Godfrey\'s Thoughts' });

  yehuda.ownedApps = [prod, staging];
  prod.collaborators = [peter, godfrey];
  staging.collaborators = [peter, godfrey];

  peterBlog.addOwner(peter);
  godfreyBlog.addOwner(godfrey);
}
