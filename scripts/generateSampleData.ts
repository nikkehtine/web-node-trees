import fs from "node:fs";
import type { ContentNode, NodeType, Reference } from "../src/lib/types.ts";

const dataLocation = "src/assets/sampleData.ts";

// STEP 1
// Generate nodes

const getRandomMinMaxNumber = (min: number, max: number): number =>
  min + Math.floor(Math.random() * (max - min));
const getRandomIndex = (len: number): number => Math.floor(Math.random() * len);

const nodeTypes: Array<NodeType> = ["parent", "child", "popup"];

const nodesArray: Array<ContentNode> = [];
const contentLength = getRandomMinMaxNumber(7, 11);

for (let i = 0; i < contentLength; i++) {
  const nodeType = (() => {
    if (i === 0 || i === 1) {
      return nodeTypes[0];
    } else {
      return nodeTypes[Math.floor(Math.random() * 3)];
    }
  })();

  nodesArray.push({
    name: i === 0 ? "Home" : undefined,
    nodeType: nodeType,
    id: i,
    references: [],
    childrenNodes: nodeType === "parent" ? [] : undefined,
  });
}

// STEP 2
// Add connections between nodes
{
  let lastParent = 1;
  for (let i = 2; i < contentLength; i++) {
    const nodeType = nodesArray[i].nodeType;
    switch (nodeType) {
      case "parent":
        lastParent = i;
        break;
      case "popup":
        nodesArray[i - getRandomMinMaxNumber(1, 3)].references.push(i);
        break;
      case "child":
        nodesArray[lastParent].childrenNodes?.push(i);
        break;
    }
  }
}

for (let i = 0; i < contentLength; i++) {
  const probability = 4 / 10;
  for (let r = 0; r < contentLength; r++) {
    if (r === i) {
      continue;
    }
    if (Math.random() >= probability) {
      continue;
    }
    if (nodesArray[i].childrenNodes?.includes(r)) {
      continue;
    }
    nodesArray[i].references.push(r);
    nodesArray[i].references.sort((a, b) => a - b);
  }
}

const popups = nodesArray.filter((node) => node.nodeType === "popup");
for (const popupNode of popups) {
  let referenced = false;
  for (let i = 0; i < contentLength; i++) {
    if (nodesArray[i].references.includes(popupNode.id)) {
      referenced = true;
      break;
    }
  }
  if (!referenced) {
    let randomIndex = getRandomIndex(contentLength);
    while (nodesArray[randomIndex].id === popupNode.id) {
      randomIndex = getRandomIndex(contentLength);
    }
    const randomIndexReferences = nodesArray[randomIndex].references;
    randomIndexReferences.push(popupNode.id);
    randomIndexReferences.sort((a, b) => a - b);
  }
}

// STEP 3
// Parse generated content
const compiledNodes = JSON.stringify(nodesArray, undefined, 2);

const imports = `import type { ContentNode } from "@/lib/types";
`;

const content = `${imports}
export const sampleNodes: Array<ContentNode> = ${compiledNodes};
`;

// STEP 4
// Write result

const Reset = `\x1b[0m`,
  FgYellow = "\x1b[33m";

fs.writeFile(
  dataLocation,
  content,
  {
    encoding: "utf-8",
  },
  () => {
    console.log(`${FgYellow}Test data saved to ${dataLocation}${Reset}`);
  },
);
