import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/Head';
import Photos from '../../../ui/components/Photos';
import Posts from '../../../ui/components/posts';
import Todos from '../../../ui/components/todos';

function User() {
  const router = useRouter();
  const { id } = router.query;
  const users = useSelector((state) => state.user);
  const foundUser = users.find((user) => user.username === id);

  if (!foundUser) {
    return <div>not found</div>;
  }

  const Tabs = ({ color }) => {
    const [openTab, setOpenTab] = useState(1);
    return (
      <>
        <div className="flex flex-wrap justify-center">
          <div className="w-[50%]">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                    (openTab === 1
                      ? 'text-white bg-[#5053ff]'
                      : 'text-' + color + '-600 bg-white')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Posts
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                    (openTab === 2
                      ? 'text-white bg-[#5053ff]'
                      : 'text-' + color + '-600 bg-white')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Photos
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                    (openTab === 3
                      ? 'text-white  bg-[#5053ff]'
                      : 'text-' + color + '-600 bg-white')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Todos
                </a>
              </li>
            </ul>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={openTab === 1 ? 'block' : 'hidden'}
                    id="link1"
                  >
                    <Posts user={foundUser} />
                  </div>
                  <div
                    className={openTab === 2 ? 'block' : 'hidden'}
                    id="link2"
                  >
                    <Photos user={foundUser} />
                  </div>
                  <div
                    className={openTab === 3 ? 'block' : 'hidden'}
                    id="link3"
                  >
                    <Todos user={foundUser} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Head>
        <title>{id}</title>
      </Head>
      <div className="p-1"></div>
      <div className="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center">
              <div className="relative">
                <img
                  src="https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true"
                  className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                />
              </div>
            </div>
            <div className="w-full text-center mt-20">
              <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    3,360
                  </span>
                  <span className="text-sm text-slate-400">Photos</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
              {foundUser.name}
            </h3>
            <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
              {foundUser.username}
            </div>
          </div>
          <div className="mt-6 py-6 border-t border-slate-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">
                <p className="font-light leading-relaxed text-slate-600 mb-4">
                  User id : {foundUser.id}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tabs />;
    </>
  );
}

export default User;
