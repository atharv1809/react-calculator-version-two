import styles from "./ButtonsContainer.module.css";
function buttonsContainer({displayText})
{
    const icons=["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."];
    return <div className={styles.buttonsContainer}>
        {
            icons.map((it)=>(<button className={styles.icons} onClick={()=>displayText(it)}>{it}</button>))
        }
  </div>
}
export default buttonsContainer;