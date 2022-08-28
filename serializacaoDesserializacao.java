/*Crie um exemplo de como funcionam a serialização e a desserialização de um sistema qualquer. Utilize as classes, os objetos e métodos padrões da Java 
e insira um endereço físico fictício.*/

// Serializacao
FileOutputStream alunosQuintoAno = new FileOutputStream("notas.csv")
ObjectOutputStream notas = new ObjectOutputStream(alunosQuintoAno)
notas.writeObject(notasSerializado)
notas.close();

// Desserializacao
FileInputStream alunosQuintoAno = new FileInputStream(alunosQuintoAno)
ObjectInputStream notas = new ObjectInputStream(alunosQuintoAno)
notasserializado notas.readObject()
notas.close()
return serializado
