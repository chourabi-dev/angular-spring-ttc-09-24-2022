package com.demottcspringboot.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demottcspringboot.entites.Vehicule;
import com.demottcspringboot.models.JsonResponse;
import com.demottcspringboot.models.ProductModel;
import com.demottcspringboot.models.VehiculeModel;
import com.demottcspringboot.services.VehiculeService;

@RestController
@RequestMapping("/api/vehicules")
public class VehiculeController {

	
	
	@Autowired
	private VehiculeService vehiculeService;
	
	
	
	@GetMapping("/list")
	public ResponseEntity<?> getAll(){
		return ResponseEntity.ok(this.vehiculeService.getVehiculeRepository().findAll() );
	}
	
	
	
	
	 
	@PostMapping("/add")
	public ResponseEntity<?> add(  @RequestBody  VehiculeModel data  ){
		Vehicule v = new Vehicule();
		
		v.setMark(data.getMark());
		v.setModel(data.getModel());
		v.setMatricul(data.getMatricul());
		v.setVin(data.getVin());

		v.setClient(  this.vehiculeService.getClientRepository().findById( data.getClient() ).get()  );
		
		this.vehiculeService.getVehiculeRepository().save(v);
		
		JsonResponse res = new JsonResponse();
		
		res.setSuccess(true);
		res.setMessage("Vehicule inserted successfully.");
		
		
		return ResponseEntity.ok(res); 
	}
	
	
	
	
	@PutMapping("/update")
	public ResponseEntity<?> update(  @RequestBody  VehiculeModel data , @PathVariable long id  ){
		
		
		
		Vehicule v =  this.vehiculeService.getVehiculeRepository().findById(id).get();
		
		
		
		v.setMark(data.getMark());
		v.setModel(data.getModel());
		v.setMatricul(data.getMatricul());
		v.setVin(data.getVin());

		v.setClient(  this.vehiculeService.getClientRepository().findById( data.getClient() ).get()  );
		
		this.vehiculeService.getVehiculeRepository().save(v);
		
		JsonResponse res = new JsonResponse();
		
		res.setSuccess(true);
		res.setMessage("Vehicule inserted successfully.");
		
		
		return ResponseEntity.ok(res); 
	}
}
