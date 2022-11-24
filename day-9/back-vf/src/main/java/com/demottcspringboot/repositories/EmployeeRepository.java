package com.demottcspringboot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demottcspringboot.entites.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {

}
