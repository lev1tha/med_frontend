import { useState } from "react";
import { CheckBoxCart } from "../inputs";

const SidebarValue = ({ value, index }: any) => {
  const [checked, setChecked] = useState(false);
  const handleChangeChecked = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <div
        className="checked flex gap-6 font-sofia mt-2 text-xl font-medium"
        onClick={handleChangeChecked}
      >
        {value.id === index ? <CheckBoxCart checked={checked} /> : (<input type="radio"/>)}
        {value}
      </div>
    </div>
  );
};

export default SidebarValue;
