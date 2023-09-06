import styles from "./css/styles.module.css";

export default () =>{
    let status = true;
    return (
        <h2 className={status ? styles.on:styles.off}>
            Current status: {status ? "ON":"OFF"}
        </h2>
    )
}