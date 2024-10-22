import type { ContentNode } from "@/lib/types";

export const sampleNodes: Array<ContentNode> = [
  {
    "name": "Home",
    "nodeType": "parent",
    "id": 0,
    "references": [
      1,
      5
    ],
    "childrenNodes": []
  },
  {
    "nodeType": "parent",
    "id": 1,
    "references": [
      0,
      3,
      4,
      5,
      6
    ],
    "childrenNodes": [
      2
    ]
  },
  {
    "nodeType": "child",
    "id": 2,
    "references": [
      3,
      4,
      5,
      6,
      7
    ]
  },
  {
    "nodeType": "parent",
    "id": 3,
    "references": [
      4,
      5,
      7
    ],
    "childrenNodes": []
  },
  {
    "nodeType": "popup",
    "id": 4,
    "references": [
      5
    ]
  },
  {
    "nodeType": "parent",
    "id": 5,
    "references": [
      2
    ],
    "childrenNodes": [
      6
    ]
  },
  {
    "nodeType": "child",
    "id": 6,
    "references": [
      1,
      2,
      3,
      7
    ]
  },
  {
    "nodeType": "parent",
    "id": 7,
    "references": [
      0,
      1,
      4,
      5,
      6
    ],
    "childrenNodes": []
  }
];
