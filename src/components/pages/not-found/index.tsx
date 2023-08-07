import NotFoundIcon from '@assets/not-found.svg';

export default function NotFound() {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <img src={NotFoundIcon} alt="not-found" className="w-3/4 lg:w-1/2" />
    </main>
  );
}
