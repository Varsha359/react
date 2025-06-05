import styles from './Square.module.css'

interface SquareProps {
    value: string;
    onSquareClick: any
}

const Square: React.FC<SquareProps>= ({value,onSquareClick}) => {
    
    return (
        <button className={styles.square} onClick={onSquareClick}>
            {value}
        </button>
    )
}

export default Square;

