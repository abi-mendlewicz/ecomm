import logo from '../assets/images/logo.png'

export default function Logo() {
  return (
    <a href='/' className='place-self-start'>
      <img src={logo} alt='Logo' />
    </a>
  )
}