package com.demottcspringboot.entites;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table( name="interventions" )

public class Interventions {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	
	@ManyToOne
	@JoinColumn( name="vehicules_id" )
	private Vehicule vehicule;
	
	
	@ManyToOne
	@JoinColumn( name="categories_id" )
	private Category category;
	
	
	@ManyToOne
	@JoinColumn( name="employees_id" )
	private Employee employee;
	
	
	
	@Column( name="descpretion", nullable=false )
	private String descreption;
	
	
	@Column( name="price", nullable=false )
	private float price;
	
	 
	private LocalDateTime createdAt = LocalDateTime.now();  // yyyy-mm-ddThh:mm


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public Vehicule getVehicule() {
		return vehicule;
	}


	public void setVehicule(Vehicule vehicule) {
		this.vehicule = vehicule;
	}


	public Category getCategory() {
		return category;
	}


	public void setCategory(Category category) {
		this.category = category;
	}


	public Employee getEmployee() {
		return employee;
	}


	public void setEmployee(Employee employee) {
		this.employee = employee;
	}


	public String getDescreption() {
		return descreption;
	}


	public void setDescreption(String descreption) {
		this.descreption = descreption;
	}


	public float getPrice() {
		return price;
	}


	public void setPrice(float price) {
		this.price = price;
	}


	public LocalDateTime getCreatedAt() {
		return createdAt;
	}


	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}


	public Interventions() {
		super();
	}
	
	
	
	
	
	
}
