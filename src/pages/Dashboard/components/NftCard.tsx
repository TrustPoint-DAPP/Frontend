interface NftCardProps {
  id: number;
  name: string;
  quantity: number;
  imageUrl: string;
}

function NftCard(props: NftCardProps) {
  return (
    <div className="flex flex-col">
      <img src={props.imageUrl} alt={`${props.id} ${props.name} NFT Card`} />
      <p> {props.name} </p>
    </div>
  );
}

export default NftCard;
