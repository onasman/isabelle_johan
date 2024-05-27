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
      <h1 className="my-10  text-4xl text-primary md:text-5xl">{title}</h1>
      {children}
    </section>
  )
}
