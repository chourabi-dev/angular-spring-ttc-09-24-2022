package com.demottcspringboot.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demottcspringboot.entites.Product;
import com.demottcspringboot.models.JsonResponse;
import com.demottcspringboot.models.ProductModel;
import com.demottcspringboot.services.ProductService;

@RestController
@RequestMapping("/api/products")
public class ProductController {
	
	
	@Autowired
	ProductService productService;
	
	@GetMapping("/list")
	public ResponseEntity<?> list(){
		
		
		return ResponseEntity.ok(   this.productService.getProductRepository().findAll()  );

	}
	
	
	@PostMapping("/add")
	public ResponseEntity<?> add(  @RequestBody ProductModel data  ){
		
		// CREATE THE ENTITY !!!
		Product p = new Product();
		
		
		// 2 FILL PRODUCT INFORMATION FROM THE MODEL
		p.setTitle( data.getTitle() );
		p.setPrice(data.getPrice());
		p.setQuntity(data.getQuantity());
		p.setCode(data.getCode());
		
		// 3 SAVE THE ENTITY IN THE DATABASE
		
		this.productService.getProductRepository().save(p);
		
		
		
		// 4 LET THE USER KNOW THAT EVERYTHING IS OK
		JsonResponse res = new JsonResponse();
		
		res.setSuccess(true);
		res.setMessage("Product inserted successfully.");
		
		
		return ResponseEntity.ok(res);
	}
	
	
	
	
	// UPDATE 
	
	
	
	@PutMapping("/update/{id}")
	public ResponseEntity<?> update(  @RequestBody ProductModel data, @PathVariable long id  ){
		
		try {
			// FIND THE OLD ENTITY 
			Product p =  this.productService.getProductRepository().findById(id).get();
			
			
			// 2 FILL PRODUCT INFORMATION FROM THE MODEL
			p.setTitle( data.getTitle() );
			p.setPrice(data.getPrice());
			p.setQuntity(data.getQuantity());
			p.setCode(data.getCode());
			
			// 3 SAVE THE ENTITY IN THE DATABASE
			
			this.productService.getProductRepository().save(p);
			
			
			
			// 4 LET THE USER KNOW THAT EVERYTHING IS OK
			JsonResponse res = new JsonResponse();
			
			res.setSuccess(true);
			res.setMessage("Product updated successfully.");
			
			
			return ResponseEntity.ok(res);
		}catch(Exception e) {
			JsonResponse res = new JsonResponse();
			
			res.setSuccess(false);
			res.setMessage("Product not found.");
			
			
			return ResponseEntity.status(404).body(res);
		}
	}
	
	
	
	
	// DELETE
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> delete(   @PathVariable long id  ){
		
		try {
			// FIND THE OLD ENTITY 
			Product p =  this.productService.getProductRepository().findById(id).get();
			 
			
			this.productService.getProductRepository().delete(p);
			
			// 2 LET THE USER KNOW THAT EVERYTHING IS OK
			JsonResponse res = new JsonResponse();
			
			res.setSuccess(true);
			res.setMessage("Product deleted successfully.");
			
			
			return ResponseEntity.ok(res);
		}catch(Exception e) {
			JsonResponse res = new JsonResponse();
			
			res.setSuccess(false);
			res.setMessage("Product not found.");
			
			
			return ResponseEntity.status(404).body(res);
		}
	}
	
	
	
	
	
	// SEARCH !!!!
	
	
	@GetMapping("/search")
	public ResponseEntity<?> list( int price ){
		 
		return ResponseEntity.ok(   this.productService.getProductRepository().findByPriceLessThan(price) );

	}
	
	

}
