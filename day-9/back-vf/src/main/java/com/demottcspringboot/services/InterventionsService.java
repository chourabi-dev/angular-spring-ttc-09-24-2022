package com.demottcspringboot.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demottcspringboot.repositories.CategoryRepository;
import com.demottcspringboot.repositories.ClientRepository;
import com.demottcspringboot.repositories.EmployeeRepository;
import com.demottcspringboot.repositories.InterventionRepository;
import com.demottcspringboot.repositories.VehiculeRepository;

@Service
public class InterventionsService {

	@Autowired
	private InterventionRepository interventionRepository;
	
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	@Autowired
	private VehiculeRepository vehiculeRepository;
	
	 
	@Autowired
	private EmployeeRepository employeeRepository;
	
	 

	
	


	public EmployeeRepository getEmployeeRepository() {
		return employeeRepository;
	}


	public VehiculeRepository getVehiculeRepository() {
		return vehiculeRepository;
	}


	public InterventionRepository getInterventionRepository() {
		return interventionRepository;
	}


	public CategoryRepository getCategoryRepository() {
		return categoryRepository;
	}
	
	
	
}
