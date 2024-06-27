// src/Timeline.tsx
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface TagStatsDataPoint {
    state: string;
    age: string;
    population: number;
}

function TagStats({ data }: { data: TagStatsDataPoint[] }) {
    const svgRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        if (svgRef.current) d3.select(svgRef.current).selectAll("*").remove();
        // Define margins and dimensions
        const margin = { top: 20, right: 30, bottom: 30, left: 40 };
        const width = data.length * 20;
        const height = 500;
        const marginLeft = margin.left;
        const marginRight = margin.right;
        const marginTop = margin.top;
        const marginBottom = margin.bottom;

        // Determine the series that need to be stacked.
        const series = d3.stack<TagStatsDataPoint>()
            .keys(d3.union(data.map(d => d.age)))
            .value(([, D], key) => D.get(key)?.population || 0)
            (d3.index(data, d => d.state, d => d.age));

        // Prepare the scales for positional and color encodings.
        const x = d3.scaleBand()
            .domain(d3.groupSort(data, D => -d3.sum(D, d => d.population), d => d.state))
            .range([marginLeft, width - marginRight])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(series, d => d3.max(d, d => d[1]))!])
            .rangeRound([height - marginBottom, marginTop]);

        const spectralLength = d3.schemeSpectral.length;
        const colorRange = series.length <= spectralLength ? d3.schemeSpectral[series.length] : null;

        const color = d3.scaleOrdinal<string, string>()
            .domain(series.map(d => d.key))
            .range(
                colorRange ? colorRange : Array.from({ length: series.length }, (_, i) => d3.interpolateSpectral(i / (series.length - 1)))
            )
            .unknown("#ccc");

        // A function to format the value in the tooltip.
        const formatValue = (x: number) => isNaN(x) ? "N/A" : x.toLocaleString("en");

        // Create the SVG container.
        const svg = d3.select(svgRef.current)
            .attr("width", width)
            .attr("height", height)
        // .attr("viewBox", `0 0 ${width} ${height}`)
        // .attr("style", "max-width: 100%; height: auto;");

        // Append a group for each series, and a rect for each element in the series.
        svg.append("g")
            .selectAll("g")
            .data(series)
            .join("g")
            .attr("fill", d => color(d.key as string))
            .selectAll("rect")
            .data(D => D.map(d => (d.key = D.key as string, d)))
            .join("rect")
            .attr("x", d => x(d.data[0])!)
            .attr("y", d => y(d[1]))
            .attr("height", d => y(d[0]) - y(d[1]))
            .attr("width", x.bandwidth())
            .append("title")
            .text(d => `${d.data[0]} ${d.key}\n${formatValue(d.data[1].get(d.key)?.population || 0)}`);

        // Append the horizontal axis.
        svg.append("g")
            .attr("transform", `translate(0,${height - marginBottom})`)
            .call(d3.axisBottom(x).tickSizeOuter(0))
            .call(g => g.selectAll(".domain").remove());

        // Append the vertical axis.
        svg.append("g")
            .attr("transform", `translate(${marginLeft},0)`)
            .call(d3.axisLeft(y).ticks(null, "s"))
            .call(g => g.selectAll(".domain").remove());

    }, [data]);

    return (
        <div>
            <svg ref={svgRef}></svg>
        </div>
    );
}

export default TagStats;
export type { TagStatsDataPoint };
