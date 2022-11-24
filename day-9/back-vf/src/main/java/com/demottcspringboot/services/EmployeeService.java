package com.demottcspringboot.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demottcspringboot.repositories.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepo;
	
	

	public EmployeeRepository getEmployeeRepo() {
		return employeeRepo;
	}
	
	
	
	
}
