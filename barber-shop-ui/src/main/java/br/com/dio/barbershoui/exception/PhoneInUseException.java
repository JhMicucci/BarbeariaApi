package br.com.dio.barbershoui.exception;

public class PhoneInUseException extends RuntimeException {
  public PhoneInUseException(String message) {
    super(message);
  }
}
