package com.demottcspringboot.models;
 
import com.demottcspringboot.entites.Client;

public class VehiculeModel {

 
	private String mark;
	 
	private String model;
	 
	private String vin;
	 
	private String matricul;
	 
	private long client;

	public VehiculeModel() {
		super();
	}

	public String getMark() {
		return mark;
	}

	public void setMark(String mark) {
		this.mark = mark;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getVin() {
		return vin;
	}

	public void setVin(String vin) {
		this.vin = vin;
	}

	public String getMatricul() {
		return matricul;
	}

	public void setMatricul(String matricul) {
		this.matricul = matricul;
	}

	public long getClient() {
		return client;
	}

	public void setClient(long client) {
		this.client = client;
	}
	
	
	
}
