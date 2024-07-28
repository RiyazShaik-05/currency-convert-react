import "./CurrencyConverter.css";
import { useState, useEffect } from 'react';

function CurrencyConverter() {
  const countries = {
    Andorra: { countryCode: 'AD', currencyCode: 'EUR' },
    Australia: { countryCode: 'AU', currencyCode: 'AUD' },
    Austria: { countryCode: 'AT', currencyCode: 'EUR' },
    Belgium: { countryCode: 'BE', currencyCode: 'EUR' },
    Brazil: { countryCode: 'BR', currencyCode: 'BRL' },
    Bulgaria: { countryCode: 'BG', currencyCode: 'BGN' },
    Canada: { countryCode: 'CA', currencyCode: 'CAD' },
    China: { countryCode: 'CN', currencyCode: 'CNY' },
    Cyprus: { countryCode: 'CY', currencyCode: 'EUR' },
    CzechRepublic: { countryCode: 'CZ', currencyCode: 'CZK' },
    Denmark: { countryCode: 'DK', currencyCode: 'DKK' },
    Ecuador: { countryCode: 'EC', currencyCode: 'USD' },
    ElSalvador: { countryCode: 'SV', currencyCode: 'USD' },
    Estonia: { countryCode: 'EE', currencyCode: 'EUR' },
    Finland: { countryCode: 'FI', currencyCode: 'EUR' },
    France: { countryCode: 'FR', currencyCode: 'EUR' },
    Germany: { countryCode: 'DE', currencyCode: 'EUR' },
    Greece: { countryCode: 'GR', currencyCode: 'EUR' },
    Hungary: { countryCode: 'HU', currencyCode: 'HUF' },
    Iceland: { countryCode: 'IS', currencyCode: 'ISK' },
    India: { countryCode: 'IN', currencyCode: 'INR' },
    Indonesia: { countryCode: 'ID', currencyCode: 'IDR' },
    Ireland: { countryCode: 'IE', currencyCode: 'EUR' },
    Israel: { countryCode: 'IL', currencyCode: 'ILS' },
    Italy: { countryCode: 'IT', currencyCode: 'EUR' },
    Japan: { countryCode: 'JP', currencyCode: 'JPY' },
    Kiribati: { countryCode: 'KI', currencyCode: 'AUD' },
    KoreaSouth: { countryCode: 'KR', currencyCode: 'KRW' },
    Latvia: { countryCode: 'LV', currencyCode: 'EUR' },
    Liechtenstein: { countryCode: 'LI', currencyCode: 'CHF' },
    Lithuania: { countryCode: 'LT', currencyCode: 'EUR' },
    Luxembourg: { countryCode: 'LU', currencyCode: 'EUR' },
    Malaysia: { countryCode: 'MY', currencyCode: 'MYR' },
    Malta: { countryCode: 'MT', currencyCode: 'EUR' },
    MarshallIslands: { countryCode: 'MH', currencyCode: 'USD' },
    Mexico: { countryCode: 'MX', currencyCode: 'MXN' },
    Micronesia: { countryCode: 'FM', currencyCode: 'USD' },
    Monaco: { countryCode: 'MC', currencyCode: 'EUR' },
    Montenegro: { countryCode: 'ME', currencyCode: 'EUR' },
    Nauru: { countryCode: 'NR', currencyCode: 'AUD' },
    Netherlands: { countryCode: 'NL', currencyCode: 'EUR' },
    NewZealand: { countryCode: 'NZ', currencyCode: 'NZD' },
    Norway: { countryCode: 'NO', currencyCode: 'NOK' },
    Palau: { countryCode: 'PW', currencyCode: 'USD' },
    Philippines: { countryCode: 'PH', currencyCode: 'PHP' },
    Poland: { countryCode: 'PL', currencyCode: 'PLN' },
    Portugal: { countryCode: 'PT', currencyCode: 'EUR' },
    Romania: { countryCode: 'RO', currencyCode: 'RON' },
    SanMarino: { countryCode: 'SM', currencyCode: 'EUR' },
    Singapore: { countryCode: 'SG', currencyCode: 'SGD' },
    Slovakia: { countryCode: 'SK', currencyCode: 'EUR' },
    Slovenia: { countryCode: 'SI', currencyCode: 'EUR' },
    SouthAfrica: { countryCode: 'ZA', currencyCode: 'ZAR' },
    Spain: { countryCode: 'ES', currencyCode: 'EUR' },
    Sweden: { countryCode: 'SE', currencyCode: 'SEK' },
    Switzerland: { countryCode: 'CH', currencyCode: 'CHF' },
    Thailand: { countryCode: 'TH', currencyCode: 'THB' },
    TimorLeste: { countryCode: 'TL', currencyCode: 'USD' },
    Turkey: { countryCode: 'TR', currencyCode: 'TRY' },
    Tuvalu: { countryCode: 'TV', currencyCode: 'AUD' },
    UnitedKingdom: { countryCode: 'GB', currencyCode: 'GBP' },
    UnitedStates: { countryCode: 'US', currencyCode: 'USD' },
    VaticanCity: { countryCode: 'VA', currencyCode: 'EUR' }
  };

  const [fromFlag, setFromFlag] = useState("https://flagsapi.com/AD/flat/64.png");
  const [toFlag, setToFlag] = useState("https://flagsapi.com/AD/flat/64.png");
  const [amount, setAmount] = useState("");
  const [fromCountryCurrencyCode, setFromCountryCurrencyCode] = useState("EUR");
  const [toCountryCurrencyCode, setToCountryCurrencyCode] = useState("EUR");
  const [result, setResult] = useState(1);

  useEffect(() => {
    if (fromCountryCurrencyCode && toCountryCurrencyCode) {
      calculateExchange();
    }
  });

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const FromhandleOnChange = (event) => {
    const selectedCountry = event.target.value;
    const countryData = countries[selectedCountry];
    if (countryData) {
      setFromFlag(`https://flagsapi.com/${countryData.countryCode}/flat/64.png`);
      setFromCountryCurrencyCode(countryData.currencyCode);
    }
  };

  const TohandleOnChange = (event) => {
    const selectedCountry = event.target.value;
    const countryData = countries[selectedCountry];
    if (countryData) {
      setToFlag(`https://flagsapi.com/${countryData.countryCode}/flat/64.png`);
      setToCountryCurrencyCode(countryData.currencyCode);
    }
  };

  const calculateExchange = async () => {
    if(amount<=0){
      setAmount(1);
    }
    if(fromCountryCurrencyCode===toCountryCurrencyCode){
      setResult(amount);
    }else if(fromCountryCurrencyCode===toCountryCurrencyCode && amount===""){
      setResult(1);
    }else{
      try {
        const amountToUse = amount === "" || amount <= 0 ? 1 : amount;
        let currUrl = `https://api.frankfurter.app/latest?amount=${amountToUse}&from=${fromCountryCurrencyCode}&to=${toCountryCurrencyCode}`;
        let response = await fetch(currUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        let data = await response.json();
        if (data && data.rates && data.rates[toCountryCurrencyCode]) {
          setResult(data.rates[toCountryCurrencyCode]);
        } else {
          setResult("Unavailable");
        }
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
        setResult("Error");
      }
    }
  };

  return (
    <>
      <div className="container">
        <h2>Currency Converter</h2>
        <div>
          <input 
            type="number" 
            className="amount-input" 
            placeholder='Amount here..' 
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <h4>From</h4>
        <div className='dropdown'>
          <img src={fromFlag} alt='respective-country-flag' />
          <select className='dropdown' onChange={FromhandleOnChange}>
            {Object.keys(countries).map(countryName => {
              const countryData = countries[countryName];
              return (
                <option key={countryData.countryCode} value={countryName}>
                  {countryName}
                </option>
              );
            })}
          </select>
        </div>
        <h4>To</h4>
        <div className='dropdown'>
          <img src={toFlag} alt='respective-country-flag' />
          <select className='dropdown' onChange={TohandleOnChange}>
            {Object.keys(countries).map(countryName => {
              const countryData = countries[countryName];
              return (
                <option key={countryData.countryCode} value={countryName}>
                  {countryName}
                </option>
              );
            })}
          </select>
        </div>

        <p>{amount === "" ? 1 : amount} {fromCountryCurrencyCode} = {result?result:1} {toCountryCurrencyCode}</p>
        <p className="note">Note: API exchnage rates may not be accurate to current data :)</p>
      </div>
    </>
  );
}

export default CurrencyConverter;
