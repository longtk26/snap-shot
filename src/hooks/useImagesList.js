import { useQuery } from "react-query";
import fetchImagesList from "./fetchImagesList";

const useImagesList = (key = "mountain") => {
    const results = useQuery(["images", key], fetchImagesList);

    return [results?.data?.photos?.photo, results];
};

export default useImagesList;
