import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

function useData<T>(endpoint: string, requestConfig?: AxiosRequestConfig) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const delayTimeout = setTimeout(() => {
      setLoading(true);
    }, 1);

    apiClient
      .get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => {
      controller.abort();
      clearTimeout(delayTimeout);
    };
  }, [requestConfig?.params.genres, requestConfig?.params.platforms]);

  return { data, error, isLoading };
}

export default useData;
