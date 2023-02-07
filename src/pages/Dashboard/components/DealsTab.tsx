import React from "react";
import PropTypes from "prop-types";
import DealCard from "./DealCard";

interface DealsTabProps {
  deals: {
    counterParty: string;
    amount: Number;
    royalty: Number;
    imageUrl: string;
  }[];
}

function DealsTab(props: DealsTabProps) {
  return (
    <div className="h-full flex flex-col gap-y-4 p-4 overflow-y-scroll scrollbar-primary">
      <div className="">
        <div className="h-16"></div>
      </div>
      {props.deals.map((deal) => (
        <DealCard
          counterParty={deal.counterParty}
          amount={deal.amount}
          royalty={deal.royalty}
          imageUrl={deal.imageUrl}
          key={props.deals.indexOf(deal)}
        />
      ))}
    </div>
  );
}

DealsTab.propTypes = {
  deals: PropTypes.arrayOf(PropTypes.object),
};

export default DealsTab;
