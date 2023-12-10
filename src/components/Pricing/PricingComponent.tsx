import React from "react";
import Paper from "@mui/material/Paper";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const PricingComponent = ({
  name,
  originalprice,
  discountprice,
  features,
  button
}) => {
  return (
    <Paper elevation={3} sx={{ padding: 4, minWidth: {xs:300,lg:400} }}>
      <div className="text-3xl font-bold py-2 ">{name}</div>
      <del className="font-bold text-xl text-[#ff2b33] pb-2">
        <span>{originalprice}$ /month</span>
      </del>
      <div className="font-bold text-xl text-green-700">{discountprice}$<span> /month</span></div>
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
