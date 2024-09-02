import Page from "../Page/Home.jsx";
import styles from "./Pagecontainer.module.css"

function Pagecontainer(){
    return(<>
    <main class="l-main"></main>
        <div className={styles.container}> 
            <Page></Page>
        </div>
        </>
    );
        
}

export default Pagecontainer;
