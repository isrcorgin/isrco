"use client";

interface FunFact {
  iconName: string;
  number: string;
  text: string;
}

const FunFactData: FunFact[] = [
  {
    iconName: "icofont-focus",
    number: "80",
    text: "Total Topics",
  },
  {
    iconName: "icofont-microphone",
    number: "70",
    text: "Total Speakers",
  },
  {
    iconName: "icofont-copy",
    number: "100",
    text: "Sponsors",
  },
  {
    iconName: "icofont-users-social",
    number: "99",
    text: "Total Attendance",
  },
];

const FunFact: React.FC = () => {
  return (
    <>
      <div className="funfacts-area ptb-120">
        <div className="container">
          <div className="row justify-content-center">
            {FunFactData &&
              FunFactData.slice(0, 4).map((value, i) => (
                <div className="col-lg-3 col-6 col-sm-6" key={i}>
                  <div className="single-funfact">
                    <div className="icon">
                      <i className={value.iconName}></i>
                    </div>
                    <h3>{value.number}</h3>
                    <p>{value.text}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFact;
