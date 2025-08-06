package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.DTO.ProductdetailsDTO;
import com.example.demo.pojo.Productmaster;
import com.example.demo.pojo.ctg_master;
import com.example.demo.pojo.Productmaster;

//all methods that are being called in controller
public interface IHomeService {
	
	
	//using common interface for categories and products 
	
    List<ctg_master> getcategories(); // to find categories
    
    List<ctg_master>getsubcategories(String s); //to find subcategories
    
    Integer getcategorymasterid(String s);//to find categorymasterid 
    
    List<Productmaster>getproducts(Integer ctg_master_id);//to fetch product cards
    
    List<ProductdetailsDTO> getproductdetails(Integer product_id);//to fetch product details
    
    List<ctg_master>getproductswithoffer();
    
}
