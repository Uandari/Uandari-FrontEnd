type DayQuantityProps = {
  shiftA: number;
  shiftB: number;
  shiftC: number;
};

function DayQuantity({ shiftA, shiftB, shiftC }: DayQuantityProps) {
  return (
    <div className="flex justify-center items-center">
      <div>
        <p className="font-medium text-main_gray">{shiftA}</p>
        <p className="font-medium text-main_gray">{shiftB}</p>
        <p className="font-medium text-main_gray">{shiftC}</p>
      </div>
    </div>
  );
}

export default DayQuantity;
