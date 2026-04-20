export default function Dashboard() {
  const user = localStorage.getItem("user");

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
      <h1 className="text-3xl">
        Welcome, {user}
      </h1>
    </div>
  );
}