import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searched } from '../../features/filter/filterSlice';

const SearchFilter = () => {
    const dispatch = useDispatch();
    const { search, reset } = useSelector((state) => state.filters);
    const [input, setInput] = useState(search);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searched(input));
    };

    //blank input field after reset all the filters
    useEffect(() => {
        if (reset) {
            setInput("");
        };
    }, [reset])
    return (

        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Search:</label>
                <input
                    className='border p-2 rounded-full '
                    type="search"
                    name="search"
                    required
                    placeholder="enter title"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
        </form>
    );
};

export default SearchFilter;