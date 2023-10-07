import LoggedIn from "../../components/account/LoggedIn";
import LoggedOut from "../../components/account/LoggedOut";
// import { useSession } from "../../contexts/sessionContext";

export default function Account() {
  // const { session } = useSession();

  // if (session) {
  //   return <LoggedIn session={session} />;
  // }

  return <LoggedOut />;
}
