package br.com.dio.barbershoui.service.query.impl;

import br.com.dio.barbershoui.entity.ScheduleEntity;
import br.com.dio.barbershoui.exception.NotFoundException;
import br.com.dio.barbershoui.exception.ScheduleInUseException;
import br.com.dio.barbershoui.repository.IScheduleRepository;
import br.com.dio.barbershoui.service.query.IScheduleQueryService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;

import java.time.OffsetDateTime;
import java.util.List;

@Repository
@AllArgsConstructor
public class ScheduleQueryService implements IScheduleQueryService {

  private final IScheduleRepository repository;

  @Override
  public ScheduleEntity findById(final long id) {
    return repository.findById(id).orElseThrow(
      () -> new NotFoundException("Agendamento não encontrado")
    );
  }

  @Override
  public List<ScheduleEntity> findInMonth(final OffsetDateTime startAt, final OffsetDateTime endAt) {
    return repository.findByStartAtGreaterThanEqualAndEndAtLessThanEqualOrderByStartAtAscEndAtAsc(startAt, endAt);
  }

  @Override
  public void verifyIfScheduleExists(final OffsetDateTime startAt, final OffsetDateTime endAt) {
    if (repository.existsByStartAtAndEndAt(startAt, endAt)){
      var message = "Já existe um cliente agendado no horário solicitado";
      throw new ScheduleInUseException(message);
    }
  }

}
