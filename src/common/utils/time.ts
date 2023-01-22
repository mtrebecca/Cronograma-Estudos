function transformaHorasEmSegundos(horas: string) {
    return Number(horas) * 3600;
}

function transformaMinutosEmSegundos(minutos: string) {
    return Number(minutos) * 60;
}


export function tempoParaSegundos(tempo: string) {
    const [horas = '0', minutos = '0', segundos = '0'] = 
    tempo.split(':');

    const horasEmSegundos = transformaHorasEmSegundos(horas);
    const minutosEmSegundos = transformaMinutosEmSegundos(minutos);
    const segundosConvertido = Number(segundos);
    
    return horasEmSegundos + minutosEmSegundos + segundosConvertido; 
}

export function minutosESegundosDoTempo(tempo: number) {
    const segundos = tempo % 60;
    const minutos = (tempo - segundos) / 60;
    return [minutos, segundos];
}