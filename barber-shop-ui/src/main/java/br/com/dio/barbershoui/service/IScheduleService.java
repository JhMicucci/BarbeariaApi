package br.com.dio.barbershoui.service;

import br.com.dio.barbershoui.entity.ScheduleEntity;

public interface IScheduleService {

  ScheduleEntity save(final ScheduleEntity entity);

  void delete(final long id);

}
