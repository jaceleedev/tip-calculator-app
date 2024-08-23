import Button from '../Button';

interface SummaryItemProps {
  label: string;
  value: number;
  marginBottom?: string;
}

interface SummaryProps {
  tipAmount: number;
  totalPerPerson: number;
  onReset: () => void;
  isResetDisabled: boolean;
}

function SummaryItem({
  label,
  value,
  marginBottom = 'mb-5',
}: SummaryItemProps) {
  return (
    <div
      className={`flex justify-between items-center h-12 ${marginBottom} lg:h-[71px]`}
    >
      <div>
        <p className="text-title text-white">{label}</p>
        <p className="text-caption text-grayish-cyan">/ person</p>
      </div>
      <p className="text-display text-strong-cyan">${value.toFixed(2)}</p>
    </div>
  );
}

function Summary({
  tipAmount,
  totalPerPerson,
  onReset,
  isResetDisabled,
}: SummaryProps) {
  return (
    <section className="w-full pt-[37px] px-[23px] pb-6 rounded-[15px] bg-very-dark-cyan lg:w-[413px] lg:p-10">
      <SummaryItem
        label="Tip Amount"
        value={tipAmount}
        marginBottom="mb-[25px]"
      />
      <SummaryItem
        label="Total"
        value={totalPerPerson}
        marginBottom="mb-[122px]"
      />
      <Button
        label="RESET"
        variant="secondary"
        onClick={onReset}
        disabled={isResetDisabled}
      />
    </section>
  );
}

export default Summary;
