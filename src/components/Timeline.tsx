// src/Timeline.tsx
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface DataPoint {
    end: number;
    func_name: string;
    msg_size: number;
    start: number;
    tag: number;
}

interface TimelineProps {
    data: DataPoint[];
    overallStart: number;
    overallEnd: number;
    file: string;
}

const Timeline: React.FC<TimelineProps> = ({ data, overallStart, overallEnd, file }) => {
    overallStart = overallStart;
    overallEnd = overallEnd;
    const svgRef = useRef<SVGSVGElement | null>(null);

    const baseValue = Math.floor(overallStart)

    const siFormat = d3.format(".2s");
    const formatTick = (d: d3.NumberValue) => siFormat((d as number) - baseValue)

    function pad(num: number, size: number = 2): string {
        let str = num.toString();
        while (str.length < size) {
            str = '0' + str;
        }
        return str;
    }

    const tooltip = d3.select("body").append("div")
        .attr("id", "tooltip")
        .style("position", "fixed")
        .style("top", "55px")
        .style("right", "40px")
        .style("padding", "10px")
        .style("background", "#d5e0eee7")
        .style("color", "black")
        .style("border-radius", "5px")
        .style("pointer-events", "none")
        .style("font-size", "12px")
        .style("font-family", "Arial")
        .style("opacity", 0);

    useEffect(() => {
        const windowWidth = window.innerWidth - 20;

        const wScale = d3.scaleLinear()
            .domain([overallStart, overallEnd])
            .range([0, windowWidth]);

        const svg = d3.select(svgRef.current)
            .attr("width", windowWidth)
            .attr("height", 150);

        const xAxis = d3.axisBottom(wScale)
            .ticks(10)
            .tickSize(-125)
            .tickFormat(formatTick);

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0, 132.5)") // Position at the bottom of the chart area
            .call(xAxis);

        svg.selectAll(".event")
            .data(data)
            .enter().append("rect")
            .attr("class", "event")
            .attr("x", d => wScale(d.start))
            .attr("y", (d) => (d.func_name === "MPI_Allreduce") ? 22.5 : 67.5)
            .attr("width", d => wScale(d.end) - wScale(d.start))
            .attr("height", 40)
            .style("opacity", 0.85)
            .style("fill", (data) => {
                if (data.func_name === "MPI_Allreduce") {
                    return "#3288bd";
                } else {
                    return "#66c2a5";
                }
            })
            .on("mouseover", (event, d) => {
                d3.select(event.currentTarget as SVGRectElement).style("fill", "black");
                const date1: Date = new Date(Math.floor(d.start/1000));
                const date2: Date = new Date(Math.floor(d.end/1000));
                const differenceMs: number = Math.abs(date2.getTime() - date1.getTime());

                const hours: number = Math.floor(differenceMs / (1000 * 60 * 60));
                const minutes: number = Math.floor((differenceMs % (1000 * 60 * 60)) / (1000 * 60));
                const seconds: number = Math.floor((differenceMs % (1000 * 60)) / 1000);
                const milliseconds: number = differenceMs % 1000;

                const formattedTime: string = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}::${pad(milliseconds, 3)}`;

                tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
                tooltip.html(`Tag: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${d.tag} <br> 
                              Func: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${d.func_name}<br> 
                              Duration: &nbsp;&nbsp;${formattedTime} <br> 
                              Msg size: &nbsp;${d.msg_size} kb <br>
                              Start: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${d.start}<br>
                              End: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${d.end}<br><br>
                              File: ${file}`)
            })
            .on("mouseout", (event, data) => {
                d3.select(event.currentTarget as SVGRectElement).style("fill", () => {
                    if (data.func_name === "MPI_Allreduce") {
                        return "#3288bd";
                    } else {
                        return "#66c2a5";
                    }
                });
                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

    }, [data, overallStart, overallEnd]);

    return (
        <>
            <svg
                ref={svgRef}
            ></svg>
            <div className='timeline_info_div'>
                <div className='time_legends'>
                    <p><strong>{file}</strong>, start- {overallStart}</p>
                    <p>end- {overallStart} + {formatTick(overallEnd)}</p>
                </div>
            </div>
        </>
    );
};

export default Timeline;
