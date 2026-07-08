import Header from "../layout/Header";

export default function Dashboard() {
  return (
    <>
      <main className="mx-auto min-h-screen w-full max-w-[430px] bg-stone-50 px-5 py-6">
        <Header username="Sepide" reviewCards={12} totalCards={245} />
      </main>
    </>
  )
}
