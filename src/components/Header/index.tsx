import { HeaderContainer, HeaderContent, NewTransactionBtn } from "./styles";
import logoSvg from '../../assets/logo.svg';

export function Header() {
  return(
    <HeaderContainer>
      <HeaderContent>
        <img src={logoSvg} alt="" />
        <NewTransactionBtn>Nova transação</NewTransactionBtn>
      </HeaderContent>
    </HeaderContainer>
  );
}