import styles from './Headers/headers.module.css'

function Headers() {

    return(
        <>
        <header className={styles.header}>
            <h1 className={styles.logo}>My CRUD</h1>
        </header>
        </>
    )
}

export default Headers