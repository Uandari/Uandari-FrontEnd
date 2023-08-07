type DashboardContainerProps = {
  children: React.ReactNode;
};

export default function DashboardContainer({
  children,
}: DashboardContainerProps) {
  return (
    <main className="w-full p-5 overflow-y-auto h-outlet">{children}</main>
  );
}
