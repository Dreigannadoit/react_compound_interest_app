import React, { useState } from 'react'

const CompuondIntCal = () => {
    const [principle, setPrinciple] = useState();
    const [compoundRate, setCompoundRate] = useState('52');
    const [rate, setRate] = useState();
    const [time, setTime] = useState();

    const isPrincipleEmpty = !principle;
    const isCompoundRateEmpty = !compoundRate;
    const isRateEmpty = !rate;
    const isTimeEmpty = !time;

    let result;

    if (principle < 0 || compoundRate < 0 ||  principle < 0){
        result;
    } else {
        result = (principle * Math.pow(1 + (rate / 100) / compoundRate,compoundRate * time )).toFixed(2);
    }    

    const handleSelectChange = (event) => {
      const selectedValue = event.target.value;
      setCompoundRate(selectedValue);

      if (selectedValue === "52") {
        setCompoundRate(52)
      } else if (selectedValue === "12") {
        setCompoundRate(12)
      } else if (selectedValue === "4") {
        setCompoundRate(4)
      } else if (selectedValue === "1") {
        setCompoundRate(1)
      }
    };

    const clearUI = () => {
        setPrinciple('');
        setRate('');
        setTime('');
    };

    return (
        <section>
            <div className="interface">
                <div className="userInput">
                    <label>
                        Principle:
                        <input
                            value={principle}
                            onChange={(e) => setPrinciple(e.target.value)}
                            type="number"
                        />
                    </label>
                    
                    <label>
                        Interest Rate (%):
                        <input
                            value={rate}
                            onChange={e => setRate(e.target.value)}
                            type="number"   
                        />
                    </label>
                    
                    <label>
                        Number of times interest <br />
                        is compounded per year:

                        <select value={compoundRate.toString()} onChange={handleSelectChange}>
                            <option value="52">Weekly</option>
                            <option value="12">Monthly</option>
                            <option value="4">Quarterly</option>
                            <option value="1">Annually</option>
                        </select>
                    </label>

                    <label>
                        Time (in years):
                        <input
                            value={time}
                            onChange={e => setTime(e.target.value)}
                            type="number"
                        />
                    </label>

                    <button onClick={clearUI}>Clear All</button>
                </div>
                
                <div className="result">
                    {isNaN(result) ? (
                        'Input Missing Field'
                    ) : (
                        result
                    )}
                </div>
            </div>

            <div className="showCalc">
                <div className="formula">
                    <div className="total">
                        <span>A = </span>
                    </div>

                    <div className="eq">
                        {isPrincipleEmpty ? 'P' : principle}
                        <span>(</span>
                        1 + 
                        <span>
                            <p>{isRateEmpty ? 'r' : rate/100}</p>
                            <hr />
                            <p>{isCompoundRateEmpty ? 'n' : compoundRate}</p>
                        </span> 
                        <span>)</span>
                        <span>
                            <p>({isCompoundRateEmpty ? 'n' : compoundRate})</p>
                            <p>{isTimeEmpty ? 't' : time}</p>
                        </span> 
                    </div>
                </div>

                <div className="variables">
                {isNaN(result) ? (
                    'Input Missing Field'
                ) : (
                    result
                )}
                </div>
            </div>
        </section>
    )
}

export default CompuondIntCal