export default function Button(props) {
  const { type, value, name, text } = props;
  return (
    <button
      type={type}
      value={value}
      name={name}
      style={{ backgroundColor: '#5053ff' }}
      className="py-3 rounded-lg cursor-pointer hover:bg-violet-500 duration-300 text-slate-100 font-bold text-sm"
    >
      {text}
    </button>
  );
}
