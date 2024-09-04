import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, muliply } from '../redux/reducers/countSlice'

const Count = () => {
    const count = useSelector(state => {
        return state.count.value;
    })
    const dispatch = useDispatch();
    const [num, setNum] = useState(0)
    const handleAddNum = () => {
        const parsedNum = parseInt(num)
        dispatch(increment(parsedNum))
        setNum(0)
    };

  return (
    <div>
      <h2>Simple Calculator</h2>
      <button
        onClick={() => dispatch(increment(1))}
      >+1</button>
      <button
      onClick={() => dispatch(decrement(2))}
      >-2</button>
      <button
      onClick={() => dispatch(muliply(3))}
      >x3</button>
      <div>
        <input 
            type='number'
            value={num}
            onChange={(e)=> setNum(e.target.value)}
        />
        <button
            onClick={handleAddNum}
        >Add this number</button>
      </div>
      <h1>{count}</h1>
    </div>
  )
}

export default Count
