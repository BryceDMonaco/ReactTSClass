interface ChildProps {
  color: string;
}

export const Child = ({ color }: ChildProps) => {
  return <div>Hi there!</div>;
};

export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>
};