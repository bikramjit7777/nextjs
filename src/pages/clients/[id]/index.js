import { useRouter } from "next/router";

function ClientProjectPage() {
  const router = useRouter();
  const loadProjectHandler = () => {
    //navigate away
    router.push("/clients/max/projecta");
  };
  return (
    <div>
      <h1>The Projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
export default ClientProjectPage;
