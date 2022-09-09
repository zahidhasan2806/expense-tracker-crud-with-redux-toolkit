import { useDispatch, useSelector } from 'react-redux';
import { selecteFilterMode } from '../../features/filter/filterSlice';

const RadioFilter = () => {
    const dispatch = useDispatch();
    const { reset } = useSelector(state => state.filters)

    const handleFilterMode = (e) => {
        const type = (e.target.value);
        dispatch(selecteFilterMode(type));
    }

    return (
        <div>
            <div className="form-group radio">
                <label>Choose any :</label>
                <div className="radio_group">
                    <input
                        required
                        type="radio"
                        value="income"
                        name="type"
                        onChange={handleFilterMode}
                    />
                    <label>Income</label>
                </div>
                <div className="radio_group">
                    <input
                        type="radio"
                        value="expense"
                        name="type"
                        onChange={handleFilterMode}
                    />
                    <label>Expense</label>
                </div>
            </div>
        </div>
    );
};

export default RadioFilter;