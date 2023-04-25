import styles from './Loader.module.css';
export function Spin() {
    return (
        <div className={`${styles.spin} w-6 h-6 animate-spin`}></div>
    );
}
