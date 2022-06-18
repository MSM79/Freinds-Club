export default function Input(props) {
  const { type, placeholder, value, name } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      style={{ color: '#435486' }}
      className="
      p-2
      py-2 
      px-12
      mb-4
      block
      w-full
      border
      text-lg
      border-2
      focus:ring
      rounded-2xl
      drop-shadow-sm 
      text-orange-300
      bg-white rounded-lg
      focus:ring-slate-100
      placeholder-primary
      focus:shadow-outline
      focus:outline-none 
       "
    />
  );
}
