export function convertorHora(tempo: string) {
    const [horas = '0', minutos = "0", segundos = '0'] = tempo.split(':')

    const horasConvertidas = Number(horas)*3600
    const minutosConvertidos = Number(minutos)*60

    return horasConvertidas + minutosConvertidos + Number(segundos)
}