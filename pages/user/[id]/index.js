import { useRouter } from 'next/router';
import Link from 'next/link';

const User = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>user: {id}</h1>
      <ul></ul>
    </>
  );
};

export default User;
