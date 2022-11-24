package com.demottcspringboot.models;

 

public class InterventionModel {

	 
	private long vehicule; 
	private long category; 
	private long employee; 
	private String descreption; 
	private float price;
	
	
	
	
	
	
	public long getVehicule() {
		return vehicule;
	}
	public void setVehicule(long vehicule) {
		this.vehicule = vehicule;
	}
	public long getCategory() {
		return category;
	}
	public void setCategory(long category) {
		this.category = category;
	}
	public long getEmployee() {
		return employee;
	}
	public void setEmployee(long employee) {
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
	public InterventionModel() {
		super();
	}
	
	
	
	
}
