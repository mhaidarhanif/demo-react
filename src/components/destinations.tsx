export function Destinations() {
  const dataDestinations = [
    { _id: "0", name: "Bali" },
    { _id: "1", name: "Bandung" },
  ];

  return (
    <ul>
      {dataDestinations.map((destination) => {
        return <ListItem key={destination._id} />;
      })}
    </ul>
  );
}

function ListItem() {
  return <li className="font-bold">Text</li>;
}
