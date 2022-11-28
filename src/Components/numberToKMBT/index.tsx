import React from 'react'
import useAbbreviate from './useAbbreviate'

function Abbreviate() {
  return (
    <div>
      <p>100 = {useAbbreviate(100)}</p>
      <p>1200 = {useAbbreviate(1200)}</p>
      <p>121620 = {useAbbreviate(121620)}</p>
      <p>121690 = {useAbbreviate(121690)}</p>
      <p>1000000 = {useAbbreviate(1000000)}</p>
      <p>1234000 = {useAbbreviate(1234000)}</p>
      <p>16555000 = {useAbbreviate(16555000)}</p>
      <p>165550000 = {useAbbreviate(165550000)}</p>
      <p>165559000 = {useAbbreviate(165559000)}</p>
      <p>1000000000 = {useAbbreviate(1000000000)}</p>
      <p>1000000000000 = {useAbbreviate(1000000000000)}</p>
    </div>
  )
}

export default Abbreviate