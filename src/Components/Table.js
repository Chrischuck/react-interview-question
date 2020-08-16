import React, { useState } from 'react';
import cx from 'classnames';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

const Row = ({ index, style, data, selectedRow, onClick }) => {
  const rowData = data[index];

  return (
    <div
      className={cx({
        ListItemOdd: index % 2,
        ListItemEven: !(index % 2),
        selected: selectedRow === index,
      })}
      style={{ ...style, cursor: 'pointer' }}
      onClick={() => onClick(index)}
    >
      <img className="avatar" src={rowData.profile_picture} />
      <div style={{ width: 100 }}>{rowData.first_name}</div>
      <div style={{ width: 100 }}>{rowData.last_name}</div>
      <div style={{ width: 130 }}>{rowData.phone_number}</div>
      <div className="cell">{rowData.email}</div>
    </div>
  );
};

const Table = ({ items = [] }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  return (
    <div className="list-container">
      <AutoSizer>
        {({ height, width }) => (
          <List
            className="List"
            height={height}
            width={width}
            itemSize={35}
            itemCount={items.length}
            itemData={items}
          >
            {(props) => (
              <Row
                selectedRow={selectedRow}
                onClick={setSelectedRow}
                {...props}
              />
            )}
          </List>
        )}
      </AutoSizer>
    </div>
  );
};

export default Table;
