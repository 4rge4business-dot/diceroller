import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Settings from './Settings'
const ThreeDice = dynamic(() => import('./ThreeDice'), { ssr: false })

function randomFrom(arr){ return arr[Math.floor(Math.random()*arr.length)] }

export default function DiceRoller({ set }){
  const [result,setResult]=useState(null)
  useEffect(()=> setResult(null),[set])

  function playSound(name){
    try{
      const enabled=localStorage.getItem('dicearcade.sound')!=='0'
      if(!enabled) return
      const a=new Audio('/sounds/'+name); a.volume=0.85; a.play().catch(()=>{})
    }catch(e){}
  }
  function vibrate(){ try{ const en=localStorage.getItem('dicearcade.vibrate')!=='0'; if(!en) return; if(navigator && navigator.vibrate) navigator.vibrate(60) }catch(e){} }

  function roll(){
    const sound='roll'+(Math.floor(Math.random()*6)+1)+'.wav'; playSound(sound); vibrate()
    const count=set.count||3; const picks=[]; for(let i=0;i<count;i++) picks.push(randomFrom(set.faces))
    setResult(picks); const hist=JSON.parse(localStorage.getItem('dicearcade.history')||'[]'); hist.unshift({ts:Date.now(), set:set.id, picks}); localStorage.setItem('dicearcade.history', JSON.stringify(hist.slice(0,50)))
  }
  function saveFav(){ const favs=JSON.parse(localStorage.getItem('dicearcade.favs')||'[]'); favs.unshift({ts:Date.now(), set:set.id, picks:result}); localStorage.setItem('dicearcade.favs', JSON.stringify(favs.slice(0,100))); alert('Saved') }

  return (<div className="dice-roller">
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%'}}><Settings onThemeChange={(t)=>document.body.setAttribute('data-theme',t)} /></div>
    <div style={{height:12}} />
    <div className="dice-visual">{ set.type==='3d' ? <ThreeDice labels={(set.id==='rpg')?['20','12','10','8','6','4']:['A','B','C','D','E','F']} materialOpts={{bg:'#3b2f2f',fg:'#ffd9b3'}} /> : result ? <div className='result-grid'>{result.map((r,i)=>(<motion.div key={i} className='face' initial={{y:-20,opacity:0}} animate={{y:0,opacity:1}} transition={{type:'spring',stiffness:300,damping:20}}><div className='face-inner'>{r.icon||r.text}</div></motion.div>))}</div> : <div className='placeholder'>Press Roll to play</div> }</div>
    <div className='controls'><button className='roll' onClick={roll}>Roll</button><button className='save' onClick={saveFav} disabled={!result}>Save</button></div>
    <style jsx>{`.dice-visual{min-height:260px;display:flex;align-items:center;justify-content:center}.result-grid{display:flex;gap:16px}.face{width:120px;height:120px;border-radius:12px;background:linear-gradient(180deg,#fff,#f7fafc);border:1px solid #eee;display:flex;align-items:center;justify-content:center;font-size:28px}.controls{display:flex;gap:12px;justify-content:center;margin-top:14px}.roll{background:#ff6b6b;color:white;padding:12px 18px;border-radius:10px;border:none}.save{background:rgba(255,255,255,0.06);padding:12px 18px;border-radius:10px;border:1px solid rgba(255,255,255,0.04)}`}</style>
  </div>)
}
