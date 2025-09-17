import { useState, useEffect } from 'react'
export default function Settings({ onThemeChange }){
  const [sound,setSound]=useState(true); const [vib,setVib]=useState(true); const [theme,setTheme]=useState('arcade')
  useEffect(()=>{ const s=localStorage.getItem('dicearcade.sound'); if(s!==null) setSound(s==='1'); const v=localStorage.getItem('dicearcade.vibrate'); if(v!==null) setVib(v==='1'); const t=localStorage.getItem('dicearcade.theme'); if(t) setTheme(t) },[])
  useEffect(()=>{ localStorage.setItem('dicearcade.sound', sound?'1':'0') },[sound])
  useEffect(()=>{ localStorage.setItem('dicearcade.vibrate', vib?'1':'0') },[vib])
  useEffect(()=>{ localStorage.setItem('dicearcade.theme', theme); if(onThemeChange) onThemeChange(theme) },[theme])
  return (<div style={{display:'inline-block',background:'rgba(255,255,255,0.02)',padding:10,borderRadius:8}}><div style={{marginBottom:6}}>Settings</div><label style={{display:'flex',justifyContent:'space-between'}}><span>Sound</span><input type='checkbox' checked={sound} onChange={()=>setSound(s=>!s)} /></label><label style={{display:'flex',justifyContent:'space-between'}}><span>Vibration</span><input type='checkbox' checked={vib} onChange={()=>setVib(s=>!s)} /></label><label style={{display:'flex',justifyContent:'space-between'}}><span>Theme</span><select value={theme} onChange={(e)=>setTheme(e.target.value)}><option value='arcade'>Arcade Glow</option><option value='dark'>Dark</option><option value='light'>Light</option></select></label></div>)
}
