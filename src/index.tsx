import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';


createServer({

  models: { 
    transaction: Model,
  },  

  seeds(server){ 
    server.db.loadData({
      transactions: [
        {
        id: 1, 
        title: 'Desenvolvimento de Software',
        type: 'deposit',
        category: 'Devenvolvimento',
        amount: 8000,
        createAt: new Date('2021-05-03 09:00:00'),
      },
      {
        id: 2, 
        title: 'Macbook Pro',
        type: 'withdraw',
        category: 'Compras',
        amount: 3500,
        createAt: new Date('2021-05-20 18:00:00'),
      }
    ],
  })
},

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data); 

    })

  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
