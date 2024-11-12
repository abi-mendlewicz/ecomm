export default function CategoriesNav() {
  function onClickCategory(cat) {
    alert(`Próximamente podrás filtrar aquí los productos pertenecientes a la categoría: ${cat}`)
  }
  return (
    <ul className='flex gap-x-4'>
      <li className='cursor-pointer hover:text-yellow-600' onClick={() => onClickCategory('Todo')}>Todo</li>
      <li className='cursor-pointer hover:text-yellow-600' onClick={() => onClickCategory('Perro')}>Perro</li>
      <li className='cursor-pointer hover:text-yellow-600' onClick={() => onClickCategory('Gato')}>Gato</li>
      <li className='cursor-pointer hover:text-yellow-600' onClick={() => onClickCategory('Otros')}>Otros</li>
    </ul>
  )
}