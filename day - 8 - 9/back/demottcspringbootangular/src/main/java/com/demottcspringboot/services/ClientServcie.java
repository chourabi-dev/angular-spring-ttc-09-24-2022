package com.demottcspringboot.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demottcspringboot.repositories.ClientRepository;

@Service
public class ClientServcie {

	
	@Autowired
	private ClientRepository clientRepository;

	public ClientRepository getClientRepository() {
		return clientRepository;
	}
	
	
	
	
	
}
