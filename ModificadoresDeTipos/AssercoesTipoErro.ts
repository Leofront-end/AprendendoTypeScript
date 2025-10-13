const numeroValidoParaFalha = '42'; // Definido como string

try {
    // A condição foi ajustada para usar a comparação estrita de strings.
    // Agora, '42' === '42' é TRUE e o erro será lançado.
    if (numeroValidoParaFalha === '42') {
        // Lança um objeto do tipo Error
        throw new Error("Erro de código: O número '42' não é permitido aqui!");
    }

    console.log("Sucesso! Nenhum erro foi lançado.");

} catch (error) {
    // O 'catch' é executado. 'error' é uma instância de Error.
    
    // Testa: 'error instanceof Error' será TRUE.
    console.warn(
        `Oh não!`,
        // Se for um Error, usa a message. Se não, usa o próprio objeto/valor.
        error instanceof Error ? error.message : error
    );
}

console.log("\nFim do programa.");