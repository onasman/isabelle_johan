export const Section = ({
  children,
  id,
  title,
}: {
  id: string
  title: string
  children: React.ReactNode
}) => {
  return (
    <section id={id} className="flex flex-col items-center">
      <h1 className="my-10 text-5xl text-primary">{title}</h1>
      {children}
    </section>
  )
}
