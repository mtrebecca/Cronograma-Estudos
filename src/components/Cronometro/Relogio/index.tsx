import { minutosESegundosDoTempo } from '../../../common/utils/time';
import style from './Relogio.module.scss';

interface Props {
  tempo: number | undefined
}

export default function Relogio({ tempo = 0 }: Props) {
    const [minutos, segundos] = minutosESegundosDoTempo(tempo);

    const [minutosDezena, minutosUnidade] = String(minutos).padStart(2, '0');
    const [segundosDezena, segundosUnidade] = String(segundos).padStart(2, '0');

  return (
    <>
        <span className={style.relogioNumero}>{minutosDezena}</span>
        <span className={style.relogioNumero}>{minutosUnidade}</span>
        <span className={style.reologioDivisao}>:</span>
        <span className={style.relogioNumero}>{segundosDezena}</span>
        <span className={style.relogioNumero}>{segundosUnidade}</span>
    </>
  )
}