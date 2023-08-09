import { useRef, useEffect, useState} from 'react'

const UseRefsMutable = () => {
    const [timer, setTimer] = useState(0)
    const inputRef = useRef<number | null>(null)

    const stopTimer = () =>{
        if(inputRef.current){
            window.clearInterval(inputRef.current)
        }
    }
    useEffect(() => {
      inputRef.current = window.setInterval(() =>{
          setTimer((timer) =>(timer+1))
      },1000)
      return () =>{
        stopTimer()
      }
    }, [])
    
  return (
    <div>UseRefsMutable
        <p>Timer:{timer}</p>
        <button onClick={()=>stopTimer()}>Stop</button>
    </div>
  )
}

export default UseRefsMutable