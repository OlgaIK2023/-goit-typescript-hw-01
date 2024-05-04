type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

//   type top = Pick<AllType, 'color' | 'name'>;
//   type bottom = Pick<AllType, 'position' | 'weight'>;

function compare<T extends AllType, U extends AllType>(
  top: Pick<T, keyof AllType>,
  bottom: Pick<U, keyof AllType>
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
