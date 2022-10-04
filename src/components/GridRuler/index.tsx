import cn from "classnames";
import styles from "./gridRuler.module.scss";

type Props = {
  spacing?: "sm" | "md" | "lg";
};

const GridRuler = ({ spacing }: Props) => {
  const classNames = cn(styles.gridRuler, {
    [styles[`gridRuler_spacing_${spacing}`]]: spacing,
  });
  return (
    <div className={classNames}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13].map((num: number) => (
        <div className={styles.gridRuler_item} key={num}></div>
      ))}
    </div>
  );
};

export default GridRuler;
