export default function Form({data, index, handleInput}) {
    const {
        symptoms,
        beenDiagnosedBefore,
        afterPhysicalTrauma,
        afterMentalTrauma,
        frequency,
        when,
        intensity
    } = data;

    const handleCheckboxInput = e => {
        const nodes = e.target.closest('form')[e.target.name];
        const valuesArr = [];
        nodes.forEach(node => {
            if(node.checked){
                valuesArr.push(node.value);
            }
        });
        const obj = {target: {value: valuesArr.join(', '), name: e.target.name}}
        handleInput(obj, index);
    }

    return (
        <form>
            <div className="ip-l-wrap text-ip">
                <label htmlFor={symptoms.name}>
                    <span className="label-text">{symptoms.label}</span>
                </label>
                <textarea 
                    name={symptoms.name} 
                    id={symptoms.name} 
                    value={symptoms.value}
                    onInput={e => handleInput(e, index)}
                ></textarea>
            </div>

            <div className="ip-l-wrap radio-ip radio-ip-type-1">
                <span className="label-text">{beenDiagnosedBefore.label}</span>
                <div className="radio-options-wrap">
                    <label>
                        <input
                            type="radio"
                            name={beenDiagnosedBefore.name} 
                            value="Not relevant"
                            onChange={e => handleInput(e, index)}
                            checked={"Not relevant" === beenDiagnosedBefore.value}
                        />
                        <span className="radio-text">Not relevant</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name={beenDiagnosedBefore.name}
                            value="Yes"
                            onChange={e => handleInput(e, index)}
                            checked={"Yes" === beenDiagnosedBefore.value}
                        />
                        <span className="radio-text">Yes</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name={beenDiagnosedBefore.name}
                            value="No"
                            onChange={e => handleInput(e, index)}
                            checked={"No" === beenDiagnosedBefore.value}
                        />
                        <span className="radio-text">No</span>
                    </label>
                </div>
            </div>

            <div className="ip-l-wrap radio-ip radio-ip-type-1">
                <span className="label-text">{afterPhysicalTrauma.label}</span>
                <div className="radio-options-wrap">
                    <label>
                        <input
                            type="radio"
                            name={afterPhysicalTrauma.name}
                            value="Not relevant"
                            onChange={e => handleInput(e, index)}
                            checked={"Not relevant" === afterPhysicalTrauma.value}
                        />
                        <span className="radio-text">Not relevant</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name={afterPhysicalTrauma.name}
                            value="Yes"
                            onChange={e => handleInput(e, index)}
                            checked={"Yes" === afterPhysicalTrauma.value}
                        />
                        <span className="radio-text">Yes</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name={afterPhysicalTrauma.name}
                            value="No"
                            onChange={e => handleInput(e, index)}
                            checked={"No" === afterPhysicalTrauma.value}
                        />
                        <span className="radio-text">No</span>
                    </label>
                </div>
            </div>

            <div className="ip-l-wrap radio-ip radio-ip-type-1">
                <span className="label-text">{afterMentalTrauma.label}</span>
                <div className="radio-options-wrap">
                    <label>
                        <input
                            type="radio"
                            name={afterMentalTrauma.name}
                            value="Not relevant"
                            onChange={e => handleInput(e, index)}
                            checked={"Not relevant" === afterMentalTrauma.value}
                        />
                        <span className="radio-text">Not relevant</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name={afterMentalTrauma.name}
                            value="Yes"
                            onChange={e => handleInput(e, index)}
                            checked={"Yes" === afterMentalTrauma.value}
                        />
                        <span className="radio-text">Yes</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name={afterMentalTrauma.name}
                            value="No"
                            onChange={e => handleInput(e, index)}
                            checked={"No" === afterMentalTrauma.value}
                        />
                        <span className="radio-text">No</span>
                    </label>
                </div>
            </div>

            <div className="ip-l-wrap radio-ip radio-ip-type-2">
                <span className="label-text">{frequency.label}</span>
                <div className="radio-options-wrap">
                    <label>
                        <input
                            type="radio"
                            name={frequency.name}
                            value="Not relevant"
                            onChange={e => handleInput(e, index)}
                            checked={"Not relevant" === frequency.value}
                        />
                        <span className="radio-text">Not relevant</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name={frequency.name}
                            value="Daily"
                            onChange={e => handleInput(e, index)}
                            checked={"Daily" === frequency.value}
                        />
                        <span className="radio-text">Daily</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name={frequency.name}
                            value="Several times/week"
                            onChange={e => handleInput(e, index)}
                            checked={"Several times/week" === frequency.value}
                        />
                        <span className="radio-text">Several times/week</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name={frequency.name}
                            value="A few times/year"
                            onChange={e => handleInput(e, index)}
                            checked={"A few times/year" === frequency.value}
                        />
                        <span className="radio-text">A few times/year</span>
                    </label>
                </div>
            </div>
            
            <div className="ip-l-wrap checkbox-ip">
                <span className="label-text">{when.label}</span>
                <div className="checkbox-options-wrap">
                    <label>
                        <input
                            type="checkbox"
                            name={when.name}
                            value="Not relevant"
                            onChange={handleCheckboxInput}
                            checked={when.value.includes("Not relevant")}
                        />
                        <span className="checkbox-text">Not relevant</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name={when.name}
                            value="Daily"
                            onChange={handleCheckboxInput}
                            checked={when.value.includes("Daily")}
                        />
                        <span className="checkbox-text">Daily</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name={when.name}
                            value="When lying down"
                            onChange={handleCheckboxInput}
                            checked={when.value.includes("When lying down")}
                        />
                        <span className="checkbox-text">When lying down</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name={when.name}
                            value="When sitting"
                            onChange={handleCheckboxInput}
                            checked={when.value.includes("When sitting")}
                        />
                        <span className="checkbox-text">When sitting</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name={when.name}
                            value="Under Standing"
                            onChange={handleCheckboxInput}
                            checked={when.value.includes("Under Standing")}
                        />
                        <span className="checkbox-text">Under Standing</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name={when.name}
                            value="In walking"
                            onChange={handleCheckboxInput}
                            checked={when.value.includes("In walking")}
                        />
                        <span className="checkbox-text">In walking</span>
                    </label>
                </div>
            </div>

            <div className="ip-l-wrap radio-ip radio-ip-type-3">
                <span className="label-text">{intensity.label}</span>
                <div className="radio-options-wrap">
                    <label>
                        <span className="radio-text">1</span>
                        <input
                            type="radio"
                            name={intensity.name}
                            value="1"
                            onChange={e => handleInput(e, index)}
                            checked={"1" === intensity.value}
                        />
                    </label>
                    <label>
                        <span className="radio-text">2</span>
                        <input
                            type="radio"
                            name={intensity.name}
                            value="2"
                            onChange={e => handleInput(e, index)}
                            checked={"2" === intensity.value}
                        />
                    </label>
                    <label>
                        <span className="radio-text">3</span>
                        <input
                            type="radio"
                            name={intensity.name}
                            value="3"
                            onChange={e => handleInput(e, index)}
                            checked={"3" === intensity.value}
                        />
                    </label>
                    <label>
                        <span className="radio-text">4</span>
                        <input
                            type="radio"
                            name={intensity.name}
                            value="4"
                            onChange={e => handleInput(e, index)}
                            checked={"4" === intensity.value}
                        />
                    </label>
                    <label>
                        <span className="radio-text">5</span>
                        <input
                            type="radio"
                            name={intensity.name}
                            value="5"
                            onChange={e => handleInput(e, index)}
                            checked={"5" === intensity.value}
                        />
                    </label>
                    <label>
                        <span className="radio-text">6</span>
                        <input
                            type="radio"
                            name={intensity.name}
                            value="6"
                            onChange={e => handleInput(e, index)}
                            checked={"6" === intensity.value}
                        />
                    </label>
                    <label>
                        <span className="radio-text">7</span>
                        <input
                            type="radio"
                            name={intensity.name}
                            value="7"
                            onChange={e => handleInput(e, index)}
                            checked={"7" === intensity.value}
                        />
                    </label>
                    <label>
                        <span className="radio-text">8</span>
                        <input
                            type="radio"
                            name={intensity.name}
                            value="8"
                            onChange={e => handleInput(e, index)}
                            checked={"8" === intensity.value}
                        />
                    </label>
                    <label>
                        <span className="radio-text">9</span>
                        <input
                            type="radio"
                            name={intensity.name}
                            value="9"
                            onChange={e => handleInput(e, index)}
                            checked={"9" === intensity.value}
                        />
                    </label>
                    <label>
                        <span className="radio-text">10</span>
                        <input
                            type="radio"
                            name={intensity.name}
                            value="10"
                            onChange={e => handleInput(e, index)}
                            checked={"10" === intensity.value}
                        />
                    </label>
                </div>
            </div>
        </form>
    );
}