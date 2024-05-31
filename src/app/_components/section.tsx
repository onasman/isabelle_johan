import Image from 'next/image'

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
    <section id={id} className="mt-12 flex flex-col items-center">
      {/* <h1 className="my-10  text-4xl text-primary md:text-5xl">{title}</h1> */}
      {children}
      <Image
        className="my-8"
        src="flowers_05.svg"
        alt="flower"
        width={100}
        height={100}
      />
    </section>
  )
}
