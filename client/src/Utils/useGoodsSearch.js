import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";

export default function useGoodsSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [goods, setGoods] = useState([]);
  const [userData, setUserData] = useContext(UserContext);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setGoods([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios
      .get("http://localhost:3001/api/goods/get-goods", {
        params: {
          q: query,
          page: pageNumber,
        },
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
        headers: {
          "auth-token": userData.token,
        },
      })
      .then((res) => {
        setGoods((prevGoods) => {
          return [...new Set([...prevGoods, ...res.data])];
        });
        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
        if (axios.isCancel(e)) return;
      });
    return () => cancel();
  }, [query, pageNumber, userData]);
  return { loading, error, goods, hasMore };
}
