import type { ContentNode } from "@/lib/types";

export const sampleNodes: Array<ContentNode> = [
  {
    "name": "Home",
    "nodeType": "parent",
    "id": 0,
    "references": [
      1,
      2,
      4,
      8
    ],
    "children": []
  },
  {
    "nodeType": "parent",
    "id": 1,
    "references": [
      3
    ],
    "children": []
  },
  {
    "nodeType": "popup",
    "id": 2,
    "references": [
      0,
      3,
      4,
      7,
      8
    ]
  },
  {
    "nodeType": "popup",
    "id": 3,
    "references": [
      0,
      5,
      7,
      9
    ]
  },
  {
    "nodeType": "parent",
    "id": 4,
    "references": [
      2,
      3
    ],
    "children": []
  },
  {
    "nodeType": "parent",
    "id": 5,
    "references": [
      0,
      2,
      3,
      8
    ],
    "children": [
      6
    ]
  },
  {
    "nodeType": "child",
    "id": 6,
    "references": [
      2,
      7,
      8,
      9
    ]
  },
  {
    "nodeType": "popup",
    "id": 7,
    "references": [
      1,
      4,
      6,
      9
    ]
  },
  {
    "nodeType": "parent",
    "id": 8,
    "references": [
      4,
      5,
      6,
      9
    ],
    "children": []
  },
  {
    "nodeType": "popup",
    "id": 9,
    "references": [
      0,
      5
    ]
  }
];
