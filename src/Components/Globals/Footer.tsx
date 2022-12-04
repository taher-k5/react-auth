import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div style={{marginTop: '10px'}}>
        @ All right reserved {(new Date().getFullYear())}
    </div>
  )
}

export default Footer