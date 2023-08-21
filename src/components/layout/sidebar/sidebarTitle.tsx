

type SidebarTitleProps = {
    sidebarTitle: string
};
  
  export default function SidebarTitle({
      sidebarTitle
    }: SidebarTitleProps) {
        return (
        <h4 className="text-main_gray mt-4 mb-2 text-sm uppercase font-bold">{sidebarTitle}</h4>
    );
  }
  
  SidebarTitle.defaultProps = {
    sidebarTitle: undefined,
  };
