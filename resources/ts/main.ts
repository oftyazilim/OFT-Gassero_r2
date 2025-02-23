import { createApp } from 'vue'
import App from '@/App.vue'
import { registerPlugins } from '@core/utils/plugins'
import { FocusTrap } from 'focus-trap-vue'

// Styles
import '@core-scss/template/index.scss'
import '@styles/styles.scss'
// import { config } from 'process';
// import 'devextreme/dist/css/dx.fluent.saas.dark.css';

import config from 'devextreme/core/config'
import { licenseKey } from './devextreme-license'
import { locale, loadMessages } from 'devextreme/localization';
import trMessages from 'devextreme/localization/messages/tr.json';

loadMessages(trMessages); // Türkçe mesajları yükle
locale('tr'); // Lokalizasyonu Türkçe'ye ayarla
config({ licenseKey })
 
// Create vue app
const app = createApp(App)

// Register plugins
registerPlugins(app)

// Mount vue app
app.mount('#app')
