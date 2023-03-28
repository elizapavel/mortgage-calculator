import React from "react";

import SliderComponent from "./Common/SliderComponent";

export const SliderSelect = ({ data, setData }) => {
  const bankLimit = 10000;
  
  const onHomeValueChange = (e, value) => {
    setData({
      ...data,
      homeValue: value.toFixed(0),
      downPayment: (0.2 * value).toFixed(0),
      loanAmount: (0.8 * value).toFixed(0),
    });
  }

  const onDownPaymentChange = (e, value) => {
    setData({
      ...data,
      downPayment: value.toFixed(0),
      loanAmount: (data.homeValue - value).toFixed(0),
    })
  }

  const onLoanAmountChange = (e, value) => {
    setData({
      ...data,
      loanAmount: value.toFixed(0),
      downPayment: (data.homeValue - value).toFixed(0),
    })
  }

  const onInterestRateChange = (e, value) => {
    setData({
      ...data,
      interestRate: value,
    })
  }

  return <div>
    <SliderComponent 
      label="Home Value" 
      defaultValue={data.homeValue}
      value={data.homeValue}
      min={1000}
      max={bankLimit}
      steps={100}
      unit="$"
      amount={data.homeValue}
      onChange={onHomeValueChange}
    />
    <SliderComponent 
      label="Down Payment" 
      defaultValue={data.downPayment}
      value={data.downPayment}
      min={1000}
      max={bankLimit}
      steps={100}
      unit="$"
      amount={data.downPayment}
      onChange={onDownPaymentChange}
    />
    <SliderComponent 
      label="Loan Amount" 
      defaultValue={data.loanAmount} 
      value={data.loanAmount}
      min={1000}
      max={bankLimit}
      steps={100}
      unit="$"
      amount={data.loanAmount} 
      onChange={onLoanAmountChange}
    />
    <SliderComponent 
      label="Interest Rate" 
      defaultValue={data.interestRate} 
      value={data.interestRate}
      min={2}
      max={18}
      steps={0.5}
      unit="%"
      amount={data.interestRate} 
      onChange={onInterestRateChange}
    />
  </div>;
};

export default SliderSelect;
