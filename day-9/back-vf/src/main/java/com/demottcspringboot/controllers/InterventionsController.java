package com.demottcspringboot.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demottcspringboot.entites.Employee;
import com.demottcspringboot.entites.Interventions;
import com.demottcspringboot.entites.Vehicule;
import com.demottcspringboot.models.EmployeeModel;
import com.demottcspringboot.models.InterventionModel;
import com.demottcspringboot.models.JsonResponse;
import com.demottcspringboot.services.InterventionsService;

@RestController
@RequestMapping("/api/interventions")
@CrossOrigin(origins = "*", maxAge = 3600)
public class InterventionsController {

	@Autowired
	private InterventionsService is;
	
	
	
	
	@GetMapping("/list/vehicule/{id}")
	public ResponseEntity<?> findInterventionByVehicule( @PathVariable long id ){
		
		Vehicule v =this.is.getVehiculeRepository().findById(id).get();
		
		
		return ResponseEntity.ok(this.is.getInterventionRepository().findByVehicule(v)    );
	}
	
	
	
	
	
	
	// list category
	
	
	// add intervention
	@PostMapping("/add")
	public ResponseEntity<?> add(    @RequestBody InterventionModel data   ){
		
		 
		Interventions i = new Interventions();
		
		i.setVehicule( 	this.is.getVehiculeRepository().findById( data.getVehicule() ).get() );
		i.setEmployee( 	this.is.getEmployeeRepository().findById( data.getEmployee() ).get() );
		i.setCategory( this.is.getCategoryRepository().findById(data.getCategory()) .get());
		
		
		i.setDescreption( data.getDescreption() );
		i.setPrice(data.getPrice());
		
		
		this.is.getInterventionRepository().save(i);
		
		
		
		
		JsonResponse res = new JsonResponse();
		
		res.setSuccess(true);
		res.setMessage("Intervention inserted successfully.");
		
		
		return ResponseEntity.ok(res);
	}
	
	
	
	// get list employees
	@GetMapping("/employees")
	public ResponseEntity<?> getEmployees(   ){
		 
		
		return ResponseEntity.ok( this.is.getEmployeeRepository().findAll()   );
	}
	
	
	
	
	
	
	
	// get list categories
	@GetMapping("/categories")
	public ResponseEntity<?> getCategories(   ){
		 
		
		return ResponseEntity.ok( this.is.getCategoryRepository().findAll()   );
	}
	
	
	
	
	
}
