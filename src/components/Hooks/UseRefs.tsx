import { useEffect, useRef } from 'react'

const UseRefs = () => {
  const inputref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputref.current?.focus();
  }, [])
  
  return (
    <div>
      <input type="text"  ref={inputref}/>
    </div>
  )
}

export default UseRefs