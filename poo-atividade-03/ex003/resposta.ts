function tratamento (nome: string, formaTratamento: string): string {
    formaTratamento = formaTratamento || "Sr";

    console.log(`${formaTratamento}. ${nome}`);
}

tratamento("Sávia", "Sra");
tratamento("Roberto");
