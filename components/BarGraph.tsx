import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryStack,
  VictoryTheme
} from "victory-native";

export default function BarGraph() {
  return (
    <VictoryChart
      domainPadding={{ x: [10, 20] }}
      theme={VictoryTheme.material}
    >
      <VictoryAxis
        style={{
          grid: { stroke: "transparent" },
          ticks: { textAlign: "center", size: 0 },
          tickLabels: { padding: 15, angle: -45, fill: "white" },
          axis: { stroke: "white" }
        }}
        tickValues={[1, 2, 3, 4, 5]}
        tickFormat={[
          "11-01",
          "11-02",
          "11-03",
          "11-04",
          "11-05",
          "11-06",
          "11-07"
        ]}
      />
      <VictoryAxis
        dependentAxis
        style={{
          grid: { stroke: "transparent" },
          tickLabels: { fill: "white" },
          axis: { stroke: "white" }
        }}
      />
      <VictoryStack colorScale={["#FF554E", "orange"]}>
        <VictoryBar
          animate={{
            onLoad: { duration: 1000 }
          }}
          alignment="start"
          data={[
            { x: "11-01", y: 20 },
            { x: "11-02", y: 20 },
            { x: "11-03", y: 10 },
            { x: "11-04", y: 15 },
            { x: "11-05", y: 5 },
            { x: "11-06", y: 10 },
            { x: "11-07", y: 20 }
          ]}
        />
        <VictoryBar
          animate={{
            onLoad: { duration: 1000 }
          }}
          alignment="start"
          data={[
            { x: "11-01", y: 0 },
            { x: "11-02", y: 20 },
            { x: "11-03", y: 25 },
            { x: "11-04", y: 23 },
            { x: "11-05", y: 45 },
            { x: "11-06", y: 10 },
            { x: "11-07", y: 60 }
          ]}
        />
      </VictoryStack>
    </VictoryChart>
  );
}
