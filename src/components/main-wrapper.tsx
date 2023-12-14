export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="pt-5 px-5 max-w-xl mx-auto">{children}</main>;
}
