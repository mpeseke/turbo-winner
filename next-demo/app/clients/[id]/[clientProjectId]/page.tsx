export default function SelectedClientProjectPage({
  params,
}: {
  params: { id: string; clientProjectId: string };
}) {
  return (
    <div>
      <ul>
        <li>Client Id: {params.id}</li>
        <li>Project Id: {params.clientProjectId}</li>
      </ul>
    </div>
  );
}
