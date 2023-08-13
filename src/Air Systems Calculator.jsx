import './App.css';

let clg = '';
let occTypeNum = '';
let rValuePerc = '';
let sqft350 = '';
let occTotal = '';
let btu = '';
let tons = '';
let occLoad = '';


function AirEstimator() {
    
    function CalcSqft350() {
        let squareFeet=document.getElementById("sqft").value;
        sqft350 = +squareFeet * 300;

        console.log('Sqft * 350 = ' + sqft350);
    };

    function CalcCeiling() {
        let ceilingHeight=document.getElementById("ceiling").value;
        
        if (ceilingHeight >= 9) {
            clg = (ceilingHeight -= 8)
            clg = (clg * 0.1)
            clg = (clg + 1) 
        } else if (ceilingHeight <= 8) {
            clg = 1
        }
            console.log('ceiling height % = ' + clg);
        }
    
    function CalcOcc() {
        occLoad=document.getElementById("occload").value;
        let occType=document.getElementById("occtype").value;

        if (occType === "residential") {
            occTypeNum = 25;
        } else if (occType === "business") {
            occTypeNum = 30;
        } else if (occType === "mercantile") {
            occTypeNum = 45;
        } else if (occType === "assembly") {
            occTypeNum = 60;
        } 

        //console.log(occLoad);

        occTotal = occTypeNum * occLoad;

        //console.log(occLoad + '_' + occType + '_' + occTypeNum);
        //console.log('occTotal = ' + occTotal);
    }

    function CalcRValue() {
        let rValue=document.getElementById("rvalue").value;

        if (rValue === "high") {
            rValuePerc = 1;
        } else if (rValue === "medium") {
            rValuePerc = 1.1;
        } else if (rValue === "low") {
            rValuePerc = 1.2;
        }

        console.log(rValue + '_' + rValuePerc)
    }

    function PostTons() {
        document.getElementById("calculation").innerHTML=Math.round(tons) + ' Tons';
        document.getElementById("btuh").innerHTML=Math.round(btu) + ' BTU/H';
    }

    function BTUfunction() {
        CalcSqft350();
        CalcCeiling();
        CalcOcc();
        CalcRValue();

        console.log(occLoad);

        let sfCeiling = sqft350 * clg;
        console.log('Sqft350 * CH% = ' + Math.round(sfCeiling));

        let occRValue = occTotal * rValuePerc;
        console.log('occTotal * RValue% = ' + occRValue);

        btu = sfCeiling += occRValue;
        console.log('btu/h = ' + btu);

        tons = btu / 12000;
        console.log(Math.round(tons));

        PostTons();
    }

    
   return (
        <div>
           <table className="panel">
                <tbody>
                    <tr>
                        <td>Square Footage</td>
                            <td>
                                <input type="number" id="sqft" name="sqft" /> 
                            </td>
                    </tr>
                    <tr>
                        <td>Ceiling Height</td>
                            <td>
                                <input type="number" id="ceiling" name="ceiling" /> 
                            </td>
                    </tr>
                    <tr>
                        <td>Occupancy Load</td>
                            <td>
                                <input type="number" id="occload" name="occload" /> 
                            </td>
                    </tr>
                    <tr>
                        <td>Occupancy Type</td>
                            <td>
                                <select id="occtype" name="occtype">
                                    <option value="residential">Residential</option>
                                    <option value="business">Business</option>
                                    <option value="mercantile">Mercantile</option>
                                    <option value="assembly">Assembly</option>
                                </select> 
                            </td>
                    </tr>
                    <tr>
                        <td>Building Envelope R-Value</td>
                            <td>
                                <select id="rvalue" name="rvalue">
                                    <option value="high">High</option>
                                    <option value="medium">Medium</option>
                                    <option value="low">Low</option>
                                </select> 
                            </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={BTUfunction}>Calculate</button>
                        </td>                        
                    </tr>
                    <tr id="btuh">
                    </tr>
                    <tr>
                        <td id="calculation">
                        </td>
                    </tr>
                </tbody>
           </table>
        </div>
    )
};

export default AirEstimator;