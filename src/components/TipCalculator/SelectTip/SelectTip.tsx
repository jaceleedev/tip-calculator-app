'use client';

import { ChangeEvent, useState } from 'react';
import Button from '../Button';
import Input from '../Input';

interface SelectTipProps {
  value: string;
  onChange: (value: string) => void;
}

function SelectTip({ value, onChange }: Readonly<SelectTipProps>) {
  const [selectedButton, setSelectedButton] = useState<string>('');

  const handleButtonClick = (tip: string) => {
    setSelectedButton(tip);
    onChange(tip);
  };

  const handleCustomChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (newValue === '' || /^\d+$/.test(newValue)) {
      onChange(newValue);
    }
  };

  const handleCustomFocus = () => {
    setSelectedButton('');
    onChange('');
  };

  return (
    <div>
      <p className="text-title text-dark-grayish-cyan mb-4">Select Tip %</p>
      <div className="grid grid-cols-2 grid-rows-3 gap-x-[16.56px] gap-y-4 lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-[14px]">
        {['5', '10', '15', '25', '30'].map((tip) => (
          <Button
            key={tip}
            label={`${tip}%`}
            variant="primary"
            isButtonSelected={selectedButton === tip}
            onClick={() => handleButtonClick(tip)}
          />
        ))}
        <Input
          isValid={true}
          placeholder="Custom"
          value={selectedButton === '' ? value : ''}
          onFocus={handleCustomFocus}
          onChange={handleCustomChange}
        />
      </div>
    </div>
  );
}

export default SelectTip;
