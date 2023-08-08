import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  //check online status
  useEffect(() => {
    window.addEventListener("offline", (e) => {
      console.log("offline");
      setOnlineStatus(false);
    });

    window.addEventListener("online", (e) => {
      console.log("online");
      setOnlineStatus(true);
    });
  }, []);
  //boolean
  return onlineStatus;
};
export default useOnlineStatus;
