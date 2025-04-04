package br.com.dio.barbershoui.exception;

public class ScheduleInUseException extends RuntimeException {
  public ScheduleInUseException(String message) {
    super(message);
  }
}
