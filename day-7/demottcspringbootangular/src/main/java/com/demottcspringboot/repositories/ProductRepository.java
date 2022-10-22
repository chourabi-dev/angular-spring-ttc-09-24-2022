package com.demottcspringboot.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demottcspringboot.entites.Product;

public interface ProductRepository extends JpaRepository<Product,Long> {

	List<Product> findByPriceLessThan(float price);
	
	
	List<Product> findByPriceGreaterThanAndQuntityGreaterThan(float price, int quntity);
	
}
