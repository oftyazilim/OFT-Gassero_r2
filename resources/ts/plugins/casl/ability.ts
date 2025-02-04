import { createMongoAbility } from '@casl/ability'

export type Actions = 'create' | 'read' | 'update' | 'delete' | 'manage'

export type Subjects = 'SuperAdmin'| 'Admin'| 'Planlama'| 'Uretim'| 'Dashboard'

export interface Rule { action: Actions; subject: Subjects }

export const ability = createMongoAbility<[Actions, Subjects]>()

