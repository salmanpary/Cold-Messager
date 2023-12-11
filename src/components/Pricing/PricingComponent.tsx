import React from "react";
import Paper from "@mui/material/Paper";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const PricingComponent = ({
  name,
  indian_original_price,
  indian_discount_price,
  originalprice,
  discountprice,
  features,
  button
}) => {
  return (
    <Paper elevation={3} sx={{ padding: 4, minWidth: {xs:300,lg:400} }}>
      <div className="text-3xl font-bold py-2 ">{name}</div>
      <div className="flex gap-x-3">

      <del className="font-bold text-xl text-[#ff2b33] pb-2">
        <span>{originalprice}$ /month</span>
      </del>
      <del className="font-bold text-xl text-[#ff2b33] pb-2">
        <span>{`(${indian_original_price}`}&#8377; /month{')'}</span>
      </del>

      </div>
      <div className="flex gap-x-3">

      <div className="font-bold text-xl text-green-700">{discountprice}$<span> /month</span></div>
      <div className="font-bold text-xl text-green-700">{`(${indian_discount_price}`}&#8377;<span> /month{')'}</span></div>
      </div>
      <ul className="py-2">
        {features.map((feature: String, index: number) => (
          <li className="flex" key={index}>
            <CheckCircleIcon className="text-[#ff40a5]" />
            <div className="ml-2 font-semibold" key={index}>
              {feature}
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center">

      {button}
      </div>
    </Paper>
  );
};

export default PricingComponent;
