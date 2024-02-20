import { useEffect, useRef } from "react";
import * as d3 from "d3";
import useEmployeeProfile from "../../../hooks/useEmployeeProfile";
import useEmployeeTask from "../../../hooks/useEmployeeTask";

const UserPerformance = () => {

    const [employeeRequestCheck] = useEmployeeProfile()
    console.log(employeeRequestCheck);
    const [allEmployeeTask] = useEmployeeTask()
    console.log(allEmployeeTask);
    const myTask = allEmployeeTask?.filter(element => element.company === employeeRequestCheck.company)
    console.log(myTask);

    const data = {
        name: employeeRequestCheck.name,
        children: myTask?.map((taskElement) => ({
            name:  taskElement.addItem,
            children: [
                {
                    name: 'Start Time : '+ taskElement.startTime,
                    value: 17010
                },
                {
                    name: 'See Your Task Dettles',
                    children: [
                        {
                            name: 'Priority : ' + taskElement.tags,
                            value: 1983
                        },
                        {
                            name: 'Effort : ' + taskElement.effort,
                            value: 2047
                        },
                        {
                            name: "DateInterpolator",
                            // value: 1375
                        },
                        {
                            name: 'Type : ' + taskElement.audience,
                            value: 8746
                        },
                        {
                            name: 'Chanel : ' + taskElement.channel,
                            value: 2202
                        },
                        {
                            name: "NumberInterpolator",
                            // value: 1382
                        },
                        {
                            name: "ObjectInterpolator",
                            // value: 1629
                        },
                        {
                            name: "PointInterpolator",
                            // value: 1675
                        },
                        {
                            name: 'status : ' + taskElement.status,
                            value: 2042
                        }
                    ]
                },
                {
                    name: "ISchedulable",
                    // value: 1041
                },
                {
                    name: "Parallel",
                    value: 5176
                },
                {
                    name: "Pause",
                    // value: 449
                },
                {
                    name: "Scheduler",
                    value: 5593
                },
                {
                    name: "Sequence",
                    value: 5534
                },
                {
                    name: 'End Time : '+ taskElement.timeAndLocal,
                    value: 9201
                },
                {
                    name: taskElement.email,
                    value: 19975
                },
                {
                    name: "TransitionEvent",
                    // value: 1116
                }
            ]
        }))

    }

    const svgRef = useRef();

    useEffect(() => {
        const width = document.body.clientWidth;
        const height = 1200;

        // Create the color scale.
        const color = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, data?.children ? Math.max(data.children.length + 1, 1) : 1));

        // Compute the layout.
        const hierarchyData = d3.hierarchy(data)
            .sum(d => d.value)
            .sort((a, b) => b.height - a.height || b.value - a.value);
        const root = d3.partition()
            .size([height, (hierarchyData.height + 1) * width / 3])(hierarchyData);

        // Create the SVG container.
        const svg = d3.select(svgRef.current)
            .attr("viewBox", [0, 0, width, height])
            .attr("width", width)
            .attr("height", height)
            .attr("style", "max-width: 100%; height: auto; font: 20px sans-serif;");

        // Append cells.
        const cell = svg.selectAll("g")
            .data(root.descendants())
            .join("g")
            .attr("transform", d => `translate(${d.y0},${d.x0})`);

        const rect = cell.append("rect")
            .attr("width", d => d.y1 - d.y0 - 1)
            .attr("height", d => rectHeight(d))
            // .attr("fill-opacity", 0.6)
            .attr("fill", d => {
                if (!d.depth) return "#ccc";
                while (d.depth > 1) d = d.parent;
                return color(d.data.name);
            })
            .style("cursor", "pointer")
            .on("click", clicked);

        const text = cell.append("text")
            .style("user-select", "none")
            .attr("pointer-events", "none")
            .attr("x", 4)
            .attr("y", d => rectHeight(d) / 2)
            .attr("fill-opacity", d => +labelVisible(d));

        text.append("tspan")
            .text(d => d.data.name);

        const format = d3.format(",d");
        const tspan = text.append("tspan")
            .attr("fill-opacity", d => labelVisible(d) * 0.7)
            .text(d => ` ${format(d.value)}`);

        cell.append("title")
            .text(d => `${d.ancestors().map(d => d.data.name).reverse().join("/")}\n${format(d.value)}`);

        // On click, change the focus and transitions it into view.
        let focus = root;

        function clicked(event, p) {
            focus = focus === p ? p = p.parent : p;

            root.each(d => d.target = {
                x0: (d.x0 - p.x0) / (p.x1 - p.x0) * height,
                x1: (d.x1 - p.x0) / (p.x1 - p.x0) * height,
                y0: d.y0 - p.y0,
                y1: d.y1 - p.y0
            });

            const t = cell.transition().duration(750)
                .attr("transform", d => `translate(${d.target.y0},${d.target.x0})`);

            rect.transition(t).attr("height", d => rectHeight(d.target));
            text.transition(t).attr("fill-opacity", d => +labelVisible(d.target));
            tspan.transition(t).attr("fill-opacity", d => labelVisible(d.target) * 0.7);
        }

        function rectHeight(d) {
            return d.x1 - d.x0 - Math.min(1, (d.x1 - d.x0) / 2);
        }

        function labelVisible(d) {
            return d.y1 <= width && d.y0 >= 0 && d.x1 - d.x0 > 16;
        }

    }, [data]);

    return <svg ref={svgRef}></svg>;
};

export default UserPerformance;
