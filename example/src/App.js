import React from 'react'

import { ExampleComponent, ExampleComponentSimple } from 'address_autofill'
import 'address_autofill/dist/index.css'

const App = () => {
  const token = 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkdQRko1TEI4M1cifQ.eyJpc3MiOiI1MjlSTjlXNkZKIiwiaWF0IjoxNTg3MTUyNjM5LCJleHAiOjE2MTkyOTM0Mzl9.iz6tq3RjZZye_eBv5x4iC-bZYlq-5m6-RIblZbp_RbOvSOzLZ9jjWMM1b3zLOkgCnG5AAomimy7r3tJEAVZMSw';
  return <div>
    <ExampleComponent title="using AddressAutofill" token={token} onSubmit={console.log} />
    <ExampleComponentSimple title="using AddressAutofillSimple" token={token} onSubmit={console.log}/>
  </div>
}

export default App;
