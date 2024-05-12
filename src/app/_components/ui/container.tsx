const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="top-16 mx-auto flex max-w-5xl flex-col overflow-visible pt-16">
      {children}
    </main>
  )
}

export default Container
