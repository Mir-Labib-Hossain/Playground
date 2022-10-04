import cn from "classnames";
import React from "react";
import styles from "./grid.module.scss";

type TCols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type TSpacing = "sm" | "md" | "lg";

type TJustifyContent = "flex-start" | "center" | "flex-end" | "space-between";

type TAlignItems = "flex-start" | "center" | "flex-end";

type Props = {
  children: React.ReactNode;
  container?: boolean;
  item?: boolean;
  xs?: TCols;
  sm?: TCols;
  md?: TCols;
  lg?: TCols;
  spacing?: TSpacing;
  justifyContent?: TJustifyContent;
  alignItems?: TAlignItems;
};

function Grid({ children, container, item, xs, sm, md, lg, spacing, justifyContent, alignItems, ...props }: Props & React.HTMLAttributes<HTMLDivElement>) {
    
    
  const classNames = cn({
    [styles.grid_container]: container,
    [styles.grid_item]: item,
    [styles[`grid_xs_${xs}`]]: xs,
    [styles[`grid_sm_${sm}`]]: sm,
    [styles[`grid_md_${md}`]]: md,
    [styles[`grid_lg_${lg}`]]: lg,
    [styles[`grid_spacing_${spacing}`]]: spacing,
    [styles[`grid_justifyContent_${justifyContent}`]]: justifyContent,
    [styles[`grid_alignItems_${alignItems}`]]: alignItems,
  });

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}

export default Grid;
