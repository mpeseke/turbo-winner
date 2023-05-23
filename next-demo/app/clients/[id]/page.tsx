"use client";

import { useRouter } from "next/navigation";

export default function ClientPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const loadProjectHandler = () => {
    router.push(`/clients/${params.id}/projecta`);
  };

  return (
    <div>
      <h1>{params.id} Client Page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
