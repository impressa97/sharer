import { useEffect, useState } from "react";
import axios from "axios";

export default function useGoodsSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [goods, setGoods] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setGoods([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios
      .get("http://localhost:3001/api/rental/get-goods", {
        params: {
          q: query,
          page: pageNumber,
        },
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
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
  }, [query, pageNumber]);
  return { loading, error, goods, hasMore };
}
