import { useState } from 'react';

import DrawerComponent from './Drawer';

type ProblemCardProps = {
  id: number;
  title: string;
  description: string;
};

function ProblemCard({ id, title, description }: ProblemCardProps) {
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
        <div className="px-4 cursor-pointer mb-3 text-left">
          <p className="text-main_title_color text-sm font-medium">{title}</p>
          <p className="text-sm text-main_text_color">{description}</p>
        </div>
      </button>

      <DrawerComponent onClose={onClose} open={open} />
    </div>
  );
}

export default ProblemCard;
