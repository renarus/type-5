import useGetData from "../../hooks/useGetData";
import Card from "./Card";
import Apis from "../../services";
import { UseQueryResult } from "react-query";
import { ActorType } from "../../types";

const Actors = () => {
  const { data, isLoading, isError } = useGetData({
    name: "actors",
    api: Apis.getActors,
  }) as UseQueryResult<ActorType[]>;
  const scelaton = [...Array(20).keys()];
  return (
    <div className="grid justify-items-center grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 py-4">
      {isLoading ? (
        scelaton.map((item, idx) => (
          <div
            key={idx}
            className="w-full lg:w-72 h-96 rounded-xl bg-gray-400 animate-pulse"
          ></div>
        ))
      ) : isError ? (
        <div>Error</div>
      ) : (
        <>
          {data?.map(({ id, ...actor }) => (
            <Card id={id} key={id} {...actor} />
          ))}
        </>
      )}
    </div>
  );
};

export default Actors;
