package br.com.dio.barbershoui.service;

import br.com.dio.barbershoui.entity.ClientEntity;

public interface IClientService {

  ClientEntity save(final ClientEntity entity);

  ClientEntity update(final ClientEntity entity);

  void delete(final long id);

}
