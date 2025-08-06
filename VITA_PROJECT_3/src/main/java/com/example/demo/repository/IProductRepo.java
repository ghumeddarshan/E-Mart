package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.DTO.ProductdetailsDTO;
import com.example.demo.pojo.Productmaster;

public interface IProductRepo extends JpaRepository<Productmaster,Integer>{

	
	//Finds products where the category.ctdmasterid is same as given
	@Query("SELECT p FROM Productmaster p WHERE p.category.ctgMasterId = :ctgmasterid")
	List<Productmaster> findProductsByCategoryId(@Param("ctgmasterid") Integer ctgmasterid);
	
	
//	@Query("SELECT p FROM Productmaster p where p.productId= :productId")
//	Optional<Productmaster> findProductsByproductId(@Param("productId")Integer productId);
//	
	 @Query(
		        value = "SELECT p.product_id AS productId, c.config_name AS configName, p.config_dtls AS configDtls " +
		                "FROM prod_detail_master p " +
		                "JOIN config_master c ON p.config_id = c.config_id " +
		                "WHERE p.product_id = :productId",
		        nativeQuery = true)
		    List<ProductdetailsDTO> findByProductId(@Param("productId") Integer productId);
}
