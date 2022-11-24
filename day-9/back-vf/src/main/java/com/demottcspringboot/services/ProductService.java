package com.demottcspringboot.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.demottcspringboot.repositories.*;



@Service
public class ProductService {

	
	@Autowired
	private ProductRepository ProductRepository;
	
	
	

	public ProductRepository getProductRepository() {
		return ProductRepository;
	}
	
	
	
	
}
