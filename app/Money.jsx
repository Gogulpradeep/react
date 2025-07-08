import { useEffect, useState } from "react";
import axios from "axios";

function Money() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    const getExchangeRate = async () => {
      try {
 const url = `https://open.er-api.com/v6/latest/${fromCurrency}`;

        const response = await axios.get(url);
        setExchangeRate(response.data.rates[toCurrency]);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    };
    getExchangeRate();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (exchangeRate !== null) {
      setConvertedAmount((amount * exchangeRate).toFixed(2));
    }
  }, [amount, exchangeRate]);

  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value);
    setAmount( value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };


  return (
<div>
    <h1>  </h1>
        <div className="input-container">
            <label htmlFor="amt"></label>
            <input type="number" id="amt"
            value={amount}
            onChange={handleAmountChange} />

        </div>
        <div className="input-container">
            <label htmlFor="fromCurrency">
            </label>
                <select  id="fromCurrency" value={fromCurrency} onChange={handleFromCurrencyChange}>

                          <option value="USD">USD - United States Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound Sterling</option>
          <option value="JPY">JPY - Japanese Yen</option>
          <option value="AUD">AUD - Australian Dollar</option>
          <option value="CAD">CAD - Canadian Dollar</option>
          <option value="CNY">CNY - Chinese Yuan</option>
          <option value="INR">INR - Indian Rupee</option>
          <option value="BRL">BRL - Brazilian Real</option>
          <option value="ZAR">ZAR - South African Rand</option>
                </select>
      



        </div>

        <div>
            <label htmlFor="toCurrency"></label>
            <select id="toCurrency" value={toCurrency} onChange={ handleToCurrencyChange}>
            <option value="USD">USD - United States Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound Sterling</option>
          <option value="JPY">JPY - Japanese Yen</option>
          <option value="AUD">AUD - Australian Dollar</option>
          <option value="CAD">CAD - Canadian Dollar</option>
          <option value="CNY">CNY - Chinese Yuan</option>
          <option value="INR">INR - Indian Rupee</option>
          <option value="BRL">BRL - Brazilian Real</option>
          <option value="ZAR">ZAR - South African Rand</option>

            </select>
        </div>
        <div>
          <h2>Converted Amount: {convertedAmount ? convertedAmount : "Loading..."} {toCurrency}</h2>
        </div>
  
</div>
  )
}

export default Money
