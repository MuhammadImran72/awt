import { useEffect, useState } from "react";
import CounterBox from "../Components/CounterBox.jsx";
import HeaderSlider from "../Components/HeaderSlider.jsx";
import BusinessUnitsSlider from "../Components/BusinessUnitsSlider.jsx";
import { BusinessUnitsData } from "../data/GetData.jsx";
import ResourceSlider from "../Components/ResourceSlider.jsx";
import HomeLogoSlider from "../Components/HomeLogoSlider.jsx";
import { GiCash } from "react-icons/gi";
import { FaUsers } from "react-icons/fa6";
import { MdBusiness } from "react-icons/md";
import { BsCashStack } from "react-icons/bs";

const Home = () => {
  const [activeTab, setActiveTab] = useState("All");
  const { data, error, isPending } = BusinessUnitsData();
  const [uniqueCategories, setUniqueCategories] = useState([]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    if (data) {
      const categories = [...new Set(data.map((unit) => unit.WelfareUnit))];
      setUniqueCategories([
        "All",
        ...categories.filter((cat) => cat !== "All"),
      ]);
    }
  }, [data]);

  const counters = [
    {
      icon: <BsCashStack size={40} color="#023d54" />,
      value: "40 Billion",
      label: "Well Above 40 Billion Rupees Company Worth ",
    },
    {
      icon: <FaUsers size={40} color="#023d54" />,
      value: "28,000+",
      label: "Providing 28,000 Direct & Indirect Employments",
    },
    {
      icon: <MdBusiness size={40} color="#023d54" />,
      value: "18 Companies",
      label: "18 Companies & Still Growing",
    },
    {
      icon: <GiCash size={40} color="#023d54" />,
      value: "02 Billion",
      label: "2 Billion Rupees Contributed To National Excequer",
    },
  ];

  if (error) return "An error occured";
  if (isPending) return <div>Fetching...</div>;

  return (
    <>
      <HeaderSlider />
      <HomeLogoSlider />

      <section className="container pb-4 pt-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="aboutus">
              <span className="linesheading">Introduction</span>
              <h2 className="text-primary-green">
                A Culture of Excellence - A Tradition of Trust{" "}
              </h2>
              <p>
                We are excelling and achieving our objective with 53 years of
                dedicated investments in different business units, aimed at the
                betterment of Army Personnel and strengthening the national
                economy of Pakistan. At the heart of our corporation, lies a
                core value that emphasizes being a trusting, valuable, and
                effective partner. We aspire to sustain productive relationships
                with governments, companies, communities, and customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {data && (
        <section className="bggrayy">
          <div className="container-fluid">
            <div class="row flex-column flex-lg-row">
              <div class="col-lg-3 col-12">
                <div className="mb-5 mb-lg-0">
                  <div className="tabsheadingsmove d-flex justify-content-start justify-content-lg-end">
                    <span className="leftlineheading rightsss">
                      Business Units
                    </span>
                  </div>

                  <div
                    class="nav flex-column nav-tabs text-center slider-tabs"
                    id="v-tabs-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    {uniqueCategories.map((category) => (
                      <a
                        key={category}
                        className={`nav-link ${
                          activeTab === category ? "active" : ""
                        } mx-0 justify-content-start justify-content-lg-end`}
                        id={`v-tabs-${category}`}
                        data-bs-toggle="tab"
                        href={`#v-tabs-${category}`}
                        role="tab"
                        aria-controls={`v-tabs-${category}`}
                        aria-selected={activeTab === category}
                        onClick={() => handleTabChange(category)}
                      >
                        <span>
                          {category === "All" ? "All Companies" : category}
                        </span>
                        <i
                          className="fa fa-chevron-left tab-icon"
                          aria-hidden="true"
                        ></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-md-9">
                <div className="tab-content" id="v-tabs-tabContent">
                  {uniqueCategories.map((category) => (
                    <div
                      key={`category-${category}`}
                      className={`tab-pane fade ${
                        activeTab === category ? "show active" : ""
                      }`}
                      id={`v-tabs-${category}`}
                      role="tabpanel"
                      aria-labelledby={`v-tabs-${category}-tab`}
                    >
                      <BusinessUnitsSlider
                        businessUnitsSliderData={
                          category === "All"
                            ? data
                            : data.filter(
                                (item) => item.WelfareUnit === category
                              )
                        }
                        activeTabId={activeTab}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <section className="spaceupdown">
        <div className="container-md">
          <div className="row">
            <div className="col-lg-12">
              <div className="ourmission ps-4">
                <span className="leftlineheading">Our Contributions</span>
                <h2 className="text-primary-green">
                  Committed Services to Pakistan’s Success
                </h2>
                <p>
                  We stand out amongst the business leaders. Ours is a story of
                  perseverance, innovation, business acumen and going beyond the
                  frontiers in Insurance, Aviation, CNG, Agriculture,
                  Manufacturing, Sugar, Lubricants, Real Estate, Security
                  Solutions and many other diverse fields. Our investments will
                  go a long way in consolidating the national economy of
                  Pakistan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <div className="container-md">
          <div className="row">
            <div className="col-lg-12">
              <div className="container-md">
                <div className="counter-box">
                  {counters.map((counter, index) => (
                    <CounterBox key={index} {...counter} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-lg p-4 d-flex align-items-center flex-xl-row flex-column gap-3 justify-content-between position-relative">
        <div className="ourmission relative p-0">
          <span className="leftlineheading">Latest News And Events</span>
          <h2 className="text-primary-green">
            Our Contemporary Projects and Recent Updates
          </h2>
        </div>

        <div className="max-w-lg">
          <ResourceSlider />
        </div>
      </section>
    </>
  );
};

export default Home;
