const { useState, useMemo } = React;

export function CurrencyConverter() {
  const currencyConvert = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7,
  };

  const [currency, setCurrency] = useState(1);
  const [currency1, setCurrency1] = useState("usd");
  const [currency2, setCurrency2] = useState("eur");

  const currencyConversion = (curr1, curr2, curr) => {
    curr1 = curr1.toUpperCase();
    curr2 = curr2.toUpperCase();
    return `${(
      (curr / currencyConvert[curr1]) *
      currencyConvert[curr2]
    ).toFixed(2)} ${curr2.toUpperCase()}`;
  };

  const convertedAmount = useMemo(() => {
    return currencyConversion(currency1, currency2, currency);
  }, [currency1, currency]);

  return (
    <div className="wrapper">
      <h1>Currency Converter</h1>
      <p className="info">
        {currency1.toUpperCase()} to {currency2.toUpperCase()} conversion
      </p>
      <input
        type="number"
        value={currency}
        onChange={(e) => setCurrency(Number(e.target.value))}
      />
      <label>Start Currency:</label>

      <select
        name="start-currency"
        onChange={(e) => setCurrency1(e.target.value)}
      >
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="gbp">GBP</option>
        <option value="jpy">JPY</option>
      </select>

      <label>Target Currency:</label>
      <select
        name="target-currency"
        value={currency2}
        onChange={(e) => setCurrency2(e.target.value)}
      >
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="gbp">GBP</option>
        <option value="jpy">JPY</option>
      </select>

      <p className="para">Converted Amount: {convertedAmount}</p>
    </div>
  );
}
