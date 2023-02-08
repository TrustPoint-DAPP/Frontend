interface NftCardProps {
  id: number;
  name: string;
  quantity: number;
  imageUrl: string;
}

// function NftCard(props: NftCardProps) {
//   return (
//     <div className="flex flex-col w-56 overflow-hidden h-max rounded-lg bg-foreground gap-y-4 items-center p-4">
//       <img
//         src={props.imageUrl}
//         alt={`${props.id} ${props.name} NFT Card`}
//         className="aspect-square w-full object-cover bg-primary bg-opacity-20 rounded-lg"
//       />
//       <p className="truncate font-mono text-2xl font-thin tracking-tight"> {props.name} </p>
//       <p> Supply : <span className="text-primary"> {props.quantity} </span> </p>
//       <button className="flex items-center btn-3 p-2">
//         View
//         <span className="material-icons">&#xe89e;</span>
//       </button>
//     </div>
//   );
// }

function NftCardProps(props:NftCardProps)

export default NftCard;
