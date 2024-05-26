const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="top-16 mx-auto flex max-w-5xl flex-col items-center overflow-visible px-6 pb-32 pt-12 lg:px-0">
      {children}
    </main>
  )
}

export default Container
