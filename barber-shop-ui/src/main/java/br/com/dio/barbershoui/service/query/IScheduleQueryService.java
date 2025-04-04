package br.com.dio.barbershoui.service.query;

import br.com.dio.barbershoui.entity.ScheduleEntity;

import java.time.OffsetDateTime;
import java.util.List;

public interface IScheduleQueryService {

  ScheduleEntity findById(final long id);

  List<ScheduleEntity> findInMonth(final OffsetDateTime startAt, final OffsetDateTime endAt);

  void verifyIfScheduleExists(final OffsetDateTime startAt, final OffsetDateTime endAt);

}
