'use client';

import { useCallback, useMemo, useState } from 'react';
import BillInput from './BillInput';
import PeopleInput from './PeopleInput/PeopleInput';
import SelectTip from './SelectTip';
import Summary from './Summary';

function TipCalculator() {
  const [bill, setBill] = useState<string>('');
  const [tipPercentage, setTipPercentage] = useState<string>('');
  const [peopleCount, setPeopleCount] = useState<string>('');

  const isInputValid = useMemo(() => {
    return (
      bill !== '' &&
      parseFloat(bill) > 0 &&
      tipPercentage !== '' &&
      parseFloat(tipPercentage) > 0 &&
      peopleCount !== '' &&
      parseInt(peopleCount) > 0
    );
  }, [bill, tipPercentage, peopleCount]);

  const hasChanges = useMemo(() => {
    return bill !== '' || tipPercentage !== '' || peopleCount !== '';
  }, [bill, tipPercentage, peopleCount]);

  const calculateTipAmount = useCallback(() => {
    if (!isInputValid) {
      return 0;
    }

    const billAmount = Number(bill);
    const people = Number(peopleCount);
    const tipPercent = Number(tipPercentage);

    return Number(((billAmount * (tipPercent / 100)) / people).toFixed(2));
  }, [bill, tipPercentage, peopleCount, isInputValid]);

  const calculateTotalPerPerson = useCallback(() => {
    if (!isInputValid) {
      return 0;
    }

    const billAmount = Number(bill);
    const people = Number(peopleCount);

    return Number((billAmount / people + calculateTipAmount()).toFixed(2));
  }, [bill, peopleCount, isInputValid, calculateTipAmount]);

  const handleReset = useCallback(() => {
    setBill('');
    setTipPercentage('');
    setPeopleCount('');
  }, []);

  return (
    <article className="flex flex-col items-center w-[375px] px-6 py-8 rounded-[25px] bg-white shadow-[0_32px_43px_0_rgba(79,166,175,0.20)] lg:flex-row lg:w-[920px] lg:p-8 lg:pl-12">
      <h1 className="sr-only">Tip Calculator App</h1>
      <div className="flex flex-col gap-y-8 px-2 mb-8 lg:w-[379px] lg:gap-y-10 lg:px-0 lg:mt-[13px] lg:mb-4 lg:mr-12">
        <BillInput value={bill} onChange={setBill} />
        <SelectTip value={tipPercentage} onChange={setTipPercentage} />
        <PeopleInput value={peopleCount} onChange={setPeopleCount} />
      </div>
      <Summary
        tipAmount={calculateTipAmount()}
        totalPerPerson={calculateTotalPerPerson()}
        onReset={handleReset}
        isResetDisabled={!hasChanges}
      />
    </article>
  );
}

export default TipCalculator;
