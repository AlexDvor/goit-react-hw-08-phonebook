import { WrapperTitle } from './HelperTitle.styled';

export default function HelperTitle({ text }) {
  return (
    <WrapperTitle>
      <h2>{text}</h2>
    </WrapperTitle>
  );
}
