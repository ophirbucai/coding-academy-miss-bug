import { useEffect, useRef, useState } from 'react'
import { UserMsg } from './UserMsg'
import { NavLink } from 'react-router-dom'
import { cn } from '../utils/cn'

export function AppHeader() {
  const [menuActive, setMenuActive] = useState(false)
  const menuRef = useRef(null)

  function delayedCloseMenu() {
    setTimeout(() => {
      setMenuActive(false)
    }, 100)
  }

  useEffect(() => {
    if (menuActive) document.addEventListener('click', handleClickOutside)

    function handleClickOutside(ev) {
      if (!menuRef.current.contains(ev.target)) setMenuActive(false)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [menuActive])

  return (
    <header className='app-header '>
      <div className='header-container'>
        <UserMsg />
        <div ref={menuRef}>
          <button className='app-nav-trigger' onClick={() => setMenuActive(!menuActive)}>|||</button>
          <nav className={cn('app-nav', menuActive && 'active')}>
            <NavLink to='/' onClick={delayedCloseMenu}>Home</NavLink>
            <NavLink to='/bug' onClick={delayedCloseMenu}>Bugs</NavLink>
            <NavLink to='/about' onClick={delayedCloseMenu}>About</NavLink>
          </nav>
        </div>
        <h1>Bugs are Forever</h1>
      </div>
    </header>
  )
}
