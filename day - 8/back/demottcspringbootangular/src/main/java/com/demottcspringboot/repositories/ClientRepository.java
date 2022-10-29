package com.demottcspringboot.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demottcspringboot.entites.Client;

public interface ClientRepository extends JpaRepository<Client,Long> {

	List<Client> findByDeleted( boolean deleted );
}
