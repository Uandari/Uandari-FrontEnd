
import HeadBoard from './modules/HeadBoard';
import RowBoard from './modules/RowBoard';

export default function Board() {
  return (
    <div className="h-full grid grid-rows-[7]">
        <div className="row-span-1 border-t border-main_color">
        <div>

          {/* <HeadBoard days=20 />
          <RowBoard days={monthInfo.days} month={monthInfo.month}></RowBoard> */}
        </div>
          </div>
    </div>
  );
}
