// import logo from './logo.svg'
import './App.css'
import React from 'react'
import MaterialTable from 'material-table'
import GraphContainer from './GraphContainer'


const App = () => {
  return (
    <React.Fragment>
      <div className='GraphContainer'>
        <GraphContainer />
      </div>
      <div className='App'>
        <MaterialTable
        title='売上'
        columns={[
          {title: '売上日時', field: 'date'},
          {title: '商品名', field: 'name'},
          {title: '売上金額', field: 'proceeds'},
        ]}
        data={query =>
          new Promise((resolve, reject) => {
            let url = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000'
            url += '/sale?'
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
        options = {{
          search: false // 検索ボックスを消す
        }}
        />
      </div>
    </React.Fragment>
  )
}

export default App
