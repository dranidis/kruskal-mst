import { Edge } from '../edge';
import { kruskal } from '../';

test('kruskal empty', () => {
  const edges: Edge<string>[] = [];
  const spanningTree = kruskal(edges);
  const expected: Edge<string>[] = [];

  expect(spanningTree).toEqual(expected);
});

test('kruskal', () => {
  const edges: Edge<string>[] = [
    { from: 'A', to: 'B', weight: 1 },
    { from: 'A', to: 'C', weight: 5 },
    { from: 'A', to: 'E', weight: 7 },
    { from: 'B', to: 'C', weight: 2 },
    { from: 'B', to: 'D', weight: 5 },
    { from: 'C', to: 'F', weight: 8 },
    { from: 'D', to: 'E', weight: 3 },
    { from: 'D', to: 'F', weight: 4 },
    { from: 'E', to: 'F', weight: 5 },
  ];
  const spanningTree = kruskal(edges);
  const expected: Edge<string>[] = [
    { from: 'A', to: 'B', weight: 1 },
    { from: 'B', to: 'C', weight: 2 },
    { from: 'D', to: 'E', weight: 3 },
    { from: 'D', to: 'F', weight: 4 },
    { from: 'B', to: 'D', weight: 5 },
  ];

  expect(spanningTree.length).toBe(5);
  expect(spanningTree).toEqual(expected);
});
