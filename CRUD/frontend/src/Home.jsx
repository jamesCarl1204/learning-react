import styles from './pages/home.module.css'

function Home() {
    
    return(
        <>
        <div className={styles.pages-container}>
            <form className={styles.form}>
                <input/>
                <input/>
                <input/>
            </form>

            <table className={styles.table}>
                <thead>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>address</th>
                </thead>
            </table>
        </div>
        </>
    )
}
export default Home