# address_autofill

> autofill address form

[![NPM](https://img.shields.io/npm/v/address_autofill.svg)](https://www.npmjs.com/package/address_autofill) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install (developing)

Planning to push to npm soon. Will be
```bash
npm install --save address_autofill
```

## Usage

`address_autofill` provides two component, `AddressAutofillForm` and `AddressAutofillFormSimple`. Both of them take three props:
1. title: title shown in the component
2. token: token used in Apple Mapkit API
3. onSubmit: function triggered when submit address button clicked
`AddressAutofillForm` is an address form that will automatically popout suggestions of addresses as user enters.
`AddressAutofillFormSimple` is just a simple input field that will also popout suggestions of address, however users can click on the suggestions to autocomplete their addresses.

Example: https://1bii.github.io/address_autofill/

```jsx
import React from 'react'
import { AddressAutofillForm, AddressAutofillFormSimple } from 'address_autofill'
import 'address_autofill/dist/index.css'

const App = () => {
  const token = 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkdQRko1TEI4M1cifQ.eyJpc3MiOiI1MjlSTjlXNkZKIiwiaWF0IjoxNTg3MTUyNjM5LCJleHAiOjE2MTkyOTM0Mzl9.iz6tq3RjZZye_eBv5x4iC-bZYlq-5m6-RIblZbp_RbOvSOzLZ9jjWMM1b3zLOkgCnG5AAomimy7r3tJEAVZMSw';
  return <div>
    <AddressAutofillForm title="using AddressAutofill" token={token} onSubmit={console.log} />
    <AddressAutofillFormSimple title="using AddressAutofillSimple" token={token} onSubmit={console.log}/>
  </div>
}

export default App;
```

## License

MIT © [1bii](https://github.com/1bii)
