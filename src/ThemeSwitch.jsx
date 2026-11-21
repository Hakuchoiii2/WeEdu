import React, {useContext} from 'react'
import {State} from './controls'

export default function ThemeSwitch(){
  const {dark} = useContext(State)
  return <button type="button" role="switch" aria-checked={dark} aria-label="Giao diện tối" data-action="theme" className="theme-switch">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2"/></svg>
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.7 14.1A8.9 8.9 0 0 1 9.9 3.3a9 9 0 1 0 10.8 10.8Z"/></svg>
  </button>
}
