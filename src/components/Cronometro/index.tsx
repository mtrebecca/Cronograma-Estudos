import { useEffect, useState } from 'react';
import { tempoParaSegundos } from '../../common/utils/time';
import { ITarefa } from '../../types/tarefa';
import Button from '../Button';
import Clock from './Relogio';
import style from './Cronometro.module.scss'

interface Props {
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void,
    limparTarefas: () => void,
}

export default function Cronometro({ selecionado, finalizarTarefa, limparTarefas}: Props) {
    const [tempo, setTempo] = useState<number>();
    const [podeContar, setPodeContar] = useState<boolean>(true);
    const [intervalId, setIntervalId] = useState<NodeJS.Timer>(setInterval(()=>{}));

    useEffect(() => {
        if(selecionado?.tempo) { //aqui o instrutor colocou selecionado?.tempo na condição, porque? O tempo a princípio nunca será null
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado])

    function regressivaComSetInterval(contador: number = 0) {
        setPodeContar(true);
        setIntervalId(setInterval(regressiva, 1000))

        function regressiva() {
            if(podeContar) {
                setTempo(contador - 1);
                contador--;
                if(contador === 0) {
                    finalizarTarefa();
                    clearInterval(intervalId);
                    setPodeContar(false);
                    return;
                };
            }
        }
    }

    function pararContagem(id: NodeJS.Timer) {
        setPodeContar(false);
        clearInterval(id);
    }

    function resetarTarefas(id: NodeJS.Timer) {
        clearInterval(id);
        setTempo(0);
        setPodeContar(false);
        limparTarefas();
        setTempo(0);
    }
    
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock tempo={tempo}/>
            </div>
            <div className={style.boxBotoes}>
                <Button onClick={() => regressivaComSetInterval(tempo)} >
                    Começar!
                </Button>
                <Button onClick={() => pararContagem(intervalId)}>Pausar</Button>
                <Button onClick={() => resetarTarefas(intervalId)}>Resetar</Button>
            </div>
        </div>
    )
}