import { DisjointSet } from 'disjoint-set-ds';
import { Edge } from './edge';

export function kruskal<T>(edges: Edge<T>[]): Edge<T>[] {
  edges.sort(function (a, b) {
    return a.weight - b.weight;
  });
  const f: Edge<T>[] = [];
  const ds = new DisjointSet();

  edges.forEach((edge) => {
    ds.makeSet(edge.from);
    ds.makeSet(edge.to);
  });

  edges.forEach((edge) => {
    if (ds.find(edge.from) !== ds.find(edge.to)) {
      f.push(edge);
      ds.union(ds.find(edge.from), ds.find(edge.to));
    }
  });

  return f;
}

export { Edge } from './edge';
