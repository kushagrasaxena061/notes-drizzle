import { getData } from "@/actions/todoActions";
import Todos from "@/components/Todos";

export default async function Home() {
  const data = await getData();
  return (
    <main className="flex items-center justify-between">
      <Todos todos={data} />
    </main>
  );
}
