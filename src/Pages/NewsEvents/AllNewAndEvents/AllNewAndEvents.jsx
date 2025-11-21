import useAllNewsAndEventsData from "../../../Hooks/useAllNewsAndEventsData";
import Loading from "../../../Shared/Loading/Loading";
import AllNewsAndEvent from "./AllNewsAndEvent";

const AllNewsAndEvents = () => {
  const [allNewsAndEvents, isLoading] = useAllNewsAndEventsData();

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="overflow-hidden relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:ml-20">
      {allNewsAndEvents.map((allNewsAndEvent) => (
        <AllNewsAndEvent
          key={allNewsAndEvent._id}
          allNewsAndEvent={allNewsAndEvent}
        />
      ))}
    </div>
  );
};

export default AllNewsAndEvents;
