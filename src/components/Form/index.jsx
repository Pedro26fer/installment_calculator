import { Alert, MessageError, StyledForm } from "./style"
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';  
import { Api } from "../../assets";


export const Form = ({setDayOne, setDayTwo, setDayThree, setDayFour}) => {

    
    const handleSubmiting = async (data) => {
        const response = await Api.post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", data)
        const days = response.data
        
        setDayOne(days[1])
        setDayTwo(days[15])
        setDayThree(days[30])
        setDayFour(days[90])
    }

    const formSchema = yup.object().shape({
        amount: yup.number().required("Informe o valor da venda!"),
        installments: yup.number().required("Informe a quantidade de parcelas!"),
        mdr: yup.number().required("Qual o valor da taxa MDR?")
    })

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver( formSchema )
    }) 

    return(
        <StyledForm onSubmit={handleSubmit(handleSubmiting)}>
             <div>
              <h2>
                Simule sua Antecipação
              </h2>
            </div>

            <label>
                Informe o valor da venda * {errors.amount && ( <MessageError> - Informe um valor acima de 1000</MessageError>)}
                <input
                    type="number"
                    id = "amount"
                    {...register("amount")}
                    placeholder="Valores a partir de 1000"
                  />                  
            </label>
                           
            <label>
                Em quantas parcelas * {errors.installments && ( <MessageError> - Informe o numero de parcelas</MessageError>)}
                <input
                  type="number"
                  {...register("installments")}
                />         
                <Alert>Máximo de 12 parcelas</Alert>    
            </label>

            <label>
                Informe o percentual de MDR * {errors.mdr && ( <MessageError> - Informe a taxa</MessageError>)}
                <input
                  type="number"
                  {...register("mdr")}
                />             
            </label>

            <button type='submit'>Calcular</button>
        </StyledForm>
    )
}