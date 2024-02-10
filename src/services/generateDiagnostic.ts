import getResponse from "./gpt"

export default async function getDiagnostic (prediction: string){
  const prompt = `¿Cuál es el tratamiento adecuando que se sigue para la enfermedad ${prediction} en mi campo de cultivo`
  const diagnostic = await getResponse(prompt)
  return diagnostic
}