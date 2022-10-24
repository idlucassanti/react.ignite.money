import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { Price, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td><Price variant="entrada">R$ 12.000,00</Price></td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <Price variant="saida">- R$ 59,00</Price></td>
              <td>Casa</td>
              <td>27/03/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>

    </div>
  );
}