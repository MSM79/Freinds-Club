import useSWR from 'swr';

export default function Photos({ user }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data: albums, error: error1 } = useSWR(
    'https://jsonplaceholder.typicode.com/albums',
    fetcher,
  );
  const { data: photos, error: error2 } = useSWR(
    'https://jsonplaceholder.typicode.com/photos',
    fetcher,
  );

  if (error1) return <div>failed to load</div>;
  if (!albums) return <div>loading...</div>;

  if (error2) return <div>failed to load</div>;
  if (!photos) return <div>loading...</div>;

  const filterAlbum = albums.filter((e) => e.userId === user.id);

  return (
    <div className="flex flex-wrap w-[100%] justify-center">
      {filterAlbum.map((e) => (
        <div className="bg-white m-1">
          <p className="flex flex-wrap m-4">{e.title}</p>
          {photos
            .filter((photo) => photo.albumId == e.id)
            .map((photo) => (
              <img src={photo.url} className="w-[100px] m-1" />
            ))}
        </div>
      ))}
    </div>
  );
}
