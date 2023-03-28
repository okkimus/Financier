import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const Graph = () => {
  const options = {
    title: {
      text: "My chart",
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9],
      },
    ],
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"stockChart"}
      options={options}
    />
  );
};

export default Graph;
