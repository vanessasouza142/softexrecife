/*Crie um exemplo de como funcionam a serialização e a desserialização de um sistema qualquer. Utilize as classes, os objetos e métodos padrões da Java 
e insira um endereço físico fictício.*/

fileoutputstream item = new fileoutputstream ('listaDeCompras.csv')
objectoutputstream lista = new objectoutputstream (item)
lista.writeobject (listaserializavel)
lista.close()

fileinputstream item = new fileinputstream
objectinputstream lista = new objectinputstream (item)
listaserializavel lista.readobject
lista.close()
return serializado

            // Serializacao
            FileOutputStream fos = new FileOutputStream("arquivo.txt");
            ObjectOutputStream oos = new ObjectOutputStream(fos);
            Aluno alunoSerializado = new Aluno("Fulano", "12345");
            oos.writeObject(alunoSerializado);
            oos.close();

            // Desserializacao
            FileInputStream fis = new FileInputStream("arquivo.txt");
            ObjectInputStream ois = new ObjectInputStream(fis);
            Aluno alunoDesserializado = (Aluno) ois.readObject();
            ois.close();
