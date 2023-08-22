import { useState } from 'react';

import DrawerComponent from './Drawer';

function ProblemCard() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button type="button" onClick={showDrawer}>
        <div className="px-4 cursor-pointer mb-6 text-left">
          <p className="text-main_title_color text-sm font-medium">
            Averías o fallas en equipos
          </p>
          <p className="text-sm text-main_text_color">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et...
          </p>
        </div>
      </button>

      <DrawerComponent onClose={onClose} open={open} />
    </div>
  );
}

export default ProblemCard;
