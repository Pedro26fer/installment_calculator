import { Notices } from "./style"



export const Notice = ({dayOne, dayTwo, dayThree, dayFour}) => {

    return(
        <Notices>
            <div>
                <h2>
                    Você receberá
                </h2>

                <ul>
                    <li>Amanha: <span>R$ {dayOne},00</span></li>
                    <li>Em 15 dias: <span>R$ {dayTwo},00</span></li>
                    <li>Em 30 dias: <span>R$ {dayThree},00</span></li>
                    <li>Em 90 dias: <span>R$ {dayFour},00</span></li>
                </ul>
            </div>
        </Notices>
    )
}