import { pie, arc, select, selectAll, easeLinear, interpolate } from "d3";
import { range, indexOf } from "lodash";
const hours = range(7, 20);
const months = [
  { month: "January", startDateID: 0, endDateID: 30 },
  { month: "February", startDateID: 31, endDateID: 58 },
  { month: "March", startDateID: 59, endDateID: 89 },
  { month: "April", startDateID: 90, endDateID: 119 },
  { month: "May", startDateID: 120, endDateID: 150 },
  { month: "June", startDateID: 151, endDateID: 180 },
  { month: "July", startDateID: 181, endDateID: 211 },
  { month: "August", startDateID: 212, endDateID: 242 },
  { month: "September", startDateID: 243, endDateID: 272 },
  { month: "October", startDateID: 273, endDateID: 303 },
  { month: "November", startDateID: 306, endDateID: 333 },
  { month: "December", startDateID: 334, endDateID: 364 }
];
export function renderSolarRadial(
  key,
  svgContainer,
  data,
  {
    svgWidth,
    radius,
    endAngle = 6.08,
    monthLabelInnerPortion = 1.01,
    monthLabelOuterPortion = 1.08,
    handleMouseOver,
    handleMouseOut,
    colorScale
  }
) {
  const ringSize = (1 - 0.5) / hours.length;

  const pieGenerator = pie()
    .sort(null)
    .value(d => d.value)
    .endAngle(endAngle);

  const monthPieGenerator = pie()
    .value(d => d.endDateID - d.startDateID)
    .sort(null)
    .endAngle(endAngle);

  const g = select(svgContainer)
    .append("g")
    .attr("transform", `translate(${svgWidth / 2},${svgWidth / 2})`);

  //draw solar ring for every hour
  hours.forEach(h => {
    const solarRingGroup = g.append("g").attr("class", `hour-${h}`);

    const solarRingUpdate = solarRingGroup.selectAll("path").data(
      pieGenerator(data.filter(d => d.time === h)),
      d =>
        `${d.data.date
          .split("/")
          .slice(0, 2)
          .join("")}${h}`
    );

    solarRingUpdate.exit().remove();

    solarRingUpdate
      .enter()
      .append("path")
      .merge(solarRingUpdate)
      .on("mouseover", function(d) {
        //find all segments of the same date and hour
        const pathId = select(this)
          .attr("id")
          .replace(`${key}-`, "");
        const selectedArcs = selectAll(`path[id*='${pathId}']`);
        selectedArcs.each(function() {
          select(this).attr("stroke", "#000");
        });
        handleMouseOver(key, pathId);
      })
      .on("mouseout", function(d) {
        const pathId = select(this)
          .attr("id")
          .replace(`${key}-`, "");
        const selectedArcs = selectAll(`path[id*='${pathId}']`);
        selectedArcs.each(function() {
          select(this).attr("stroke", "none");
        });
        handleMouseOut();
      })
      .transition()
      .ease(easeLinear)
      .delay((d, i) => i * 10)
      .attrTween("d", d => {
        const ringIndex = indexOf(hours, d.data.time);
        const arcStartAngle = d.index * (endAngle / 365);
        const arcEndAngle = (d.index + 1) * (endAngle / 365);
        const arcInterpolate = interpolate(arcStartAngle, arcEndAngle);

        return t => {
          return arc()({
            innerRadius: (1 - (ringIndex + 1) * ringSize) * radius,
            outerRadius: (1 - ringIndex * ringSize) * radius,
            startAngle: arcStartAngle,
            endAngle: arcInterpolate(t)
          });
        };
      })
      .attr(
        "id",
        d =>
          `${key}-${d.data.date
            .split("/")
            .slice(0, 2)
            .join("")}${h}`
      )
      .attr("fill", d => (d.value ? colorScale(d.value) : "#fff"));
  });

  const timeLabelsGroup = g.append("g").attr("class", "hourLabels");
  const timeLabelupdate = timeLabelsGroup.selectAll("text").data(hours, d => d);

  timeLabelupdate.exit().remove();

  timeLabelupdate
    .enter()
    .append("text")
    .attr("x", -1)
    .attr("y", (d, i) => -radius * (1 - ringSize - ringSize * i))
    .attr("text-anchor", "end")
    .attr("fill", "#000")
    .attr("font-size", `${ringSize * radius}px`)
    .style("opacity", 0)
    .merge(timeLabelupdate)
    .transition()
    .duration(365 * 10)
    .text(d => `${d}:00`)
    .style("opacity", 1);

  //draw month arcs
  const monthLabelsGroup = g.append("g").attr("class", "monthLabels");
  const monthArcsUpdate = monthLabelsGroup
    .selectAll("path")
    .data(monthPieGenerator(months), d => d.startDateID);
  monthArcsUpdate.exit().remove();
  monthArcsUpdate
    .enter()
    .append("path")
    .merge(monthArcsUpdate)
    .attr("id", (d, i) => `${key}-monthArc-${i}`)
    .attr("fill", "#fff")
    // .attr("stroke", "#000")
    .attr("d", d =>
      arc()({
        innerRadius: monthLabelInnerPortion * radius,
        outerRadius: monthLabelOuterPortion * radius,
        startAngle: d.startAngle,
        endAngle: d.endAngle
      })
    )
    .each(function(d, i) {
      const arcPath = select(this).attr("d");
      const arcLastACommand = /L.+?A(.+?)Z/.exec(arcPath)[1].split(",");
      const lineStart = /(^.+?)A/.exec(arcPath)[1];
      const lineEnd = `L${arcLastACommand
        .slice(arcLastACommand.length - 2)
        .join()}`;
      monthLabelsGroup
        .append("path")
        .transition()
        .delay((i * (365 * 10)) / 12)
        .attr("d", lineStart + lineEnd)
        .attr("stroke", "#aaa");
    });
  const monthLabelTexts = monthLabelsGroup
    .selectAll("text")
    .data(months, d => d.startDateID);

  monthLabelTexts.exit().remove();
  monthLabelTexts
    .enter()
    .append("text")
    .attr("x", 1)
    .attr(
      "dy",
      `${(monthLabelOuterPortion - monthLabelInnerPortion - 0.01) * radius}`
    )
    .append("textPath")
    .attr("xlink:href", (d, i) => `#${key}-monthArc-${i}`)
    .text(d => d.month)
    .attr(
      "font-size",
      `${(monthLabelOuterPortion - monthLabelInnerPortion) * radius}px`
    )
    .style("opacity", 0)
    .merge(monthLabelTexts)
    .transition()
    .delay((d, i) => (i * (365 * 10)) / 12)
    .ease(easeLinear)
    .style("opacity", 1);
}
