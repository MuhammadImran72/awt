import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import LoadingSpinner from "./LoadingSpinner";
import { GetTimelineData } from "../data/GetData";

const AboutTimeline = () => {
  const { data, isPending, error } = GetTimelineData();
  if (isPending) return <LoadingSpinner />;
  if (error) return "An error occured!!!";
  return (
    <>
      <VerticalTimeline>
        {data.map((item) => (
          <VerticalTimelineElement
            key={item.id}
            className="vertical__timeline_element"
            date={item.Year}
            icon={<i class="fa fa-calendar" aria-hidden="true"></i>}
          >
            <div className="vertical__timeline_element-container">
              <h3 className="vertical__timeline_element-title">{item.Title}</h3>
              <h4 className="vertical__timeline_element-subtitle">
                {item.Year}
              </h4>
            </div>
            <p className="vertical__timeline_element-text">
              {item.Description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
};

export default AboutTimeline;
