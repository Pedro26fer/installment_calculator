import './App.css';
import { Form } from './components/Form';
import { InstallmentInformation } from './components/InstallmentInformation';
import { CenteredModal, Notices } from './style/style1';
import { handleSubmit } from './utils/handleSubmit';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CenteredModal>
          <Form onSubmit={() => handleSubmit}>
            <div>
              <h2>
                Simule sua Antecipação
              </h2>
            </div>

            <label>
                Informe o valor da venda *
                <input
                  type="text"
                />
            </label>
               
            <label>
                Em quantas parcelas *
                <input
                  type="text"
                />         
                <span>Máximo de 12 parcelas</span>    
            </label>

            <label>
                Informe o percentual de MDR *
                <input
                  type="numb"
                />             
            </label>
          </Form>
          <InstallmentInformation>

            <Notices>
              <div>
                <h2>
                  Você receberá
                </h2>
              </div>
            </Notices>

                     
          </InstallmentInformation>

        </CenteredModal>
      </header>
    </div>
  );
}

export default App;
