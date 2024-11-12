export default function Item({title, description, price, pictureUrl}) {
  return (
    <div className='text-blue-700'>
      <img src={pictureUrl} alt={title} className='rounded-3xl' />
      <h2 className='text-lg font-bold'>{title}</h2>
      <p>{description}</p>
      <p>{new Intl.NumberFormat('es-UY', {style: 'currency', currency: 'UYU'}).format(price)}</p>
    </div>
  )
}