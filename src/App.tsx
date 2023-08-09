import React from 'react';

import './App.css';
import { Polymorphism } from './components'

function App() {
  const person = {
    first: 'John',
    last:'Snow',
  }

  const persons  =[
    {
      first:'John',
      last:'Snow',
    },
    {
      first:'Denaries',
      last:'Targarin',
    },
    {
      first:'Edward',
      last:'Stark',
    },
  ];
  return (
    <div className="App">
     {/* <Greet name="Ankush" age={21} isLoggedIn={true}/> */}
     {/* <Person name={person}/> */}
     {/* <Group names={persons}/> */}
     {/* <Status status="loading"/> */}
     {/* <Heading>I am a Children Prop</Heading> */}
     {/* <Oscar>
       <Heading>Oscar Goes to Leonardo Decaprio</Heading>
     </Oscar> */}
     {/* <Greet name="Ankush" isLoggedIn={true}/> */}

     {/* <Button handleClick={(e,id)=>{
      console.log('Button clicked',e,id);
     }}/> */}

     {/* <input value='' /> */}
     {/* <Container styles={{border:'2px solid black',padding:'1rem',color:'#ff6500'}}/> */}

     {/* <UseStateHook/> */}
     {/* <UseStateForFuture name="Ankush Mehra" email="mehra@example.com"/> */}
     {/* <UseReducerHook/> */}

     {/* <ThemeContextProvider>
        <ThemeBox/>
     </ThemeContextProvider> */}
     {/* <UserContextProvider>
      <UserContext/>
     </UserContextProvider> */}
{/* 
     <UseRefs/>
     <UseRefsMutable/> */}

     {/* <ClassComponent message='Your Count is'/> */}

     {/* <ComponentProp isA+++LoggedIn={true} Component={Profile}/> */}

     {/* <GenericType item={['potata','tomata','onion','carrot']}/> */}
     {/* <GenericType item={[1,2,3,4,5,6,6,]}/> */}
     {/* <Ristricted value={10} isPositive={true} /> */}
     {/* <TemplateLiterals positions="center"/> */}
     {/* <ComponentProps name='Ankush' isLoggedIn/> */}

     {/* <Polymorphism as='h2'>Heading</Polymorphism>  
     <Polymorphism as='p'>Heading</Polymorphism>  
     <Polymorphism as='label' htmlFor='hr' >Heading</Polymorphism>   */}

    </div>
  );  

}

export default App;
