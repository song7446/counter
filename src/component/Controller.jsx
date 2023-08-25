import React from 'react'

function Controller({setCountHandler}) {
  // 구조분해 할당으로 값 넘겨받기
  // const {setCountHandler} = props
  // 이벤트 핸들러(매개변수) 넘겨받아
  // 이벤트 수행
  return (
    <div>
        <button onClick={()=>setCountHandler(-100)}>-100</button>
        <button onClick={()=>setCountHandler(-10)}>-10</button>
        <button onClick={()=>setCountHandler(-1)}>-1</button>
        <button onClick={()=>setCountHandler(1)}>+1</button>
        <button onClick={()=>setCountHandler(10)}>+10</button>
        <button onClick={()=>setCountHandler(100)}>+100</button>
    </div>
  )
}

export default Controller