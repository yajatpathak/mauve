import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Publisher from "../entities/Publishers";

const apiClient = new APIClient<Publisher>("/publishers");

function useLookupPublisher(slug: string) {
  return useQuery({
    queryKey: ["publisher", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: 24 * 60 * 60 * 1000, //24hrs
  });
}

export default useLookupPublisher;
