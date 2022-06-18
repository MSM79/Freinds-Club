export default function Button(props) {
  const { type, value, name, text, width } = props;
  return (
    <button
      type={type}
      value={value}
      name={name}
      style={{ width: width }}
      className="
      bg-[#5053ff] 
      hover:bg-[#5003fd] 
      py-3 
      rounded-lg 
      cursor-pointer 
      duration-200 
      text-slate-100 
      font-bold 
      text-sm
      "
    >
      {text}
    </button>
  );
}
