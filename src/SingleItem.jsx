import styles from './App.module.css';
import { useParams } from "solid-app-router"
import software_engineering_essentials from './data'

const SingleItem = () => {
    const { id } = useParams();
    let element = software_engineering_essentials[id]
    return (
        <div className={styles.container} >
            <div className={styles.card} >
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
            </div>
        </div>
    )
}

export default SingleItem