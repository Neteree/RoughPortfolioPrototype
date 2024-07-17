function Page({ title, children }) {
  return (
    <main>
      <h1 className="title">{title}</h1>
      {children}
    </main>
  );
}

export default Page;
