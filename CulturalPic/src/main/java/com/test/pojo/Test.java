package com.test.pojo;

import java.io.Serializable;

public class Test implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1166614566006193152L;
	private int id;
	private String image;

	public Test() {
		super();
	}

	public Test(int id, String image) {
		super();
		this.id = id;
		this.image = image;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

}
