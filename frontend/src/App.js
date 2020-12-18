// import logo from './logo.svg'
import './App.css'
import React from 'react'
import MaterialTable from 'material-table'

const App = () => {
  return (
    <div className='App'>
      <MaterialTable
      title='売上'
      columns={[
        {title: 'ID', field: 'id'},
        {title: '売上金額', field: 'proceeds'},
        {title: '売上日時', field: 'date'}
      ]}
      data={query =>
        new Promise((resolve, reject) => {
          let url = 'http://localhost:4000/api/view?'
          url += 'per_page=' + query.pageSize
          url += '&page=' + (query.page + 1)
          fetch(url)
            .then(responce => responce.json())
            .then(result => {
              resolve({
                data: result.data,
                page: result.page - 1,
                totalCount: result.total
              })
            })
        })
      }
    />
  </div>
  )
}

export default App;
