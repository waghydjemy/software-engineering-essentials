import { Link } from "solid-app-router"
import styles from './App.module.css';
import software_engineering_essentials from './data'


function App() {
  return (

    <div className={styles.container} >
      <h1 >
        The Essential Knowledge Map for Software Engineers
      </h1>
      {software_engineering_essentials.map((element, index) => {
        return (
          <div className={styles.card} >
            <Link href={`/SingleItem/${index}`}  >
              <p>
                {element.name}
              </p>
              <ul>
                {element.items.map((item) => {
                  return <li>
                    {item}
                  </li>
                })}
              </ul>
            </Link>
          </div>
        )
      })}
    </div>
  );
}

export default App;
