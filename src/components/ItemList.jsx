import { useState, useEffect } from 'react'
import { products } from '../data/products'
import Loader from './Loader'
import Item from './Item'

export default function ItemList() {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      const fetchData = new Promise((resolve, reject) => {
        
        if (products) {
          resolve(products)
        } else {
          reject()
        }
      })

      fetchData.then(data => {
        setData(data)
        setIsLoading(false)
      }).catch(error => setIsLoading(false))
    }, 2000)
  }, [])

  if (isLoading) return <Loader />
  if (!data) return <p>No se encontraron productos.</p>

  const productList = data.map(({id, title, description, price, pictureUrl}) => 
    <Item
      className=''
      key={id}
      title={title}
      description={description}
      price={price}
      pictureUrl={pictureUrl}
    />
  )

  return <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fadeIn'>{productList}</div>
}