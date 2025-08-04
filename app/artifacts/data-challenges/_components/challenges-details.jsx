"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";
import data from '@/app/_data/data-challanges.json';

export default function ChallengesDetails() {
  const ref = useRef();

  useEffect(() => {
    const root = d3.hierarchy(data);
    const dx = 10;
    const dy = 180;
    const tree = d3.tree().nodeSize([dx, dy]);
    const diagonal = d3.linkHorizontal().x((d) => d.y).y((d) => d.x);

    const width = root.height * dy + 200; // root.height 是最大深度
    const height = root.descendants().length * dx;


    const svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .call(
        d3.zoom().on("zoom", (event) => {
          g.attr("transform", event.transform); // <-- 绑定 zoom 拖拽缩放
        })
      );

    const g = svg.append("g");
    const gLink = g.append("g").attr("fill", "none").attr("stroke", "#555");
    const gNode = g.append("g").attr("cursor", "pointer");

    tree(root);

    const link = gLink.selectAll("path").data(root.links()).join("path").attr("d", diagonal);

    const node = gNode
      .selectAll("g")
      .data(root.descendants())
      .join("g")
      .attr("transform", (d) => `translate(${d.y},${d.x})`);

    node
      .append("circle")
      .attr("r", 4)
      .attr("fill", (d) => (d.children ? "#555" : "#999"));

    node
      .append("text")
      .attr("dy", "0.31em")
      .attr("x", (d) => (d.children ? -6 : 6))
      .attr("text-anchor", (d) => (d.children ? "end" : "start"))
      .text((d) => d.data.name)
      .clone(true)
      .lower()
      .attr("stroke", "white");
  }, []);

  return <div ref={ref}></div>;
}