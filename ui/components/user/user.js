export default function User(props) {
  const { username, name } = props;
  return (
    <div className="flex flex-col container mt-1 max-w-md mx-auto w-full items-center justify-center bg-white shadow">
      <ul className="flex flex-col divide-y w-full">
        <li className="flex flex-row">
          <div className="select-none cursor-pointer hover:bg-gray-100 flex flex-1 items-center p-4">
            <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
              <a href="#" className="block relative">
                <img
                  alt="profil"
                  src="https://img.favpng.com/8/19/8/united-states-avatar-organization-information-png-favpng-J9DvUE98TmbHSUqsmAgu3FpGw.jpg"
                  className="mx-auto object-cover rounded-full h-10 w-10"
                />
              </a>
            </div>
            <div className="flex-1 pl-1">
              <div className="font-medium">{username}</div>
              <div className="text-gray-600 text-sm">{name}</div>
            </div>
            <div className="flex flex-row justify-center">
              <button className="w-10 text-right flex justify-end">
                <svg
                  width="20"
                  fill="currentColor"
                  height="20"
                  className="hover:text-gray-800 text-gray-500"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
