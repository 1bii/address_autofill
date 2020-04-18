import React from 'react'
import styles from './styles.module.scss'
import AutofillForm from './components/autofillForm/autofillForm'
import AutofillFormSimple from './components/autoFillFormSimple/autofillFormSimple';

export const AddressAutofillForm = ({title, token, onSubmit}) => {
  return <div className={styles.title}>{title}
    <AutofillForm token={token} onSubmit={onSubmit}></AutofillForm>
  </div>
}

export const AddressAutofillFormSimple = ({title, token, onSubmit}) => {
  return <div className={styles.title}>{title}
    <AutofillFormSimple token={token} onSubmit={onSubmit}></AutofillFormSimple>
  </div>
}
