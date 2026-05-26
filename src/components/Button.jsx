import React from 'react'

const Button = ({title , width}) => {
  return (
    <div>
        <button className={`border px-3 ${width} py-1 rounded-lg text-sm text-gray-700 border-gray-300`}>
              {title}
        </button>
    </div>
  )
}

export default Button