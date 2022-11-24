package com.demottcspringboot.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demottcspringboot.entites.Interventions;
import com.demottcspringboot.entites.Vehicule;

public interface InterventionRepository extends JpaRepository<Interventions,Long> {

	List<Interventions> findByVehicule(Vehicule vehicule); 
}
