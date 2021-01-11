package com.primeinformatica.pdeliver.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.primeinformatica.pdeliver.entities.Order;
import com.primeinformatica.pdeliver.entities.Product;

public interface OrderRepository extends JpaRepository<Order, Long> {
	
	
	


}
