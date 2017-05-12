import environment from './environment';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');
  
  aurelia.user.plugin('aurelia-materialize-bridge', b => b.useAll());
  //Alternatively you can pick which components to use via bridge => { bridge.useButtion().useCollapsible().userModal(); }

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
