import AllNewsAndEvents from "../AllNewAndEvents/AllNewAndEvents";
import AllNews from "../AllNews/AllNews";
import NewsEventsHeader from "../NewsEventsHeader/NewsEventsHeader";

const NewsEvents = () => {
  return (
    <div>
      <NewsEventsHeader></NewsEventsHeader>
      <AllNews></AllNews>
      <AllNewsAndEvents></AllNewsAndEvents>
    </div>
  );
};

export default NewsEvents;
