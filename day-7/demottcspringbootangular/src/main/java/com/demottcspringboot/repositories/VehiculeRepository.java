package com.demottcspringboot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demottcspringboot.entites.Vehicule;

public interface VehiculeRepository extends JpaRepository<Vehicule,Long> {

}
