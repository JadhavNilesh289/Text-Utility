import React from 'react'

function Alert(props) {
  return (
    <div>
        <div class="text-center py-4 lg:px-4">
            <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                <span class="font-semibold mr-2 text-left flex-auto">{props.alert.msg}</span>
            </div>
        </div>
    </div>
  )
}

export default Alert
