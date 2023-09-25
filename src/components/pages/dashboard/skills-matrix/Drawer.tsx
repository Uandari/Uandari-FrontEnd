import { useState } from 'react';

import { Drawer, DrawerProps } from 'antd';

export default function DrawerComponent() {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right');

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      title="Drawer with extra actions"
      placement={placement}
      width={500}
      onClose={onClose}
      open={open}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
}
