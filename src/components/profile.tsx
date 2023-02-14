export function Profile(props: { name: string }) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Bio profile story.</p>
    </div>
  );
}
