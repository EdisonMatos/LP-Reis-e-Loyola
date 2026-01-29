import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import '../../index.css'
import DefaultModals from './DefaultModals'

export default function Features({ modal, paragraphsModal }) {
  return <div>{paragraphsModal && <DefaultModals />}</div>
}
