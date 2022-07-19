import { changeValue } from '../../../store/slices/searchSlice';
import { useDispatch } from 'react-redux';

export default function Search() {
  const dispatch = useDispatch();
  let handleChange = (e) => {
    dispatch(changeValue(e.target.value.toLowerCase()));
  };
  return (
    <form className="w-2/6 m-auto xs:w-full">
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block 
                p-4 
                pl-12
                h-12 
                w-full 
                text-xl 
                text-gray-900 
                bg-gray-100 
                rounded-2xl
                shadow-outline
                outline-none 
                "
          placeholder="Search"
          onChange={handleChange}
          required
        />
      </div>
    </form>
  );
}
