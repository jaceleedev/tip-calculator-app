import { ChangeEvent } from 'react';
import Input from '../Input';

interface BillInputProps {
  value: string;
  onChange: (value: string) => void;
}

function BillInput({ value, onChange }: Readonly<BillInputProps>) {
  const isValid = value === '' || Number(value) > 0;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (/^[1-9]*\.?\d*$/.test(newValue)) {
      onChange(newValue.replace(/^0+/, ''));
    }
  };

  return (
    <div>
      <label
        htmlFor="bill-input"
        className="block text-title text-dark-grayish-cyan mb-[6px]"
      >
        Bill
      </label>
      <Input
        id="bill-input"
        iconConfig={{
          src: '/images/icon-dollar.svg',
          width: 11,
          height: 17,
          marginLeft: 19.26,
        }}
        isValid={isValid}
        errorMessage="Invalid bill amount"
        placeholder="0"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default BillInput;
