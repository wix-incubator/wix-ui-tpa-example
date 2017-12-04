import testkit from 'wix-bootstrap-testkit';
import configEmitter from 'wix-config-emitter';

export const app = bootstrapServer();

export const beforeAndAfter = function () {
  before(() => emitConfigs());
  app.beforeAndAfter();
};

function emitConfigs() {
  return configEmitter({sourceFolders: ['./templates'], targetFolder: './target/configs'})
    .fn('static_url', 'com.wixpress.infra.wsr-poc', 'http://localhost:3200/')
    .emit();
}

function bootstrapServer() {
  return testkit.app('./index', {
    env: {
      PORT: 3100,
      MANAGEMENT_PORT: 3104,
      NEW_RELIC_LOG_LEVEL: 'warn',
      DEBUG: ''
    }
  });
}
