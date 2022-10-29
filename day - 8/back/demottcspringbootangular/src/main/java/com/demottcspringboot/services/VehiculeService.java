package com.demottcspringboot.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demottcspringboot.repositories.ClientRepository;
import com.demottcspringboot.repositories.VehiculeRepository;

@Service
public class VehiculeService {
	
	
	
	@Autowired
	private VehiculeRepository vehiculeRepository;
	
	
	@Autowired
	private ClientRepository clientRepository;

	public ClientRepository getClientRepository() {
		return clientRepository;
	}
	
	
	

	public VehiculeRepository getVehiculeRepository() {
		return vehiculeRepository;
	}
	
	
}
