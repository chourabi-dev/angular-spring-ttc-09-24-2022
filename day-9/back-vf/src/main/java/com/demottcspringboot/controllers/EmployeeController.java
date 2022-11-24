package com.demottcspringboot.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demottcspringboot.entites.Client;
import com.demottcspringboot.entites.Employee;
import com.demottcspringboot.models.ClientModel;
import com.demottcspringboot.models.EmployeeModel;
import com.demottcspringboot.models.JsonResponse;
import com.demottcspringboot.services.EmployeeService;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "*", maxAge = 3600)
public class EmployeeController {
	
	@Autowired
	EmployeeService es;
	
	
	// list
	@GetMapping("/list")
	public ResponseEntity<?> getEmployees(){
		return ResponseEntity.ok(this.es.getEmployeeRepo().findAll() );
	}
	
	
	// add
	@PostMapping("/add") 
	public ResponseEntity<?> add(    @RequestBody EmployeeModel data   ){
		
		Employee em = new Employee();
		
		 
		em.setAddress(data.getAddress());
		em.setEmail(data.getEmail());
		em.setFullname(data.getName());
		
		 this.es.getEmployeeRepo().save(em);
		
		JsonResponse res = new JsonResponse();
		
		res.setSuccess(true);
		res.setMessage("Employee inserted successfully.");
		
		
		return ResponseEntity.ok(res);
	}
	
	

}
