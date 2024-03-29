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

    if (principle < 0 || rate < 0 || time < 0) {
        result = "Cannot input below 0";
    } else if (isPrincipleEmpty || isRateEmpty || isTimeEmpty) {
        result = "Input Missing Field";
    } else {
        result = (principle * Math.pow(1 + (rate / 100) / compoundRate, compoundRate * time)).toFixed(2);
    }

    const handleSelectChange = (event) => {
      const selectedValue = event.target.value;
      setCompoundRate(selectedValue);
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

                    <button onClick={clearUI}>Reset Calculator</button>
                </div>
                
                {/* <div className="result">
                    {result}
                </div> */}
            </div>

            <div className="showCalc">
                <h1 style={{textAlign: 'center'}}>Equation</h1>
                <div className="formula">

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
                    Amount = {result}
                </div>
            </div>
        </section>
    )
}

export default CompuondIntCal