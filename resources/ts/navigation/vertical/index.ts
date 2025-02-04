// import appsAndPages from './apps-and-pages'
// import charts from './charts'
import dashboard from './dashboard'
import planlama from './planlama'
import stok from './stoklar'
import tanimlar from './tanimlar'
import uretim from './uretim'
import ayarlar from './ayarlar'
// import forms from './forms'
// import others from './others'
// import uiElements from './ui-elements'
import type { VerticalNavItems } from '@layouts/types'

// export default [...dashboard, ...appsAndPages, ...uiElements, ...forms, ...charts, ...others] as VerticalNavItems
export default [...dashboard, ...planlama, ...stok, ...uretim, ...tanimlar, ...ayarlar] as VerticalNavItems
