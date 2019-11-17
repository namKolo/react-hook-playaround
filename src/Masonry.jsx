import _ from 'lodash';
import React from 'react';
import useMasonryLayout from 'use-masonry-layout';

type Props = {
  children: React.Node,
  gap: number,
  columnCount: number,
  columnWidth: number,
  containerStyle?: Object
};

const Masonry = ({ children, gap, columnCount, columnWidth, containerStyle }: Props) => {
  const { childPositionList, containerRef } = useMasonryLayout(children, {
    columnCount,
    columnWidth,
    gap
  });
  const containerWidth = columnWidth * columnCount + gap * (columnCount - 1);

  return (
    <div
      style={{ width: containerWidth, position: 'relative', ...containerStyle }}
      ref={containerRef}
    >
      {_.map(children, (child, index) => {
        return <Cell style={{ ...childPositionList[index], position: 'absolute' }}>{child}</Cell>;
      })}
    </div>
  );
};
export default Masonry;

const Cell = ({ columnGap, style, children }) => <div style={{ ...style }}>{children}</div>;
