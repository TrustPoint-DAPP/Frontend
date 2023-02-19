export default function ErrorPage({ error }: { error: string }) {
  return (
    <div className="text-2xl font-semibold italic justify-center items-center">
      {error}
    </div>
  );
}
