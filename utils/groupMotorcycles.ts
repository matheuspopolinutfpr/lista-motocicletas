export type Motorcycle = {
  id: string;
  brand: string;
  model: string;
  year: number;
  category: string;
};

export type MotorcycleSection = {
  title: string;
  data: Motorcycle[];
};

export function groupByCategory(motorcycles: Motorcycle[]): MotorcycleSection[] {
  const groups = new Map<string, Motorcycle[]>();

  for (const moto of motorcycles) {
    const group = groups.get(moto.category);
    if (group) group.push(moto);
    else groups.set(moto.category, [moto]);
  }

  return Array.from(groups, ([title, data]) => ({ title, data })).sort((a, b) =>
    a.title.localeCompare(b.title),
  );
}
