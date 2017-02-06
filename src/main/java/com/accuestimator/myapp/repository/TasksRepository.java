package com.accuestimator.myapp.repository;

import com.accuestimator.myapp.domain.Tasks;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Tasks entity.
 */
@SuppressWarnings("unused")
public interface TasksRepository extends MongoRepository<Tasks,String> {

}
