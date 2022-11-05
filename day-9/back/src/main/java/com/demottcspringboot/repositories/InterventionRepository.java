package com.demottcspringboot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demottcspringboot.entites.Interventions;

public interface InterventionRepository extends JpaRepository<Interventions,Long> {

}
