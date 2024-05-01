package Pilha;

import Exception.MyException;

public interface InterfacePilha <T>{
    void push(T valor) throws MyException;

    T pop() throws MyException;

    T peek() throws MyException;

    boolean isEmpty();
    boolean isFull();
}
