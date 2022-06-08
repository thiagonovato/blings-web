import { Input } from './styles';

interface IInputProps {
  value: string;
}
export const InputComponent: React.FC<IInputProps> = (props) => {
  const { value, ...rest } = props;

  return <Input {...rest} />;
};
