package com.demottcspringboot.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demottcspringboot.models.EmployeeModel;
import com.demottcspringboot.models.JsonResponse;
import com.demottcspringboot.models.SommeModel;

@RestController
@RequestMapping("/demo")
public class DemoController {
	
	
	
	@GetMapping("/say-hello")
	public String sayHello() {
		return "hello world";
	}
	
	
	@GetMapping("/somme")
	public ResponseEntity<?> somme( @RequestParam( name="x", required=true ) int x, @RequestParam(name="y", required=false )  int y) {

	//	return (  ResponseEntity.status(200).body(    (x+y)   )  );
		
		
		return (  ResponseEntity.status(400).body(   "bad request"   )  );
	}
	
	
	
	@GetMapping("/json-response")
	public ResponseEntity<?> jsonResponse( ) {

 
		JsonResponse res = new JsonResponse();
		
		res.setSuccess( true );
		res.setMessage("product inserted successfully !!!");
		
		return (  ResponseEntity.status(400).body(  res   )  );
	}
	
	
	
	
	
	
	@PostMapping("/somme-post")
	public ResponseEntity<?> sommePOST(     @RequestBody SommeModel body     ) {

 
		 
		
		return (  ResponseEntity.status(400).body(  body.getX() + body.getY()    )  );
	}
	
	
	
	
	
	@DeleteMapping("/users/{id}")
	public ResponseEntity<?> sommePOST(     @PathVariable(name="id") int id   ) {

 
		// ...
		 
		
		return (  ResponseEntity.status(400).body(  id  )  );
	}
	
	
	
	
	
	
	
	
	
	
	@PutMapping("/somme-put")
	public ResponseEntity<?> sommePUT(     @RequestBody SommeModel body     ) {

 
		 
		
		return (  ResponseEntity.status(400).body(  body.getX() + body.getY()    )  );
	}
	
	
	
	@GetMapping("/employees")
	public ResponseEntity<?> getEmployeesList(          ) {

		List<EmployeeModel> employees = new ArrayList<EmployeeModel>();
		
		
		
		employees.add(new EmployeeModel("chourabi taher","Tunis","tchourabi@gmail.com")  );
		employees.add(new EmployeeModel("chourabi taher","Tunis","tchourabi@gmail.com")  );
		employees.add(new EmployeeModel("chourabi taher","Tunis","tchourabi@gmail.com")  );
		employees.add(new EmployeeModel("chourabi taher","Tunis","tchourabi@gmail.com")  );
		employees.add(new EmployeeModel("chourabi taher","Tunis","tchourabi@gmail.com")  );
		employees.add(new EmployeeModel("chourabi taher","Tunis","tchourabi@gmail.com")  );
		employees.add(new EmployeeModel("chourabi taher","Tunis","tchourabi@gmail.com")  );
		employees.add(new EmployeeModel("chourabi taher","Tunis","tchourabi@gmail.com")  );
		employees.add(new EmployeeModel("chourabi taher","Tunis","tchourabi@gmail.com")  );
		
		 
		
		return (  ResponseEntity.status(400).body(   employees  )  );
	}
	
	

}
