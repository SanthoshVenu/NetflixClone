import React from 'react'

const Header = () => {
  return (
    <div>
        <img className='absolute z-10 left-5 h-11 bg-gradient-to-r from-black' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" style={{width: '120px'}}/>
        <img className='absolute inset-0 h-full w-full object-cover' src ="https://i.pinimg.com/1200x/30/35/16/303516b3d848265807856338aabd9572.jpg"/>
    </div>
  )
}

export default Header