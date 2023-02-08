import PropTypes from "prop-types";
import { Link } from "react-router-dom";

interface DealCardProps {
  counterParty: string;
  amount: Number;
  royalty: Number;
  imageUrl: string;
}

function DealCard(props: DealCardProps) {
  return (
    <div className="bg-foreground flex p-6 rounded-xl shadow-inner shadow-primary">
      <img
        src={props.imageUrl}
        alt={`${props.counterParty} deal card`}
        className="w-1/5 aspect-square object-cover rounded-md bg-gradient-to-b from-emerald-500 to-green-900"
      />
      <div className="flex flex-col px-5 gap-y-3">
        <p className="text-3xl font-mono tracking-tighter">
          {props.counterParty}
        </p>
        <p>Amount : {props.amount.toString()}</p>
        <p>Royalty : {props.royalty.toString()}</p>
        <Link to={`/deal/${0}`} className="btn-3 px-3 py-2 mt-3"> View Details </Link>
      </div>
    </div>
  );
}

DealCard.propTypes = {
  counterParty: PropTypes.string,
  amount: PropTypes.number,
  royalty: PropTypes.number,
  imageUrl: PropTypes.string,
};

export default DealCard;
