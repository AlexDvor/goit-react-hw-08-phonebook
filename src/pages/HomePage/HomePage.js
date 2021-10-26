import HelperTitle from '../../components/HelperTitle/HelperTitle';
import { getIsLoggedIn } from '../../redux/Auth/Auth-selector';
import { useSelector } from 'react-redux';

export default function HomePage() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        <HelperTitle text="Add more of your friends and family in your list" />
      ) : (
        <HelperTitle text="Hello. For use all advantage of the app, please register." />
      )}
    </>
  );
}
