import { ChangeEvent, ReactEventHandler } from "react";
import { GenericCodeAndNameObject } from "../../types/types";
import "./Dropdown.css";

function Dropdown<T extends GenericCodeAndNameObject>({
  items,
  selectedItem,
  handleSelectedItemChange,
  className,
}: {
  items: T[];
  selectedItem?: T;
  handleSelectedItemChange?: (arg0: T) => void;
  className?: string;
}) {
  let onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    if (handleSelectedItemChange) {
      handleSelectedItemChange(
        items.filter((item) => item.code === event.target.value)[0]
      );
    }
  };

  return items.length === 0 ? (
    <span className={className}>No items to display</span>
  ) : (
    <select
      className={className}
      onChange={onChangeHandler}
      value={selectedItem?.code}
    >
      {items.map((item) => (
        <option value={item.code} key={item.code}>
          {item.name}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
