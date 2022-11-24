package com.demottcspringboot.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demottcspringboot.entites.Client;
import com.demottcspringboot.models.ClientModel;
import com.demottcspringboot.models.JsonResponse;
import com.demottcspringboot.services.ClientServcie;

@RestController
@RequestMapping("/api/clients")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ClientController {

	@Autowired
	ClientServcie clientServcie;
	
	
	
	@GetMapping("/list")
	public ResponseEntity<?> getClients(){
		return ResponseEntity.ok(this.clientServcie.getClientRepository().findByDeleted( false ));
	}
	
	
	@GetMapping("/find/{id}")
	public ResponseEntity<?> find(@PathVariable long id){
		return ResponseEntity.ok(this.clientServcie.getClientRepository().findById(id) );
		
	}
	
	
	@PostMapping("/add")
	
	
	public ResponseEntity<?> add(    @RequestBody ClientModel data   ){
		
		Client client = new Client();
		
		client.setFullname( data.getFullname() );
		client.setAddress(data.getAddress());
		client.setCin(data.getCin());
		client.setEmail(data.getEmail()); 
		
		this.clientServcie.getClientRepository().save(client);
		 
		
		JsonResponse res = new JsonResponse();
		
		res.setSuccess(true);
		res.setMessage("Client inserted successfully.");
		
		
		return ResponseEntity.ok(res);
	}
	
	
	
	
	
	@PutMapping("/update/{id}")
	
	
	public ResponseEntity<?> update(    @RequestBody ClientModel data , @PathVariable long id  ){
		
		Client client =  this.clientServcie.getClientRepository().findById(id).get();
		
		client.setFullname( data.getFullname() );
		client.setAddress(data.getAddress());
		client.setCin(data.getCin());
		client.setEmail(data.getEmail()); 
		
		this.clientServcie.getClientRepository().save(client); 
		
		JsonResponse res = new JsonResponse();
		
		res.setSuccess(true);
		res.setMessage("Client updated successfully.");
		
		
		return ResponseEntity.ok(res);
	}
	
	
	
	
	
	@DeleteMapping("/delete/{id}")
	
	
	public ResponseEntity<?> delete(     @PathVariable long id  ){
		
		Client client =  this.clientServcie.getClientRepository().findById(id).get();
	 
		
		client.setDeleted(true);
		
		this.clientServcie.getClientRepository().save(client);
		 
		
		JsonResponse res = new JsonResponse();
		
		res.setSuccess(true);
		res.setMessage("Client deleted successfully.");
		
		
		return ResponseEntity.ok(res);
	}
	
	
	
	
	
	
	
}
