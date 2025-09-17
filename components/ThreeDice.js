'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useEffect, useState } from 'react'
import { MeshStandardMaterial, TextureLoader } from 'three'
import { OrbitControls } from '@react-three/drei'

function makeFaceDataURL(label, bg, fg){
  if(typeof document === 'undefined') return null
  const size=512; const canvas=document.createElement('canvas'); canvas.width=size; canvas.height=size; const ctx=canvas.getContext('2d')
  // background
  const grad=ctx.createLinearGradient(0,0,size,size); grad.addColorStop(0,bg); grad.addColorStop(1,'#111'); ctx.fillStyle=grad; ctx.fillRect(0,0,size,size)
  // label
  ctx.fillStyle=fg; ctx.font='bold 140px Arial'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText(label, size/2, size/2+20)
  return canvas.toDataURL('image/png')
}

function Die({ labels=['1','2','3','4','5','6'], bg='#2b2b2b', fg='#ffd9b3' }){
  const ref=useRef(); const [maps,setMaps]=useState(null)
  useEffect(()=>{ const u=labels.map(l=> makeFaceDataURL(l,bg,fg)); setMaps(u) },[labels.join('|')])
  useFrame((_,delta)=>{ if(ref.current){ ref.current.rotation.x += delta*0.9; ref.current.rotation.y += delta*0.6 } })
  const mats = maps ? maps.map(u=> new MeshStandardMaterial({ map: new TextureLoader().load(u), metalness:0.6, roughness:0.3, emissive:'#2b6cff', emissiveIntensity:0.02 })) : null
  return (<mesh ref={ref} rotation={[0.7,0.2,0]}><boxGeometry args={[1.4,1.4,1.4]} />{mats? mats.map((m,i)=>(<primitive key={i} attach={`material-${i}`} object={m} />)) : <meshStandardMaterial color={'#8b8b8b'} metalness={0.6} roughness={0.3} />}</mesh>)
}

export default function ThreeDice({ labels, materialOpts }){
  return (<div style={{width:'100%',height:360}}><Canvas shadows camera={{position:[0,0,5], fov:50}}><ambientLight intensity={0.6} /><directionalLight position={[5,5,5]} intensity={0.8} /><Die labels={labels} bg={(materialOpts && materialOpts.bg) || '#2b2b2b'} fg={(materialOpts && materialOpts.fg) || '#ffd9b3'} /><OrbitControls enableZoom={false} enablePan={false} /></Canvas></div>)
}
