import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";
function App()
{
  let [calVal,setCalVal]=useState("");
  // const displayText = (buttonText) => CAN ALSO USE THIS
  // {
  //   if(buttonText==='C'){
  //     setCalVal('');
  //   }
  //   else if(buttonText==='='){
  //     let ans=eval(calVal);
  //     setCalVal(ans);
  //   }
  //   else{
  //     const newText=calVal+buttonText;
  //     setCalVal(newText);
  //   }
  // };
  function displayText(buttonText)
  {
    if(buttonText==='C'){
      setCalVal('');
    }
    else if(buttonText==='='){
      let ans=eval(calVal);
      setCalVal(ans);
    }
    else{
      const newText=calVal+buttonText;
      setCalVal(newText);
    }
  }
  return <center>
      <div className={styles.calculator}>
        <Display calVal={calVal}></Display>
        <ButtonsContainer displayText={displayText}></ButtonsContainer>
    </div>
  </center>
}
export default App;