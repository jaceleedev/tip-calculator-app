import { ChangeEvent } from 'react';
import Input from '../Input';

interface PeopleInputProps {
  value: string;
  onChange: (value: string) => void;
}

function PeopleInput({ value, onChange }: PeopleInputProps) {
  const isValid = value === '' || Number(value) > 0;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (newValue === '0') {
      onChange('0');
    } else if (/^\d*$/.test(newValue)) {
      onChange(newValue.replace(/^0+/, ''));
    }
  };

  return (
    <div>
      <label
        htmlFor="people-input"
        className="block text-title text-dark-grayish-cyan mb-[6px]"
      >
        Number of People
      </label>
      <Input
        id="people-input"
        iconConfig={{
          src: '/images/icon-person.svg',
          width: 13,
          height: 16,
          marginLeft: 17,
        }}
        isValid={isValid}
        errorMessage="Can't be zero"
        placeholder="0"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default PeopleInput;
