export default function Button(props) {
  const { type, value, name, text } = props;
  return (
    <button
      type={type}
      value={value}
      name={name}
      className="bg-[#5053ff] hover:bg-[#5003fd] active:bg-[#f45 py-3 rounded-lg cursor-pointer hover:bg-violet-500 duration-200 text-slate-100 font-bold text-sm"
    >
      {text}
    </button>
  );
}
