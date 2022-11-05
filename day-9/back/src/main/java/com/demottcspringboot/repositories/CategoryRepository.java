package com.demottcspringboot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demottcspringboot.entites.Category;

public interface CategoryRepository extends JpaRepository<Category,Long> {

}
