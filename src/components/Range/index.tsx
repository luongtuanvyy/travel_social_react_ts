import ReactSlider from 'react-slider';
import { ArrowLeft, ArrowRight } from '~/assets/svg';
import { CurrencyVND } from '~/service/CurrentService';
import './index.css';

type RangeProps = {
  value: number[];
  handleRange: (value: number[]) => void;
};

const Range = (props: RangeProps) => {
  const { value, handleRange } = props;

  const renderThumb = (props: any, state: any) => (
    <div
      {...props}
      className="rounded-full relative focus:border-0 -translate-y-1"
    >
      <div className="bg-gray-300 w-3 h-3 rounded-full"></div>
      <p className="absolute top-0 -translate-y-5 -translate-x-0.5 text-white bg-gray-400 rounded-2xl">
        {state.index === 0 ? <ArrowLeft size={15} /> : <ArrowRight size={15} />}
      </p>
    </div>
  );

  const ariaValueText = (state: any) => `Thumb value ${state.valueNow}`;

  return (
    <div className="">
      <ReactSlider
        className="horizontal-slider h-1 bg-gray-500 rounded-full"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        step={1000}
        ariaValuetext={ariaValueText}
        renderThumb={renderThumb}
        onAfterChange={(value) => handleRange([value])}
        pearling
        min={0}
        max={25000000}
      />
      <p className="flex justify-between">
        <span className="p-2 px-4 mt-2 bg-gray-100 rounded-2xl flex flex-col">
          <span className="text-xs">Từ :</span>
          <span className="text-sm font-medium">
            {CurrencyVND(value[0])} <span className="text-xs">VNĐ</span>
          </span>
        </span>
        <span className="p-2 px-4 mt-2 bg-gray-100 rounded-2xl flex flex-col">
          <span className="text-xs">Đến :</span>
          <span className="text-sm font-medium">
            {CurrencyVND(value[1])} <span className="text-xs">VNĐ</span>
          </span>
        </span>
      </p>
    </div>
  );
};

export default Range;
